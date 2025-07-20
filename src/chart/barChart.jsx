import React from "react";
import { Bar } from "react-chartjs-2";
// import zoomPlugin from 'chartjs-plugin-zoom'
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

// import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, Title,);
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
  const costHotWaterMonth = costHotWaterDay.map((c) => c * 30);
  const costHotWaterYear = costHotWaterDay.map((d) => d * 365);
  const costHotWater10Years = costHotWaterYear.map((y) => y * 10);


  const costGasDay =  machines.map((m) => ( m.gasBTU/47654.20 * 0.6 * 0.17 ) * m.quantity * 80 * 12);
  const costGasMonth = costGasDay.map((c) => c * 30);
  const costGasYear = costGasDay.map((d) => d * 365);
  const costGas10Years = costGasYear.map((y) => y * 10);
  
const totalColdWaterDay = costColdWaterDay.reduce((a, b) => a + b, 0);
const totalColdWaterMonth = costColdWaterMonth.reduce((a, b) => a + b, 0);
const totalColdWaterYear = costColdWaterYear.reduce((a, b) => a + b, 0);
const totalColdWater10Years = costColdWater10Years.reduce((a, b) => a + b, 0);

const totalHotWaterDay = costHotWaterDay.reduce((a, b) => a + b, 0);
const totalHotWaterMonth = costHotWaterMonth.reduce((a, b) => a + b, 0);
const totalHotWaterYear = costHotWaterYear.reduce((a, b) => a + b, 0);
const totalHotWater10Years = costHotWater10Years.reduce((a, b) => a + b, 0);

const totalGasDay = costGasDay.reduce((a, b) => a + b, 0);
const totalGasMonth = costGasMonth.reduce((a, b) => a + b, 0);
const totalGasYear = costGasYear.reduce((a, b) => a + b, 0);
const totalGas10Years = costGas10Years.reduce((a, b) => a + b, 0);

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
        minBarLength: 10, // Ensures small bars are still visible
      },
      {
        label: "Per Month (₱)",
        data: costPerMonth,
        backgroundColor: "rgba(255, 206, 86, 0.6)",
        minBarLength: 15, // Ensures small bars are still visible

      },
      {
        label: "Per Year (₱)",
        data: costPerYear,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        minBarLength: 20, // Ensures small bars are still visible

      },
      {
        label: "10 Years (₱)",
        data: cost10Years,
        backgroundColor: "rgba(255, 99, 132, 0.6)",
        minBarLength: 10, // Ensures small bars are still visible

      },
    ],
  };

  const coldWaterData = {
  labels,
  datasets: [
    {
      label: "Cold Water Per Day (₱)",
      data: costColdWaterDay,
      backgroundColor: "rgba(54, 162, 235, 0.6)",
        minBarLength: 10, // Ensures small bars are still visible
     
    },
    {
      label: "Cold Water Per Month (₱)",
      data: costColdWaterMonth,
      backgroundColor: "rgba(255, 206, 86, 0.6)",
      minBarLength: 15, // Ensures small bars are still visible
    },
    {
      label: "Cold Water Per Year (₱)",
      data: costColdWaterYear,
      backgroundColor: "rgba(75, 192, 192, 0.6)", 
      minBarLength: 20, // Ensures small bars are still visible
    },
    {
      label: "Cold Water 10 Years (₱)",
      data: costColdWater10Years,
      backgroundColor: "rgba(255, 99, 132, 0.6)",
    },
  ],
};

const hotWaterData = {
  labels,
  datasets: [
    {
      label: "Hot Water Per Day (₱)",
      data: costHotWaterDay,
      backgroundColor: "rgba(54, 162, 235, 0.6)",
      minBarLength: 10, // Ensures small bars are still visible
    },
    {
      label: "Hot Water Per Month (₱)",
      data: costHotWaterMonth,
      backgroundColor: "rgba(255, 206, 86, 0.6)",
      minBarLength: 15, // Ensures small bars are still visible
    },
    {
      label: "Hot Water Per Year (₱)",
      data: costHotWaterYear,
      backgroundColor: "rgba(75, 192, 192, 0.6)",
      minBarLength: 20, // Ensures small bars are still visible
    },
    {
      label: "Hot Water 10 Years (₱)",
      data: costHotWater10Years,
      backgroundColor: "rgba(255, 99, 132, 0.6)",
      
    },
  ],
};

