/*
Quando clicar no pokemon da listagem temos que fechar o cartao do pokemon aberto e abrir o cartao correspondente ao que foi selecionado na listagem

pra isso vamos precisar trabalhar com dois elemtnos 
1 - listagem
2 - cartao do pokemon

precisamos criar 2 variaveis no JS pra trabalhar com os elementos da tela

vamos precisar trabalhar com evento de click feito pelo usuario na listagem de pokemons  

- remover a classe aberto so do cartao que esta aberto
- ao clicar em um pokemon da listagem pegamos o id desse pokemon pra saber qual cartao mostrar
- removar a classe ativa que marca o pokemon selecionado
- adicionar a classe ativo no item da lista selecionado
*/


//precisamos criar 2 variaveis no JS pra trabalhar com os elementos da tela
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {

    //Vamos precisar trabalhar com evento de click feito pelo usuario na listagem de pokemons 
    pokemon.addEventListener('click', () => {

        //remover a classe aberto so do cartao que esta aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        //ao clicar em um pokemon da listagem pegamos o id desse pokemon pra saber qual cartao mostrar
        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        //removar a classe ativa que marca o pokemon selecionado
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        //adicionar a classe ativo no item da lista selecionado
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})