import { faker } from "@faker-js/faker";

describe('template spec', () => {
    const password = "Teste@123";
    const username = faker.internet.username();
    it('passes', () => {
        let userId, token, isbn1, isbn2;

        cy.request("POST", "/Account/v1/User", {
            userName: username,
            password,
        }).then((response) => {
            expect(response.status).to.eq(201);
            userId = response.body.userID;
        });

        cy.request("POST", "/Account/v1/GenerateToken", {
            userName: username,
            password,
        }).then((response) => {
            expect(response.status).to.eq(200);
            token = response.body.token;
        });

        cy.request("POST", "/Account/v1/Authorized", {
            userName: username,
            password,
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.eq(true);
        });

        cy.request("GET", "/BookStore/v1/Books").then((response) => {
            expect(response.status).to.eq(200);
            isbn1 = response.body.books[0].isbn;
            isbn2 = response.body.books[1].isbn;
        });

        cy.then(() =>
            cy.request({
                method: "POST",
                url: "/BookStore/v1/Books",
                headers: { Authorization: `Bearer ${token}` },
                body: { userId, collectionOfIsbns: [{ isbn: isbn1 }, { isbn: isbn2 }] },
            })
        ).then((response) => expect([200, 201]).to.include(response.status));

        cy.then(() =>
            cy.request({
                method: "GET",
                url: `/Account/v1/User/${userId}`,
                headers: { Authorization: `Bearer ${token}` },
            })
        ).then((response) => {
            expect(response.status).to.eq(200);
            const isbns = response.body.books.map((book) => book.isbn);
            expect(isbns).to.include(isbn1);
            expect(isbns).to.include(isbn2);
        });
    });
});