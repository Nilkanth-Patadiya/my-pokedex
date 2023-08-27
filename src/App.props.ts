export type PokeCardProps = {
  name: string
  id: number
}
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
