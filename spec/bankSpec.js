describe('Card', () => {

  var card;

  beforeEach(() => {
    card = new Card;
  });


  it('Has a balance attribute, set to 0 initiallity', () => {
    expect(card.balance).toEqual(0)
  });

  describe('A card can be used to deposit money to an account', () => {
    it('A deposit increases the account balance by amount deposited', () => {
      card.deposit(100);
      expect(card.balance).toEqual(100);
    });
  });
});