# Projeto Zoo Functions! :monkey:
Projeto desenvolvido por mim durante o curso de Desenvolvimento Web na Trybe. Divulgado aqui como portfólio de aprendizado.

<details>
<summary><strong>Objetivos do projeto:</strong></summary>

  * Desenvolver funções que buscam informações sobre os animais. Além disso, buscar dados sobre as pessoas que colaboram com a manutenção do zoológico.
  * Complementar as funções criadas dentro da pasta `src` e deverá criar testes para as funções já prontas `handlerElephants` e `getOpeningHours`.
  * Verificar se eu era capaz de desenvolver usando:
    * ES6.
    * Higher Order Functions.
    * Testes.
</details>
<details>
<summary><strong> Requisitos do projeto:</strong></summary>

  * Implementar a função getSpeciesByIds.
  * Implementar a função getAnimalsOlderThan.
  * Implementar a função getEmployeeByName.
  * Implementar a função getRelatedEmployees.
  * Implementar a função countAnimals.
  * Obter ao menos 80% de cobertura de testes na função handlerElephants.
  * Obter ao menos 90% de cobertura de testes na função handlerElephants.
  * Implementar a função calculateEntry.
  * Implementar a função getSchedule.
  * Implementar a função getOldestFromFirstSpecies.
  * Implementar a função getEmployeesCoverage.
  * Obter ao menos 85% de cobertura de testes na função getOpeningHours.
  * Obter ao menos 95% de cobertura de testes na função getOpeningHours.
  * Implementar a função getAnimalMap.
  * Requisitos Bônus:
    * Obter 100% de cobertura de testes na função handlerElephants.
    * Obter ao menos 100% de cobertura de testes na função getOpeningHours.
</details>
  
## Rodando o projeto localmente

Para rodar o projeto em sua máquina, abra seu terminal, crie um diretório no local de sua preferência com o comando `mkdir` e acesse o diretório criado com o comando `cd`:

```bash
mkdir meu-diretorio &&
cd meu-diretorio
```

Clone o projeto com o comando `git clone`:

```bash
git clone git@github.com:marcosadrianoti/tb-zoo-functions.git
```

Acesse o diretório do projeto com o comando `cd`:

```bash
cd tb-zoo-functions
```

Instale as dependências executando:

```bash
npm install
```

Os arquivos de teste estão no diretório `test`. Utilize os seguintes comandos:
 * `npm test` (executa todos os testes presentes na aplicação)
 * `npm test caminho/para/arquivo` (executa apenas os testes presentes no arquivo especificado)
    
```bash
npm test test/getOpeningHours.test.js
```
