Cypress.Commands.add("iniciar", () => {
    cy.viewport(1920, 1080);
    cy.visit("/")
    cy.get('.category-cards').contains('Forms').click();
});

Cypress.Commands.add("menu", (menu) => {
    cy.contains('.group-header', menu).click();
});

Cypress.Commands.add("submenu", (submenu) => {
    cy.get('.menu-list').contains(submenu).click();
});