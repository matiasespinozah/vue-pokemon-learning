import PokemonOption from '@/components/PokemonOption'
import { shallowMount } from '@vue/test-utils';
import { mockPokemons } from '../mocks/pokemons.mock';

describe('PokemonOption component', () => {
  let wrapper = shallowMount(PokemonOption, {
    props: {
      pokemons: mockPokemons
    }
  })

  beforeEach(() => {
    wrapper = shallowMount(PokemonOption, {
      props: {
        pokemons: mockPokemons
      }
    })
  })

  test('debe de hacer match con snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('debe de mostrar las 4 opciones correctamentes', () => {
    const items = wrapper.findAll('li')
    expect(items.length).toBe(4)

    expect(items[0].text()).toBe('bulbasaur')
    expect(items[1].text()).toBe('ivysaur')
    expect(items[2].text()).toBe('venusaur')
    expect(items[3].text()).toBe('charmander')
  })

  test('debe de emitir "selection" con sus respectivos parametros al hacer click', () => {
    const [li1, li2, li3, li4] = wrapper.findAll('li')
    li1.trigger('click')
    li2.trigger('click')
    li3.trigger('click')
    li4.trigger('click')

    expect(wrapper.emitted('selection').length).toBe(4)
    expect(wrapper.emitted('selection')[0]).toEqual([1])
    expect(wrapper.emitted('selection')[1]).toEqual([2])
    expect(wrapper.emitted('selection')[2]).toEqual([3])
    expect(wrapper.emitted('selection')[3]).toEqual([4])
  })
  
})