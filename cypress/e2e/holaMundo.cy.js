describe('Set de pruebas 1', () => {
  it('passes', () => {
    //Ingresar al sitio
    cy.visit('https://www.saucedemo.com/v1/')
    .get('#user-name')
    .type('standard_user')
    .get('#password')
    .type('secret_sauce')
    .get('#login-button').click()
    .contains('Products')

  })
})