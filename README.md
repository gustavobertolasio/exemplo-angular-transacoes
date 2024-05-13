# Transacoes

Transacoes é uma plataforma financeira que permite a transferência de dinheiro fictício entre usuários, listando tudo em histórico.

O projeto foi gerado utilizando [Angular CLI](https://github.com/angular/angular-cli) versão 17.3.6.

## Servidores 
O projeto utiliza de arquivos environment para configurar variáveis de ambiente de acordo com o ambiente a ser deployado.

### De desenvolvimento
Após dar npm install, para subir o ambiente de desenvolvimento basta rodar `npm run start:dev`.

O ambiente fica disponível em `http://localhost:4200/`.

## Testes unitários

Por enquanto os testes não foram alterados, mas o objetivo é trazer o coverage para 90%.

## Testes end-to-end

Não foi adicionado uma biblioteca de testes end-to-end, mas a biblioteca de escolha é o Cypress utilizando Cucumber.

Cypress por ser uma ferramenta que utilizei durante grande parte da minha trajetória profissional e Cucumber para, caso haja participação de algum PM fictício, os testes façam sentido e possam até ser utilizados em relatórios, etc.


## Escolha de arquitetura
A arquitetura escolhida foi feature-based, onde cada feature é alocada em seu respectivo modulo, bem como seus serviços, componentes, pipes, diretivas, stores, etc. No caso de "transferência bancária" e "listagem de transferências agendadas", entendo que são funcionalidades de um mesmo contexto: transferir dinheiro. Portanto, estão dentro do mesmo módulo.

Dentro de core, deixei apenas configurações que podem ser usadas genéricamente, como configuração de store e de icones.
Dentro de shared, deixei componentes que serão utilizados durante toda a aplicação.
