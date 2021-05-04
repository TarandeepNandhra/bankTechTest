// describe('Feature test', () => {

//   var bank = new Bank;

//   it('Follows the acceptance criteria', () => {
//     bank.newCustomer();
//     var card = bank.customers[0];
//     card.deposit(100);
//     card.deposit(200);
//     card.withdraw(200);
//     expect(bank.generateStatement()).toMatch(/date || credit || debit || balance/)
//     expect(bank.generateStatement()).toMatch(/|| || 200.00 || 100.00/)
//     expect(bank.generateStatement()).toMatch(/|| 200.00 || || 300.00/)
//     expect(bank.generateStatement()).toMatch(/||| 100.00 || || 100.00/)
//     expect(function() { card.withdraw(200); } ).toThrow(new Error("Withdrawal amount exceeds balance"));
//   });
// });
