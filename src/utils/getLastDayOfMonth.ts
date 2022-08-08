export function getLastDayOfMonth(date: Date) {
  return new Date(date.getUTCFullYear(), date.getUTCMonth() + 1, 0);
}
