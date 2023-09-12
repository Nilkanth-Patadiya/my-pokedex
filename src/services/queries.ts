import axios from 'axios'
import { useQuery } from 'react-query'
import { NamedAPIResource, PokeList, Pokemon } from '../App.props'
import { totalItems } from '../utils/constants'

export const usePokeData = () => {
  return useQuery('pokemons', async () => {
    return await axios
      .get<PokeList>(`https://pokeapi.co/api/v2/pokemon?limit=${totalItems}`)
      .then((response) => {
        return Promise.all(
          response?.data?.results?.map(async (pokemon) => {
            return (await axios.get<Pokemon>(pokemon?.url))?.data
          })
        )
      })
  })
}

export const usePokeDescription = (arr: NamedAPIResource[]) => {
  return useQuery(
    'Description',
    () => {
      return Promise.all(
        arr?.map(async (elm) => {
          return (await axios.get(elm?.url))?.data
        })
      )
    },
    { enabled: !!arr?.length }
  )
}
