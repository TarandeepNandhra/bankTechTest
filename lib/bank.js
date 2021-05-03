var Card = require("./card.js");

class Bank {
    constructor() {
      this.customers = [];
    }
  
    newCustomer() {
      this.customers.push(new Card);
    }
  
    generateStatement() {
      var statement = ["date || credit || debit || balance"];
      // For now will generate statement for first customer
      // Later can add authentication to view statement
      var transactions = this.customers[0].transactionHistory.map(transaction => {
        // transaction === {date: Date obj, type: "deposit" || "withdrawal", amount: number, balance: number}
        var dateString = this.dateHelper(transaction.date);
        if (transaction.type === "deposit") {
          return `${dateString} || ${transaction.amount.toFixed(2)} || || ${transaction.balance.toFixed(2)}`
        } else {
          return `${dateString} || || ${transaction.amount.toFixed(2)} || ${transaction.balance.toFixed(2)}`
        }
      });
      return (statement.concat(transactions.reverse())).join("\n");
    }
  
    dateHelper(date) {
      var day = date.getDate(); 
      var month = date.getMonth() + 1;
      var year = date.getFullYear();
      return `${day}/${month}/${year}`;
    }
}

module.exports = Bank;