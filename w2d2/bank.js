"use strict";

const bank = {
  transactionsDB: [
    { customerId: 1, customerTransactions: [10, 50, -40] },
    { customerId: 2, customerTransactions: [10, 10, -10] },
    { customerId: 3, customerTransactions: [5, -5, 55] },
  ],
};

// bank.saveTransaction = function (id, amount) {
//   const customer = bank.transactionsDB.find(
//     (customer) => customer.customerId === id
//   );
//   customer.customerTransactions.push(amount);
// };

bank.debit = function (id, amount) {
  let sum = 0;
  for (
    let i = 0;
    i < bank.transactionsDB[id - 1].customerTransactions.length;
    i++
  ) {
    sum += bank.transactionsDB[id - 1].customerTransactions[i];
  }
  if (sum < 0) {
    bank.transactionsDB[id - 1].customerTransactions.push(amount - 2 * amount);
  } else {
    return "You don't have enough balance";
  }
  return bank.transactionsDB[id - 1].customerTransactions;
};

// bank.credit = function (id, amount) {
//   this.saveTransaction(id, amount);
// };

// bank.getBalance = function (id) {
//   let sum = 0;
//   for (
//     let i = 0;
//     i < bank.transactionsDB[id - 1].customerTransactions.length;
//     i++
//   ) {
//     sum += bank.transactionsDB[id - 1].customerTransactions[i];
//   }

//   return sum;
// };

// bank.bankBalance = function () {
//   let sum = 0;
//   for (let i = 0; i < bank.transactionsDB.length; i++) {
//     for (
//       let j = 0;
//       j < bank.transactionsDB[i].customerTransactions.length;
//       j++
//     ) {
//       sum += bank.transactionsDB[i].customerTransactions[j];
//     }
//   }
//   return sum;
// };

module.exports = { bank };
