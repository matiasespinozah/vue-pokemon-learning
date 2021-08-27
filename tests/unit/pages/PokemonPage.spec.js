import {shallowMount} from '@vue/test-utils'
import PokemonPage from '@/pages/PokemonPage'
import { mockPokemons } from '../mocks/pokemons.mock';

describe('PokemonPage', () => {

  let wrapper = shallowMount(PokemonPage)

  beforeEach(() => {
    wrapper = shallowMount(PokemonPage)
  })



  test('debe de hacer match con el snapshot ', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('debe de llamar mixPokemon al montar', () => {
    const mixPokemonSpy = jest.spyOn(PokemonPage.methods, 'mixPokemons')
    shallowMount(PokemonPage)
    expect(mixPokemonSpy).toHaveBeenCalled()
  })

  test('debe de hacer match con el snapshot cuando cargan los pokemon', () => {
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemons: mockPokemons,
          pokemon: mockPokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: null
        }
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('debe de mostrar los componentes de PokemonPicture y PokemonOption ', () => {
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemons: mockPokemons,
          pokemon: mockPokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: null
        }
      }
    })
    const picture = wrapper.find('pokemon-picture-stub')
    const option = wrapper.find('pokemon-option-stub')

    expect(picture.exists()).toBeTruthy()
    expect(option.exists()).toBeTruthy()
    expect(picture.attributes('pokemonid')).toBe('1')
    expect(option.attributes('pokemons')).toBeTruthy()
  })
  
  
  
  
})