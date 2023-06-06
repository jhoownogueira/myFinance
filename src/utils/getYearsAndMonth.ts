export function getCurrentYear() {
  const currentYear = new Date().getFullYear();
  return String(currentYear);
}
export function getCurrentMonth() {
  const currentMonth = new Date().getMonth() + 1;
  return currentMonth;
}