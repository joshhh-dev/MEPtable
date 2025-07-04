import React, { useState } from "react";
import Select from "react-select";
import {
  clarusVibeWashers,
  highSpinCompassProWashers,
  NormalSpinCompassWashers,
  SuperSpinCompassWashers,
  gen4000Washers,
} from "../data/washingStore";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../assets/costumButtons.css";
import "../assets/tableStyle.css";
import "../assets/container.css";

const style = {
  container: {
    maxWidth: "90%",
    margin: "0 auto",
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
  total: {
    textAlign: "right",
    marginTop: "20px",
    fontWeight: "bold",
    color: "#2980b9",
  },
};

export default function WasherDropdown() {
  const [selectedModel, setSelectedModel] = useState(null);
  const [machines, setMachines] = useState([]);

  const allWashers = [
    ...clarusVibeWashers,
    ...highSpinCompassProWashers,
    ...NormalSpinCompassWashers,
    ...SuperSpinCompassWashers,
    ...gen4000Washers,
  ];

  const addMachine = () => {
    try {
      if (!selectedModel || !selectedModel.model) {
        toast.warn("Please select a valid machine.");
        return;
      }

      const exists = machines.find(
        (m) =>
          m.model.trim().toLowerCase() ===
          selectedModel.model.trim().toLowerCase()
      );

      if (exists) {
        toast.warning(`Model "${selectedModel.model}" is already selected.`);
        return;
      }

      setMachines([...machines, { ...selectedModel, quantity: 1 }]);
      toast.success(`Model "${selectedModel.model}" added.`);
    } catch (error) {
      console.error("Error adding machine:", error);
      toast.error("Something went wrong.");
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

  const totalKg = machines.reduce(
    (sum, m) => sum + m.capacity * m.quantity,
    0
  );

  return (
    <div style={style.container}>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      <h2 style={style.heading}>Washer Selector</h2>

      <Select
        options={allWashers}
        getOptionLabel={(w) => `${w.model} - ${w.heatSource}`}
        getOptionValue={(w) => w.model}
        onChange={setSelectedModel}
        classNamePrefix="custom-select"
        placeholder="Search and select model..."
      />

      <button
        className="add-btn"
        onClick={addMachine}
        disabled={!selectedModel}
      >
        Add Machine
      </button>

<table className="custom-table">
  <thead>
    <tr>
      <th>Model</th>
      <th>Description</th>
      <th>Capacity (kg)</th>
      <th>G-Factor</th>
      <th>Heat</th>
      <th>Qty</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
          {machines.length > 0 ? (
            machines.map((m) => (
              <tr key={m.model}>
                <td>{m.model}</td>
                <td>{m.description}</td>
                <td>{m.capacity}</td>
                <td>{m.gFactor}</td>
                <td>{m.heatSource}</td>
                <td>{m.quantity}</td>
                <td>
                  <button
                    className="quantity-btn increment-btn"
                    onClick={() =>
                      setMachines((prev) =>
                        prev.map((machine) =>
                          machine.model === m.model
                            ? { ...machine, quantity: machine.quantity + 1 }
                            : machine
                        )
                      )
                    }
                  >
                    +
                  </button>

                  <button
                    className="quantity-btn remove-one"
                    onClick={() => removeOne(m.model)}
                  >
                    −
                  </button>
                  <button
                    className="quantity-btn remove-all"
                    onClick={() => removeAll(m.model)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" style={{ textAlign: "center", padding: "20px" }}>
                No machines selected.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div style={style.total}>
        Total Capacity: <span>{totalKg} kg</span>
      </div>

    </div>
  );
}
