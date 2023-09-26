const users = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "user@example1.com",
    usedMoney: [
      { date: "2023-08-31", amount: 1220 },
      { date: "2023-07-31", amount: 120 },
      { date: "2023-06-31", amount: 440 },
    ],
  },
  {
    id: 2,
    firstName: "John2",
    lastName: "Doe2",
    email: "user@example2.com",
    usedMoney: [
      { date: "2023-08-31", amount: 150 },
      { date: "2023-07-31", amount: 200 },
      { date: "2023-06-31", amount: 720 },
    ],
  },
  {
    id: 3,
    firstName: "John3",
    lastName: "Doe3",
    email: "user@example3.com",
    usedMoney: [
      { date: "2023-08-31", amount: 520 },
      { date: "2023-07-31", amount: 700 },
      { date: "2023-06-31", amount: 120 },
    ],
  },
];

export function usersApi() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(users);
    }, 10);
  });
}
