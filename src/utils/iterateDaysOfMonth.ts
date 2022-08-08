import { getFirstDayOfMonth } from "./getFirstDayOfMonth";
import { getLastDayOfMonth } from "./getLastDayOfMonth";

function getNextDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
}

export const iterateDaysOfMonth = (
  month: Date,
  activatedDate: Date,
  deactivatedDate?: Date | null
) => {
  const dateMap: { [key: string]: number } = {};
  const firstDayOfMonth = getFirstDayOfMonth(month);
  const lastDayOfMonth = getLastDayOfMonth(month);

  for (let i = firstDayOfMonth; i <= lastDayOfMonth; i = getNextDay(i)) {
    if (activatedDate > i) {
      dateMap[i.toISOString()] = 0;
    } else if (
      activatedDate <= i &&
      ((deactivatedDate && deactivatedDate > i) || deactivatedDate === null)
    ) {
      dateMap[i.toISOString()] = 1;
    }
    if (deactivatedDate && i > deactivatedDate) {
      dateMap[i.toISOString()] = 0;
    }
  }
  return dateMap;
};
