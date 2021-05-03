class Card {
    constructor() {
      this.balance = 0;
      this.transactionHistory = [];
    }
  
    deposit(amount) {
      this.balance += amount;
      var date = new Date;
      this.transactionHistory.push({date: date, type: "deposit", amount: amount, balance: this.balance})
    }
  
    withdraw(amount) {
      if (this.balance - amount < 0) {
        throw new Error("Withdrawal amount exceeds balance");
      }
      this.balance -= amount;
      var date = new Date;
      this.transactionHistory.push({date: date, type: "withdrawal", amount: amount, balance: this.balance})
    }
  }