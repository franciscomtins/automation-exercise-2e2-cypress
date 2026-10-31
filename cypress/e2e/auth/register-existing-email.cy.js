import homePage from '../../pages/home.page'
import loginPage from '../../pages/login.page'
import header from '../../pages/components/header.component'
import { buildUser } from '../../support/factories/user.factory'

describe('Test Case 5: Register User with existing email', () => {
  const existingUser = buildUser()

  before(() => {
    cy.apiCreateUser(existingUser)
  })

  after(() => {
    cy.apiDeleteUser(existingUser)
  })

  it('deve impedir o cadastro com e-mail já existente', () => {
    homePage.visit()
    homePage.shouldBeVisible()

    header.goToSignupLogin()
    loginPage.shouldShowSignupForm()
    loginPage.startSignup(existingUser)

    loginPage.shouldShowEmailAlreadyExistsError()
  })
})
