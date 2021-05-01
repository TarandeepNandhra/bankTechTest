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

  
  
});