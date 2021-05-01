class Card {
  constructor() {
    this.balance = 0;
    this.transactionHistory = [];
  }

  deposit(amount) {
    this.balance += amount;
    var date = this.dateHelper();
    this.transactionHistory.push({date: date, type: "deposit", balance: this.balance})
  }

  withdraw(amount) {
    if (this.balance - amount < 0) {
      throw new Error("Withdrawal amount exceeds balance");
    }
    this.balance -= amount;
    var date = this.dateHelper();
    this.transactionHistory.push({date: date, type: "withdrawal", balance: this.balance})
  }

  dateHelper() {
    var date = new Date;
    var day = date.getUTCDate(); 
    var month = date.getUTCMonth() + 1;
    var year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
}