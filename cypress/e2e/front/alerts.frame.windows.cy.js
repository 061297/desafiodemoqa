describe('template spec', () => {
  it('passes', () => {
    cy.iniciar();
    cy.menu('Alerts, Frame & Windows');
    cy.submenu('Browser Windows');
    cy.contains('button','New Window').click();

    cy.window().then((win) => {
    cy.stub(win, 'open').as('winOpen');
        });

    cy.get('#windowButton').click();

    cy.get('@winOpen')
        .should('have.been.calledWithMatch', /\/sample/);

    cy.visit('/sample');
    cy.contains('This is a sample page').should('be.visible');

  })
})