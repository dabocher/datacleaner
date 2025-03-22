import { formatData } from "../dataFormatter.js";

export const formatAndSaveData = (data) => {
  const formattedData = formatData(data);
  saveFormattedFile(formattedData);
  displayFormattedData(formattedData);
};

const saveFormattedFile = (data) => {
  // Create a new workbook
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.aoa_to_sheet(data);

  // Add worksheet to workbook
  XLSX.utils.book_append_sheet(wb, ws, "Formatted Data");

  // Generate file and trigger download
  XLSX.writeFile(wb, "formatted_data.xlsx");
};

const displayFormattedData = (data) => {
  // Display the formatted data in the UI (e.g., in a table)

  const table = document.createElement("table");
  table.className = "formatted-data-table";

  data.forEach((row) => {
    const tr = document.createElement("tr");
    row.forEach((cell) => {
      const td = document.createElement("td");
      td.textContent = cell;
      tr.appendChild(td);
    });
    table.appendChild(tr);
  });

  // Clear previous content and append the new table to the DOM
  const formattedFile = document.getElementById("tableContainer");
  formattedFile.innerHTML = "";
  formattedFile.appendChild(table);
};
