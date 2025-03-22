import { processDataInChunks } from "./chunker.js";

export const processExcelData = (workbook) => {
  // Get the first sheet
  const firstSheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[firstSheetName];

  // Convert sheet to JSON
  const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

  // Process data in chunks to avoid UI freezing
  processDataInChunks(jsonData);
};
