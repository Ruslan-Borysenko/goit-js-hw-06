import users from './users.js';

// Получить общую сумму баланса (поле balance) всех пользователей.

const calculateTotalBalance = users => {
  const result = users.reduce(
    (totalBalance, user) => totalBalance + user.balance,
    0,
  );
  return result;
};
console.log(calculateTotalBalance(users)); // 20916
