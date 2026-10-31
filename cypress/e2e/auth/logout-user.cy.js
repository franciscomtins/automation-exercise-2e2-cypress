import homePage from '../../pages/home.page'
import loginPage from '../../pages/login.page'
import header from '../../pages/components/header.component'
import { buildUser } from '../../support/factories/user.factory'

describe('Test Case 4: Logout User', () => {
  const user = buildUser()

  before(() => {
    cy.apiCreateUser(user)
  })

  after(() => {
    cy.apiDeleteUser(user)
  })

  it('deve deslogar e voltar para a página de login', () => {
    homePage.visit()
    homePage.shouldBeVisible()

    cy.loginViaUi(user)
    header.logout()

    cy.location('pathname').should('eq', '/login')
    loginPage.shouldShowLoginForm()
  })
})
