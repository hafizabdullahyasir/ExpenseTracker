export default function getDateMinusDays(date, days) {
  if (!date || isNaN(new Date(date))) return new Date(); // fallback to current date
  const parsedDate = typeof date === "string" ? new Date(date) : date;
  return new Date(parsedDate.getFullYear(), parsedDate.getMonth(), parsedDate.getDate() - days);
}

  export function getFormattedDate(date) {
    if (!date) return "";
  
    const validDate = typeof date === "string" ? new Date(date) : date;
    if (isNaN(validDate)) return "";
  
    return validDate.toLocaleDateString("en-CA"); // returns YYYY-MM-DD
  }