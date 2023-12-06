describe('Navigation', () => {
  describe('Static pages', () => {
    it('should take screenshot of the homepage', () => {
      cy.visit('/');

      // Wait until the page is displayed
      cy.findByRole('heading', {
        name: 'Boilerplate code for your Nextjs project with Tailwind CSS',
      });

      cy.percySnapshot('Homepage');
    });
  });
});
