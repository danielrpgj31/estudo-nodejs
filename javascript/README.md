## Função de seta (Arrow Function):

A diferença principal entre const callback = () => { } e function callback() { } está relacionada ao escopo das funções e à forma 
como elas se comportam em relação a variáveis, hoisting e a palavra-chave this.

```javascript
const callback = () => {
  // Código da função
}
```

Escopo léxico: As funções de seta têm um escopo léxico, o que significa que elas herdam o valor de this do escopo circundante, não criam seu próprio contexto this.

Não há hoisting: As funções de seta não sofrem hoisting. Elas precisam ser definidas antes de serem usadas no código.
Não pode ser usada como construtora: As funções de seta não podem ser usadas com new para criar objetos.

## Função declarativa (Function Declaration):

Escopo de função: Funções declarativas têm escopo de função e criam seu próprio contexto this.
Hoisting: Funções declarativas são içadas (hoisted), o que significa que podem ser usadas antes de serem definidas no código.
Pode ser usada como construtora: Funções declarativas podem ser usadas com new para criar objetos.

```javascript
function callback() {
  // Código da função
}
```

## Qual usar?

A escolha entre uma função de seta e uma função declarativa depende das necessidades específicas do seu código:

Use funções de seta quando desejar que a função compartilhe o escopo léxico (como ao definir callbacks em funções de ordem superior).
Use funções declarativas quando precisa de hoisting ou deseja criar objetos a partir da função (como classes ou construtores).

Lembre-se de que a escolha depende do contexto e dos requisitos do seu código, e ambas as formas têm usos adequados em diferentes situações.