import 'cypress-mochawesome-reporter/register'
import './commands'

// Scripts de terceiros (anúncios, analytics) do site lançam erros que não
// pertencem à aplicação em teste e não devem quebrar a execução.
Cypress.on('uncaught:exception', () => false)

beforeEach(() => {
  cy.blockAds()
})
