import axios from 'axios'
import { NamedAPIResource, PokeList, Pokemon } from '../App.props'
import { totalItems } from '../utils/constants'
import { useQuery } from '@tanstack/react-query'

export const usePokeData = () => {
  return useQuery({
    queryKey: ['pokemons'],
    queryFn: async () => {
      return await axios
        .get<PokeList>(`https://pokeapi.co/api/v2/pokemon?limit=${totalItems}`)
        .then((response) => {
          return Promise.all(
            response?.data?.results?.map(async (pokemon) => {
              return (await axios.get<Pokemon>(pokemon?.url))?.data
            })
          )
        })
    },
  })
}

export const usePokeDescription = (arr: NamedAPIResource[]) => {
  return useQuery({
    queryKey: ['Description', arr?.length],
    queryFn: () => {
      return Promise.all(
        arr?.map(async (elm) => {
          return (await axios.get(elm?.url))?.data
        })
      )
    },
    enabled: !!arr?.length,
  })
}
