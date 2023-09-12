export function formatText(str: string) {
  return str?.replace(/-/g, ' ')
}
export const normalise = (value: number, MIN = 0, MAX: number) =>
  ((value - MIN) * 100) / (MAX - MIN)

export function formatDescription(str: string) {
  return str?.replace(/[\n\r\f]/g, ' ')?.replace('POKéMON', 'Pokémon')
}
