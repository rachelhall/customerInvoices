import { IUser } from "../interfaces/IUser";
import { getLastDayOfMonth } from "./getLastDayOfMonth";
import { iterateDaysOfMonth } from "./iterateDaysOfMonth";

export function billFor(month: string, rate: number, users: IUser[]) {
  const billingPeriod = new Date(month);

  const daysInBillingCycle = getLastDayOfMonth(billingPeriod).getDate();

  const userActivity: any = [];
  let allUserActiveDaysCombined = 0;

  const usersThisMonth = users.filter((user) => {
    return (
      (user.activatedOn <= getLastDayOfMonth(billingPeriod) &&
        user.deactivatedOn === null) ||
      (user.deactivatedOn &&
        user.activatedOn.getMonth() <= billingPeriod.getMonth() &&
        user.deactivatedOn >= billingPeriod)
    );
  });

  usersThisMonth.forEach((user) => {
    const activatedDate = user.activatedOn;
    const deactivatedDate = user.deactivatedOn;

    const daysUserWasActive = iterateDaysOfMonth(
      billingPeriod,
      activatedDate,
      deactivatedDate
    );

    userActivity.push(daysUserWasActive);
  });
  userActivity.forEach((activity: any) => {
    const userTotalDays = Object.values(activity).reduce(
      (accumulator, value) => {
        return (accumulator as number) + (value as number);
      }
    );
    allUserActiveDaysCombined =
      allUserActiveDaysCombined + (userTotalDays as number);
  });

  const totalBill = parseInt(
    ((allUserActiveDaysCombined / daysInBillingCycle) * rate).toFixed(2)
  );
  return totalBill;
}
