import jsPDF from "jspdf";
import "jspdf-autotable";

const PDFGenerator = (machines) => {
  if (!machines.length) {
    alert("No machines selected to export.");
    console.log("no machines selected");
    return;
  }

  const doc = new jsPDF();

  doc.setFontSize(16);
  doc.text("Selected Machine List", 14, 20);

  const tableColumn = [
    "Model",
    "Description",
    "Capacity (kg)",
    "G-Factor",
    "Heat Source",
    "Width (cm)",
    "Depth (cm)",
    "Height (cm)",
    "Weight (kg)",
    "Quantity"
  ];

  const tableRows = machines.map((m) => [
    m.model,
    m.description || "-",
    m.capacity || "-",
    m.gFactor || "-",
    m.heatSource || m.type || "-",
    m.width || "-",
    m.depth || "-",
    m.height || "-",
    m.weight || "-",
    m.quantity || "-"
  ]);

  doc.autoTable({
    startY: 30,
    head: [tableColumn],
    body: tableRows,
    styles: { fontSize: 8 },
    headStyles: { fillColor: [44, 62, 80] },
    margin: { top: 30 },
  });

  doc.save("machine-list.pdf");
};

export default PDFGenerator;
