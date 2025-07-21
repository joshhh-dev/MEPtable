// SummaryPanel.jsx
import React from "react";

const tdStyle = {
  border: "1px solid #ccc",
  padding: "4px 8px",
  textAlign: "left"
};

const SummaryPanel = ({ machines, exportToExcel }) => (
  <div style={{
    position: "absolute",
    top: "1.5rem",
    right: "1.5rem",
    width: "320px",
    background: "#fff",
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "1rem",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    zIndex: 10,
  }}>
    <h3>Summary</h3>
    {machines.length > 0 ? (
      <>
        <table style={{ width: "100%", fontSize: "0.85rem", marginBottom: "1rem" }}>
          <thead>
            <tr>
              <td style={tdStyle}>Model</td>
              <td style={tdStyle}>Qty</td>
            </tr>
          </thead>
          <tbody>
            {machines.map((m, i) => (
              <tr key={i}>
                <td style={tdStyle}>{m.model}</td>
                <td style={tdStyle}>{m.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p><strong>Total:</strong> {machines.reduce((sum, m) => sum + (m.quantity || 0), 0)}</p>
        <button className="add-btn" style={{ width: "100%", marginTop: "0.5rem" }} onClick={() => exportToExcel(machines)}>
          Export to Excel
        </button>
      </>
    ) : (
      <p style={{ color: "#888" }}>No machines selected yet.</p>
    )}
  </div>
);

export default SummaryPanel;
