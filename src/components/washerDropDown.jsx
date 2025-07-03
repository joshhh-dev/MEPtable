import React, { useState } from "react";
import Select from "react-select";
import { clarusVibeWashers } from "../data/washingStore";

const styles = {
  container: {
    maxWidth: "520px",
    margin: "2rem auto",
    padding: "1.5rem",
    background: "#fefefe",
    borderRadius: "12px",
    boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
    fontFamily: "'Segoe UI', sans-serif",
    color: "#333",
  },
  heading: {
    marginBottom: "1rem",
    color: "#2c3e50",
    fontSize: "1.5rem",
  },
  addBtn: {
    marginTop: "1rem",
    background: "#2ecc71",
    color: "#fff",
    border: "none",
    padding: "10px 16px",
    borderRadius: "8px",
    fontSize: "1rem",
    cursor: "pointer",
    fontWeight: "bold",
  },
  table: {
    width: "100%",
    marginTop: "20px",
    borderCollapse: "collapse",
  },
  th: {
    textAlign: "left",
    borderBottom: "2px solid #ccc",
    padding: "10px",
    backgroundColor: "#ecf0f1",
  },
  td: {
    padding: "10px",
    borderBottom: "1px solid #e0e0e0",
  },
  quantityBtn: {
    padding: "4px 10px",
    margin: "0 4px",
    borderRadius: "4px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  removeOne: {
    backgroundColor: "#f39c12",
    color: "white",
  },
  removeAll: {
    backgroundColor: "#e74c3c",
    color: "white",
  },
  total: {
    textAlign: "right",
    marginTop: "20px",
    fontWeight: "bold",
    color: "#2980b9",
  },
};

const customSelectStyles = {
  control: (provided) => ({
    ...provided,
    borderRadius: "8px",
    padding: "2px 4px",
    borderColor: "#ced4da",
    boxShadow: "none",
    ":hover": {
      borderColor: "#a5b1c2",
    },
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "8px",
    zIndex: 20,
  }),
};

export default function WasherDropdown() {
  const [selectedModel, setSelectedModel] = useState(null);
  const [machines, setMachines] = useState([]);

const addMachine = () => {
  if (!selectedModel) return;

  const exists = machines.find((m) => m.model === selectedModel.model);
  if (!exists) {
    setMachines([...machines, { ...selectedModel, quantity: 1 }]);
  }
};


  const removeOne = (model) => {
    setMachines((prev) =>
      prev
        .map((m) =>
          m.model === model ? { ...m, quantity: m.quantity - 1 } : m
        )
        .filter((m) => m.quantity > 0)
    );
  };

  const removeAll = (model) => {
    setMachines((prev) => prev.filter((m) => m.model !== model));
  };

  const totalKg = machines.reduce((sum, m) => sum + m.capacity * m.quantity, 0);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Washer Selector</h2>

      <Select
        options={clarusVibeWashers}
        getOptionLabel={(w) => `${w.model} - ${w.heatSource}`}
        getOptionValue={(w) => w.model}
        onChange={setSelectedModel}
        styles={customSelectStyles}
        placeholder="Search and select model..."
      />

      <button
        style={styles.addBtn}
        onClick={addMachine}
        disabled={!selectedModel || machines.some(m => m.model === selectedModel.model)}
      >
        Add Machine
      </button>


      {machines.length > 0 && (
        <>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Model</th>
                <th style={styles.th}>Capacity (kg)</th>
                <th style={styles.th}>G-Factor</th>
                <th style={styles.th}>Heat</th>
                <th style={styles.th}>Qty</th>
                <th style={styles.th}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {machines.map((m) => (
                <tr key={m.model}>
                  <td style={styles.td}>{m.model}</td>
                  <td style={styles.td}>{m.capacity}</td>
                  <td style={styles.td}>{m.gFactor}</td>
                  <td style={styles.td}>{m.heatSource}</td>
                  <td style={styles.td}>{m.quantity}</td>
                  <td style={styles.td}>
                  <button
                    style={{ ...styles.quantityBtn, backgroundColor: "#3498db", color: "#fff" }}
                    onClick={() => {
                      setMachines((prev) =>
                        prev.map((machine) =>
                          machine.model === m.model
                            ? { ...machine, quantity: machine.quantity + 1 }
                            : machine
                        )
                      );
                    }}
                  >
                    +
                  </button>

                    <button
                      style={{ ...styles.quantityBtn, ...styles.removeOne }}
                      onClick={() => removeOne(m.model)}
                    >
                      −
                    </button>
                    <button
                      style={{ ...styles.quantityBtn, ...styles.removeAll }}
                      onClick={() => removeAll(m.model)}
                    >
                      Remove
                    </button>
                  </td>

                </tr>
              ))
              }
            </tbody>
          </table>

          <div style={styles.total}>
            Total Capacity: <span>{totalKg} kg</span>
          </div>
        </>
      )}
    </div>
  );
}
