import { processExcelData } from "./excellDataProcesser.js";
import { showError } from "../error/showError.js";

export const reader = new FileReader();
reader.onload = (e) => {
  try {
    const data = new Uint8Array(e.target.result);
    const workbook = XLSX.read(data, { type: "array" });
    processExcelData(workbook);
  } catch (error) {
    showError("Error processing file: " + error.message);
  }
};
