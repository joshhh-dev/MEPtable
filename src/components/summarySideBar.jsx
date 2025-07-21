import React, { useState } from "react";
import "../assets/container.css";

const SummarySidebar = ({ machines, calculateCostPerLoad }) => {
  const [hours, setHours] = useState(12);

  const handleHourChange = (e) => {
    setHours(Number(e.target.value));
  };

  // Totals
  let totalElectricityUsage = 0;
  let totalElectricityCost = 0;
  let totalGasUsage = 0;
  let totalGasCost = 0;
  let totalColdUsage = 0;
  let totalColdCost = 0;
  let totalHotUsage = 0;
  let totalHotCost = 0;
  let totalCost = 0;

  return (
    <div className="summary-sidebar" style={{ padding: "1rem", maxWidth: "100%", overflowX: "auto" }}>
      {/* Operating Hours Userinput */}
      <div
        style={{
          marginBottom: "1rem",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <label
          htmlFor="hours"
          style={{
            marginRight: "0.5rem",
            fontWeight: "bold",
            minWidth: "130px",
          }}
        >
          Operating Hours:
        </label>
        <input
          type="number"
          id="hours"
          value={hours}
          onChange={handleHourChange}
          style={{
            padding: "0.25rem",
            minWidth: "100px",
          }}
          min={1}
          max={24}
          step={1}
        />
      </div>


      {/* Cost Table */}
      <div style={{ overflowX: "auto" }}>
        <table className="custom-table" style={{ width: "100%", minWidth: "350px", fontSize: "0.9rem" }}>
          <thead>
            <tr>
              <th colSpan="2" className="section-header">🧾 Total Costing</th>
            </tr>
          </thead>
          <tbody>
            {machines.map((m) => {
              const qty = m.quantity || 0;
              const elecUsage = (parseFloat(m.load) || 0) * qty * hours;
              const elecCost = elecUsage * 12;

              const gasBTU = parseFloat(m.gasBTU) || 0;
              const kgsPerHour = (gasBTU / 47654.2) * 0.6; // Convert BTU to kg/hr
              const gasUsage = kgsPerHour * qty * hours;
              const gasCost = gasUsage * 80;

              const cold = parseFloat(m.coldWater?.waterConsump) || 0;
              const coldUsage = (cold / 1000) * qty * hours;
              const coldCost = coldUsage * 50;

              const hot = parseFloat(m.hotWater?.waterConsump) || 0;
              const hotUsage = (hot / 1000) * qty * hours;
              const hotCost = hotUsage * 50;

              const total = elecCost + gasCost + coldCost + hotCost;
              const costPerLoad = calculateCostPerLoad(m);
              const totalWaterConsump = (coldUsage + hotUsage).toFixed(2);

              // Accumulate totals
              totalElectricityUsage += elecUsage;
              totalElectricityCost += elecCost;
              totalGasUsage += gasUsage;
              totalGasCost += gasCost;
              totalColdUsage += coldUsage;
              totalColdCost += coldCost;
              totalHotUsage += hotUsage;
              totalHotCost += hotCost;
              totalCost += total;

              return (
                <React.Fragment key={`summary-${m.model}`}>
                  <tr>
                    <td colSpan="2" style={{ fontWeight: "bold", borderTop: "2px solid #aaa", paddingTop: "8px" }}>
                      🧺 {m.model} (x{qty})
                    </td>
                  </tr>
                  <tr><td>Electricity</td><td>{elecUsage.toFixed(2)} kW → ₱{elecCost.toFixed(2)}</td></tr>
                  <tr><td>Gas</td><td>{kgsPerHour.toFixed(2)} kg/hr → ₱{gasCost.toFixed(2)}</td></tr>
                  <tr><td>Cold Water</td><td>{coldUsage.toFixed(2)} m³ → ₱{coldCost.toFixed(2)}</td></tr>
                  <tr><td>Hot Water</td><td>{hotUsage.toFixed(2)} m³ → ₱{hotCost.toFixed(2)}</td></tr>
                  <tr><td>Total Water Consumption</td><td>{totalWaterConsump} m³</td></tr>
                  <tr><td>Cost per Load</td><td>₱{costPerLoad.toFixed(2)}</td></tr>
                  <tr><td><strong>Total</strong></td><td><strong>₱{total.toFixed(2)}</strong></td></tr>
                </React.Fragment>
              );
            })}

            {/* Overall Total Section */}
            <tr style={{ borderTop: "2px solid #aaa" }}>
              <td colSpan="2"><strong>Overall Totals</strong></td>
            </tr>
            <tr><td>Electricity</td><td>{totalElectricityUsage.toFixed(2)} kW → ₱{totalElectricityCost.toFixed(2)}</td></tr>
            <tr><td>Gas</td><td>{totalGasUsage.toFixed(2)} kg → ₱{totalGasCost.toFixed(2)}</td></tr>
            <tr><td>Cold Water</td><td>{totalColdUsage.toFixed(2)} m³ → ₱{totalColdCost.toFixed(2)}</td></tr>
            <tr><td>Hot Water</td><td>{totalHotUsage.toFixed(2)} m³ → ₱{totalHotCost.toFixed(2)}</td></tr>
            <tr style={{ borderTop: "2px solid #aaa" }}>
              <td><strong>Grand Total</strong></td>
              <td><strong>₱{totalCost.toFixed(2)}</strong></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SummarySidebar;
