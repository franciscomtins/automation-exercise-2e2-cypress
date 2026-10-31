import homePage from '../../pages/home.page'
import loginPage from '../../pages/login.page'
import header from '../../pages/components/header.component'
import { buildUser } from '../../support/factories/user.factory'

describe('Test Case 2: Login User with correct email and password', () => {
  const user = buildUser()

  before(() => {
    cy.apiCreateUser(user)
  })

  it('deve logar com credenciais válidas e excluir a conta', () => {
    homePage.visit()
    homePage.shouldBeVisible()

    header.goToSignupLogin()
    loginPage.shouldShowLoginForm()
    loginPage.login(user)

    header.shouldShowLoggedInAs(user.name)

    cy.deleteAccountViaUi()
  })
})
