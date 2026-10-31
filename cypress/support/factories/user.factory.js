import { faker } from '@faker-js/faker'

// Países disponíveis no <select> do cadastro.
const COUNTRIES = ['India', 'United States', 'Canada', 'Australia', 'Israel', 'New Zealand', 'Singapore']

/**
 * Gera um usuário válido e único a cada chamada.
 * Qualquer campo pode ser sobrescrito via `overrides`.
 */
export const buildUser = (overrides = {}) => {
  const firstName = faker.person.firstName()
  const lastName = faker.person.lastName()
  const birthDate = faker.date.birthdate({ mode: 'age', min: 18, max: 70 })

  return {
    title: faker.helpers.arrayElement(['Mr', 'Mrs']),
    name: `${firstName} ${lastName}`,
    email: `qa.${faker.string.alphanumeric(8).toLowerCase()}.${Date.now()}@example.com`,
    password: faker.internet.password({ length: 12 }),
    birthDate: {
      day: String(birthDate.getDate()),
      month: String(birthDate.getMonth() + 1),
      year: String(birthDate.getFullYear()),
    },
    firstName,
    lastName,
    company: faker.company.name(),
    address1: faker.location.streetAddress(),
    address2: faker.location.secondaryAddress(),
    country: faker.helpers.arrayElement(COUNTRIES),
    state: faker.location.state(),
    city: faker.location.city(),
    zipcode: faker.location.zipCode('#####'),
    mobileNumber: faker.string.numeric(11),
    ...overrides,
  }
}
