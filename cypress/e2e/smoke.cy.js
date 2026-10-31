import homePage from '../pages/home.page'
import { buildUser } from '../support/factories/user.factory'

describe('Smoke', () => {
  it('deve carregar a página inicial', () => {
    homePage.visit()
    homePage.shouldBeVisible()
  })

  it('deve criar e remover um usuário pela API', () => {
    const user = buildUser()

    cy.apiCreateUser(user)
    cy.apiDeleteUser(user)
  })
})
