import { processFile } from "./fileProcesser.js";

// Variable para controlar si el drag & drop está habilitado
let isDragDropEnabled = true;

export const handleDragOver = (e) => {
  if (!isDragDropEnabled) return;
  e.preventDefault();
  e.stopPropagation();
  e.target.classList.add("highlight");
};

export const handleDragLeave = (e) => {
  if (!isDragDropEnabled) return;
  e.preventDefault();
  e.stopPropagation();
  e.target.classList.remove("highlight");
};

export const handleDrop = (e) => {
  if (!isDragDropEnabled) return;
  e.preventDefault();
  e.stopPropagation();
  e.target.classList.remove("highlight");

  const files = e.dataTransfer.files;
  if (files.length) {
    processFile(files[0]);
  }
};

export const handleFileSelect = (e) => {
  if (!isDragDropEnabled) return;
  const file = e.target.files[0];
  if (file) {
    processFile(file);
  }
};

// Función para deshabilitar el drag & drop
export const disableDragDrop = () => {
  isDragDropEnabled = false;
  const dropZone = window.dropZone;
  if (dropZone) {
    dropZone.classList.add("disabled");
    // Ocultar solo el área de drag & drop y el botón de navegación, pero mantener visible la card de progreso
    dropZone.style.display = "none";
    const uploadBtn = document.querySelector(".upload-btn");
    if (uploadBtn) {
      uploadBtn.style.display = "none";
    }
  }
};

// Función para habilitar el drag & drop
export const enableDragDrop = () => {
  isDragDropEnabled = true;
  const dropZone = window.dropZone;
  if (dropZone) {
    dropZone.classList.remove("disabled");
    // Mostrar el área de drag & drop y el botón de navegación
    dropZone.style.display = "flex";
    const uploadBtn = document.querySelector(".upload-btn");
    if (uploadBtn) {
      uploadBtn.style.display = "block";
    }
  }
};
