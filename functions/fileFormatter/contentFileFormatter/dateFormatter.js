export const formatDate = (date) => {
  // Split the input date string by spaces to separate the date and time parts
  const [datePart] = date.split(" ");

  // Split the date part into day, month, and year
  const [day, month, year] = datePart.split("/");

  // Extract the last two digits of the year
  const shortYear = year.slice(-2);

  // Return the formatted date string
  return `${day}/${month}/${shortYear}`;
};
