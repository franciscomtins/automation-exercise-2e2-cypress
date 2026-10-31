# Automation Exercise — Testes E2E com Cypress

Automação de testes end-to-end do site [Automation Exercise](https://www.automationexercise.com/), desenvolvida como trabalho de conclusão da disciplina de Automação de Testes de Software.

## Tecnologias

- [Cypress](https://www.cypress.io/) — framework de testes E2E
- [@faker-js/faker](https://fakerjs.dev/) — geração de massa de dados
- [cypress-mochawesome-reporter](https://github.com/LironEr/cypress-mochawesome-reporter) — relatório HTML
- GitHub Actions — integração contínua

## Estrutura do projeto

```
cypress/
├── e2e/                    # Especificações de teste, agrupadas por funcionalidade
├── fixtures/               # Dados estáticos
├── pages/                  # Page Objects
│   └── components/         # Componentes compartilhados (header, footer)
└── support/
    ├── commands/           # Comandos customizados (App Actions via API e fluxos de UI)
    ├── factories/          # Fábricas de dados com Faker
    └── e2e.js              # Configuração global dos testes
```

## Padrões adotados

- **Page Objects**: seletores e interações de cada página ficam isolados em `cypress/pages`; os testes descrevem apenas o comportamento.
- **App Actions**: pré-condições e limpeza de dados (criar/excluir usuário) são feitas pela API pública do site, deixando a UI apenas para o fluxo validado.
- **Comandos customizados**: fluxos reutilizados entre testes (ex.: login, exclusão de conta) viram comandos `cy.*`.
- **Factories**: cada execução gera dados novos com Faker, evitando conflito entre testes.
- **Seletores**: prioridade para atributos `data-qa`, seguidos de `id` e atributos semânticos (`href`, `name`). Nada de seletores baseados em posição ou estilo.

## Casos de teste

Casos da página [Test Cases](https://www.automationexercise.com/test_cases):

| #  | Caso de teste                                   | Spec                                                  |
|----|-------------------------------------------------|-------------------------------------------------------|
| 1  | Register User                                   | `cypress/e2e/auth/register-user.cy.js`                |
| 2  | Login User with correct email and password      | `cypress/e2e/auth/login-valid-credentials.cy.js`      |
| 3  | Login User with incorrect email and password    | `cypress/e2e/auth/login-invalid-credentials.cy.js`    |
| 4  | Logout User                                     | `cypress/e2e/auth/logout-user.cy.js`                  |
| 5  | Register User with existing email               | `cypress/e2e/auth/register-existing-email.cy.js`      |
| 8  | Verify All Products and product detail page     | `cypress/e2e/products/product-details.cy.js`          |
| 9  | Search Product                                  | `cypress/e2e/products/search-product.cy.js`           |
| 10 | Verify Subscription in home page                | `cypress/e2e/home/subscription.cy.js`                 |
| 15 | Place Order: Register before Checkout           | `cypress/e2e/checkout/place-order-register.cy.js`     |
| 16 | Place Order: Login before Checkout              | `cypress/e2e/checkout/place-order-login.cy.js`        |

## Como executar

Pré-requisito: Node.js 20 ou superior.

```bash
npm install

# modo interativo
npm run cy:open

# modo headless (gera o relatório)
npm test
```

## Relatório

Após a execução, o relatório Mochawesome fica em `cypress/reports/html/index.html`.

No GitHub Actions o relatório fica disponível de duas formas:

- **Artefato** `mochawesome-report` em cada execução do workflow (aba *Actions*), inclusive nos Pull Requests.
- **Branch `gh-pages`** do repositório, atualizada a cada execução na `main`.

## Integração contínua

O workflow [`.github/workflows/e2e.yml`](.github/workflows/e2e.yml) executa a suíte no Chrome em todo push na `main`, em todo Pull Request e também manualmente (*workflow_dispatch*).
