import { formatFileSize } from "../fileFormatter/formatFileSize.js";
import { showError } from "../error/showError.js";
import { updateFileInfoLoading } from "./spinLoader.js";
import { reader } from "./reader.js";

export const processFile = (file) => {
  // Check if file is an Excel file
  if (!file.name.match(/\.(xlsx)$/i)) {
    showError("Please upload an XLSX file");
    return;
  }

  // Check file size
  if (file.size > window.CONFIG.MAX_FILE_SIZE) {
    showError(
      `File size exceeds the ${formatFileSize(
        window.CONFIG.MAX_FILE_SIZE
      )} limit`
    );
    return;
  }

  // Update UI to show loading state
  updateFileInfoLoading(file);

  // Read the file

  reader.onerror = () => {
    showError("Error reading file");
  };
  reader.readAsArrayBuffer(file);
};
