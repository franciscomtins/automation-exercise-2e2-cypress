/**
 * Página /signup: formulário "Enter Account Information".
 */
class SignupPage {
  selectors = {
    form: '.login-form',
    title: (title) => `input[name="title"][value="${title}"]`,
    password: '[data-qa="password"]',
    birthDay: '[data-qa="days"]',
    birthMonth: '[data-qa="months"]',
    birthYear: '[data-qa="years"]',
    newsletter: '#newsletter',
    specialOffers: '#optin',
    firstName: '[data-qa="first_name"]',
    lastName: '[data-qa="last_name"]',
    company: '[data-qa="company"]',
    address1: '[data-qa="address"]',
    address2: '[data-qa="address2"]',
    country: '[data-qa="country"]',
    state: '[data-qa="state"]',
    city: '[data-qa="city"]',
    zipcode: '[data-qa="zipcode"]',
    mobileNumber: '[data-qa="mobile_number"]',
    createAccountButton: '[data-qa="create-account"]',
  }

  shouldShowAccountInformationForm() {
    cy.contains(`${this.selectors.form} h2`, 'Enter Account Information').should('be.visible')
  }

  fillAccountInformation(user) {
    cy.get(this.selectors.title(user.title)).check()
    cy.get(this.selectors.password).type(user.password, { log: false })
    cy.get(this.selectors.birthDay).select(user.birthDate.day)
    cy.get(this.selectors.birthMonth).select(user.birthDate.month)
    cy.get(this.selectors.birthYear).select(user.birthDate.year)
  }

  subscribeToNewsletterAndOffers() {
    cy.get(this.selectors.newsletter).check()
    cy.get(this.selectors.specialOffers).check()
  }

  fillAddressInformation(user) {
    cy.get(this.selectors.firstName).type(user.firstName)
    cy.get(this.selectors.lastName).type(user.lastName)
    cy.get(this.selectors.company).type(user.company)
    cy.get(this.selectors.address1).type(user.address1)
    cy.get(this.selectors.address2).type(user.address2)
    cy.get(this.selectors.country).select(user.country)
    cy.get(this.selectors.state).type(user.state)
    cy.get(this.selectors.city).type(user.city)
    cy.get(this.selectors.zipcode).type(user.zipcode)
    cy.get(this.selectors.mobileNumber).type(user.mobileNumber)
  }

  submit() {
    cy.get(this.selectors.createAccountButton).click()
  }
}

export default new SignupPage()
