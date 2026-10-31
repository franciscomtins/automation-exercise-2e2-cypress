const AD_HOSTS = /googlesyndication\.com|doubleclick\.net|googleadservices\.com|adtrafficquality\.google|fundingchoicesmessages\.google\.com/

/**
 * Bloqueia requisições de anúncios. Além de acelerar os testes, evita os
 * pop-ups "vignette" do Google que cobrem a página e interceptam cliques.
 */
Cypress.Commands.add('blockAds', () => {
  cy.intercept({ url: AD_HOSTS }, { statusCode: 204, log: false })
})
