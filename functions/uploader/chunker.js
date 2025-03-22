// add imports
import { prepareTableStructure } from "../ui/table/prepareTable.js";
import { completeProcessing, updateProgress } from "./progress.js";

export const processDataInChunks = (data) => {
  const tableContainer = window.tableContainer;
  const chunkSize = window.CONFIG.CHUNK_SIZE;
  const delay = window.CONFIG.PROCESSING_DELAY;

  // Show the table card when processing begins
  const tableCard = document.querySelector('.table-card');
  const cardContainer = document.querySelector('.card-container');
  
  if (tableCard) {
    tableCard.classList.add('show');
  }
  
  // Add show-table class to card container to change layout
  if (cardContainer) {
    cardContainer.classList.add('show-table');
  }

  // Prepare table structure
  const tableStructure = prepareTableStructure(data);
  tableContainer.innerHTML = tableStructure.tableHTML;

  // Process rows in chunks
  const tbody = tableContainer.querySelector("tbody");
  const headers = data[0] || [];
  const totalRows = data.length - 1; // Excluding header row

  let processedRows = 0;
  let currentChunk = 0;

  const processChunk = () => {
    const start = currentChunk * chunkSize + 1; // +1 to skip header
    const end = Math.min(start + chunkSize, data.length);

    let rowsHTML = "";
    for (let i = start; i < end; i++) {
      const row = data[i] || [];
      rowsHTML += "<tr>";
      for (let j = 0; j < headers.length; j++) {
        rowsHTML += `<td>${row[j] !== undefined ? row[j] : ""}</td>`;
      }
      rowsHTML += "</tr>";
    }

    tbody.innerHTML += rowsHTML;
    processedRows += end - start;

    // Update file info with progress
    updateProgress(processedRows, totalRows);

    currentChunk++;
    if (start + chunkSize < data.length) {
      setTimeout(processChunk, delay);
    } else {
      // All chunks processed
      completeProcessing(data);
    }
  };

  // Start processing chunks
  if (data.length > 1) {
    setTimeout(processChunk, 0);
  } else {
    // No data or only headers
    completeProcessing(data);
  }
};
