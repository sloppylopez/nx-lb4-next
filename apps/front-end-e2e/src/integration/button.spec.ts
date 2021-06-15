describe('shared-ui', () => {
  beforeEach(() =>
    cy.visit(
      'http://localhost:4400/?path=/story/common-button--default-button'
    )
  );

  it('should render the component', () => {
    cy.get('button').should('exist');
  });
});
