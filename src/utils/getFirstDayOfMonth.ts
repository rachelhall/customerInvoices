export function getFirstDayOfMonth(date: Date) {
  return new Date(date.getUTCFullYear(), date.getUTCMonth(), 1);
}
