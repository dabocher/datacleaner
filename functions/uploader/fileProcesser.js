import { formatFileSize } from "../fileFormatter/formatFileSize.js";
import { showError } from "../error/showError.js";
import { updateFileInfoLoading } from "./spinLoader.js";
import { reader } from "./reader.js";

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

  // Read the file

  reader.onerror = () => {
    showError("Error en llegir l'arxiu");
  };
  reader.readAsArrayBuffer(file);
};
