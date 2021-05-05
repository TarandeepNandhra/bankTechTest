/* eslint-disable no-undef */
describe('Feature test', () => {

  var bank = new Bank;

  it('Follows the acceptance criteria', () => {
    bank.deposit(100);
    bank.deposit(200);
    bank.withdraw(200);
    expect(bank.printStatement()).toMatch(/date || credit || debit || balance/)
    expect(bank.printStatement()).toMatch(/|| || 200.00 || 100.00/)
    expect(bank.printStatement()).toMatch(/|| 200.00 || || 300.00/)
    expect(bank.printStatement()).toMatch(/||| 100.00 || || 100.00/)
  });
});
