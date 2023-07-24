it('Create a user', () => {
    let body = {
        "id": 1,
        "username": Cypress.env,
        "firstName": "as",
        "lastName": "123",
        "email": "123",
        "password": "12345",
        "phone": "1231413",
        "userStatus": 0
    }
    console.log(body)
    cy.request('POST', '/user', body).as('createUser');
    // adds new Todo item by defining Todo name
    cy.get('@createUser').then(createUser => {
        expect(createUser.status).to.eq(200);
    });
});