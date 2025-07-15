import React from "react";

export default function TabSection({ activeTab, machines, showAll = false }) {
  if (!machines.length) return null;

  const sectionOrder = ["basic", "electricity", "gas", "water", "drain", "exhaust", "air"];

  const getTotalByKey = (key, rate, divideBy = 1) =>
    machines.reduce(
      (acc, m) => {
        const qty = m.quantity || 0;
        const usage = parseFloat(m[key]) || 0;
        const totalUsage = (usage / divideBy) * qty;
        const totalCost = totalUsage * rate;
        return {
          totalUsage: acc.totalUsage + totalUsage,
          totalCost: acc.totalCost + totalCost,
        };
      },
      { totalUsage: 0, totalCost: 0 }
    );

  const getWaterTotal = (waterKey) =>
    machines.reduce(
      (acc, m) => {
        const data = m[waterKey] || {};
        const qty = m.quantity || 0;
        const usage = parseFloat(data.waterConsump) || 0;
        const totalUsage = (usage / 1000) * qty; // convert to m³
        const totalCost = totalUsage * 50;
        return {
          totalUsage: acc.totalUsage + totalUsage,
          totalCost: acc.totalCost + totalCost,
        };
      },
      { totalUsage: 0, totalCost: 0 }
    );

  const calculateCostPerLoad = (machine) => {
    const qty = machine.quantity || 0;
    if (qty === 0) return 0;

    const electricUsage = parseFloat(machine.load) || 0;
    const electricCost = electricUsage * 12;

    let gasCost = 0;
    if (machine.gasBTU) {
      const kgsPerHour = (machine.gasBTU / 47654.2) * 0.6 * 0.17;
      gasCost = kgsPerHour * 80;
    }

    const coldUsage = parseFloat(machine.coldWater?.waterConsump) || 0;
    const coldCost = (coldUsage / 1000) * 50;

    const hotUsage = parseFloat(machine.hotWater?.waterConsump) || 0;
    const hotCost = (hotUsage / 1000) * 50;

    const totalCostPerMachine = electricCost + gasCost + coldCost + hotCost;
    return totalCostPerMachine;
  };

  const electricity = getTotalByKey("load", 12);
  const gas = getTotalByKey("gasLoad", 80);
  const coldWater = getWaterTotal("coldWater");
  const hotWater = getWaterTotal("hotWater");

  const grandTotal =
    electricity.totalCost +
    gas.totalCost +
    coldWater.totalCost +
    hotWater.totalCost;

const renderSummarySidebar = () => (
  <div className="summary-sidebar" style={{ maxWidth: "400px", flex: "0 0 auto", marginBottom: "2rem" }}>
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

  const renderSection = (sectionKey) => {
    const content = getSectionContent(sectionKey);
    if (!content) return null;
    if (sectionKey === "water") return content;

    return (
      <table className="custom-table" style={{ marginBottom: "2rem" }} key={sectionKey}>
        <thead>
          <tr>
            <th className="section-header">{content.header}</th>
            {machines.map((m) => (
              <th key={m.model}>{m.model}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {content.rows.map((row, i) => (
            <tr key={i}>
              <td>{row.label}</td>
              {row.values.map((val, j) => <td key={j}>{val}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const getSectionContent = (tab) => {
    const buildRow = (label, valueGetter) => ({
      label,
      values: machines.map(valueGetter),
    });

    const sections = {
      basic: {
        header: "🧺 Machine Specifications",
        rows: [
          buildRow("Description", m => m.description || "-"),
          buildRow("Capacity (kg)", m => m.capacity || "-"),
          buildRow("G-Factor", m => m.gFactor || "-"),
          buildRow("Heat Source", m => m.heatSource || "-"),
          buildRow("Width (cm)", m => m.width || "-"),
          buildRow("Depth (cm)", m => m.depth || "-"),
          buildRow("Height (cm)", m => m.height || "-"),
          buildRow("Weight (kg)", m => m.weight || "-"),
          buildRow("Qty", m => m.quantity || "-"),
          buildRow("💵 Cost/Load", (m) => {
            const cost = calculateCostPerLoad(m);
            return `${cost.toFixed(2)} PHP`;
          }),

        ]
      },
     electricity: {
        header: "⚡ Electricity",
        rows: [
          buildRow("Voltage", m => m.voltage || "-"),
          buildRow("Load (kW)", m => m.load || "-"),
          buildRow("Fuse (A)", m => m.recommendedFuse || "-"),
          buildRow("Conn. Height", m => m.connectionHeight || "-"),
          buildRow("Supply Height", m => m.supplyHeight || "-"),
          buildRow("Connection Type", m => m.connectionType || "-"),
          {
            label: "💰 Total Electricity Cost",
            values: machines.map((m) => {
              const usage = parseFloat(m.load) || 0;
              const qty = m.quantity || 0;
              const rate = 12;
              const total = (usage * qty) * rate;
              return `${total.toFixed(2)} PHP`;
            })
          }
        ]
      },
      gas: {
        header: "🔥 Gas",
        rows: [
          buildRow("Load (kW)", m => m.gasLoad || "-"),
          buildRow("Diameter", m => m.diameter || "-"),
          buildRow("Pressure", m => m.gasPressure || "-"),
          buildRow("Type", m => m.gasType || "-"),
          buildRow("Conn. Height", m => m.gasConnectionHeight || "-"),
          buildRow("Supply Height", m => m.gasSupplyHeight || "-"),
          buildRow("BTU/hr", m => m.gasBTU || "-"),
          {
            label: "💰 Total Gas Cost",
            values: machines.map((m) => {              
              const qty = m.quantity || 0;
              const kgsPerHour = m.gasBTU/47654.20 * 0.6 * 0.17;
              const rate = 80;
              const total = kgsPerHour * qty * rate;
              return `${total.toFixed(2)} PHP`;
            })
          }
        ]
      },
      drain: {
        header: "🕳️ Drain",
        rows: [
          buildRow("Diameter", m => m.drain?.diameter || "-"),
          buildRow("Conn. Height", m => m.drain?.connectionHeight || "-"),
          buildRow("Supply Height", m => m.drain?.supplyHeight || "-"),
        ]
      },
      exhaust: {
        header: "💨 Exhaust",
        rows: [
          buildRow("Diameter (mm)", m => m.diameterFlow || "-"),
          buildRow("Pressure Drop (Pa)", m => m.pressureDrop || "-"),
          buildRow("Volume (m³/hr)", m => m.volumeFlow || "-"),
        ]
      },
      air: {
        header: "🪫 Compressed Air",
        rows: [
          buildRow("Load (L/min)", m => m.airLoad || "-"),
          buildRow("Pressure (kPa)", m => m.airPressure || "-"),
          buildRow("Diameter (mm)", m => m.airDiameter || "-"),
        ]
      },
      water: (
        <>
          <table className="custom-table" style={{ marginBottom: "1rem" }}>
            <thead>
              <tr><th className="section-header">💧 Cold Water</th>
                {machines.map((m) => <th key={m.model}>{m.model}</th>)}
              </tr>
            </thead>
            <tbody>
              {[ "diameter", "waterConsump", "connectionHeight", "supplyWaterHeight", "minPressure", "maxPressure" ].map((field, i) => (
                <tr key={i}>
                  <td>{field.replace(/([A-Z])/g, " $1").replace("waterConsump", "Load (m³)")}</td>
                  {machines.map((m, j) => <td key={j}>{m.coldWater?.[field] || "-"}</td>)}
                </tr>
              ))}
              <tr>
                <td><strong>💰 Total Cold Water Cost</strong></td>
                {machines.map((m, j) => {
                  const usage = parseFloat(m.coldWater?.waterConsump) || 0;
                  const qty = m.quantity || 0;
                  const toCubeM = usage / 1000;
                  const rate = 50;
                  const total = (toCubeM * qty) * rate;
                  return <td key={j}><strong>{total.toFixed(2)} PHP</strong></td>;
                })}
              </tr>
            </tbody>
          </table>

          <table className="custom-table">
            <thead>
              <tr><th className="section-header">🔥 Hot Water</th>
                {machines.map((m) => <th key={m.model}>{m.model}</th>)}
              </tr>
            </thead>
            <tbody>
              {[ "diameter", "waterConsump", "connectionHeight", "supplyWaterHeight", "minPressure", "maxPressure" ].map((field, i) => (
                <tr key={i}>
                  <td>{field.replace(/([A-Z])/g, " $1").replace("waterConsump", "Load (m³)")}</td>
                  {machines.map((m, j) => <td key={j}>{m.hotWater?.[field] || "-"}</td>)}
                </tr>
              ))}
              <tr>
                <td><strong>💰 Total Hot Water Cost</strong></td>
                {machines.map((m, j) => {
                  const usage = parseFloat(m.hotWater?.waterConsump) || 0;
                  const qty = m.quantity || 0;
                  const toCubeM = usage / 1000;
                  const rate = 50;
                  const total = toCubeM * qty * rate;
                  return <td key={j}><strong>{total.toFixed(2)} PHP</strong></td>;
                })}
              </tr>
            </tbody>
          </table>
        </>
      )
        };

    return sections[tab] || null;
  };

  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "2rem", flexWrap: "wrap" }}>
      <div style={{ flex: 1 }}>
        {(showAll ? sectionOrder : [activeTab]).map((key) => renderSection(key))}
      </div>
      {renderSummarySidebar()}
    </div>
  );
}
