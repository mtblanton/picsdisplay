/// <reference types="cypress" />

describe('Search', () => {
  beforeEach(() => {
    cy.visit('localhost:3000');
  })

  it('Should search with keyword and category', () => {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'https://pixabay.com/api/*',
      response: 'fixture:pixabayresponse.json'
    }).as('picSearch');

    cy.contains('Search').click();
    cy.wait('@picSearch');

    cy.get('.main__results').scrollTo('bottom');
    cy.wait('@picSearch');
  })
});