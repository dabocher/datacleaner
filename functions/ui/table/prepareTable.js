export const prepareTableStructure = (data) => {
  if (!data || data.length === 0) {
    return {
      tableHTML:
        "<p class=\"no-data-message\">No s'han trobat dades a l'arxiu</p>",
      headers: [],
    };
  }

  const headers = data[0] || [];

  let tableHTML = `
    <table>
      <thead>
        <tr>
  `;

  // Add headers
  headers.forEach((header) => {
    tableHTML += `<th>${header || ""}</th>`;
  });

  tableHTML += `
        </tr>
      </thead>
      <tbody>
      </tbody>
    </table>
  `;

  return {
    tableHTML,
    headers,
  };
};
