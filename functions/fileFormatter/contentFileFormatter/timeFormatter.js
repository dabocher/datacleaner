export const formatTime = (date) => {
  // Split the input time string by colons to separate hours, minutes, and seconds
  const [hours, minutes] = date.split(":");

  // Return the formatted time string (hours and minutes only)
  return `${hours}:${minutes}`;
};
