class Bank {
    constructor() {
      this.transaction = new Transaction;
    }
    
    // Returns a string matching statement from acceptance criteria
    generateStatement() {
      var statement = ["date || credit || debit || balance"];
      // For now will generate statement for first customer - Later can add authentication to view statement
      var transactions = this.transaction.transactionHistory.map(transaction => {
        // transaction === {date: Date object, type: "deposit" || "withdrawal", amount: number, balance: number}
        var dateString = this.dateHelper(transaction.date);
        if (transaction.type === "deposit") {
          return `${dateString} || ${transaction.amount.toFixed(2)} || || ${transaction.balance.toFixed(2)}`;
        } else {
          return `${dateString} || || ${transaction.amount.toFixed(2)} || ${transaction.balance.toFixed(2)}`;
        }
      });
      return (statement.concat(transactions.reverse())).join("\n");
    }
  
    dateHelper(date) {
      // Input is a Date object
      var day = date.getDate(); 
      var month = date.getMonth() + 1;
      var year = date.getFullYear();
      return `${day}/${month}/${year}`;
    }
}