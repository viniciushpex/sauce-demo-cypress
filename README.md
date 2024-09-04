# CYPRESS-SAUCE-TEST
## Introdução
O projeto de testes é executado na ferramenta Sauce Demo, uma simulação de e-commerce que tem como principais cenários de teste o login, adição dos produtos ao carrinho, e finalização da compra.
<br>
Para o projeto, foi utilizado o framework de automação Cypress, em JavaScript.

## Pré-Requisitos:
- Node.js
- npm
- git
- yarn

## Como rodar os testes?

Tendo todos os pré-requisitos adicionados, basta executar o comando "yarn cypress open" no terminal para que o Cypress mostre as suites disponíveis para execução.<br><br>
Para testes regressivos, é recomendado utilizar o comando "yarn cypress run", que executará os cenários em segundo plano, trazendo um relatório completo da execução, com vídeos e screenshots. (Para rodar os testes em um navegador específico, modificar esse comando para "yarn cypress run --browser (nomedonavegador)", por exemplo: "yarn cypress run --browser chrome")


