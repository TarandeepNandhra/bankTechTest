describe('Bank', () => {

  var bank;
  
  beforeEach(() => {
    bank = new Bank;
  });

  describe('newCustomer', () => {
    it('can create and store a Card', () => {
      bank.newCustomer();
      expect(bank.customers[0]).toBeInstanceOf(Card)
    });
  });

  describe('generateStatement', () => {
    it('can create a statement using transactionHistory', () => {
      var card = jasmine.createSpyObj('card', ['transactionHistory']);

      var date1 = new Date('05/01/2021');
      var date2 = new Date('05/05/2021');
      var date3 = new Date('06/03/2021');

      card.transactionHistory.and.callFake(() => {
        return [{date: date1, type: "deposit", amount: 100, balance: 100},
                {date: date2, type: "deposit", amount: 50, balance: 150},
                {date: date3, type: "withdrawal", amount: 25, balance: 125}
        ]
      });
      // Inject the mocked card
      bank.customers.push(card)
      console.log(bank.customers);

      expect(bank.customers[0]).toEqual(card)
      expect(bank.customers[0].transactionHistory).toEqual(card)
      expect(bank.generateStatement()).toEqual("date || credit || debit || balance\n3/6/2021 || || 25.00 || 125.00\n5/5/2021 || 50.00 || || 150.00\n1/5/2021 || 100.00 || || 100.00")
    });
  });
  
});