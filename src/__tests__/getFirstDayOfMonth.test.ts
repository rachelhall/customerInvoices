import { getFirstDayOfMonth } from "../utils/getFirstDayOfMonth";

const january = new Date("2019-01-11T00:00:00.000Z");
const firstDayOfJanuary = new Date("2019-01-01T08:00:00.000Z");

describe("getFirstDayOfMonth", function () {
  it("works when month is ISODate string", function () {
    expect(getFirstDayOfMonth(january)).toStrictEqual(firstDayOfJanuary);
  });
});
