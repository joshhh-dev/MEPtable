import React from "react";

const ComparisonTable = ({ machines }) => {
  if (!machines.length) return null;

  const commonSpecs = {
    model: "Model",
    category: "Category",
    heatSource: "Heat Source",
    capacity: "Capacity (kg)",
    width: "Width (mm)",
    depth: "Depth (mm)",
    height: "Height (mm)",
    weight: "Weight (kg)"
  };

  const washerSpecs = {
    gFactor: "G-Factor"
  };

  const dryerSpecs = {
    drumVolume: "Drum Volume (L)"
  };

  const ironerSpecs = {
    rollDiameter: "Roll Diameter (mm)",
    rollLength: "Roll Length (mm)"
  };

  const getExtraSpecs = (machine) => {
    const type = (machine.category || "").toLowerCase();
    if (type.includes("washer")) return washerSpecs;
    if (type.includes("dryer")) return dryerSpecs;
    if (type.includes("ironer")) return ironerSpecs;
    return {};
  };

  const allSpecs = machines.reduce((acc, m) => {
    const extra = getExtraSpecs(m);
    return { ...acc, ...extra };
  }, { ...commonSpecs });

  return (
    <div style={{ overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem" }}>
        <thead>
          <tr style={{ background: '#f4f4f4' }}>
            <th colSpan={machines.length + 1} style={{ fontWeight: 'bold', padding: '8px', textAlign: 'left' }}>Selected Machine Specifications</th>
          </tr>
          <tr>
            <th style={{ padding: "6px", textAlign: "left", borderTop: "1px solid #ccc", background: "#fafafa" }}>Specification</th>
            {machines.map((m, i) => (
              <th
                key={i}
                style={{
                  padding: "6px",
                  textAlign: "left",
                  borderTop: "1px solid #ccc",
                  background: "#fafafa",
                  position: "relative",
                  cursor: "help"
                }}
                title={`Model: ${m.model}\nCategory: ${m.category || '-'}\nHeat Source: ${m.heatSource || '-'}`}
              >
                {m.model}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.entries(allSpecs).map(([key, label]) => (
            <tr key={key}>
              <td style={{ padding: "6px", fontWeight: "bold", borderTop: "1px solid #ddd" }}>{label}</td>
              {machines.map((m, i) => (
                <td key={i} style={{ padding: "6px", borderTop: "1px solid #ddd" }}>{m[key] || "-"}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;