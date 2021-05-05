/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
class StatementFormatter {
  constructor() {
    this.transactionHistory = [];
  }

  generateStatement() {
    var statementHeader = ["date || credit || debit || balance"];

    var transactions = this.transactionHistory.map(transaction => {
      // transaction === {date: Date object, type: "deposit" || "withdrawal", amount: number, balance: number}
      var dateString = this._formatDate(transaction.date);
      if (transaction.type === "deposit") {
        return `${dateString} || ${transaction.amount.toFixed(2)} || || ${transaction.balance.toFixed(2)}`;
      } else {
        return `${dateString} || || ${transaction.amount.toFixed(2)} || ${transaction.balance.toFixed(2)}`;
      }
    });
    return (statementHeader.concat(transactions.reverse())).join("\n");
  }

  _formatDate(date) {
    // Input is a Date object
    var day = date.getDate(); 
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  isFirstTransaction() {
    return this.transactionHistory.length === 0;
  }

  addTransactionToHistory(transaction) {
    this.transactionHistory.push(transaction);
  }

  getBalance() {
    return this.transactionHistory[this.transactionHistory.length - 1].balance;
  }
  
}