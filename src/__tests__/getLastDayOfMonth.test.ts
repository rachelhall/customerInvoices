import { getFirstDayOfMonth } from "../utils/getFirstDayOfMonth";
import { getLastDayOfMonth } from "../utils/getLastDayOfMonth";

const january = new Date("2019-01-11T00:00:00.000Z");
const lastDayOfJanuary = new Date("2019-01-31T08:00:00.000Z");

describe("getLastDayOfMonth", function () {
  it("works when month is ISODate string", function () {
    expect(getLastDayOfMonth(january)).toStrictEqual(lastDayOfJanuary);
  });
});
