// lagoonDryers.js

export const lagoonDryers = [
  {
    model: "TD6-7LAC",
    description: "TUMBLE DRYER 135L COMPASS PRO LAGOON ELECTRIC",
    heatSource: "ELECTRIC",
    capacity: 7.5,
    category: "TUMBLE DRYER",
    width: 60,
    depth: 84.5,
    height: 105,
    voltage: "400-50-3N",
    load: 6.3,
    totalLoad: 6.3,
    recommendedFuse: 16,
    connectionHeight: 1000,
    supplyHeight: 120,
    connectionType: "socket outlet"
  },
  {
    model: "TD6-7 G LAC",
    description: "TUMBLE DRYER 135L COMPASS PRO LAGOON GAS",
    heatSource: "GAS",
    capacity: 7.5,
    category: "TUMBLE DRYER",
    width: 60,
    depth: 87.7,
    height: 105,
    weight: 58,
    voltage: "400-560-3N",
    load: 0.3,
    totalLoad: 0.3,
    recommendedFuse: 10,
    connectionHeight: 1000,
    supplyHeight: 120,
    connectionType: "Breaker",

      gasLoad: 7,                 // Load in kW
      gasTotalLoad: 7,            // Total Load in kW
      diameter: "ISO 7/1‑R 1/2\"", // Connection thread size
      gasPressure: 20,         // Gas pressure in mbar (G20 spec)
      gasType: "G20",          // Natural gas type
      gasConnectionHeight: 1501,  // Height of connection in mm
      gasSupplyHeight: 150,       // Suggested supply height on site in cm
      gasBTU: 23900,           // Gas BTU consumption (BTU/Hr)

      diameterFlow: 125,       // Pipe or hose internal diameter in mm
      pressureDrop: 230,   // Pressure drop in Pascal (Pa)
      volumeFlow: 280      // Volumetric flow in m³/h
  },
  {
    model: "TD6-7LAC HP",
    description: "TUMBLE DRYER 135L COMPASS PRO LAGOON HEAT PUMP",
    heatSource: "HEAT PUMP",
    capacity: 7.5,
    category: "TUMBLE DRYER",
    width: 60,
    depth: 84.5,
    height: 105,
    voltage: "400-50-3N",
    load: 2.3,
    totalLoad: 2.3,
    recommendedFuse: 10,
    connectionHeight: 1000,
    supplyHeight: 120,
    connectionType: "socket outlet"
  },
  {
    model: "TD6-20LAC",
    description: "TUMBLE DRYER 20KG COMPASS PRO LAGOON ELECTRIC",
    heatSource: "GAS",
    capacity: 20,
    category: "TUMBLE DRYER",
    width: 79,
    depth: 120,
    height: 177,
    voltage: "400-60-3N",
    load: 1,
    totalLoad: 1,
    recommendedFuse: 10,
    connectionHeight: 1500,
    supplyHeight: 120,
    connectionType: "Breaker",

    // Gas specifications
    gasLoad: 21,               // kW
    gasTotalLoad: 21,
    diameter: "ISO 7/1‑R 1/2\"",
    gasPressure: 20,           // mbar (G20)
    gasType: "G20",
    gasConnectionHeight: 1501,
    gasSupplyHeight: 150,      // Suggested site height in cm
    gasBTU: 71700,             // BTU/hr

    // Exhaust/air flow specs
    diameterFlow: 200,         // Exhaust diameter in mm
    pressureDrop: 650,         // Pressure drop in Pa
    volumeFlow: 600,           // Evacuated air flow in m³/h

  },
  {
    model: "TD6-20LAC G",
    description: "TUMBLE DRYER 20KG COMPASS PRO LAGOON GAS",
    heatSource: "GAS",
    capacity: 20,
    category: "TUMBLE DRYER",
    width: 79,
    depth: 120,
    height: 177,
    voltage: "400-50-3N",
    load: 1,
    totalLoad: 1,
    recommendedFuse: 10,
    connectionHeight: 1500,
    supplyHeight: 120,
    connectionType: "socket outlet"
  },
  {
    model: "TD6-20LAC S",
    description: "TUMBLE DRYER 20KG COMPASS PRO LAGOON STEAM",
    heatSource: "STEAM",
    capacity: 20,
    category: "TUMBLE DRYER",
    width: 79,
    depth: 134,
    height: 177,
    voltage: "400-50-3N",
    load: 1,
    totalLoad: 1,
    recommendedFuse: 10,
    connectionHeight: 1500,
    supplyHeight: 120,
    connectionType: "socket outlet"
  },
  {
    model: "TD6-20LAC HP",
    description: "TUMBLE DRYER 20KG COMPASS PRO LAGOON HEAT PUMP",
    heatSource: "HEAT PUMP",
    capacity: 20,
    category: "TUMBLE DRYER",
    width: 79,
    depth: 120,
    height: 177,
    voltage: "400-50-3N",
    load: 7,
    totalLoad: 7,
    recommendedFuse: 16,
    connectionHeight: 1500,
    supplyHeight: 120,
    connectionType: "socket outlet"
  },
  {
    model: "TD6-30LAC",
    description: "TUMBLE DRYER 30KG COMPASS PRO LAGOON ELECTRIC",
    heatSource: "ELECTRIC",
    capacity: 30,
    category: "TUMBLE DRYER",
    width: 96,
    depth: 136.5,
    height: 185.5,
    voltage: "400-50-3N",
    load: 33.5,
    totalLoad: 33.5,
    recommendedFuse: 50,
    connectionHeight: 1560,
    supplyHeight: 120,
    connectionType: "fix connection"
  },
  {
    model: "TD6-30LAC G",
    description: "TUMBLE DRYER 30KG COMPASS PRO LAGOON GAS",
    heatSource: "GAS",
    capacity: 30,
    category: "TUMBLE DRYER",
    width: 96,
    depth: 136.5,
    height: 185.5,
    weight: 280,
    voltage: "400-50-3N",
    load: 1.5,
    totalLoad: 1.5,
    recommendedFuse: 10,
    connectionHeight: 1560,
    supplyHeight: 120,
    connectionType: "socket outlet"
      
  },
  {
    model: "TD6-30LAC S",
    description: "TUMBLE DRYER 30KG COMPASS PRO LAGOON STEAM",
    heatSource: "STEAM",
    capacity: 30,
    category: "TUMBLE DRYER",
    width: 96,
    depth: 144.5,
    height: 185.5,
    voltage: "400-50-3N",
    load: 1.5,
    totalLoad: 1.5,
    recommendedFuse: 10,
    connectionHeight: 1560,
    supplyHeight: 120,
    connectionType: "socket outlet"
  },
  {
    model: "TD6-37LAC",
    description: "TUMBLE DRYER 37KG COMPASS PRO LAGOON ELECTRIC",
    heatSource: "ELECTRIC",
    capacity: 37,
    category: "TUMBLE DRYER",
    width: 96,
    depth: 156,
    height: 185.5,
    voltage: "400-50-3N",
    load: 41.5,
    totalLoad: 41.5,
    recommendedFuse: 63,
    connectionHeight: 1560,
    supplyHeight: 120,
    connectionType: "fix connection"
  },
  {
    model: "TD6-37LAC G",
    description: "TUMBLE DRYER 37KG COMPASS PRO LAGOON GAS",
    heatSource: "GAS",
    capacity: 37,
    category: "TUMBLE DRYER",
    width: 96,
    depth: 156,
    height: 185.5,
    voltage: "400-50-3N",
    load: 1.5,
    totalLoad: 1.5,
    recommendedFuse: 10,
    connectionHeight: 1560,
    supplyHeight: 120,
    connectionType: "socket outlet"
  },
  {
    model: "TD6-37LAC S",
    description: "TUMBLE DRYER 37KG COMPASS PRO LAGOON STEAM",
    heatSource: "STEAM",
    capacity: 37,
    category: "TUMBLE DRYER",
    width: 96,
    depth: 164,
    height: 185.5,
    voltage: "400-50-3N",
    load: 1.5,
    totalLoad: 1.5,
    recommendedFuse: 10,
    connectionHeight: 1560,
    supplyHeight: 120,
    connectionType: "socket outlet"
  }
];


