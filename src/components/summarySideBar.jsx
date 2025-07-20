import React from "react";
import "../assets/container.css"; // Assuming you have a CSS file for styling

const SummarySidebar = ({ machines, electricity, gas, coldWater, hotWater, grandTotal, calculateCostPerLoad }) => {
  return (
    <div className="summary-sidebar">
      <table className="custom-table">
        <thead>
          <tr><th colSpan="2" className="section-header">🧾 Total Costing</th></tr>
        </thead>
        <tbody>
          {machines.map((m) => {
            const qty = m.quantity || 0;

            const elecUsage = (parseFloat(m.load) || 0) * qty;
            const elecCost = elecUsage * 12;

            const gasBTU = parseFloat(m.gasBTU) || 0;
            const kgsPerHour = (gasBTU / 47654.2) * 0.6 * 0.17;
            const gasCost = kgsPerHour * qty * 80;

            const cold = parseFloat(m.coldWater?.waterConsump) || 0;
            const coldUsage = (cold / 1000) * qty;
            const coldCost = coldUsage * 50;

            const hot = parseFloat(m.hotWater?.waterConsump) || 0;
            const hotUsage = (hot / 1000) * qty;
            const hotCost = hotUsage * 50;

            const total = elecCost + gasCost + coldCost + hotCost;
            const costPerLoad = calculateCostPerLoad(m);

            return (
              <React.Fragment key={`summary-${m.model}`}>
                <tr><td colSpan="2" style={{ fontWeight: "bold", borderTop: "2px solid #aaa", paddingTop: "8px" }}>🧺 {m.model} (x{qty})</td></tr>
                <tr><td>⚡ Electricity</td><td>{elecUsage.toFixed(2)} kW → {elecCost.toFixed(2)} PHP</td></tr>
                <tr><td>🔥 Gas</td><td>{kgsPerHour.toFixed(2)} kg → {gasCost.toFixed(2)} PHP</td></tr>
                <tr><td>💧 Cold Water</td><td>{coldUsage.toFixed(2)} m³ → {coldCost.toFixed(2)} PHP</td></tr>
                <tr><td>🔥 Hot Water</td><td>{hotUsage.toFixed(2)} m³ → {hotCost.toFixed(2)} PHP</td></tr>
                <tr><td><strong>💵 Total</strong></td><td><strong>{total.toFixed(2)} PHP</strong></td></tr>
                <tr><td>📈 Cost per Load</td><td>{costPerLoad.toFixed(2)} PHP</td></tr>
              </React.Fragment>
            );
          })}

          <tr style={{ borderTop: "2px solid #aaa" }}>
            <td colSpan="2"><strong>📦 Overall Totals</strong></td>
          </tr>
          <tr><td>⚡ Electricity</td><td>{electricity.totalUsage.toFixed(2)} kW → {electricity.totalCost.toFixed(2)} PHP</td></tr>
          <tr><td>🔥 Gas</td><td>{gas.totalUsage.toFixed(2)} kW → {gas.totalCost.toFixed(2)} PHP</td></tr>
          <tr><td>💧 Cold Water</td><td>{coldWater.totalUsage.toFixed(2)} m³ → {coldWater.totalCost.toFixed(2)} PHP</td></tr>
          <tr><td>🔥 Hot Water</td><td>{hotWater.totalUsage.toFixed(2)} m³ → {hotWater.totalCost.toFixed(2)} PHP</td></tr>
          <tr style={{ borderTop: "2px solid #aaa" }}>
            <td><strong>💵 Grand Total</strong></td>
            <td><strong>{grandTotal.toFixed(2)} PHP</strong></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SummarySidebar;
