describe('template spec', () => {
    it('passes', () => {
        const firstName = "Gabriel";
        const lastName = "Silva";
        const email = "gabriel.silva@teste.com.br";
        const age = "28";
        const salary = "10000";
        const department = "QA Automation";
        const editedFirstName = "Gabriel Silva Edit";

        cy.iniciar();
        cy.menu('Elements');
        cy.submenu('Web Tables');
        cy.contains('button', 'Add').click();

        cy.get("#firstName").type(firstName);
        cy.get("#lastName").type(lastName);
        cy.get("#userEmail").type(email);
        cy.get("#age").type(age);
        cy.get("#salary").type(salary);
        cy.get("#department").type(department);
        cy.contains('button', 'Submit').click();

        cy.contains('.rt-td', firstName).should('exist');

        cy.contains('.rt-td', firstName)
            .parents('.rt-tr-group')
            .find("[title='Edit'] > svg")
            .click();

        cy.get('#firstName').clear().type(editedFirstName);
        cy.contains('button', 'Submit').click();
        cy.contains('.rt-td', editedFirstName).should('exist');


        cy.contains('.rt-td', editedFirstName)
            .parents('.rt-tr-group')
            .find("[title='Delete'] > svg")
            .click();

        cy.contains('.rt-td', editedFirstName).should('not.exist');
    });
});