/**
 * Páginas de confirmação "Account Created!" e "Account Deleted!",
 * que compartilham o mesmo layout e o botão "Continue".
 */
class AccountStatusPage {
  selectors = {
    accountCreated: '[data-qa="account-created"]',
    accountDeleted: '[data-qa="account-deleted"]',
    continueButton: '[data-qa="continue-button"]',
  }

  shouldShowAccountCreated() {
    cy.get(this.selectors.accountCreated).should('be.visible').and('have.text', 'Account Created!')
  }

  shouldShowAccountDeleted() {
    cy.get(this.selectors.accountDeleted).should('be.visible').and('have.text', 'Account Deleted!')
  }

  continue() {
    cy.get(this.selectors.continueButton).click()
  }
}

export default new AccountStatusPage()
