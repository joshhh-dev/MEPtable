import React, { useState, useEffect, useRef } from "react";
import Select from "react-select";
import BarChartComponent from "../chart/barChart";
import TabSection from "./TabSection";
import ComparisonTable from "../chart/comparisonTable";
import { allMachines } from '../data/allSelctedMachines';
import { toast, ToastContainer } from "react-toastify";
import PDFGenerator from "../fileConvert/PDFGenerator";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import SummarySidebar from "./summarySideBar";
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

  const thStyle = {
  padding: "6px",
  textAlign: "left",
  borderBottom: "1px solid #ccc",
  fontWeight: "600"
};

const tdStyle = {
  padding: "6px",
  textAlign: "left"
};

export default function ProductsDropdown() {
  const [selectedModel, setSelectedModel] = useState(null);
  const [machines, setMachines] = useState([]);
const [selectedCategories, setSelectedCategories] = useState({});
const [selectedHeatSources, setSelectedHeatSources] = useState({});
  const [showAll, setShowAll] = useState(false);
  const [activeTab, setActiveTab] = useState("specs");
  const chartRef = useRef(null);

  // const allTypes = Array.from(
  //   new Set(allMachines.map((item) => item.category || item.heatSource))
  // );
const allCategories = Array.from(
  new Set(
    allMachines
      .map((item) => item.category)
      .filter((val) => val && val !== "-")
  )
);

const allHeatSources = Array.from(
  new Set(
    allMachines
      .map((item) => item.heatSource)
      .filter((val) => val && val !== "-")
  )
);

const filteredModels = allMachines.filter((item) => {
  const matchCategory =
    Object.values(selectedCategories).every((v) => !v) || selectedCategories[item.category];
  const matchHeat =
    Object.values(selectedHeatSources).every((v) => !v) || selectedHeatSources[item.heatSource];
  return matchCategory && matchHeat;
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

const calculateCostPerLoad = (machine) => {
  const qty = machine.quantity || 0;
  const elecUsage = (parseFloat(machine.load) || 0) * qty;
  const elecCost = elecUsage * 12;

  const gasBTU = parseFloat(machine.gasBTU) || 0;
  const kgsPerHour = (gasBTU / 47654.2) * 0.6 * 0.17;
  const gasCost = kgsPerHour * qty * 80;

  const cold = parseFloat(machine.coldWater?.waterConsump) || 0;
  const coldUsage = (cold / 1000) * qty;
  const coldCost = coldUsage * 50;

  const hot = parseFloat(machine.hotWater?.waterConsump) || 0;
  const hotUsage = (hot / 1000) * qty;
  const hotCost = hotUsage * 50;

  const total = elecCost + gasCost + coldCost + hotCost;
  return total / qty || 0;
};

const electricity = {
  totalUsage: machines.reduce((sum, m) => sum + (parseFloat(m.load) || 0) * m.quantity, 0),
  totalCost: machines.reduce((sum, m) => sum + ((parseFloat(m.load) || 0) * m.quantity * 12), 0),
};

const gas = {
  totalUsage: machines.reduce((sum, m) => {
    const gasBTU = parseFloat(m.gasBTU) || 0;
    return sum + ((gasBTU / 47654.2) * 0.6 * 0.17) * m.quantity;
  }, 0),
  totalCost: machines.reduce((sum, m) => {
    const gasBTU = parseFloat(m.gasBTU) || 0;
    const kgsPerHour = (gasBTU / 47654.2) * 0.6 * 0.17;
    return sum + kgsPerHour * m.quantity * 80;
  }, 0),
};

const coldWater = {
  totalUsage: machines.reduce((sum, m) => sum + ((parseFloat(m.coldWater?.waterConsump) || 0) / 1000) * m.quantity, 0),
  totalCost: machines.reduce((sum, m) => sum + (((parseFloat(m.coldWater?.waterConsump) || 0) / 1000) * m.quantity * 50), 0),
};

const hotWater = {
  totalUsage: machines.reduce((sum, m) => sum + ((parseFloat(m.hotWater?.waterConsump) || 0) / 1000) * m.quantity, 0),
  totalCost: machines.reduce((sum, m) => sum + (((parseFloat(m.hotWater?.waterConsump) || 0) / 1000) * m.quantity * 50), 0),
};

const grandTotal =
  electricity.totalCost + gas.totalCost + coldWater.totalCost + hotWater.totalCost;


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
const exportToExcel = (machines) => {
  if (!machines.length) {
    toast.warn("No machines to export.");
    return;
  }

  const data = machines.map((m) => ({
    Model: m.model,
    Quantity: m.quantity,
    Capacity_kg: m.capacity,
    HeatSource: m.heatSource,
    Height_cm: m.height,
    Depth_cm: m.depth,  
    Weight_kg: m.weight,
  }));

  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Machines");

  const excelBuffer = XLSX.write(workbook, {
    bookType: "xlsx",
    type: "array",
  });

  const dataBlob = new Blob([excelBuffer], { type: "application/octet-stream" });
  saveAs(dataBlob, "SelectedMachines.xlsx");
};
  // 🔍 DEBUG: Check what's available
  console.log("🔍 All Machines:", allMachines);
  console.log("🧺 Washer Models (WP):", allMachines.filter(m => m.model?.startsWith("WP")));
  console.log("📦 Categories Found:", [...new Set(allMachines.map(m => m.category))]);
  console.log("🔥 Heat Sources Found:", [...new Set(allMachines.map(m => m.heatSource))]);
  console.log("✅ Selected Types (Filters):", selectedHeatSources, selectedCategories);
  console.log("🧾 Filtered Models:", filteredModels);
  console.log("📊 Grouped Options for Select:", groupedOptions);


  return (
    <div style={style.container}>
      <ToastContainer 
        position="top-right" // or top-center, bottom-right, etc.
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        style={{ zIndex: 9999 }} // ensures it stays on top 
      />
      <h2 style={style.heading}>🛠️ Machine Selector</h2>

<h4>Filter by Category:</h4>
<div className="filter-container" style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "1rem" }}>
  {allCategories.map((cat) => (
    <label key={cat}>
      <input
        type="checkbox"
        checked={!!selectedCategories[cat]}
        onChange={() =>
          setSelectedCategories((prev) => ({ ...prev, [cat]: !prev[cat] }))
        }
      />{" "}
      {cat}
    </label>
  ))}
</div>
<h4>Filter by Heat Type:</h4>
<div className="filter-container" style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "1rem" }}>
  {allHeatSources.map((type) => (
    <label key={type}>
      <input
        type="checkbox"
        checked={!!selectedHeatSources[type]}
        onChange={() =>
          setSelectedHeatSources((prev) => ({ ...prev, [type]: !prev[type] }))
        }
      />{" "}
      {type}
    </label>
  ))}

