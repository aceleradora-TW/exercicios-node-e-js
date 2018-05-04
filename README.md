# Exercicios em Node e Javascript

## Começando

__1. Forme uma dupla__

__2. Faça um branch com o nome da dupla__

Para criar uma nova branch, faça o seguinte:

Clone este repositório:

```sh
git clone https://github.com/aceleradora-TW/exercicios-node-e-js.git

cd exercicios-node-e-js
```

Crie uma nova branch vazia com o nome da dupla:

```
# substitua 'fulana' e 'ciclana' por seus verdadeiros nomes
git checkout -b fulana-e-ciclana

# substitua 'fulana' e 'ciclana' por seus verdadeiros nomes
git push -u origin fulana-e-ciclana
```

Para ver se sua branch foi criada corretamente, veja se ela está [nesta
lista](https://github.com/aceleradora-TW/exercicios-node-e-js/branches/all).

__3. Instale as dependências do projeto__

Para isso, execute:

```sh
npm install
```

__4. Resolva os exercícios e commite suas mudanças normalmente__

Um exercício só está resolvido se os testes estão verdes. Para rodar os testes, execute:

```sh
npm test
```

__5. Atualizando a branch com o novo conteúdo da master__

Ao criar uma branch, você estará fazendo uma cópia da master. Se a master for atualizada com novos conteúdos, sua branch não receberá a
mesma atualização automaticamente. Ou seja, se forem adicionados novos exercícios, você não os terá na sua branch.

Caso isso aconteça, você pode atualizar sua branch com os novos conteúdos da master fazendo o seguinte:

```sh
git pull -r origin master

git push -f origin fulana-e-ciclana
```

## Exercícios

__A calculadora__

Neste exercício, a dupla deve implementar o comportamento do módulo `src/calculadora.js`, fazendo os testes `calculadora.test.js` passarem.

__Estatisticas de pessoas__

Implemente a lógica do módulo `src/estatisticas-pessoas.js`. Não esqueça que este módulo depende do módulo `pessoas.js`, por isso, não
esqueça de importá-lo.

__O acumulador__

Neste exercício, a dupla deve implementar o comportamento do módulo `src/acumulador.js`, fazendo os testes `acumulador.test.js` passarem.
(Atente que não é permitido usar `for` neste exercício)

__Logger (Depende do acumulador)__

Após implementar o acumulador, a dupla deve utilizar o módulo `src/logger.js` para colocar o resultado no log, e assim fazer os testes de
`acumulador.test.js` passar.

__Letras__

Escreva testes para o módulo `src/letras.js`. O módulo contém uma descrição à respeito de seu funcionamento. Esta descrição pode servir como
base para a criação de casos de testes.

__Observação:__ Este módulo possui um bug. __Ele não filtra palavras com acento corretamente.__

Depois de escrever os primeiros casos de teste, corrija o bug do módulo usando TDD (escreva os testes primeiro, depois modifique o código do
módulo)
