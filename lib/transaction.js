/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
class Transaction {
  constructor() {
    this.statement = new StatementFormatter;
  }

  // More lines easier to follow vs fewer lines no extra variable harder to follow
  storeTransaction(amount, type) {
    var newBalance;
    if (this.statement.transactionHistory.length === 0) {
      newBalance = this._initialBalance(amount, type);
    } else {
      newBalance = this._calculateBalance(amount, type);
    }
    this.statement.transactionHistory.push({date: new Date, type: type, amount: amount, balance: newBalance});
  }

  _initialBalance(amount, type) {
    if (type === "withdrawal") {
      return -1 * amount;
    } 
    return amount;
  }

  _calculateBalance(amount, type) {
    if (type === "withdrawal") {
      amount = -1 * amount;
    }
    return this.statement.transactionHistory[this.statement.transactionHistory.length - 1].balance + amount;
  }
}