// l6000Dryers.js

export const l6000Dryers = [
  {
    model: "TD6-6",
    description: "TUMBLE DRYER 130L COMPASS PRO ELECTRIC CONDENSE",
    heatSource: "ELECTRIC",
    capacity: 6,
    category: "TUMBLE DRYER",
    width: 59.7,
    depth: 71.5,
    height: 83.9,
    voltage: "400-50-3N",
    load: 5.4,
    totalLoad: 5.4,
    recommendedFuse: 16,
    connectionHeight: 701,
    supplyHeight: 120,
    connectionType: "socket outlet"
  },
  {
    model: "TD6-7",
    description: "TUMBLE DRYER 135L COMPASS PRO ELECTRIC",
    heatSource: "ELECTRIC",
    capacity: 7.5,
    category: "TUMBLE DRYER",
    width: 60,
    depth: 84.5,
    height: 105,
    voltage: "400-50-3N",
    load: 6.3,
    totalLoad: 6.3,
    recommendedFuse: 16,
    connectionHeight: 1000,
    supplyHeight: 120,
    connectionType: "socket outlet"
  },
  {
    model: "TD6-7 G",
    description: "TUMBLE DRYER 135L COMPASS PRO GAS",
    heatSource: "GAS",
    capacity: 7.5,
    category: "TUMBLE DRYER",
    width: 60,
    depth: 87.7,
    height: 105,
    weight: 58,
    voltage: "400-60-3N",
    load: 0.3,
    totalLoad: 0.3,
    recommendedFuse: 10,
    connectionHeight: 1000,
    supplyHeight: 120,
    connectionType: "Breaker",
      gasLoad: 7,                 // Load in kW
      gasTotalLoad: 7,            // Total Load in kW
      diameter: "ISO 7/1‑R 1/2\"", // Connection thread size
      gasPressure: 20,         // Gas pressure in mbar (G20 spec)
      gasType: "G20",          // Natural gas type
      gasConnectionHeight: 1501,  // Height of connection in mm
      gasSupplyHeight: 150,       // Suggested supply height on site in cm
      gasBTU: 23900,           // Gas BTU consumption (BTU/Hr)

      diameterFlow: 125,       // Pipe or hose internal diameter in mm
      pressureDrop: 230,   // Pressure drop in Pascal (Pa)
      volumeFlow: 280      // Volumetric flow in m³/h

  },
  {
    model: "TD6-7 HP",
    description: "TUMBLE DRYER 135L COMPASS PRO HEAT PUMP",
    heatSource: "HEAT PUMP",
    capacity: 7.5,
    category: "TUMBLE DRYER",
    width: 60,
    depth: 84.5,
    height: 105,
    voltage: "400-50-3N",
    load: 2.3,
    totalLoad: 2.3,
    recommendedFuse: 10,
    connectionHeight: 1000,
    supplyHeight: 120,
    connectionType: "socket outlet"
  },
  {
    model: "TD6-10",
    description: "TUMBLE DRYER 10KG COMPASS PRO ELECTRIC",
    heatSource: "ELECTRIC",
    capacity: 11,
    category: "TUMBLE DRYER",
    width: 72,
    depth: 76.5,
    height: 111.5,
    voltage: "400-50-3N",
    load: 8.3,
    totalLoad: 8.3,
    recommendedFuse: 16,
    connectionHeight: 935,
    supplyHeight: 120,
    connectionType: "socket outlet"
  },
  {
    model: "TD6-10 G",
    description: "TUMBLE DRYER 10KG COMPASS PRO GAS",
    heatSource: "GAS",
    capacity: 11,
    category: "TUMBLE DRYER",
    width: 72,
    depth: 76.5,
    height: 111.5,
    voltage: "230-50-1N",
    load: 0.3,
    totalLoad: 0.3,
    recommendedFuse: 10,
    connectionHeight: 935,
    supplyHeight: 120,
    connectionType: "socket outlet"
  },
  {
    model: "TD6-10HP",
    description: "TUMBLE DRYER 10KG COMPASS PRO HEAT PUMP",
    heatSource: "HEAT PUMP",
    capacity: 8.6,
    category: "TUMBLE DRYER",
    width: 72,
    depth: 76.5,
    height: 111.5,
    voltage: "230-50-1N",
    load: 2.5,
    totalLoad: 2.5,
    recommendedFuse: 16,
    connectionHeight: 1505,
    supplyHeight: 120,
    connectionType: "socket outlet"
  },
  {
    model: "TD6-14",
    description: "TUMBLE DRYER 14KG COMPASS PRO ELECTRIC",
    heatSource: "ELECTRIC",
    capacity: 14.2,
    category: "TUMBLE DRYER",
    width: 79,
    depth: 96.5,
    height: 177,
    voltage: "400-50-3N",
    load: 14.5,
    totalLoad: 14.5,
    recommendedFuse: 25,
    connectionHeight: 1500,
    supplyHeight: 120,
    connectionType: "socket outlet"
  },
  {
    model: "TD6-14 G",
    description: "TUMBLE DRYER 14KG COMPASS PRO GAS",
    heatSource: "GAS",
    capacity: 14.2,
    category: "TUMBLE DRYER",
    width: 79,
    depth: 96.5,
    height: 177,
    voltage: "400-50-3N",
    load: 1,
    totalLoad: 1,
    recommendedFuse: 10,
    connectionHeight: 1500,
    supplyHeight: 120,
    connectionType: "socket outlet"
  },
  {
    model: "TD6-14 HP",
    description: "TUMBLE DRYER 14KG COMPASS PRO HEAT PUMP",
    heatSource: "HEAT PUMP",
    capacity: 14.2,
    category: "TUMBLE DRYER",
    width: 79,
    depth: 96.5,
    height: 177,
    voltage: "400-50-3N",
    load: 6.5,
    totalLoad: 6.5,
    recommendedFuse: 10,
    connectionHeight: 1500,
    supplyHeight: 120,
    connectionType: "socket outlet"
  },
  {
    model: "TD6-14 S",
    description: "TUMBLE DRYER 14KG COMPASS PRO STEAM",
    heatSource: "STEAM",
    capacity: 14.2,
    category: "TUMBLE DRYER",
    width: 79,
    depth: 110.5,
    height: 177,
    voltage: "400-50-3N",
    load: 1,
    totalLoad: 1,
    recommendedFuse: 10,
    connectionHeight: 1500,
    supplyHeight: 120,
    connectionType: "socket outlet"
  },
  {
    model: "TD6-16",
    description: "TUMBLE DRYER 16KG COMPASS PRO ELECTRIC",
    heatSource: "ELECTRIC",
    capacity: 16,
    category: "TUMBLE DRYER",
    width: 71.5,
    depth: 121,
    height: 169,
    voltage: "400-50-3N",
    load: 18.8,
    totalLoad: 18.8,
    recommendedFuse: 35,
    connectionHeight: 1395,
    supplyHeight: 120,
    connectionType: "fix connection"
  },
  {
    model: "TD6-16 G",
    description: "TUMBLE DRYER 16KG COMPASS PRO GAS",
    heatSource: "GAS",
    capacity: 16,
    category: "TUMBLE DRYER",
    width: 71.5,
    depth: 121,
    height: 169,
    voltage: "400-50-3N",
    load: 0.8,
    totalLoad: 0.8,
    recommendedFuse: 10,
    connectionHeight: 1395,
    supplyHeight: 120,
    connectionType: "socket outlet"
  },
  {
    model: "TD6-16 S",
    description: "TUMBLE DRYER 16KG COMPASS PRO STEAM",
    heatSource: "STEAM",
    capacity: 16,
    category: "TUMBLE DRYER",
    width: 71.5,
    depth: 136,
    height: 169,
    voltage: "400-50-3N",
    load: 0.8,
    totalLoad: 0.8,
    recommendedFuse: 10,
    connectionHeight: 1395,
    supplyHeight: 120,
    connectionType: "socket outlet"
  },
  {
    model: "TD6-17S",
    description: "TUMBLE DRYER 2x17KG COMPASS PRO ELECTRIC",
    heatSource: "ELECTRIC",
    capacity: "2x17",
    category: "TUMBLE DRYER",
    width: 79,
    depth: 111.5,
    height: 194,
    voltage: "400-50-3N",
    load: 19,
    totalLoad: 19,
    recommendedFuse: 35,
    connectionHeight: 1930,
    supplyHeight: 120,
    connectionType: "fix connection"
  },
  {
    model: "TD6-17S G",
    description: "TUMBLE DRYER 2x17KG COMPASS PRO GAS",
    heatSource: "GAS",
    capacity: "2x17",
    category: "TUMBLE DRYER",
    width: 79,
    depth: 111.5,
    height: 194,
    voltage: "400-50-3N",
    load: 2,
    totalLoad: 2,
    recommendedFuse: 10,
    connectionHeight: 1930,
    supplyHeight: 120,
    connectionType: "socket outlet"
  },
  {
    model: "TD6-20",
    description: "TUMBLE DRYER 20KG COMPASS PRO ELECTRIC",
    heatSource: "ELECTRIC",
    capacity: 20,
    category: "TUMBLE DRYER",
    width: 79,
    depth: 120,
    height: 177,
    voltage: "400-50-3N",
    load: 19,
    totalLoad: 19,
    recommendedFuse: 35,
    connectionHeight: 1500,
    supplyHeight: 120,
    connectionType: "fix connection"
  },
  {
    model: "TD6-20 G",
    description: "TUMBLE DRYER 20KG COMPASS PRO GAS",
    heatSource: "GAS",
    capacity: 20,
    category: "TUMBLE DRYER",
    width: 79,
    depth: 120,
    height: 177,
    voltage: "400-50-3N",
    load: 1,
    totalLoad: 1,
    recommendedFuse: 10,
    connectionHeight: 1500,
    supplyHeight: 120,
    connectionType: "socket outlet"
  },
  {
    model: "TD6-20 S",
    description: "TUMBLE DRYER 20KG COMPASS PRO STEAM",
    heatSource: "STEAM",
    capacity: 20,
    category: "TUMBLE DRYER",
    width: 79,
    depth: 120,
    height: 177,
    voltage: "400-50-3N",
    load: 7,
    totalLoad: 7,
    recommendedFuse: 16,
    connectionHeight: 1500,
    supplyHeight: 120,
    connectionType: "socket outlet"
  },
  {
    model: "TD6-30",
    description: "TUMBLE DRYER 30KG COMPASS PRO ELECTRIC",
    heatSource: "ELECTRIC",
    capacity: 30,
    category: "TUMBLE DRYER",
    width: 96,
    depth: 136.5,
    height: 185.5,
    voltage: "400-50-3N",
    load: 33.5,
    totalLoad: 33.5,
    recommendedFuse: 50,
    connectionHeight: 1560,
    supplyHeight: 120,
    connectionType: "fix connection"
  },
  {
    model: "TD6-30 G",
    description: "TUMBLE DRYER 30KG COMPASS PRO GAS",
    heatSource: "GAS",
    capacity: 30,
    category: "TUMBLE DRYER",
    width: 96,
    depth: 136.5,
    height: 185.5,
    weight: 280,
    voltage: "400-60-3N",
    load: 1.5,
    totalLoad: 1.5,
    recommendedFuse: 10,
    connectionHeight: 1560,
    supplyHeight: 120,
    connectionType: "Breaker",

    gasLoad: 33,              // kW :contentReference[oaicite:4]{index=4}
    gasTotalLoad: 33,
    diameter: 'ISO 7/1‑R 1/2"',
    gasPressure: 20,          // mbar :contentReference[oaicite:5]{index=5}
    gasType: "G20",
    gasConnectionHeight: null,   // not specified
    gasSupplyHeight: 150,        // cm
    gasBTU: 112700,           // BTU/hr

    diameterFlow: 200,        // Exhaust Ø mm :contentReference[oaicite:6]{index=6}
    pressureDrop: 420,        // Pa (gas) :contentReference[oaicite:7]{index=7}
    volumeFlow: 940,          // m³/h :contentReference[oaicite:8]{index=8}
  },
  {
    model: "TD6-30 S",
    description: "TUMBLE DRYER 30KG COMPASS PRO STEAM",
    heatSource: "STEAM",
    capacity: 30,
    category: "TUMBLE DRYER",
    width: 96,
    depth: 144.5,
    height: 185.5,
    voltage: "400-50-3N",
    load: 1.5,
    totalLoad: 1.5,
    recommendedFuse: 10,
    connectionHeight: 1560,
    supplyHeight: 120,
    connectionType: "socket outlet"
  },
  {
    model: "TD6-37",
    description: "TUMBLE DRYER 37KG COMPASS PRO ELECTRIC",
    heatSource: "ELECTRIC",
    capacity: 37,
    category: "TUMBLE DRYER",
    width: 96,
    depth: 156,
    height: 185.5,
    voltage: "400-50-3N",
    load: 41.5,
    totalLoad: 41.5,
    recommendedFuse: 63,
    connectionHeight: 1560,
    supplyHeight: 120,
    connectionType: "fix connection"
  },
  {
    model: "TD6-37 G",
    description: "TUMBLE DRYER 37KG COMPASS PRO GAS",
    heatSource: "GAS",
    capacity: 37,
    category: "TUMBLE DRYER",
    width: 96,
    depth: 156,
    height: 185.5,
    weight: 283,
    voltage: "400-60-3N",
    load: 1.5,
    totalLoad: 1.5,
    recommendedFuse: 10,
    connectionHeight: 1560,
    supplyHeight: 120,
    connectionType: "Breaker",
    aveElecConsump: 15,

    gasLoad: 42,                     // Gas heating power in kW
    gasTotalLoad: 42,
    diameter: "ISO 7/1‑R 1/2\"",
    gasPressure: 20,                 // Natural gas pressure in mbar
    gasType: "G20",
    gasConnectionHeight: null,
    gasSupplyHeight: 150,            // Suggested site supply height in cm
    gasBTU: 143400,                  // BTU/hr :contentReference[oaicite:1]{index=1}

    diameterFlow: 200,               // Exhaust diameter in mm
    pressureDrop: 410,               // Max static back pressure in Pa (gas) :contentReference[oaicite:2]{index=2}
    volumeFlow: 1140,                // Maximum air flow in m³/h :contentReference[oaicite:3]{index=3}
  },
  {
    model: "TD6-37 S",
    description: "TUMBLE DRYER 37KG COMPASS PRO STEAM",
    heatSource: "STEAM",
    capacity: 37,
    category: "TUMBLE DRYER",
    width: 96,
    depth: 164,
    height: 185.5,
    voltage: "400-50-3N",
    load: 1.5,
    totalLoad: 1.5,
    recommendedFuse: 10,
    connectionHeight: 1560,
    supplyHeight: 120,
    connectionType: "socket outlet"
  }
];


