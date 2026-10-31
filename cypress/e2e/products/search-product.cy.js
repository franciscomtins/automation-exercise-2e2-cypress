import homePage from '../../pages/home.page'
import productsPage from '../../pages/products.page'
import header from '../../pages/components/header.component'
import { searchTerms } from '../../fixtures/products.json'

describe('Test Case 9: Search Product', () => {
  searchTerms.forEach((term) => {
    it(`deve exibir apenas produtos relacionados à busca "${term}"`, () => {
      homePage.visit()
      homePage.shouldBeVisible()

      header.goToProducts()
      productsPage.shouldShowAllProducts()

      productsPage.search(term)
      productsPage.shouldShowSearchResultsFor(term)
    })
  })
})
