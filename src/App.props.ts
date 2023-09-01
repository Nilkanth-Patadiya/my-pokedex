//Type declarations for component props
export type PokeCardProps = {
  name: string
  url: string
  id: number
  page: number
}
export type PokeListProps = {
  items: Pokemon[] | undefined
  itemsPerPage: number
  totalPages: number
}
export type StateProviderProps = {
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
}

// Type declarations for API data
export type Pokemon = {
  name: string
  url: string
}
export type PokeList = {
  count: number
  next: string | null
  previous: string | null
  results: Pokemon[]
}
