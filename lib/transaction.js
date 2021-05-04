/* eslint-disable no-unused-vars */
class Transaction {
    constructor() {
      this.transactionHistory = [];
    }
  
    deposit(amount) {
      this.storeTransaction(amount, "deposit");
    }
  
    withdraw(amount) {
      this.storeTransaction(amount, "withdrawal");
    }

    storeTransaction(amount, type) {
      if (this.transactionHistory.length === 0) {
        this._firstTransaction(amount, type);
      } else {
        this.transactionHistory.push({date: new Date, type: type, amount: amount, balance: this._getBalance(amount, type)});
      }
    }

    _firstTransaction(amount, type) {
      var balance = amount;
      if (type === "withdrawal") {
        balance = -1 * amount;
      } 
      this.transactionHistory.push({date: new Date, type: type, amount: amount, balance: balance});
    }

    _getBalance(amount, type) {
      if (type === "withdrawal") {
        amount = -1 * amount;
      }
      return this.transactionHistory[this.transactionHistory.length - 1].balance + amount;
    }
  }