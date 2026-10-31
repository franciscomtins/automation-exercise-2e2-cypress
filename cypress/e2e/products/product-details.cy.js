import homePage from '../../pages/home.page'
import productsPage from '../../pages/products.page'
import productDetailsPage from '../../pages/product-details.page'
import header from '../../pages/components/header.component'

describe('Test Case 8: Verify All Products and product detail page', () => {
  it('deve listar os produtos e exibir os detalhes do primeiro', () => {
    homePage.visit()
    homePage.shouldBeVisible()

    header.goToProducts()
    productsPage.shouldShowAllProducts()

    productsPage.viewFirstProduct()
    productDetailsPage.shouldBeVisible()
    productDetailsPage.shouldShowProductDetails()
  })
})
