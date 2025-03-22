import { columnsToRemove } from "../../../data.js";

export const deleteColumnsAndSort = (data) => {
  if (!data || data.length === 0) return data;

  // Sort columns in descending order to avoid index shifting
  const sortedColumns = [...columnsToRemove].sort((a, b) => b - a);

  // Process each row to remove specified columns
  const processedData = data.map((row) => {
    // Create a new row by filtering out the specified columns
    return row.filter((_, index) => !sortedColumns.includes(index));
  });
  
  // Separate header row from data rows
  const headerRow = processedData[0];
  const dataRows = processedData.slice(1);
  
  // Sort only the data rows by the second column (index 1)
  const sortedDataRows = dataRows.sort((rowA, rowB) => {
    // Sort by the second column (index 1) if it exists
    if (rowA.length > 1 && rowB.length > 1) {
      return rowA[1] > rowB[1] ? 1 : rowA[1] < rowB[1] ? -1 : 0;
    }
    return 0;
  });
  
  // Reattach the header row to the sorted data rows
  return [headerRow, ...sortedDataRows];
};
