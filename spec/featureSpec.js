describe('Feature test', () => {

  var bank = new Bank;

  it('Follows the acceptance criteria', () => {
    var transactions = bank.transaction;
    transactions.deposit(100);
    transactions.deposit(200);
    transactions.withdraw(200);
    expect(bank.generateStatement()).toMatch(/date || credit || debit || balance/)
    expect(bank.generateStatement()).toMatch(/|| || 200.00 || 100.00/)
    expect(bank.generateStatement()).toMatch(/|| 200.00 || || 300.00/)
    expect(bank.generateStatement()).toMatch(/||| 100.00 || || 100.00/)
  });
});
