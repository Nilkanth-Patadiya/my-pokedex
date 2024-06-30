import axios from 'axios'
import { NamedAPIResource, PokeList, Pokemon, PokemonSpecies } from '../Props'
import { totalItems } from '../utils/constants'
import { useQueries, useQuery } from '@tanstack/react-query'

export const useInitialData = () => {
  return useQuery({
    queryKey: ['pokemon-names'],
    queryFn: async () => {
      const { data } = await axios.get<PokeList>(
        `https://pokeapi.co/api/v2/pokemon?limit=${totalItems}`
      )
      return data
    },
  })
}

export const usePokeData = (arr: NamedAPIResource[]) => {
  return useQueries({
    queries:
      arr?.map((elm) => ({
        queryKey: ['pokemon', elm?.name],
        queryFn: () => axios.get<Pokemon>(elm?.url),
      })) ?? [],
    combine: (results) => {
      return {
        data: results?.map((result) => result?.data?.data as Pokemon),
        pending: results?.some((result) => result?.isPending),
      }
    },
  })
}

export const usePokeDescription = (arr: NamedAPIResource[]) => {
  return useQueries({
    queries:
      arr?.map((elm) => ({
        queryKey: ['pokemon-description', elm?.name],
        queryFn: () => axios.get<PokemonSpecies>(elm?.url),
      })) ?? [],
    combine: (results) => {
      return {
        data: results?.map(
          (result) =>
            result?.data?.data?.flavor_text_entries?.filter?.(
              (elm) => elm?.version?.name === 'emerald'
            )?.[0]?.flavor_text as string
        ),
        pending: results?.some((result) => result?.isPending),
      }
    },
  })
}
