export function formatDate(date: Date) {
  const currDate = new Date(date);

  return currDate.toLocaleDateString("en-US", { timeZone: "UTC" });
}

export function formatFullDate(date: Date) {
  const currDate = new Date(date);

  return currDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}
