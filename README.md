[![Build Status](https://travis-ci.com/taran314/bankTechTest.svg?branch=main)](https://travis-ci.com/taran314/bankTechTest)
<br />
# Bank tech test

Today, you'll practice doing a tech test.

For most tech tests, you'll essentially have unlimited time.  This practice session is about producing the best code you can when there is a minimal time pressure.

You'll get to practice your OO design and TDD skills.

You'll work alone, and you'll also review your own code so you can practice reflecting on and improving your own work.

## Specification

### Requirements

* You should be able to interact with your code via a REPL like IRB or the JavaScript console.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```
## Instructions
- Clone the repo
- Run `npm i` to install dependencies
- Run `npm test` to run unit and feature tests
- To check coverage open index.html in coverage directory (100%)

## Dependencies
- Jasmine for unit testing
- ESlint for linting
- Karma for running tests
- Istanbul for coverage
- Travis for CI

## Implementation

- Deposits and withdrawals both act on balance -> closely linked
- Account statement acts upon transaction data: (date, amount, balance)

Two classes: 
- Bank: customers stores Cards and generateStatement
- Card: balance, deposit, withdraw and stores transactions 

Could have added a third for creating transactions and generating statements.

After first code review
--------
- SRP concerns have been addressed by creating a statementFormatter class and using forwarding.
- Classes now have the following responsibilities:
  - Bank: Allows user to interact (make deposits, withdrawals and print their statement) by forwarding to Transaction and StatementFormatter.
  - Transaction: Handles logic for transactions (deposit or withdrawals), storing data in StatementFormatter.
  - StatementFormatter: Format's a users' statement using transactionHistory.
- Used logic to calculate a user's balance, rather than duplicating information by storing balance as an instance variable
- User now only interacts with Bank class.
- Feature test is working but could not find a way to test on stdout (so returning as a string also)
- Allowed for a negative balance, as specification does not explicitly rule this out

## Rough user stories
- Card starts with balance 0
- User can deposit money to card
- User can only withdraw an amount < than current balance, otherwise throws an error
- After a successful deposit or withdrawal, card stores transaction history (date, deb or cred/ balance after)
- Bank class creates and stores instances of card class
- Bank generates a user's statement using their instance of card
- Statement is generated in reverse chronological order.

Extras:
- NewCustomer method could set customer name, account number (unique), pin and initial balance
- Authentication for a user to access their card and statement using a pin (and account number)
- UI on command line or web or mobile.
