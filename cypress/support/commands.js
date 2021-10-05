// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('clickNewCars', () => {
    cy.get('.ctaBlock > .btn-NC').click()
}) 
Cypress.Commands.add('selectBrandMakeDropdown', (brand) => {
    cy.get('.makeDropDown > .mmyzSearchSelectedMake').click()
    cy.get('.mmyzFlyoutInner > ul > li').get('a[data-make*="' + brand + '"]').eq(0).click()
}) 
Cypress.Commands.add('findYourCar', () => {
    cy.get('.mmDropDownWrapper > .findYourCar').click()
})
Cypress.Commands.add('carModelVisible', (model) => {
    cy.get('.modelCardWrapper').should('contain', model)
})
Cypress.Commands.add('carModelNotVisible', (model) => {
    cy.get('.modelCardWrapper').should('not.contain', model)
})
Cypress.Commands.add('selectSegmentDropdown', (segment) => {
    cy.get('.makeSegmentFilterSet > .filterSegment').click()
    cy.get('.makeSegmentFilterSet > .filterSegment > .customSelect').get('a[data-segment="' + segment + '"]').click()
}) 

