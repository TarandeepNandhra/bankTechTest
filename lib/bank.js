/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
class Bank {
  constructor() {
    this.transaction = new Transaction;
  }

  deposit(amount) {
    this.transaction.storeTransaction(amount, "deposit");
  }

  withdraw(amount) {
    this.transaction.storeTransaction(amount, "withdrawal");
  }

  printStatement() {
    console.log(this.transaction.statement.generateStatement());
  }
}