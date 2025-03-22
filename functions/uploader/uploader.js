import {
  handleDragOver,
  handleDragLeave,
  handleDrop,
  handleFileSelect,
} from "./dragAndDropper.js";

export const uploader = () => {
  document.addEventListener("DOMContentLoaded", () => {
  // DOM Elements
  const dropZone = document.getElementById("dropZone");
  const fileInput = document.getElementById("fileInput");
  const fileInfo = document.getElementById("fileInfo");
  const tableContainer = document.getElementById("tableContainer");

  // Configuration
  const CONFIG = {
    CHUNK_SIZE: 1000, // Number of rows to process at once
    MAX_FILE_SIZE: 100 * 1024 * 1024, // 100MB limit
    PROCESSING_DELAY: 10, // ms between chunks to allow UI updates
  };

  // Make CONFIG available to imported functions
  window.CONFIG = CONFIG;

  // Make DOM elements available to imported functions
  window.dropZone = dropZone;
  window.fileInput = fileInput;
  window.fileInfo = fileInfo;
  window.tableContainer = tableContainer;

  // Event Listeners
  dropZone.addEventListener("dragover", handleDragOver);
  dropZone.addEventListener("dragleave", handleDragLeave);
  dropZone.addEventListener("drop", handleDrop);
  dropZone.addEventListener("click", () => fileInput.click());
  fileInput.addEventListener("change", handleFileSelect);
  });
};
