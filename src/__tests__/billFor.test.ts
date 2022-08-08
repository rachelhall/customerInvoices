import { constantUsers, newPlan, noUsers, userSignedUp } from "../data";
import { billFor } from "../utils/billFor";

describe("billFor", function () {
  it("works when the customer has no active users during the month", function () {
    expect(
      billFor("2019-01", newPlan.monthlyPriceInDollars, noUsers)
    ).toBeCloseTo(0.0, 0.01);
  });

  it("works when everything stays the same for a month", function () {
    expect(
      billFor("2019-01", newPlan.monthlyPriceInDollars, constantUsers)
    ).toBeCloseTo(8.0, 0.01);
  });

  it("works when a user is activated during the month", function () {
    expect(
      billFor("2019-01", newPlan.monthlyPriceInDollars, userSignedUp)
    ).toBeCloseTo(10, 0.01);
  });
});
