import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, Title);

const BarChartComponent = ({ machines }) => {
  const labels = machines.map((m) => m.model || "Unknown Model");

  // === Helper: safe number parse ===
  const getNumber = (val) => parseFloat(val) || 0;
  const getQty = (m) => m.quantity || 0;

  // === Electricity / Operating cost ===
  const costPerDay = machines.map((m) => getNumber(m.totalLoad) * getQty(m) * 12 * 12);
  const costPerMonth = costPerDay.map((c) => c * 30);
  const costPerYear = costPerDay.map((d) => d * 365);
  const cost10Years = costPerYear.map((y) => y * 10);

  // === Cold Water ===
  const costColdWaterDay = machines.map((m) =>
    ((getNumber(m.coldWater?.waterConsump) / 1000) * getQty(m)) * 50 * 12
  );
  const costColdWaterMonth = costColdWaterDay.map((c) => c * 30);
  const costColdWaterYear = costColdWaterDay.map((d) => d * 365);
  const costColdWater10Years = costColdWaterYear.map((y) => y * 10);

  // === Hot Water ===
  const costHotWaterDay = machines.map((m) =>
    ((getNumber(m.hotWater?.waterConsump) / 1000) * getQty(m)) * 50 * 12
  );
  const costHotWaterMonth = costHotWaterDay.map((c) => c * 30);
  const costHotWaterYear = costHotWaterDay.map((d) => d * 365);
  const costHotWater10Years = costHotWaterYear.map((y) => y * 10);

  // === Gas ===
  const costGasDay = machines.map((m) => {
    const btu = getNumber(m.gasBTU);
    const kgsPerHour = (btu / 47654.20) * 0.6 * 0.17;
    return kgsPerHour * getQty(m) * 80 * 12;
  });
  const costGasMonth = costGasDay.map((c) => c * 30);
  const costGasYear = costGasDay.map((d) => d * 365);
  const costGas10Years = costGasYear.map((y) => y * 10);

  // === Totals ===
  const total = (arr) => arr.reduce((a, b) => a + b, 0);
  const totalDay = total(costPerDay);
  const totalMonth = total(costPerMonth);
  const totalYear = total(costPerYear);
  const total10Year = total(cost10Years);

  const totalColdWaterDay = total(costColdWaterDay);
  const totalColdWaterMonth = total(costColdWaterMonth);
  const totalColdWaterYear = total(costColdWaterYear);
  const totalColdWater10Years = total(costColdWater10Years);

  const totalHotWaterDay = total(costHotWaterDay);
  const totalHotWaterMonth = total(costHotWaterMonth);
  const totalHotWaterYear = total(costHotWaterYear);
  const totalHotWater10Years = total(costHotWater10Years);

  const totalGasDay = total(costGasDay);
  const totalGasMonth = total(costGasMonth);
  const totalGasYear = total(costGasYear);
  const totalGas10Years = total(costGas10Years);

  // === Chart Data Sets ===
  const barConfigs = [
    {
      title: "Electric Cost Projection",
      data: [costPerDay, costPerMonth, costPerYear, cost10Years],
      totals: [totalDay, totalMonth, totalYear, total10Year],
    },
    {
      title: "Cold Water Cost Projection",
      data: [costColdWaterDay, costColdWaterMonth, costColdWaterYear, costColdWater10Years],
      totals: [totalColdWaterDay, totalColdWaterMonth, totalColdWaterYear, totalColdWater10Years],
    },
    {
      title: "Hot Water Cost Projection",
      data: [costHotWaterDay, costHotWaterMonth, costHotWaterYear, costHotWater10Years],
      totals: [totalHotWaterDay, totalHotWaterMonth, totalHotWaterYear, totalHotWater10Years],
    },
    {
      title: "Gas Cost Projection",
      data: [costGasDay, costGasMonth, costGasYear, costGas10Years],
      totals: [totalGasDay, totalGasMonth, totalGasYear, totalGas10Years],
    },
  ];

  const backgroundColors = [
    "rgba(54, 162, 235, 0.6)",
    "rgba(255, 206, 86, 0.6)",
    "rgba(75, 192, 192, 0.6)",
    "rgba(255, 99, 132, 0.6)",
  ];

  const optionsTemplate = (title) => ({
    responsive: true,
    plugins: {
      legend: { position: "bottom" },
      title: {
        display: true,
        text: title,
        font: { size: 18, weight: "bold" },
      },
      tooltip: {
        callbacks: {
          label: (ctx) =>
            `₱${ctx.parsed.y.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (val) => `₱${val}`,
        },
      },
    },
    elements: {
      bar: {
        borderRadius: 4,
        minBarLength: 4,
      },
    },
  });

  return (
    <div style={{ width: "100%", maxWidth: 800, margin: "auto" }}>
      {barConfigs.map((config, i) => {
        const chartData = {
          labels,
          datasets: config.data.map((d, idx) => ({
            label: ["Per Day", "Per Month", "Per Year", "10 Years"][idx] + " (₱)",
            data: d,
            backgroundColor: backgroundColors[idx],
            minBarLength: 10,
          })),
        };

        return (
          <div key={i} style={{ marginBottom: "3rem" }}>
            <Bar data={chartData} options={optionsTemplate(config.title)} />
            <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
              <p>
                <strong>Total Per Day:</strong> ₱{config.totals[0].toLocaleString()}
                &nbsp;&nbsp;
                <strong>Total Per Month:</strong> ₱{config.totals[1].toLocaleString()}
                &nbsp;&nbsp;
                <strong>Total Per Year:</strong> ₱{config.totals[2].toLocaleString()}
                &nbsp;&nbsp;
                <strong>Total in 10 Years:</strong> ₱{config.totals[3].toLocaleString()}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BarChartComponent;
