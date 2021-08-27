<template>

  <h1 v-if="!pokemon"> Espere por favor </h1>

  <div v-else>
    <h1> ¿Quién es este Pokémon? </h1>

    <PokemonPicture :pokemon-id="pokemon?.id" :show-pokemon="showPokemon" />
    <PokemonOption :pokemons="pokemons" @selection="checkAnswer" />

    <template v-if="showAnswer">
      <h2 >{{ message }}</h2>
      <button @click="newGame"> Nuevo Juego </button>
    </template>
  </div>
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture.vue'
import PokemonOption from '@/components/PokemonOption.vue'
import getPokemonsOptions from '@/helpers/getPokemonOptions.js'

export default {
  name: 'PokemonPage',
  components: {
    PokemonPicture,
    PokemonOption
  },
  data() {
    return {
      pokemons: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: null
    }
  },
  methods: {
    async mixPokemons() {
      this.pokemons = await getPokemonsOptions()
      this.pokemon = this.pokemons[Math.floor(Math.random() * 4)]
    },
    checkAnswer(pokemonId) {
      this.showPokemon = true;
      this.showAnswer = true;
      if (pokemonId === this.pokemon.id) {
        this.message = `Correcto, ${this.pokemon.name}`
      } else {
        this.message = `Ops!!, era ${this.pokemon.name}`
      }
    },
    newGame() {
      this.showPokemon = false
      this.showAnswer = false
      this.pokemons = []
      this.pokemon = null
      this.mixPokemons()
    }
  },
  mounted() {
    this.mixPokemons()
  }
}
</script>
