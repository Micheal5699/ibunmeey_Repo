import {login} from "../fixtures/selectors.js";


describe("Given I am on the orders page", function () {
    beforeEach(function () {
        cy.visit('/')


    });


    it("LOGIN - I Should be able to sign in my account with valid", function () {
        cy.get(login.accountBtn).click()
        cy.get(login.signIn).click()
        cy.get(login.emailField).type("idowuoluwabunmeey@gmail.com")
      
    });


    it("LOGIN - I Should be able to sign in my account with valid", function () {
        cy.get(login.accountBtn).click()
        cy.get(login.signIn).click()
        cy.get(login.emailField).type("idowuoluwabunmeey@gmail.com")
      
    })




})
