class Bank {
  constructor() {
    this.customers = [];
  }

  newCustomer() {
    this.customers.push(new Card);
  }

  generateStatement() {
    var statement = ["date || credit || debit || balance"];
    // for now will generate statement for first customer
    // Later can add authentication to view statement
    this.customers[0].transactionHistory.map(transaction => {
      // transaction === {date: Date obj, type: "deposit" || "withdrawal", amount: number, balance: number}
      var dateString = this.dateHelper(transaction.date);
      if (transaction.type === "deposit") {
        return `${dateString} || || ${transaction.amount} || ${transaction.balance}`
      } else {
        return `${dateString} || ${transaction.amount} || || ${transaction.balance}`
      }
      
    });
  }

  dateHelper(date) {
    var day = date.getUTCDate(); 
    var month = date.getUTCMonth() + 1;
    var year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
}