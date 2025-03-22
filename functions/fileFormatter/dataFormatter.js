import { deleteColumnsAndSort } from "./contentFileFormatter/columnsRemoverAndSorter.js";
import { formatDate } from "./contentFileFormatter/dateFormatter.js";
import { removeRows } from "./contentFileFormatter/rowsRemover.js";
import { formatTime } from "./contentFileFormatter/timeFormatter.js";

export const formatData = (data) => {
  // Remove initial rows and Total row
  const dataWithRowsRemoved = removeRows(data);

  // Apply column deletion
  const dataWithDeletedColumns = deleteColumnsAndSort(dataWithRowsRemoved);

  // Continue with other formatting (removing empty rows and trimming whitespace)
  const headers = dataWithDeletedColumns[0];

  // Find the indices of the columns to format
  const dateColumnIndex = headers.indexOf("Data Inici (fet)");
  const timeColumnIndex = headers.indexOf("Hora inici fet");

  const formattedData = [headers];

  for (let i = 1; i < dataWithDeletedColumns.length; i++) {
    const row = dataWithDeletedColumns[i];
    if (
      row.some((cell) => cell !== undefined && cell !== null && cell !== "")
    ) {
      const formattedRow = row.map((cell, index) => {
        // Trim whitespace for all cells
        if (typeof cell === "string") {
          cell = cell.trim();
        }

        // Format date column
        if (index === dateColumnIndex && typeof cell === "string") {
          return formatDate(cell);
        }

        // Format time column
        if (index === timeColumnIndex && typeof cell === "string") {
          return formatTime(cell);
        }

        return cell;
      });

      formattedData.push(formattedRow);
    }
  }

  return formattedData;
};
