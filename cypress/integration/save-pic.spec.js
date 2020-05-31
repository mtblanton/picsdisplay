/// <reference types="cypress" />

describe('Save Pic', () => {
  beforeEach(() => {
    cy.visit('localhost:3000')
  })

  it('Should save and unsave a picture', () => {
    cy.server()
    cy.route({
      method: 'GET',
      url: 'https://pixabay.com/api/*',
      response: 'fixture:pixabayresponse.json'
    }).as('picSearch')

    cy.contains('Search').click();
    cy.wait('@picSearch')

    cy.get(':nth-child(1) > .pic-card__pic-container > .pic-card__pic').click();
    cy.contains('#5192377').should('exist');

    cy.get(':nth-child(1) > .pic-card__pic-container > .pic-card__pic').click();
    cy.contains('#5192377').should('not.exist');
  })
})