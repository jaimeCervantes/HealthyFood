describe(`Given an unsigned user visit the app`, () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it(`When this user wants to publish a healthy food
      Then a sign up screen should be shown
  `, () => {
    cy.get('[data-testid="publish-new"]').click();

    cy.get('[data-testid="publish-new-form"]').should('be.visible');
  });
});