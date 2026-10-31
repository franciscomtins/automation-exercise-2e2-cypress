/**
 * App Actions: preparam e limpam a massa de dados direto pela API pública do
 * site, sem passar pela interface. Assim cada teste exercita via UI apenas o
 * fluxo que ele realmente valida.
 *
 * A API responde sempre HTTP 200 e informa o resultado em `responseCode`
 * no corpo (que pode chegar como texto), por isso a validação é feita nele.
 */
const parseBody = (body) => (typeof body === 'string' ? JSON.parse(body) : body)

const apiRequest = (method, endpoint, form) =>
  cy
    .request({
      method,
      url: `/api/${endpoint}`,
      form: true,
      body: form,
    })
    .then(({ body }) => parseBody(body))

Cypress.Commands.add('apiCreateUser', (user) => {
  apiRequest('POST', 'createAccount', {
    name: user.name,
    email: user.email,
    password: user.password,
    title: user.title,
    birth_date: user.birthDate.day,
    birth_month: user.birthDate.month,
    birth_year: user.birthDate.year,
    firstname: user.firstName,
    lastname: user.lastName,
    company: user.company,
    address1: user.address1,
    address2: user.address2,
    country: user.country,
    zipcode: user.zipcode,
    state: user.state,
    city: user.city,
    mobile_number: user.mobileNumber,
  }).its('responseCode').should('eq', 201)
})

Cypress.Commands.add('apiDeleteUser', ({ email, password }) => {
  apiRequest('DELETE', 'deleteAccount', { email, password })
})