const gasData = {
  labels,
  datasets: [
    {
      label: "Gas Per Day (₱)",
      data: costGasDay,
      backgroundColor: "rgba(54, 162, 235, 0.6)",
      minBarLength: 10, // Ensures small bars are still visible
    },
    {
      label: "Gas Per Month (₱)",
      data: costGasMonth,
      backgroundColor: "rgba(255, 206, 86, 0.6)",
      minBarLength: 15, // Ensures small bars are still visible
    },
    {
      label: "Gas Per Year (₱)",
      data: costGasYear,
      backgroundColor: "rgba(75, 192, 192, 0.6)",
      minBarLength: 20, // Ensures small bars are still visible
    },
    {
      label: "Gas 10 Years (₱)",
      data: costGas10Years,
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
        font: { weight: "bold", size: 18 },
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
        // type: "logarithmic",
        beginAtZero: true,
        ticks: {
          callback: (val) => `₱${val}`,
        },
      },
    },
      elements: {
      bar: {
        borderRadius: 4,
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
        beginAtZero: true,
        ticks: {
          callback: (val) => `₱${val}`,
        },
      },
    },
      elements: {
      bar: {
        borderRadius: 4,
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
        beginAtZero: true,
        ticks: {
          callback: (val) => `₱${val}`,
        },
      },
    },
      elements: {
      bar: {
        borderRadius: 4,
        minBarLength: 4, // ✅ Ensure small bars are visible
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
      elements: {
      bar: {
        borderRadius: 4,
        minBarLength: 4, // ✅ Ensure small bars are visible
      },
    },
  };



  
  return (
    <div style={{ width: "100%", maxWidth: 800, margin: "auto" }}>

          <Bar data={data} options={options} />
          <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
          <p><strong> Total Per Day:</strong> ₱{totalDay.toLocaleString()}
          <strong> Total Per Month:</strong> ₱{totalMonth.toLocaleString()}
          <strong> Total Per Year:</strong> ₱{totalYear.toLocaleString()}
          <strong> Total in 10 Years:</strong> ₱{total10Year.toLocaleString()}</p>
          </div>



          <Bar data={coldWaterData} options={coldWater} />
          <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
          <p><strong> Total Per Day:</strong> ₱{totalColdWaterDay.toLocaleString()}
          <strong> Total Per Month:</strong> ₱{totalColdWaterMonth.toLocaleString()}
          <strong> Total Per Year:</strong> ₱{totalColdWaterYear.toLocaleString()}
          <strong> Total in 10 Years:</strong> ₱{totalColdWater10Years.toLocaleString()}</p>
          </div>



          <Bar data={hotWaterData} options={hotWater} />
          <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
          <p><strong> Total Per Day:</strong> ₱{totalHotWaterDay.toLocaleString()}
          <strong> Total Per Month:</strong> ₱{totalHotWaterMonth.toLocaleString()}
          <strong> Total Per Year:</strong> ₱{totalHotWaterYear.toLocaleString()}
          <strong> Total in 10 Years:</strong> ₱{totalHotWater10Years.toLocaleString()}</p>
          </div>



          <Bar data={gasData} options={gas} />
          <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
          <p><strong> Total Per Day:</strong> ₱{totalGasDay.toLocaleString()}
          <strong> Total Per Month:</strong> ₱{totalGasMonth.toLocaleString()}
          <strong> Total Per Year:</strong> ₱{totalGasYear.toLocaleString()}
          <strong> Total in 10 Years:</strong> ₱{totalGas10Years.toLocaleString()}</p>
          </div>





    </div>
    
  );
};

export default BarChartComponent;
