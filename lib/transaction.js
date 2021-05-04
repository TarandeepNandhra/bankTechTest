class Transaction {
    constructor() {
      this.balance = 0;
      this.transactionHistory = [];
    }
  
    deposit(amount) {
      this.balance += amount;
      var date = new Date;
      this.transactionHistory.push({date: date, type: "deposit", amount: amount, balance: this.balance});
    }
  
    withdraw(amount) {
      this.balance -= amount;
      var date = new Date;
      this.transactionHistory.push({date: date, type: "withdrawal", amount: amount, balance: this.balance});
    }
  }