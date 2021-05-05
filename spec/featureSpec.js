/* eslint-disable no-undef */
describe('Feature test', () => {

  var bank = new Bank;

  it('Follows the acceptance criteria', () => {
    bank.deposit(100);
    bank.deposit(200);
    bank.withdraw(200);
    spyOn(console, 'log');
    bank.printStatement();
    expect(console.log).toHaveBeenCalledWith('date || credit || debit || balance\n5/5/2021 || || 200.00 || 100.00\n5/5/2021 || 200.00 || || 300.00\n5/5/2021 || 100.00 || || 100.00');
  });
});
