import { formatFileSize } from "../fileFormatter/formatFileSize.js";
import { showError } from "../error/showError.js";
import { updateFileInfoLoading } from "./spinLoader.js";
import { reader } from "./reader.js";
import { disableDragDrop, enableDragDrop } from "./dragAndDropper.js";

// Función para deshabilitar los botones de navegación
const disableNavigationButtons = () => {
  const uploadBtn = document.querySelector(".upload-btn");
  if (uploadBtn) {
    uploadBtn.classList.add("disabled");
    uploadBtn.style.pointerEvents = "none";
  }
};

export const processFile = (file) => {
  // Check if file is an Excel file
  if (!file.name.match(/\.(xlsx)$/i)) {
    showError("Si us plau, puja un arxiu XLSX");
    return;
  }

  // Check file size
  if (file.size > window.CONFIG.MAX_FILE_SIZE) {
    showError(
      `La mida de l'arxiu supera el límit de ${formatFileSize(
        window.CONFIG.MAX_FILE_SIZE
      )}`
    );
    return;
  }

  // Update UI to show loading state
  updateFileInfoLoading(file);

  // Deshabilitar botones de navegación y drag & drop
  disableNavigationButtons();
  disableDragDrop();

  // Read the file

  reader.onerror = () => {
    showError("Error en llegir l'arxiu");
    enableDragDrop();
  };
  reader.readAsArrayBuffer(file);
};

// Función para habilitar los botones de navegación
export const enableNavigationButtons = () => {
  const uploadBtn = document.querySelector(".upload-btn");
  if (uploadBtn) {
    uploadBtn.classList.remove("disabled");
    uploadBtn.style.pointerEvents = "auto";
  }
};
