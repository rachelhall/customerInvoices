export const activeSubscriptions = {
  month: "2019-01",
  activeSubscription: { id: 1, customerId: 1, monthlyPriceInDollars: 4 },
  users: [
    {
      id: 1,
      name: "Employee #1",
      activatedOn: `2018-11-04T00:00:00.000Z`,
      deactivatedOn: null,
      customerId: 1,
    },
    {
      id: 2,
      name: "Employee #2",
      activatedOn: `2018-12-04T00:00:00.000Z`,
      deactivatedOn: null,
      customerId: 1,
    },
  ],
};

export const userSignedUp = [
  {
    id: 1,
    name: "Employee #1",
    activatedOn: new Date("2018-11-04"),
    deactivatedOn: null,
    customerId: 1,
  },
  {
    id: 2,
    name: "Employee #2",
    activatedOn: new Date("2018-12-04"),
    deactivatedOn: null,
    customerId: 1,
  },
  {
    id: 3,
    name: "Employee #3",
    activatedOn: new Date("2019-01-10"),
    deactivatedOn: null,
    customerId: 1,
  },
];

export const constantUsers = [
  {
    id: 1,
    name: "Employee #1",
    activatedOn: new Date("2018-11-04"),
    deactivatedOn: null,
    customerId: 1,
  },
  {
    id: 2,
    name: "Employee #2",
    activatedOn: new Date("2018-12-04"),
    deactivatedOn: null,
    customerId: 1,
  },
];

export const newPlan = {
  id: 1,
  customerId: 1,
  monthlyPriceInDollars: 4,
};

export const noUsers = [];
