import { initialRowsToRemove, wordsToRemove } from "../../../data.js";

// Function that removes initial rows and the Total row
export const removeRows = (data) => {
  if (!data || data.length === 0) return data;

  // Remove initial rows using initialRowsToRemove array
  const dataWithoutInitialRows = data.filter(
    (_, index) => !initialRowsToRemove.includes(index)
  );

  // Find the index of the "Tipus fet (nivell 2)" column in the header row
  const headers = dataWithoutInitialRows[0] || [];
  const tipusFetColumnIndex = headers.findIndex(
    (header) => header === "Tipus fet (nivell 2)"
  );

  // If the column exists, filter out rows containing words from wordsToRemove
  let filteredData = dataWithoutInitialRows;
  if (tipusFetColumnIndex !== -1) {
    filteredData = dataWithoutInitialRows.filter((row, index) => {
      // Keep the header row
      if (index === 0) return true;

      // Check if the cell value contains any of the words to remove
      const cellValue = row[tipusFetColumnIndex];
      if (!cellValue) return true; // Keep rows with empty values

      // Check if any word from wordsToRemove is included in the cell value
      if (typeof cellValue !== "string") return true;

      // Convert cell value to lowercase for case-insensitive comparison
      const cellValueLower = cellValue.toLowerCase();

      // Check if any word from wordsToRemove is included in the cell value
      return !wordsToRemove.some((word) => {
        // Convert word to lowercase for case-insensitive comparison
        const wordLower = word.toLowerCase();

        // Check if the word is a complete match or part of a word in the cell value
        return cellValueLower.includes(wordLower);
      });
    });
  }

  // Remove the last row if it contains only the word "Total"
  const lastRowIndex = filteredData.length - 1;
  const lastRow = filteredData[lastRowIndex];

  // Check if the last row exists and contains only the word "Total"
  if (lastRow && lastRow.length === 1 && lastRow[0] === "Total") {
    return filteredData.slice(0, -1);
  }

  return filteredData;
};
