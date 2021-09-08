"use strict";

const assert = require("assert");
const myExports = require("./bank");
const bank = myExports.bank;

describe("bank tests", function () {
  it("checks initial balance", function () {
    assert.strictEqual(bank.bankBalance(), 85);
  });

  it("balance after credit of 20 and debit of 1000 for customer 1", function () {
    assert.strictEqual(bank.bankBalance(), 85);
    bank.credit(1, 20);
    bank.debit(1, 1000);
    assert.strictEqual(bank.bankBalance(), 105);
  });
});
