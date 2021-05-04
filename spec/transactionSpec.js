/* eslint-disable no-undef */
describe('Transaction', () => {
  var transactions;

  beforeEach(() => {
    transactions = new Transaction;
  });

  describe('A transaction can make deposits', () => {

    it('stores date, deposit and balance into transactionHistory', () => {
      transactions.deposit(100);
      var date = new Date;
      expect(transactions.transactionHistory[0]).toEqual({date: date, type: "deposit", amount: 100, balance: 100});
    });
  });

  describe('A transaction can make withdrawls', () => {
    it('stores date, deposit and balance into transactionHistory', () => {
      transactions.deposit(100);
      transactions.withdraw(50);
      var date = new Date;
      expect(transactions.transactionHistory[1]).toEqual({date: date, type: "withdrawal", amount: 50, balance: 50});
    });
  });

});