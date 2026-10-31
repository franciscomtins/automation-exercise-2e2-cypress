import homePage from '../../pages/home.page'
import loginPage from '../../pages/login.page'
import signupPage from '../../pages/signup.page'
import accountStatusPage from '../../pages/account-status.page'
import header from '../../pages/components/header.component'
import { buildUser } from '../../support/factories/user.factory'

describe('Test Case 1: Register User', () => {
  it('deve cadastrar um novo usuário e excluir a conta', () => {
    // Gerado dentro do teste para que um retry não tente recadastrar o mesmo e-mail.
    const user = buildUser()

    homePage.visit()
    homePage.shouldBeVisible()

    header.goToSignupLogin()
    loginPage.shouldShowSignupForm()
    loginPage.startSignup(user)

    signupPage.shouldShowAccountInformationForm()
    signupPage.fillAccountInformation(user)
    signupPage.subscribeToNewsletterAndOffers()
    signupPage.fillAddressInformation(user)
    signupPage.submit()

    accountStatusPage.shouldShowAccountCreated()
    accountStatusPage.continue()
    header.shouldShowLoggedInAs(user.name)

    cy.deleteAccountViaUi()
  })
})
