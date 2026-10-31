import { faker } from '@faker-js/faker'
import homePage from '../../pages/home.page'
import { buildUser } from '../../support/factories/user.factory'
import { buildCard } from '../../support/factories/payment.factory'
import { cartProducts } from '../../fixtures/products.json'

describe('Test Case 15: Place Order: Register before Checkout', () => {
  it('deve cadastrar um usuário, finalizar a compra e excluir a conta', () => {
    // Gerado dentro do teste para que um retry não tente recadastrar o mesmo e-mail.
    const user = buildUser()
    const card = buildCard({ nameOnCard: user.name })
    const comment = faker.lorem.sentence()

    homePage.visit()
    homePage.shouldBeVisible()

    cy.registerViaUi(user)
    cy.placeOrderViaUi({ user, products: cartProducts, card, comment })

    cy.deleteAccountViaUi()
  })
})
