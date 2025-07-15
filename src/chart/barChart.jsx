import React from "react";
import { Bar } from "react-chartjs-2";
import zoomPlugin from 'chartjs-plugin-zoom'
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
// import {
//   // clarusVibeWashers,
//   highSpinCompassProWashers,
//   NormalSpinCompassWashers,
//   // SuperSpinCompassWashers,
//   gen4000Washers,
//   l6000LAC
// } from "../data/washingStore";
// import {
//   lagoonDryers,
//   l6000Dryers,
//   gen4000Dryers
// } from "../data/dryingStore";

// import { ironers } from "../data/ironersList";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, Title, zoomPlugin);
  // const selectedMachine = [
  //   ...highSpinCompassProWashers, 
  //   ...l6000LAC, 
  //   ...NormalSpinCompassWashers, 
  //   ...gen4000Washers,
  //   ...l6000Dryers,
  //   ...lagoonDryers,
  //   ...gen4000Dryers,
  //   ...ironers
  // ];
  

const BarChartComponent = ({ machines }) => {
  const labels = machines.map((m) => m.model);
  const costPerDay = machines.map((m) => (m.totalLoad * m.quantity || 1) * 12 * 12 );
  const costPerMonth = costPerDay.map((c) => c * 30);
  const costPerYear = costPerDay.map((d) => d * 365);
  const cost10Years = costPerYear.map((y) => y * 10);

  const costColdWaterDay = machines.map((m) => ((m.coldWater?.waterConsump/1000) * m.quantity) * 50 * 12 );
  const costColdWaterMonth = costColdWaterDay.map((c) => c * 30);
  const costColdWaterYear = costColdWaterDay.map((d) => d * 365);
  const costColdWater10Years = costColdWaterYear.map((y) => y * 10);

  const costHotWaterDay = machines.map((m) => ((m.hotWater?.waterConsump/1000) * m.quantity) * 50 * 12 );
  const costHotWaterMonth = costColdWaterDay.map((c) => c * 30);
  const costHotWaterYear = costColdWaterDay.map((d) => d * 365);
  const costHotWater10Years = costColdWaterYear.map((y) => y * 10);

  const costGasDay =  machines.map((m) => ( m.gasBTU/47654.20 * 0.6 * 0.17 ) * m.quantity * 80 * 12);
  const costGasMonth = costGasDay.map((c) => c * 30);
  const costGasYear = costGasDay.map((d) => d * 365);
  const costGas10Years = costGasYear.map((y) => y * 10);
  
  
  const totalDay = costPerDay.reduce((a, b) => a + b, 0);
  const totalMonth = costPerMonth.reduce((a, b) => a + b, 0);
  const totalYear = costPerYear.reduce((a, b) => a + b, 0);
  const total10Year = cost10Years.reduce((a, b) => a + b, 0);


  const data = {
    labels,
    datasets: [
      {
        label: "Per Day (₱)",
        data: costPerDay,
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
      {
        label: "Per Month (₱)",
        data: costPerMonth,
        backgroundColor: "rgba(255, 206, 86, 0.6)",
      },
      {
        label: "Per Year (₱)",
        data: costPerYear,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
      {
        label: "10 Years (₱)",
        data: cost10Years,
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "bottom" },
      title: {
        display: true,
        text: "Electric Cost Projection",
        font: { size: 18 },
      },
      tooltip: {
        callbacks: {
          label: (ctx) =>
            `${ctx.parsed.y.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        min: 500,
        ticks: {
          callback: (val) => `₱${val}`,
        },
      },
    },
  };
  const coldWater = {
    responsive: true,
    plugins: {
      legend: { position: "bottom" },
      title: {
        display: true,
        text: "Cold Water Cost Projection",
        font: { size: 18 },
      },
      tooltip: {
        callbacks: {
          label: (ctx) =>
            `${ctx.parsed.y.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        min: 500,
        ticks: {
          callback: (val) => `₱${val}`,
        },
      },
    },
  };
    const hotWater = {
    responsive: true,
    plugins: {
      legend: { position: "bottom" },
      title: {
        display: true,
        text: "Hot Water Cost Projection",
        font: { size: 18 },
      },
      tooltip: {
        callbacks: {
          label: (ctx) =>
            `${ctx.parsed.y.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        min: 500,
        ticks: {
          callback: (val) => `₱${val}`,
        },
      },
    },
  };

    const gas = {
    responsive: true,
    plugins: {
      legend: { position: "bottom" },
      title: {
        display: true,
        text: "Gas Cost Projection",
        font: { size: 18 },
      },
      tooltip: {
        callbacks: {
          label: (ctx) =>
            `${ctx.parsed.y.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        min: 500,
        ticks: {
          callback: (val) => `₱${val}`,
        },
      },
    },
  };



  
  return (
    <div style={{ width: "100%", maxWidth: 800, margin: "auto" }}>
      <TransformWrapper>
        <TransformComponent>
          <Bar data={data} options={options} />
          <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
          <p><strong> Total Per Day:</strong> ₱{totalDay.toLocaleString()}
          <strong> Total Per Month:</strong> ₱{totalMonth.toLocaleString()}
          <strong> Total Per Year:</strong> ₱{totalYear.toLocaleString()}
          <strong> Total in 10 Years:</strong> ₱{total10Year.toLocaleString()}</p>
          </div>
        </TransformComponent>
      </TransformWrapper>

            <TransformWrapper>
        <TransformComponent>
          <Bar data={data} options={coldWater} />
          <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
          <p><strong> Total Per Day:</strong> ₱{costColdWaterDay.toLocaleString()}
          <strong> Total Per Month:</strong> ₱{costColdWaterMonth.toLocaleString()}
          <strong> Total Per Year:</strong> ₱{costColdWaterYear.toLocaleString()}
          <strong> Total in 10 Years:</strong> ₱{costColdWater10Years.toLocaleString()}</p>
          </div>
        </TransformComponent>
      </TransformWrapper>

            <TransformWrapper>
        <TransformComponent>
          <Bar data={data} options={hotWater} />
          <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
          <p><strong> Total Per Day:</strong> ₱{costHotWaterDay.toLocaleString()}
          <strong> Total Per Month:</strong> ₱{costHotWaterMonth.toLocaleString()}
          <strong> Total Per Year:</strong> ₱{costHotWaterYear.toLocaleString()}
          <strong> Total in 10 Years:</strong> ₱{costHotWater10Years.toLocaleString()}</p>
          </div>
        </TransformComponent>
      </TransformWrapper>

            <TransformWrapper>
        <TransformComponent>
          <Bar data={data} options={gas} />
          <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
          <p><strong> Total Per Day:</strong> ₱{costGasDay.toLocaleString()}
          <strong> Total Per Month:</strong> ₱{costGasMonth.toLocaleString()}
          <strong> Total Per Year:</strong> ₱{costGasYear.toLocaleString()}
          <strong> Total in 10 Years:</strong> ₱{costGas10Years.toLocaleString()}</p>
          </div>
        </TransformComponent>
      </TransformWrapper>




    </div>
    
  );
};

export default BarChartComponent;