// gen4000Dryers.js

export const gen4000Dryers = [
  {
    model: "T41200",
    description: "TUMBLE DRYER 1200L SELECTA ELECTRIC",
    heatSource: "GAS",
    capacity: 60,
    category: "TUMBLE DRYER",
    width: 129,
    depth: 148.5,
    height: 246.5,
    weight: 470,
    voltage: "400-60-3",
    load: 75,
    totalLoad: 75,
    recommendedFuse: 125,
    connectionHeight: 2025,
    supplyHeight: 120,
    connectionType: "fix connection"
  },
  {
    model: "T41200 G",
    description: "TUMBLE DRYER 1200L SELECTA GAS",
    heatSource: "GAS",
    capacity: 60,
    category: "TUMBLE DRYER",
    width: 129,
    depth: 148.5,
    height: 246.5,
    weight: 470,
    voltage: "400-60-3",
    load: 3.3,
    totalLoad: 3.3,
    recommendedFuse: 16,
    connectionHeight: 1590,
    supplyHeight: 120,
    connectionType: "Breaker",

    gasLoad: 82,                   // kW gas burner :contentReference[oaicite:8]{index=8}
    gasTotalLoad: 82,
    diameter: "ISO 7/1‑Rp 1\"",
    gasPressure: 20,               // Natural gas 20mbar :contentReference[oaicite:9]{index=9}
    gasType: "G20",
    gasConnectionHeight: 2055,     // mm :contentReference[oaicite:10]{index=10}
    gasSupplyHeight: 150,          // Suggested cm supply height
    gasBTU: 279865,                // BTU/hr :contentReference[oaicite:11]{index=11}

    diameterFlow: 315,             // Exhaust diameter in mm :contentReference[oaicite:12]{index=12}
    pressureDrop: 100,             // Pa max static back pressure :contentReference[oaicite:13]{index=13}
    volumeFlow: 2500,              // Airflow m³/h gas version :contentReference[oaicite:14]{index=14}

  },
  {
    model: "T41200 S",
    description: "TUMBLE DRYER 1200L SELECTA STEAM",
    heatSource: "STEAM",
    capacity: 60,
    category: "TUMBLE DRYER",
    width: 129,
    depth: 148.5,
    height: 246.5,
    voltage: "400-50-3",
    load: 3.3,
    totalLoad: 3.3,
    recommendedFuse: 16,
    connectionHeight: 2025,
    supplyHeight: 120,
    connectionType: "socket outlet"
  },
  {
    model: "T4900",
    description: "TUMBLE DRYER 900L SELECTA ELECTRIC",
    heatSource: "GAS",
    capacity: 48,
    category: "TUMBLE DRYER",
    width: 129,
    depth: 129.5,
    height: 246.5,
    weight: 440,
    voltage: "400-60-3",
    load: 3.3,
    totalLoad: 3.3,
    recommendedFuse: 16,
    connectionHeight: 1590,
    supplyHeight: 120,
    connectionType: "Breaker",

    gasLoad: 64,                   // 64kW = 218,430BTU/hr :contentReference[oaicite:5]{index=5}
    gasTotalLoad: 64,
    diameter: "ISO 7/1‑Rp 1\"",
    gasPressure: 20,               // Natural gas at 20mbar :contentReference[oaicite:6]{index=6}
    gasType: "G20",
    gasConnectionHeight: 2055,     // mm :contentReference[oaicite:7]{index=7}
    gasSupplyHeight: 150,          // cm
    gasBTU: 218430,

    diameterFlow: 315,             // Exhaust Ø 315mm :contentReference[oaicite:8]{index=8}
    pressureDrop: 100,             // Max static back pressure 100Pa :contentReference[oaicite:9]{index=9}
    volumeFlow: 2300,
  },
  {
    model: "T4900 G",
    description: "TUMBLE DRYER 900L SELECTA GAS",
    heatSource: "GAS",
    capacity: 48,
    category: "TUMBLE DRYER",
    width: 129,
    depth: 129.5,
    height: 246.5,
    voltage: "400-50-3",
    load: 3.3,
    totalLoad: 3.3,
    recommendedFuse: 16,
    connectionHeight: 1590,
    supplyHeight: 120,
    connectionType: "socket outlet"
  },
  {
    model: "T4900 S",
    description: "TUMBLE DRYER 900L SELECTA STEAM",
    heatSource: "STEAM",
    capacity: 48,
    category: "TUMBLE DRYER",
    width: 129,
    depth: 129.5,
    height: 246.5,
    voltage: "400-50-3",
    load: 3.3,
    totalLoad: 3.3,
    recommendedFuse: 16,
    connectionHeight: 1590,
    supplyHeight: 120,
    connectionType: "socket outlet"
  },

  {
  model: "T5300S",
  heatSource: "GAS",
  capacity: 16.7,                      // Capacity in kg
  drumVolume: 300,                     // Drum volume in liters
  width: 79,
  depth: 111.5,
  height: 194,
  weight: 289,
  voltage: "400‑60‑3N",
  load: 1,                             // Electric motor/control load (A)
  totalLoad: 1,
  recommendedFuse: 10,
  current: 905,
  connectionHeight: 120,
  connectionType: "Breaker",
  aveElecConsump: 1,

  // Gas specifications
  gasLoad: 9,                          // 9 kW (≈71,700BTU/hr) :contentReference[oaicite:1]{index=1}
  gasTotalLoad: 9,
  diameter: "ISO 7/1‑R 1/2\"",
  gasPressure: 20,                     // Natural gas pressure (mbar) :contentReference[oaicite:2]{index=2}
  gasType: "G20",
  gasConnectionHeight: 1270,          // mm from table :contentReference[oaicite:3]{index=3}
  gasSupplyHeight: 130,               // cm
  gasBTU: 71700,                       // BTU/hr :contentReference[oaicite:4]{index=4}

  // Air/gas flow specs
  diameterFlow: 200,                   // Exhaust Ø in mm :contentReference[oaicite:5]{index=5}
  pressureDrop: 70,                    // Pressure drop in Pa (gas/el) :contentReference[oaicite:6]{index=6}
  volumeFlow: 600,                     // Evacuated air flow (m³/h) :contentReference[oaicite:7]{index=7}

}

];

