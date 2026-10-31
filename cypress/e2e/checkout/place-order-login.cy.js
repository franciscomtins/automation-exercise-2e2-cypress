import { faker } from '@faker-js/faker'
import homePage from '../../pages/home.page'
import { buildUser } from '../../support/factories/user.factory'
import { buildCard } from '../../support/factories/payment.factory'
import { cartProducts } from '../../fixtures/products.json'

describe('Test Case 16: Place Order: Login before Checkout', () => {
  const user = buildUser()
  const card = buildCard({ nameOnCard: user.name })
  const comment = faker.lorem.sentence()

  before(() => {
    cy.apiCreateUser(user)
  })

  it('deve logar, finalizar a compra e excluir a conta', () => {
    homePage.visit()
    homePage.shouldBeVisible()

    cy.loginViaUi(user)
    cy.placeOrderViaUi({ user, products: cartProducts, card, comment })

    cy.deleteAccountViaUi()
  })
})
