describe('Card', () => {
  var Card = require('../lib/card.js');
  var card;

  beforeEach(() => {
    card = new Card;
  });

  it('Has a balance attribute, set to 0 initiallity', () => {
    expect(card.balance).toEqual(0)
  });

  describe('A card can make deposits', () => {
    it('can increase the account balance by amount deposited', () => {
      card.deposit(100);
      expect(card.balance).toEqual(100);
    });

    it('stores date, deposit and balance into transactionHistory', () => {
      card.deposit(100);
      var date = new Date;
      expect(card.transactionHistory[0]).toEqual({date: date, type: "deposit", amount: 100, balance: 100})
    });
  });

  describe('A card can make withdrawls', () => {
    it('can withdraw money if there is sufficient balance ', () => {
      card.deposit(100);
      card.withdraw(50);
      expect(card.balance).toEqual(50);
    });

    it('throws an error if there is not succifcient balance', () => {
      expect(function() { card.withdraw(50); } ).toThrow(new Error("Withdrawal amount exceeds balance"))
    });

    it('stores date, deposit and balance into transactionHistory', () => {
      card.deposit(100);
      card.withdraw(50);
      var date = new Date;
      expect(card.transactionHistory[1]).toEqual({date: date, type: "withdrawal", amount: 50, balance: 50})
    });
  });

});