import { faker } from '@faker-js/faker'

/**
 * Gera um cartão de crédito fictício com validade futura.
 */
export const buildCard = (overrides = {}) => {
  const expiry = faker.date.future({ years: 5 })

  return {
    nameOnCard: faker.person.fullName(),
    number: faker.finance.creditCardNumber({ issuer: '4###############' }),
    cvc: faker.finance.creditCardCVV(),
    expiryMonth: String(expiry.getMonth() + 1).padStart(2, '0'),
    expiryYear: String(expiry.getFullYear()),
    ...overrides,
  }
}
