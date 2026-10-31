import header from '../../pages/components/header.component'
import productsPage from '../../pages/products.page'
import cartPage from '../../pages/cart.page'
import checkoutPage from '../../pages/checkout.page'
import paymentPage from '../../pages/payment.page'

/**
 * Fluxo completo de compra para um usuário já logado: adiciona os produtos,
 * revisa o carrinho e o checkout, paga e valida a confirmação do pedido.
 */
Cypress.Commands.add('placeOrderViaUi', ({ user, products, card, comment }) => {
  header.goToProducts()
  productsPage.addProductsToCart(products)

  header.goToCart()
  cartPage.shouldBeVisible()
  cartPage.shouldContainProducts(products)
  cartPage.proceedToCheckout()

  checkoutPage.shouldBeVisible()
  checkoutPage.shouldShowUserAddress(user)
  checkoutPage.shouldReviewProducts(products)
  checkoutPage.placeOrder(comment)

  paymentPage.payWith(card)
  paymentPage.shouldShowOrderConfirmed()
})
