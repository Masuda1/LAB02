---

# Sistema de Gerenciamento de Funcionários

## Descrição

Este projeto é uma aplicação desenvolvida em TypeScript para gerenciar os funcionários de uma empresa. Entre as principais funcionalidades estão:

- Cadastro de funcionários.
- Atualização de salários.
- Consulta de informações de funcionários.

## Funcionalidades


- **Cadastro de Funcionários**: Permite incluir novos funcionários no sistema.
- **Atualização de Salários**: Possibilita alterar o salário de um funcionário específico.
- **Consulta de Funcionários**: Busca informações detalhadas de um funcionário a partir de sua matrícula.

## Estrutura do Projeto

- **`Funcionario.ts`**: Define a classe `Funcionario`, responsável por representar os dados de cada funcionário, como matrícula, nome, cargo e salário.
- **`Empresa.ts`**: Gerencia a lista de funcionários e oferece métodos para cadastro, atualização de salários e consulta. Inclui validações para tratar erros, como tentativas de acesso a funcionários inexistentes.
- **`main.ts`**: Contém a função de teste `testarEmpresa`, que demonstra o funcionamento do sistema, incluindo operações de cadastro, consulta e atualização.

## Explicação do Código

### Classe `Funcionario`

Representa as propriedades e características de um funcionário:

- **Propriedades**:
  - `matricula`: Identificador único do funcionário.
  - `nome`: Nome completo do funcionário.
  - `cargo`: Posição ocupada pelo funcionário na empresa.
  - `salario`: Salário atual do funcionário.

- **Construtor**: Inicializa todas as propriedades de um funcionário ao criar uma nova instância.

### Classe `Empresa`

Gerencia a base de dados de funcionários e suas operações principais:

- **Cadastro**: Adiciona novos funcionários à lista.
- **Atualização de Salários**: Altera o salário de um funcionário com base na matrícula.
- **Consulta**: Recupera as informações de um funcionário específico.

- **Tratamento de Erros**:
  - Notifica quando um funcionário não é encontrado durante operações de consulta ou atualização.

### Funções de Teste

A função `testarEmpresa` ilustra o fluxo de uso do sistema:

1. Criação de funcionários.
2. Adição de funcionários ao cadastro.
3. Consulta de informações de um funcionário.
4. Atualização de salários.
5. Exibição de mensagens de erro ao tentar acessar funcionários inexistentes.

## Como Executar

### Pré-requisitos

- **Node.js**: Certifique-se de que está instalado em sua máquina.
- **TypeScript**: Instale globalmente caso ainda não esteja disponível:

  ```bash
  npm install -g typescript
  ```

### Etapas

1. **Compilar os Arquivos TypeScript**:

   Navegue até a pasta `src` no terminal e compile os arquivos com:

   ```bash
   tsc
   ```

   Os arquivos JavaScript correspondentes serão gerados na pasta `dist`.

2. **Executar o Script Principal**:

   Navegue até a pasta `dist` e execute o arquivo `main.js` com o comando:

   ```bash
   node main.js
   ```

## Testes Realizados

Foram realizados os seguintes testes no sistema:

- **Cadastro de Funcionários**: Inclusão de novos funcionários.
- **Atualização de Salários**: Alteração do salário de um funcionário existente.
- **Consulta de Funcionários**: Busca de informações utilizando a matrícula.
- **Tratamento de Erros**: Verificação de mensagens ao acessar funcionários inexistentes.

## Tratamento de Erros

O sistema realiza validações para garantir que operações inválidas sejam evitadas. Por exemplo:

- **Funcionários Inexistentes**: Ao tentar consultar ou atualizar informações de um funcionário que não está cadastrado, o sistema exibe uma mensagem informando que ele não foi encontrado.

--- 