import axios from 'axios'
import { useQuery } from 'react-query'
import { PokeList } from '../App.props'

export const usePokeData = () => {
  return useQuery(
    'pokemons',
    async () =>
      await axios.get<PokeList>('https://pokeapi.co/api/v2/pokemon?limit=60')
  )
}
