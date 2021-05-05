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
      expect(transactions.transactionHistory[0]).toEqual({date: date, type: "deposit", amount: 100, balance: 100});
    });
  });

  describe('A transaction can store withdrawals', () => {
    it('stores date, deposit and balance into transactionHistory', () => {
      transactions.storeTransaction(100, "deposit");
      transactions.storeTransaction(50, "withdrawal");
      var date = new Date;
      expect(transactions.transactionHistory[1]).toEqual({date: date, type: "withdrawal", amount: 50, balance: 50});
    });
  });
});