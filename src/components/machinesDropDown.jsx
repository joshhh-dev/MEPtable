import React, { useState } from "react";
import Select from "react-select";
import {
  clarusVibeWashers,
  highSpinCompassProWashers,
  NormalSpinCompassWashers,
  SuperSpinCompassWashers,
  gen4000Washers,
} from "../data/washingStore";
import {
  lagoonDryers,
  l6000Dryers,
  gen4000Dryers
} from "../data/dryingStore";

import { ironers } from "../data/ironersList";
import { myProWashersAndDryers } from "../data/myProList";
import { finishingCabinets } from "../data/finishingCabinList";
import { formFinishers } from "../data/formFinishersList";
import { ironingTables } from "../data/ironingTablesList";
import { presses } from "../data/pressersList";
import { steamBoilers } from "../data/steamBoilers";
import { shirtFinishers } from "../data/shirtFinishersList";
import { spottingTables } from "../data/spottingTablesList";
import { trouserToppers } from "../data/trouserToppersList";
import { dosingSystems } from "../data/dosingSystemList";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../assets/costumButtons.css";
import "../assets/tableStyle.css";
import "../assets/container.css";

const style = {
  container: {
    maxWidth: "100%",
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

export default function ProductsDropdown() {
  const [selectedModel, setSelectedModel] = useState(null);
  const [machines, setMachines] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState({});

  const allModels = [
    ...clarusVibeWashers,
    ...highSpinCompassProWashers,
    ...NormalSpinCompassWashers,
    ...SuperSpinCompassWashers,
    ...gen4000Washers,
    ...lagoonDryers,
    ...l6000Dryers,
    ...gen4000Dryers,
    ...ironers,
    ...myProWashersAndDryers,
    ...finishingCabinets,
    ...formFinishers,
    ...ironingTables,
    ...presses,
    ...steamBoilers,
    ...shirtFinishers,
    ...spottingTables,
    ...trouserToppers,
    ...dosingSystems,
  ];

  const allTypes = Array.from(
    new Set(allModels.map((item) => item.category || item.heatSource ))
  );

  const handleCheckboxChange = (type) => {
    setSelectedTypes((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  const filteredModels = allModels.filter((item) => {
    const type = item.category || item.heatSource;
    return (
      Object.values(selectedTypes).some(Boolean) === false || selectedTypes[type]
    );
  });

  const addMachine = () => {
    if (!selectedModel?.model) {
      toast.warn("Please select a valid machine.");
      return;
    }

    const exists = machines.find(
      (m) => m.model.trim().toLowerCase() === selectedModel.model.trim().toLowerCase()
    );

    if (exists) {
      toast.warning(`Model "${selectedModel.model}" is already selected.`);
      return;
    } else

    setMachines([...machines, { ...selectedModel, quantity: 1 }]);
    toast.success(`Model "${selectedModel.model}" added.`);
  };

  const adjustQuantity = (model, delta) => {
    setMachines((prev) =>
      prev
        .map((m) =>
          m.model === model ? { ...m, quantity: m.quantity + delta } : m
        )
        .filter((m) => m.quantity > 0)
    );
  };

  const removeAll = (model) => setMachines((prev) => prev.filter((m) => m.model !== model));

  const totalKg = machines.reduce((sum, m) => sum + (m.capacity || 0) * m.quantity, 0);

  return (
    <div style={style.container}>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      <h2 style={style.heading}>Machine Selector</h2>

      <div style={{ marginBottom: "1rem" }}>
        {allTypes.map((type) => (
          <label key={type} style={{ marginRight: "1rem" }}>
            <input
              type="checkbox"
              checked={!!selectedTypes[type]}
              onChange={() => handleCheckboxChange(type)}
            />
            {" "}{type}
          </label>
        ))}
      </div>

      <Select
        styles={{ control: (base, state) => ({ 
          ...base,
          opacity: state.isFocused ? 0.5 : 1,  
          transition: "opacity 0.2s ease-in-out"
        }),
       }}
        options={filteredModels}
        getOptionLabel={(o) => `${o.model} - ${o.category || ""} - ${o.type || o.heatSource}`}
        getOptionValue={(o) => o.model}
        onChange={setSelectedModel}
        classNamePrefix="custom-select"
        placeholder="Search and select model..."
      />

      <button className="add-btn" onClick={addMachine} disabled={!selectedModel}>
        Add Machine
      </button>

      <table className="custom-table">
        <thead>
          <tr>
            <th>Model</th>
            <th>Description</th>
            <th>Capacity (kg)</th>
            <th>G-Factor</th>
            <th>Main heating power</th>
            <th>Width(cm)</th>
            <th>Depth(cm)</th>
            <th>Height(cm)</th>
            <th>Weight(kg)</th>
            <th>Qty</th>
            {/* <th>Actions</th> */}
          </tr>
        </thead>
        <tbody>
          {machines.length ? (
            machines.map((m) => (
              <tr key={m.model}>
                <td>{m.model}</td>
                <td>{m.description}</td>
                <td>{m.capacity || "-"}</td>
                <td>{m.gFactor || "-"}</td>
                <td>{m.heatSource || m.type || "-"}</td>
                <td>{m.width}</td>
                <td>{m.depth}</td>
                <td>{m.height}</td>
                <td>{m.weight}</td>
                <td>{m.quantity}</td>
                <td>
                  <button className="quantity-btn increment-btn" onClick={() => adjustQuantity(m.model, 1)}>
                    +
                  </button>
                  <button className="quantity-btn remove-one" onClick={() => adjustQuantity(m.model, -1)}>
                    −
                  </button>
                  <button className="quantity-btn remove-all" onClick={() => removeAll(m.model)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="11" style={{ textAlign: "center", padding: "20px" }}>
                No machines selected.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div style={style.total}>Total Capacity: <span>{totalKg} kg</span></div>
    </div>
  );
}