</div>
{(Object.values(selectedCategories).some(Boolean) || Object.values(selectedHeatSources).some(Boolean)) && (
  <button
    onClick={() => {
      setSelectedCategories({});
      setSelectedHeatSources({});
    }}
    className="add-btn"
  >
    Clear All Filters
  </button>
)}


      <Select
        styles={{
          control: (base, state) => ({
            ...base,
            width: '250px',
            opacity: state.isFocused ? 0.5 : 1,
            transition: "opacity 0.2s ease-in-out",
          }),
            menu: (base) => ({
          ...base,
          fontSize: '0.85rem',
        }),
        }}
        options={groupedOptions}
        getOptionLabel={(o) => `${o.model || "No Model"} - ${o.heatSource || "No Heat Source"}`}
        getOptionValue={(o) => o.model}
        onChange={setSelectedModel}
        classNamePrefix="custom-select"
        placeholder="Search and select model..."
      />

      <button className="add-btn small" onClick={addMachine} disabled={!selectedModel} title="Add the selected machine to the list">
        Add Machine
      </button>

      <div className="summary-layout" style={{   
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        gap: "2rem",
        marginTop: "0",
        marginBottom: "2rem",
        flexWrap: "wrap",
        }}>
      <div className="sidebar-summary" style={{ maxWidth: "320px", flexShrink: 0 }}>
  
  
  <h3>🔍 Summary</h3>
  {machines.length > 0 ? (
    
    <>
      <h4>🧺 Selected Machines</h4>
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem" }}>
          <thead>
            <tr style={{ backgroundColor: "#f0f0f0" }}>
              <td style={tdStyle}>Model</td>
              <td style={tdStyle}>Qty</td>
              <td style={tdStyle}>Cap (kg)</td>
              <td style={tdStyle}>Heat</td>
            </tr>
          </thead>
          <tbody>
            {machines.map((m, i) => (
              <tr key={i} style={{ borderBottom: "1px solid #ddd" }}>
                <th style={thStyle}>{m.model}</th>
                <th style={thStyle}>{m.quantity}</th>
                <th style={thStyle}>{m.capacity}</th>
                <th style={thStyle}>{m.heatSource}</th>
                <th style={thStyle}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                    <span>{m.quantity}</span>
                    <button className="quantity-btn increment-btn" onClick={() => adjustQuantity(m.model, 1)} title="Increase quantity">+</button>
                    <button className="quantity-btn remove-one" onClick={() => adjustQuantity(m.model, -1)} title="Decrease quantity">−</button>
                    <button className="quantity-btn remove-all" onClick={() => removeAll(m.model)} title="Remove machine">✕</button>
                  </div>
                </th>

              </tr>
              
            ))
            
            
            }
            
          </tbody>
        </table>
      </div>
  
        
      <div style={{ marginTop: "1rem" }}>
        <p><strong>🧮 Total Machines:</strong> {machines.reduce((sum, m) => sum + (m.quantity || 0), 0)}</p>
        <p><strong>🧺 Total Capacity:</strong> {totalKg} kg</p>
        <p><strong>⚖️ Total Weight:</strong> {totalWeight} kg</p>
        <p><strong>📏 Total Height:</strong> {totalHeight} cm</p>
        <p><strong>📐 Total Depth:</strong> {totalDepth} cm</p>
      </div>

    </>
  ) : (
    <p style={{ color: "#888" }}>No machines selected yet.</p>
  )}

  <hr />
  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
    <button
      className="add-btn"
      onClick={() => setShowAll(!showAll)}
      style={{ flex: 1 }}
      disabled={machines.length === 0}
      title="Toggle between showing and hiding all machine details"
    >
      {showAll ? "Hide Details" : "Show All Details"}
    </button>
    {/* <button
      className="add-btn"
      onClick={() => PDFGenerator(machines)}
      disabled={machines.length === 0}
      style={{ flex: 1 }}
      title="Download selected machines as PDF"
    >
      Export to PDF
    </button> */}

        <button
      className="add-btn"
      onClick={() => exportToExcel(machines)}
      disabled={machines.length === 0}
      style={{ flex: 1 }}
      title="Download selected machines as Excel"
    >
  Export to Excel
</button>

      <div style={{ 
    alignSelf: "flex-start",
    minWidth: "280px",
    maxWidth: "340px"

      }}>
          <SummarySidebar
            machines={machines}
            electricity={electricity}
            gas={gas}
            coldWater={coldWater}
            hotWater={hotWater}
            grandTotal={grandTotal}
            calculateCostPerLoad={calculateCostPerLoad}
          />
      </div>
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
                {/* <button onClick={() => setActiveTab("compare")} className={`add-btn ${activeTab === "compare" ? "active" : ""}`} title="Compare machine specs side by side">
                  Compare
                </button> */}
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
              {/* {activeTab === "compare" && (
                <ComparisonTable machines={machines} />
              )} */}
            </>
          )}
        </div>
      </div>
    </div>
  );
}