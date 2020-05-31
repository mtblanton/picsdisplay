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

    cy.get('input[name=keyword]').type('search');
    cy.get('select[name=category]').select('fashion');

    cy.contains('Search').click();
    cy.wait('@picSearch').its('url').should('include', '&q=search&category=fashion');

  })
});