describe('template spec', () => {
  it('passes', () => {
    cy.iniciar();
    cy.menu('Interactions');
    cy.submenu('Sortable');

    cy.contains('.nav-link', 'List').click();
    cy.get('#demo-tabpane-list').should('be.visible');

    cy.get('#demo-tabpane-list').contains('.list-group-item', 'One').then(($one) => {
      cy.get('#demo-tabpane-list')
        .contains('.list-group-item', 'Six')
        .drag($one, { force: true });
    });
  });
});