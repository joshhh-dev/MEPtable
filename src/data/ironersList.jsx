export const ironers = [
  { model: "IB42310", description: "IRONER BED Ø230 WIDTH 1000 ELECTRIC", heatSource: "ELECTRIC", capacity: 25, category: "IRONERS" },
  { model: "IB42314", description: "IRONER BED Ø230 WIDTH 1400 ELECTRIC", heatSource: "ELECTRIC", capacity: 34, category: "IRONERS" },
  { model: "IB42316", description: "IRONER BED Ø230 WIDTH 1650 ELECTRIC", heatSource: "ELECTRIC", capacity: 40.5, category: "IRONERS",
  width: 204.5,         // cm – from datasheet :contentReference[oaicite:1]{index=1}
  depth: 51,          // cm :contentReference[oaicite:2]{index=2}
  height: 102.5,        // cm :contentReference[oaicite:3]{index=3}
  weight: 184,         // kg :contentReference[oaicite:4]{index=4}

  voltage: "400‑60‑3N",
  load: 8.7,           // kW :contentReference[oaicite:5]{index=5}
  totalLoad: 8.7,
  recommendedFuse: 16,
  current: 420,        // A :contentReference[oaicite:6]{index=6}
  connectionHeight: 40,
  connectionType: "Breaker",
  aveElecConsump: 8.7,

  gasLoad: null,
  gasTotalLoad: null,
  diameter: null,
  gasPressure: null,
  gasType: null,
  gasConnectionHeight: null,
  gasSupplyHeight: null,
  gasBTU: null,

  diameterFlow: 40,     // Exhaust Ø in mm :contentReference[oaicite:7]{index=7}
  pressureDrop: null,
  volumeFlow: "Airvent",

   },
  { model: "IB5725", description: "IRONER CHEST heatSource Ø700/2500MM ELECTRIC", heatSource: "ELECTRIC", capacity: 200, category: "IRONERS" },
  { model: "IB5725 G", description: "IRONER CHEST heatSource Ø700/2500MM GAS", heatSource: "GAS", capacity: 200, category: "IRONERS" },
  { model: "IB5725 S", description: "IRONER CHEST heatSource Ø700/2500MM STEAM", heatSource: "STEAM", capacity: 180, category: "IRONERS" },
  { model: "IB5725-F", description: "IRONER CHEST heatSource Ø700/2500MM WITH FEEDER ELECTRIC", heatSource: "ELECTRIC", capacity: 200, category: "IRONERS" },
  { model: "IB5725-F G", description: "IRONER CHEST heatSource Ø700/2500MM WITH FEEDER GAS", heatSource: "GAS", capacity: 200, category: "IRONERS" },
  { model: "IB5725-F S", description: "IRONER CHEST heatSource Ø700/2500MM WITH FEEDER STEAM", heatSource: "STEAM", capacity: 180, category: "IRONERS" },
  { model: "IB5730", description: "IRONER CHEST heatSource Ø700/3000MM ELECTRIC", heatSource: "ELECTRIC", capacity: 230, category: "IRONERS" },
  { model: "IB5730 G", description: "IRONER CHEST heatSource Ø700/3000MM GAS", heatSource: "GAS", capacity: 230, category: "IRONERS" },
  { model: "IB5730 S", description: "IRONER CHEST heatSource Ø700/3000MM STEAM", heatSource: "STEAM", capacity: 208, category: "IRONERS" },
  { model: "IB5730-F", description: "IRONER CHEST heatSource Ø700/3000MM WITH FEEDER ELECTRIC", heatSource: "ELECTRIC", capacity: 230, category: "IRONERS" },
  { model: "IB5730-F G", description: "IRONER CHEST heatSource Ø700/3000MM WITH FEEDER GAS", heatSource: "GAS", capacity: 230, category: "IRONERS" },
  { model: "IB5730-F S", description: "IRONER CHEST heatSource Ø700/3000MM WITH FEEDER STEAM", heatSource: "STEAM", capacity: 208, category: "IRONERS" },
  { model: "IB5733", description: "IRONER CHEST heatSource Ø700/3300MM ELECTRIC", heatSource: "ELECTRIC", capacity: 250, category: "IRONERS" },
  { model: "IB5733 G", description: "IRONER CHEST heatSource Ø700/3300MM GAS", heatSource: "GAS", capacity: 250, category: "IRONERS" },
  { model: "IB5733 S", description: "IRONER CHEST heatSource Ø700/3300MM STEAM", heatSource: "STEAM", capacity: 224, category: "IRONERS" },
  { model: "IB5733-F", description: "IRONER CHEST heatSource Ø700/3300MM WITH FEEDER ELECTRIC", heatSource: "ELECTRIC", capacity: 250, category: "IRONERS" },
  { model: "IB5733-F G", description: "IRONER CHEST heatSource Ø700/3300MM WITH FEEDER GAS", heatSource: "GAS", capacity: 250, category: "IRONERS" },
  { model: "IB5733-F S", description: "IRONER CHEST heatSource Ø700/3300MM WITH FEEDER STEAM", heatSource: "STEAM", capacity: 224, category: "IRONERS" },
  { model: "IC43316", description: "IRONER CYLINDER heatSource Ø330/1650MM ELECTRIC", heatSource: "ELECTRIC", capacity: 39, category: "IRONERS" },
  { model: "IC43316 G", description: "IRONER CYLINDER heatSource Ø330/1650MM GAS", heatSource: "GAS", capacity: 39, category: "IRONERS" },
  { model: "IC43320", description: "IRONER CYLINDER heatSource Ø330/2065MM ELECTRIC", heatSource: "ELECTRIC", capacity: 49, category: "IRONERS" },
  { model: "IC43320 G", description: "IRONER CYLINDER heatSource Ø330/2065MM GAS", heatSource: "GAS", capacity: 39, category: "IRONERS",   
  width: 203,           // cm
  depth: 69.0,
  height: 114.5,
  weight: 300,           // Net weight

  voltage: "400‑60‑3N",
  load: 0.5,             // Electric control load in kW
  totalLoad: 0.5,
  recommendedFuse: 12,
  current: 110,
  connectionHeight: 40,
  connectionType: "Breaker",
  aveElecConsump: 0.5,   // kW

  gasLoad: 20,           // kW burner
  gasTotalLoad: 20,
  diameter: "DN20",
  gasPressure: 20,       // mbar (G20)
  gasType: "G20",
  gasConnectionHeight: 430,  // mm
  gasSupplyHeight: 40,       // cm
  gasBTU: 85330,             // BTU/hr

  diameterFlow: 125,         // Exhaust Ø in mm
  pressureDrop: 200,         // Pa
  volumeFlow: 426,           // m³/h},
  },
  { model: "IC64819", description: "IRONER CYLINDER heatSource Ø479/1910MM ELECTRIC", heatSource: "ELECTRIC", capacity: 76, category: "IRONERS" },
  { model: "IC64819 G", description: "IRONER CYLINDER heatSource Ø479/1910MM GAS", heatSource: "GAS", capacity: 70, category: "IRONERS" },
  { model: "IC64819 S", description: "IRONER CYLINDER heatSource Ø479/1910MM STEAM", heatSource: "STEAM", capacity: 114, category: "IRONERS" },
  { model: "IC64819FFS", description: "IRONER CYLINDER heatSource Ø479/1910MM FFS ELECTRIC", heatSource: "ELECTRIC", capacity: 76, category: "IRONERS" },
  { model: "IC64819FFS G", description: "IRONER CYLINDER heatSource Ø479/1910MM FFS GAS", heatSource: "GAS", capacity: 70, category: "IRONERS" },
  { model: "IC64819FFS S", description: "IRONER CYLINDER heatSource Ø479/1910MM FFS STEAM", heatSource: "STEAM", capacity: 114, category: "IRONERS" },
  { model: "IC64819F-LF", description: "IRONER CYLINDER heatSource Ø479/1910MM FLF ELECTRIC", heatSource: "ELECTRIC", capacity: 76, category: "IRONERS" },
  { model: "IC64819F-LF G", description: "IRONER CYLINDER heatSource Ø479/1910MM FLF GAS", heatSource: "GAS", capacity: 70, category: "IRONERS" },
  { model: "IC64819F-LF S", description: "IRONER CYLINDER heatSource Ø479/1910MM FLF STEAM", heatSource: "STEAM", capacity: 114, category: "IRONERS" },
  { model: "IC64819LF", description: "IRONER CYLINDER heatSource Ø479/1910MM LF ELECTRIC", heatSource: "ELECTRIC", capacity: 76, category: "IRONERS" },
  { model: "IC64819LF G", description: "IRONER CYLINDER heatSource Ø479/1910MM LF GAS", heatSource: "GAS", capacity: 70, category: "IRONERS" },
  { model: "IC64819LF S", description: "IRONER CYLINDER heatSource Ø479/1910MM LF STEAM", heatSource: "STEAM", capacity: 114, category: "IRONERS" },
  { model: "IC64819R", description: "IRONER CYLINDER heatSource Ø479/1910MM R ELECTRIC", heatSource: "ELECTRIC", capacity: 76, category: "IRONERS" },
  { model: "IC64819R G", description: "IRONER CYLINDER heatSource Ø479/1910MM R GAS", heatSource: "GAS", capacity: 70, category: "IRONERS" },
  { model: "IC64819R S", description: "IRONER CYLINDER heatSource Ø479/1910MM R STEAM", heatSource: "STEAM", capacity: 114, category: "IRONERS" },  
  { model: "IC64821", description: "IRONER CYLINDER heatSource Ø479/2120MM ELECTRIC", heatSource: "ELECTRIC", capacity: 80, category: "IRONERS" },
  { model: "IC64821 G", description: "IRONER CYLINDER heatSource Ø479/2120MM GAS", heatSource: "GAS", capacity: 74, category: "IRONERS" },
  { model: "IC64821 S", description: "IRONER CYLINDER heatSource Ø479/2120MM STEAM", heatSource: "STEAM", capacity: 126, category: "IRONERS" },
  { model: "IC64821F-LF", description: "IRONER CYLINDER heatSource Ø479/2120MM FLF ELECTRIC", heatSource: "ELECTRIC", capacity: 80, category: "IRONERS" },
  { model: "IC64821F-LF G", description: "IRONER CYLINDER heatSource Ø479/2120MM FLF GAS", heatSource: "GAS", capacity: 74, category: "IRONERS" },
  { model: "IC64821F-LF S", description: "IRONER CYLINDER heatSource Ø479/2120MM FLF STEAM", heatSource: "STEAM", capacity: 126, category: "IRONERS" },
  { model: "IC64821LF", description: "IRONER CYLINDER heatSource Ø479/2120MM LF ELECTRIC", heatSource: "ELECTRIC", capacity: 80, category: "IRONERS" },
  { model: "IC64821LF G", description: "IRONER CYLINDER heatSource Ø479/2120MM LF GAS", heatSource: "GAS", capacity: 74, category: "IRONERS" },
  { model: "IC64821LF S", description: "IRONER CYLINDER heatSource Ø479/2120MM LF STEAM", heatSource: "STEAM", capacity: 126, category: "IRONERS" },
  { model: "IC64821R", description: "IRONER CYLINDER heatSource Ø479/2120MM R ELECTRIC", heatSource: "ELECTRIC", capacity: 80, category: "IRONERS" },
  { model: "IC64821R G", description: "IRONER CYLINDER heatSource Ø479/2120MM R GAS", heatSource: "GAS", capacity: 74, category: "IRONERS" },
  { model: "IC64821R S", description: "IRONER CYLINDER heatSource Ø479/2120MM R STEAM", heatSource: "STEAM", capacity: 126, category: "IRONERS" },
  { model: "IC64825", description: "IRONER CYLINDER heatSource Ø479/2540MM ELECTRIC", heatSource: "ELECTRIC", capacity: 96, category: "IRONERS" },
  { model: "IC64825 G", description: "IRONER CYLINDER heatSource Ø479/2540MM GAS", heatSource: "GAS", capacity: 92, category: "IRONERS" },
  { model: "IC64825 S", description: "IRONER CYLINDER heatSource Ø479/2540MM STEAM", heatSource: "STEAM", capacity: 150, category: "IRONERS" },
  { model: "IC64825FFS", description: "IRONER CYLINDER heatSource Ø479/2540MM FFS ELECTRIC", heatSource: "ELECTRIC", capacity: 96, category: "IRONERS" },
  { model: "IC64825FFS G", description: "IRONER CYLINDER heatSource Ø479/2540MM FFS GAS", heatSource: "GAS", capacity: 92, category: "IRONERS" },
  { model: "IC64825FFS S", description: "IRONER CYLINDER heatSource Ø479/2540MM FFS STEAM", heatSource: "STEAM", capacity: 150, category: "IRONERS" },
  { model: "IC64825F-LF", description: "IRONER CYLINDER heatSource Ø479/2540MM FLF ELECTRIC", heatSource: "ELECTRIC", capacity: 96, category: "IRONERS" },
  { model: "IC64825F-LF G", description: "IRONER CYLINDER heatSource Ø479/2540MM FLF GAS", heatSource: "GAS", capacity: 92, category: "IRONERS" },
  { model: "IC64825F-LF S", description: "IRONER CYLINDER heatSource Ø479/2540MM FLF STEAM", heatSource: "STEAM", capacity: 150, category: "IRONERS" },
  { model: "IC64825LF", description: "IRONER CYLINDER heatSource Ø479/2540MM LF ELECTRIC", heatSource: "ELECTRIC", capacity: 96, category: "IRONERS" },
  { model: "IC64825LF G", description: "IRONER CYLINDER heatSource Ø479/2540MM LF GAS", heatSource: "GAS", capacity: 92, category: "IRONERS" },
  { model: "IC64825LF S", description: "IRONER CYLINDER heatSource Ø479/2540MM LF STEAM", heatSource: "STEAM", capacity: 150, category: "IRONERS" },
  { model: "IC64825R", description: "IRONER CYLINDER heatSource Ø479/2540MM R ELECTRIC", heatSource: "ELECTRIC", capacity: 96, category: "IRONERS" },
  { model: "IC64825R G", description: "IRONER CYLINDER heatSource Ø479/2540MM R GAS", heatSource: "GAS", capacity: 92, category: "IRONERS" },
  { model: "IC64825R S", description: "IRONER CYLINDER heatSource Ø479/2540MM R STEAM", heatSource: "STEAM", capacity: 150, category: "IRONERS" },
  { model: "IC64828", description: "IRONER CYLINDER heatSource Ø479/2750MM ELECTRIC", heatSource: "ELECTRIC", capacity: 102, category: "IRONERS" },
  { model: "IC64828 G", description: "IRONER CYLINDER heatSource Ø479/2750MM GAS", heatSource: "GAS", capacity: 102, category: "IRONERS" },
  { model: "IC64828 S", description: "IRONER CYLINDER heatSource Ø479/2750MM STEAM", heatSource: "STEAM", capacity: 162, category: "IRONERS" },
  { model: "IC64828F-LF", description: "IRONER CYLINDER heatSource Ø479/2750MM FLF ELECTRIC", heatSource: "ELECTRIC", capacity: 102, category: "IRONERS" },
  { model: "IC64828F-LF G", description: "IRONER CYLINDER heatSource Ø479/2750MM FLF GAS", heatSource: "GAS", capacity: 102, category: "IRONERS" },
  { model: "IC64828F-LF S", description: "IRONER CYLINDER heatSource Ø479/2750MM FLF STEAM", heatSource: "STEAM", capacity: 162, category: "IRONERS" },
  { model: "IC64828LF", description: "IRONER CYLINDER heatSource Ø479/2750MM LF ELECTRIC", heatSource: "ELECTRIC", capacity: 102, category: "IRONERS" },
  { model: "IC64828LF G", description: "IRONER CYLINDER heatSource Ø479/2750MM LF GAS", heatSource: "GAS", capacity: 102, category: "IRONERS" },
  { model: "IC64828LF S", description: "IRONER CYLINDER heatSource Ø479/2750MM LF STEAM", heatSource: "STEAM", capacity: 162, category: "IRONERS" },
  { model: "IC64828R", description: "IRONER CYLINDER heatSource Ø479/2750MM R ELECTRIC", heatSource: "ELECTRIC", capacity: 102, category: "IRONERS" },
  { model: "IC64828R G", description: "IRONER CYLINDER heatSource Ø479/2750MM R GAS", heatSource: "GAS", capacity: 102, category: "IRONERS" },
  { model: "IC64828R S", description: "IRONER CYLINDER heatSource Ø479/2750MM R STEAM", heatSource: "STEAM", capacity: 162, category: "IRONERS" },
  { model: "IC64832", description: "IRONER CYLINDER heatSource Ø479/3170MM ELECTRIC", heatSource: "ELECTRIC", capacity: 118, category: "IRONERS" },
  { model: "IC64832 G", description: "IRONER CYLINDER heatSource Ø479/3170MM GAS", heatSource: "GAS", capacity: 118, category: "IRONERS",
  width: 383.5,               // cm :contentReference[oaicite:1]{index=1}
  depth: 107,               // cm :contentReference[oaicite:2]{index=2}
  height: 127,              // cm :contentReference[oaicite:3]{index=3}
  weight: 1015,              // kg net :contentReference[oaicite:4]{index=4}

  voltage: "400‑60‑3N",
  load: 2,                   // kW electric control/motor :contentReference[oaicite:5]{index=5}
  totalLoad: 2,
  recommendedFuse: 16,       // Based on 2kW draw :contentReference[oaicite:6]{index=6}
  current: 1800,             // A Rated supply connection :contentReference[oaicite:7]{index=7}
  connectionHeight: 40,      // mm :contentReference[oaicite:8]{index=8}
  connectionType: "Breaker",
  aveElecConsump: 2,         // Averaged electric kW

  gasLoad: 65,               // kW burner :contentReference[oaicite:9]{index=9}
  gasTotalLoad: 65,
  diameter: "DN20",
  gasPressure: 20,           // mbar G20 :contentReference[oaicite:10]{index=10}
  gasType: "G20",
  gasConnectionHeight: 430,  // mm :contentReference[oaicite:11]{index=11}
  gasSupplyHeight: 40,       // cm
  gasBTU: 221800,            // BTU/hr (65kW) :contentReference[oaicite:12]{index=12}

  diameterFlow: 125,         // Exhaust Ø in mm :contentReference[oaicite:13]{index=13}
  pressureDrop: 200,         // Pa (max static back pressure) :contentReference[oaicite:14]{index=14}
  volumeFlow: 1010,          // m³/h evacuated air :contentReference[oaicite:15]{index=15}
   },
  { model: "IC64832 S", description: "IRONER CYLINDER heatSource Ø479/3170MM STEAM", heatSource: "STEAM", capacity: 186, category: "IRONERS" },
  { model: "IC64832FFS", description: "IRONER CYLINDER heatSource Ø479/3170MM FFS ELECTRIC", heatSource: "ELECTRIC", capacity: 118, category: "IRONERS" },
  { model: "IC64832FFS G", description: "IRONER CYLINDER heatSource Ø479/3170MM FFS GAS", heatSource: "GAS", capacity: 118, category: "IRONERS" },
  { model: "IC64832FFS S", description: "IRONER CYLINDER heatSource Ø479/3170MM FFS STEAM", heatSource: "STEAM", capacity: 186, category: "IRONERS" },
  { model: "IC64832F-LF", description: "IRONER CYLINDER heatSource Ø479/3170MM FLF ELECTRIC", heatSource: "ELECTRIC", capacity: 118, category: "IRONERS" },
  { model: "IC64832F-LF G", description: "IRONER CYLINDER heatSource Ø479/3170MM FLF GAS", heatSource: "GAS", capacity: 118, category: "IRONERS" },
  { model: "IC64832F-LF S", description: "IRONER CYLINDER heatSource Ø479/3170MM FLF STEAM", heatSource: "STEAM", capacity: 186, category: "IRONERS" },
  { model: "IC64832LF", description: "IRONER CYLINDER heatSource Ø479/3170MM LF ELECTRIC", heatSource: "ELECTRIC", capacity: 118, category: "IRONERS" },
  { model: "IC64832LF G", description: "IRONER CYLINDER heatSource Ø479/3170MM LF GAS", heatSource: "GAS", capacity: 118, category: "IRONERS" },
  { model: "IC64832LF S", description: "IRONER CYLINDER heatSource Ø479/3170MM LF STEAM", heatSource: "STEAM", capacity: 186, category: "IRONERS" },
  { model: "IC64832R", description: "IRONER CYLINDER heatSource Ø479/3170MM R ELECTRIC", heatSource: "ELECTRIC", capacity: 118, category: "IRONERS" },
  { model: "IC64832R G", description: "IRONER CYLINDER heatSource Ø479/3170MM R GAS", heatSource: "GAS", capacity: 118, category: "IRONERS" },
  { model: "IC64832R S", description: "IRONER CYLINDER heatSource Ø479/3170MM R STEAM", heatSource: "STEAM", capacity: 186, category: "IRONERS" },
  { model: "IL 725 Folder", description: "LENGTH FOLDER FOR IB725", heatSource: "-", capacity: 0, category: "FOLDER" },
  { model: "IL 730 Folder", description: "LENGTH FOLDER FOR IB730", heatSource: "-", capacity: 0, category: "FOLDER"},
  { model: "IL 733 Folder", description: "LENGTH FOLDER FOR IB733", heatSource: "-", capacity: 0, category: "FOLDER" }
];
