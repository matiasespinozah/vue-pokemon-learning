<template>
<div class="pokemon-container">
  
  <img 
    v-if="showPokemon"
    :src="imgSrc"
    class="fade-in"
    alt="pokemon">
  <img 
    v-else
    :src="imgSrc"
    class="hidden-pokemon"
    alt="pokemon">
</div>
</template>

<script>
export default {
  name: 'PokemonPicture',
  props: {
    pokemonId: {
      type: Number,
      required: true
    },
    showPokemon: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  computed: {
    imgSrc() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
    }
  }
}
</script>

<style scoped>
.pokemon-container {
    height: 200px;
    display: flex;
    justify-content: center;
    align-content: center;
}
img {
    height: 200px;
    position: absolute;
    user-select: none;
}
.hidden-pokemon {
    filter: brightness(0);
}

</style>j