import PokemonPicture from '@/components/PokemonPicture';
import { shallowMount } from '@vue/test-utils';

describe('PokemonPicture component', () => {

  test('debe de hacer match con el snapshot', () => {
    const wrapper = shallowMount(PokemonPicture, {
      props: {
        pokemonId: 1,
        showPokemon: false
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('debe de mostrar la imagen oculta del pokemon 100', () => {
    const pokemonId = 100
    const wrapper = shallowMount(PokemonPicture, {
      props: {
        pokemonId,
        showPokemon: false
      }
    })

    const [img1, img2] = wrapper.findAll('img')

    const imgExpect = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`

    expect(img1.exists()).toBeTruthy()
    expect(img2).toBe(undefined)
    expect(img1.classes('hidden-pokemon')).toBeTruthy()
    expect(img1.attributes('src')).toBe(imgExpect)
  })

  test('debe de mostrar el pokemon si showPokemon:true', () => {
    const wrapper = shallowMount(PokemonPicture, {
      props: {
        pokemonId: 100,
        showPokemon: true
      }
    })

    const img = wrapper.find('img')
  
    expect( img.exists() ).toBeTruthy();
    expect( img.classes('fade-in') ).toBe(true)
    expect( img.classes('hidden-pokemon') ).toBe(false)

    // expect(img1).toBe(undefined)
    // expect(img2.exists()).toBeTruthy()
  })
})