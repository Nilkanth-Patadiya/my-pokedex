import axios from 'axios'
import { useQuery } from 'react-query'
import { PokeList, Pokemon } from '../App.props'
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

export const usePokeDescription = (url: string) => {
  return useQuery([url], async () => {
    return await axios.get(url)
  })
}
