describe('template spec', () => {
  it('passes', () => {
    cy.iniciar();
    cy.menu('Interactions');
    cy.submenu('Sortable');

cy.contains('.nav-link', 'List').click();

// tabpane LIST visível
cy.get('#demo-tabpane-list').should('be.visible');

// agora escopa tudo dentro dele
cy.get('#demo-tabpane-list')
  .contains('.list-group-item', 'Six')
  .drag('#demo-tabpane-list .list-group-item:nth-child(1)', { force: true });

// Valida a ordem (exemplo)
cy.get('#demo-tabpane-list .list-group-item')
  .then($els => [...$els].map(el => el.innerText.trim()))
  .should('deep.eq', ['Six','One','Two','Three','Four','Five']);

    })
})