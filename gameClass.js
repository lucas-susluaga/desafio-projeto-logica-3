/*
**O Que deve ser utilizado**
- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos

## Objetivo:
Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:
- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:
- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída
Ao final deve se exibir uma mensagem:
- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada
*/


// A versão do código abaixo cumpre o desafio, mas está pouco legível. Ficará comentada para testes.
// Abaixo da linha 84 estará uma versão do código mais otimizada.
/*
class hero {
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }

    attack(){

        if (this.type === "Guerreiro" || this.type === "guerreiro"
            || this.type === "Guerreira" || this.type === "guerreira"
            ){
            let weapon = "uma espada"
            this.type === "Guerreira" ? console.log("A " + this.type + " atacou usando " + weapon) : 
                          console.log("O " + this.type + " atacou usando " + weapon)

        } else if (this.type === "Mago" || this.type === "mago"
                 || this.type === "Maga" || this.type === "maga"
                    ){
            let weapon = "magia"
            console.log("O " + this.type + " atacou usando " + weapon)
        } else if (this.type === "Monge" || this.type === "monge"
            || this.type === "Monja" || this.type === "monja"
        ){
            let weapon = "artes marciais"
            this.type === "Monja" ? console.log("A " + this.type + " atacou usando " + weapon) : 
            this.type === "Maga" ? console.log("A " + this.type + " atacou usando " + weapon) :
                          console.log("O " + this.type + " atacou usando " + weapon)

        } else if (this.type === "Ninja" || this.type === "ninja"){
            let weapon = "um shuriken"
            console.log("O " + this.type + " atacou usando " + weapon)

        } else {
            console.log(`O tipo de heroi -> ${this.type} <- está incorreto`)
        }
    }
}
let primeiroHeroi = new hero ("Lucas", 27, "Guerreiro")
let segundoHeroi = new hero ("Manuela", 26, "Maga")
let terceiroHeroi = new hero ("Elisa", 2, "Monja")
let quartoHeroi = new hero ("Alvinho", 58, "Ninja")
let quintoHeroi = new hero ("Bela", 58, "Elfo")

primeiroHeroi.attack()
segundoHeroi.attack()
terceiroHeroi.attack()
quartoHeroi.attack()
quintoHeroi.attack()
*/


//Nessa versão da class fica mais fácil adicionar novas classes de herói além de validar o gênero da classe
//para a impressão da mensagem
class hero {
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type.toLowerCase()
    }

    static heroClass = {
        guerreiro: { type: "guerreiro", weapon: "uma espada", gender: "O" },
        guerreira: { type: "guerreira", weapon: "uma espada", gender: "A" },
        mago: { type: "mago", weapon: "magia", gender: "O"},
        maga: { type: "maga", weapon: "magia", gender: "A"},
        monja: {type: "monja", weapon: "artes marciais", gender: "A"},
        monje: {type: "monje", weapon: "artes marciais", gender: "O"},
        ninja: {type: "ninja", weapon: "shuriken", gender: "O"}
    }

    attack(){
        let heroType = hero.heroClass[this.type]

        if (this.type in hero.heroClass){
            console.log(`${heroType.gender} ${this.type} atacou unsando ${heroType.weapon}`)
           
        } else {
            console.log(`O tipo de herói -> ${this.type} <- está incorreto`)
        }
    }       
}
let primeiroHeroi = new hero ("Lucas", 27, "Guerreiro")
let segundoHeroi = new hero ("Manuela", 26, "Maga")
let terceiroHeroi = new hero ("Elisa", 2, "Monja")
let quartoHeroi = new hero ("Alvinho", 58, "Ninja")
let quintoHeroi = new hero ("Bela", 58, "Elfo")

primeiroHeroi.attack()
segundoHeroi.attack()
terceiroHeroi.attack()
quartoHeroi.attack()
quintoHeroi.attack()