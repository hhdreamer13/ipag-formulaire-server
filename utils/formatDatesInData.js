export default function formatDatesInData(data) {
  for (let key in data) {
    if (key.includes("date") && data[key]) {
      const date = new Date(data[key]);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");

      data[key] = `${year}-${month}-${day}`;
    }
  }
  return data;
}
