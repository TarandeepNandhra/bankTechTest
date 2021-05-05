/* eslint-disable no-undef */
describe('Transaction', () => {
  var transactions;

  beforeEach(() => {
    transactions = new Transaction;
  });

  describe('A transaction can store deposits', () => {
    it('stores date, deposit and balance into transactionHistory', () => {
      transactions.storeTransaction(100, "deposit");
      var date = new Date;
      expect(transactions.statement.transactionHistory[0]).toEqual({date: date, type: "deposit", amount: 100, balance: 100});
    });
  });

  describe('A transaction can store withdrawals', () => {
    it('stores date, deposit and balance into transactionHistory', () => {
      transactions.storeTransaction(50, "withdrawal");
      transactions.storeTransaction(100, "deposit");
      var date = new Date;
      expect(transactions.statement.transactionHistory[1]).toEqual({date: date, type: "deposit", amount: 100, balance: 50});
    });
  });
});