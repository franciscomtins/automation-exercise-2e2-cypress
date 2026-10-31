import homePage from '../../pages/home.page'
import footer from '../../pages/components/footer.component'
import { buildUser } from '../../support/factories/user.factory'

describe('Test Case 10: Verify Subscription in home page', () => {
  const { email } = buildUser()

  it('deve inscrever um e-mail pelo rodapé da página inicial', () => {
    homePage.visit()
    homePage.shouldBeVisible()

    footer.scrollIntoView()
    footer.shouldShowSubscription()
    footer.subscribe(email)

    footer.shouldShowSubscriptionSuccess()
  })
})
