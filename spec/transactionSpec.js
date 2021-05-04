describe('Transaction', () => {
  var transactions;

  beforeEach(() => {
    transactions = new Transaction;
  });

  it('Has a balance attribute, set to 0 initiallity', () => {
    expect(transactions.balance).toEqual(0);
  });

  describe('A transaction can make deposits', () => {
    it('can increase the account balance by amount deposited', () => {
      transactions.deposit(100);
      expect(transactions.balance).toEqual(100);
    });

    it('stores date, deposit and balance into transactionHistory', () => {
      transactions.deposit(100);
      var date = new Date;
      expect(transactions.transactionHistory[0]).toEqual({date: date, type: "deposit", amount: 100, balance: 100});
    });
  });

  describe('A transaction can make withdrawls', () => {
    it('can withdraw money if there is sufficient balance ', () => {
      transactions.deposit(100);
      transactions.withdraw(50);
      expect(transactions.balance).toEqual(50);
    });

    it('stores date, deposit and balance into transactionHistory', () => {
      transactions.deposit(100);
      transactions.withdraw(50);
      var date = new Date;
      expect(transactions.transactionHistory[1]).toEqual({date: date, type: "withdrawal", amount: 50, balance: 50});
    });
  });

});