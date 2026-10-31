import homePage from '../../pages/home.page'
import loginPage from '../../pages/login.page'
import header from '../../pages/components/header.component'
import { buildUser } from '../../support/factories/user.factory'

describe('Test Case 3: Login User with incorrect email and password', () => {
  // Usuário gerado mas nunca cadastrado: as credenciais não existem no sistema.
  const unregisteredUser = buildUser()

  it('deve exibir erro ao logar com credenciais inválidas', () => {
    homePage.visit()
    homePage.shouldBeVisible()

    header.goToSignupLogin()
    loginPage.shouldShowLoginForm()
    loginPage.login(unregisteredUser)

    loginPage.shouldShowLoginError()
  })
})
