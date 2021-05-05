/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
class Transaction {
  constructor() {
    this.statement = new StatementFormatter;
  }

  storeTransaction(amount, type) {
    var newBalance;
    if (this.statement.isFirstTransaction()) {
      newBalance = this._initialBalance(amount, type);
    } else {
      newBalance = this._calculateBalance(amount, type);
    }
    this.statement.addTransactionToHistory({date: new Date, type: type, amount: amount, balance: newBalance});
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
    return this.statement.getBalance() + amount;
  }
}
