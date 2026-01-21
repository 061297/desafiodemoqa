import { buildStudent } from '../../support/studentFactory';

describe('template spec', () => {
  it('passes', () => {
    const s = buildStudent();
    
    cy.iniciar();
    cy.get('.menu-list').contains('Practice Form').click();
    cy.get('#firstName').type(s.firstName);
    cy.get('#lastName').type(s.lastName);
    cy.get('#userEmail').type(s.email);
    cy.contains('label', s.gender).click();
    cy.get('#userNumber').type(s.phone);
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__year-select').select(s.birth.year);
    cy.get('.react-datepicker__month-select').select(s.birth.month);
    cy.contains('.react-datepicker__day', s.birth.day).click();
    cy.get('#subjectsInput').type(`${s.subject}{enter}`);
    cy.contains('label', s.hobby).click();
    cy.get('#uploadPicture').selectFile("cypress/fixtures/forms.txt");
    cy.get('#currentAddress').type(s.address);
    cy.get('#state').click();
    cy.contains('div', s.state).click({ force: true });
    cy.get('#city').click();
    cy.contains('div', s.city).click({ force: true });
    cy.get('#submit').click();
    cy.get('.modal-content').should('be.visible');
    cy.get('button').contains('Close').click({ force: true });
  })
})