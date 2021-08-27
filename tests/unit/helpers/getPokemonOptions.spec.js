import getPokemonsOptions, { getPokemons, getPokemonNames } from '@/helpers/getPokemonOptions';
import { mockPokemons } from '../mocks/pokemons.mock';

describe('getpokemonOptions helpers', () => {


  test('debe de regresar un arreglo de numeros', () => {
    const pokemons = getPokemons()
    expect(pokemons.length).toBe(650)
    expect(pokemons[0]).toBe(1)
    expect(pokemons[500]).toBe(501)
  })

  test('getPokemonNames debe de retornar un arreglo de 4 elementos con los nombres de pokemon', async () => {
    const pokemons = await getPokemonNames([1, 2, 3, 4]);
    expect(pokemons).toStrictEqual(mockPokemons)
  })

  test('getPokemonsOptions debe de retonar un arreglo mezclado', async () => {
    const pokemons = await getPokemonsOptions()
    expect(pokemons.length).toBe(4)
    expect(pokemons).toEqual([
      { 
        name: expect.any(String),
        id: expect.any(Number)
      },
      { name: expect.any(String),
        id: expect.any(Number)
      },
      { 
        name: expect.any(String),
        id: expect.any(Number)
      },
      { 
        name: expect.any(String),
        id: expect.any(Number)
      }
    ])
  })
})