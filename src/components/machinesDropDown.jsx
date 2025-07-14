import React, { useState, useEffect, useRef } from "react";
import Select from "react-select";
import BarChartComponent from "../chart/barChart";
import TabSection from "./TabSection";
import ComparisonTable from "../chart/comparisonTable";
import { allMachines } from '../data/allSelctedMachines';
import { toast, ToastContainer } from "react-toastify";
import PDFGenerator from "../fileConvert/PDFGenerator";
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
    minHeight: "100vh",
    overflowY: "auto",
    boxSizing: "border-box",
  },
  heading: {
    marginBottom: "1rem",
    color: "#2c3e50",
    fontSize: "1.5rem",
  },
};

export default function ProductsDropdown() {
  const [selectedModel, setSelectedModel] = useState(null);
  const [machines, setMachines] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState({});
  const [showAll, setShowAll] = useState(false);
  const [activeTab, setActiveTab] = useState("specs");
  const chartRef = useRef(null);

  const allTypes = Array.from(
    new Set(allMachines.map((item) => item.category || item.heatSource))
  );

  const handleCheckboxChange = (type) => {
    setSelectedTypes((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  const filteredModels = allMachines.filter((item) => {
    const type = item.heatSource || item.category;
    return Object.values(selectedTypes).some(Boolean) === false || selectedTypes[type];
  });

  const groupedOptions = Object.entries(
    filteredModels.reduce((acc, model) => {
      const category = model.category || "Others";
      if (!acc[category]) acc[category] = [];
      acc[category].push(model);
      return acc;
    }, {})
  ).map(([label, options]) => ({ label, options }));

  const addMachine = () => {
    if (!selectedModel?.model) {
      toast.warn("Please select a valid machine.");
      return;
    }

    const exists = machines.find(
      (m) =>
        m.model.trim().toLowerCase() === selectedModel.model.trim().toLowerCase() &&
        m.heatSource === selectedModel.heatSource &&
        m.category === selectedModel.category
    );

    if (exists) {
      toast.warning(`Model "${selectedModel.model}" is already selected.`);
      return;
    }

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

  const removeAll = (model) => {
    if (!model) return;
    setMachines((prev) => prev.filter((m) => m.model !== model));
  };

  const totalHeight = machines.reduce((sum, m) => sum + (m.height || 0) * m.quantity, 0).toFixed(2);
  const totalWeight = machines.reduce((sum, m) => sum + (m.weight || 0) * m.quantity, 0).toFixed(2);
  const totalDepth = machines.reduce((sum, m) => sum + (m.depth || 0) * m.quantity, 0).toFixed(2);
  const totalKg = machines.reduce((sum, m) => sum + (m.capacity || 0) * m.quantity, 0).toFixed(2);

  useEffect(() => {
    if (showAll && chartRef.current) {
      chartRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showAll]);

  return (
    <div style={style.container}>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      <h2 style={style.heading}>🛠️ Machine Selector</h2>

      <div className="filter-container" style={{ display: "flex", flexWrap: "wrap", gap: "1rem", maxHeight: "120px", overflowY: "auto", marginBottom: "1rem" }}>
        {allTypes.map((type) => (
          <label key={type} style={{ whiteSpace: "nowrap" }}>
            <input type="checkbox" checked={!!selectedTypes[type]} onChange={() => handleCheckboxChange(type)} /> {type}
          </label>
        ))}
        {Object.values(selectedTypes).some(Boolean) && (
          <button onClick={() => setSelectedTypes({})} className="add-btn">Clear Filters</button>
        )}
      </div>

      <Select
        styles={{
          control: (base, state) => ({
            ...base,
            opacity: state.isFocused ? 0.5 : 1,
            transition: "opacity 0.2s ease-in-out",
          }),
        }}
        options={groupedOptions}
        getOptionLabel={(o) => `${o.model} - ${o.heatSource}`}
        getOptionValue={(o) => o.model}
        onChange={setSelectedModel}
        classNamePrefix="custom-select"
        placeholder="Search and select model..."
      />

      <button className="add-btn" onClick={addMachine} disabled={!selectedModel} title="Add the selected machine to the list">
        Add Machine
      </button>

      <div className="summary-layout" style={{ display: "flex", flexWrap: "wrap", gap: "2rem", marginTop: "2rem" }}>
        <div className="sidebar-summary" style={{ width: "100%", maxWidth: "320px", flex: 1 }}>
          <h3>🔍 Summary</h3>
          {machines.length > 0 ? (
            <>
              <p><strong>🧺 Total Capacity:</strong> {totalKg} kg</p>
              <p><strong>⚖️ Total Weight:</strong> {totalWeight} kg</p>
              <p><strong>📏 Total Height:</strong> {totalHeight} cm</p>
              <p><strong>📐 Total Depth:</strong> {totalDepth} cm</p>
            </>
          ) : (
            <p style={{ color: "#888" }}>No machines selected yet.</p>
          )}

          <hr />
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            <button className="add-btn" onClick={() => setShowAll(!showAll)} style={{ flex: 1 }} disabled={machines.length === 0} title="Toggle between showing and hiding all machine details">
              {showAll ? "Hide Details" : "Show All Details"}
            </button>
            <button className="add-btn" onClick={() => PDFGenerator(machines)} disabled={machines.length === 0} style={{ flex: 1 }} title="Download selected machines as PDF">
              Export to PDF
            </button>
          </div>
        </div>

        <div className="main-display" style={{ flex: 2, minWidth: 0 }}>
          {showAll && (
            <>
              <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
                <button onClick={() => setActiveTab("specs")} className={`add-btn ${activeTab === "specs" ? "active" : ""}`} title="View machine specifications">
                  Machine selected
                </button>
                <button onClick={() => setActiveTab("chart")} className={`add-btn ${activeTab === "chart" ? "active" : ""}`} title="View cost projection chart">
                  Cost Chart
                </button>
                <button onClick={() => setActiveTab("compare")} className={`add-btn ${activeTab === "compare" ? "active" : ""}`} title="Compare machine specs side by side">
                  Compare
                </button>
              </div>
              {activeTab === "specs" && (
                <TabSection machines={machines} adjustQuantity={adjustQuantity} removeAll={removeAll} showAll={true} />
              )}
              {activeTab === "chart" && (
                <div ref={chartRef} style={{ width: "100%", height: 300, paddingBottom: "2rem" }}>
                  <h2 style={{ marginTop: "2rem" }}>📊 Cost Projection</h2>
                  <BarChartComponent machines={machines} />
                </div>
              )}
              {activeTab === "compare" && (
                <ComparisonTable machines={machines} />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}