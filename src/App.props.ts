//Type declarations for component props
export type PokeCardProps = {
  name: string
  type: string
  id: number
  // page: number
}

export type StateProviderProps = {
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
}

// Type declarations for API data
export type PokeList = {
  count: number
  next: string | null
  previous: string | null
  results: NamedAPIResource[]
}
export interface Pokemon {
  /** The identifier for this resource */
  id: number
  /** The name for this resource */
  name: string
  /** The base experience gained for defeating this Pokémon */
  base_experience: number
  /** The height of this Pokémon in decimetres */
  height: number
  /** Set for exactly one Pokémon used as the default for each species */
  is_default: boolean
  /** Order for sorting. Almost national order, except families are grouped together */
  order: number
  /** The weight of this Pokémon in hectograms */
  weight: number
  /** A list of abilities this Pokémon could potentially have */
  abilities: PokemonAbility[]
  /** A list of forms this Pokémon can take on */
  forms: NamedAPIResource[]
  /** A list of game indices relevent to Pokémon item by generation */
  game_indices: VersionGameIndex[]
  /** A list of items this Pokémon may be holding when encountered */
  held_items: PokemonHeldItem[]
  /** A link to a list of location areas, as well as encounter details pertaining to specific versions */
  location_area_encounters: string
  /** A list of moves along with learn methods and level details pertaining to specific version groups */
  moves: PokemonMove[]
  /** A set of sprites used to depict this Pokémon in the game.
   * A visual representation of the various sprites can be found at [PokeAPI/sprites](https://github.com/PokeAPI/sprites#sprites)
   */
  sprites: PokemonSprites
  /** The species this Pokémon belongs to */
  species: NamedAPIResource
  /** A list of base stat values for this Pokémon */
  stats: PokemonStat[]
  /** A list of details showing types this Pokémon has */
  types: PokemonType[]
  /** Data describing a Pokemon's types in a previous generation. */
  past_types: PokemonPastType[]
}

interface VersionGameIndex {
  /** The internal id of an API resource within game data */
  game_index: number
  /** The version relevent to this game index */
  version: NamedAPIResource
}
interface NamedAPIResource {
  /** The name of the referenced resource */
  name: string
  /** The URL of the referenced resource */
  url: string
}

/**
 * Abilities the given pokémon could potentially have
 */
interface PokemonAbility {
  /** Whether or not this is a hidden ability */
  is_hidden: boolean
  /** The slot this ability occupies in this Pokémon species */
  slot: number
  /** The ability the Pokémon may have */
  ability: NamedAPIResource
}

/**
 * Details showing types the given Pokémon has
 */
interface PokemonType {
  /** The order the Pokémon's types are listed in */
  slot: number
  /** The type the referenced Pokémon has */
  type: NamedAPIResource
}

/**
 * Data describing a Pokemon's types in a previous generation.
 */
interface PokemonPastType {
  /** The generation of this Pokémon Type. */
  generation: NamedAPIResource
  /** Types this of this Pokémon in a previos generation. */
  types: PokemonType[]
}

/**
 * Items the given Pokémon may be holding when encountered
 */
interface PokemonHeldItem {
  /** The item the referenced Pokémon holds */
  item: NamedAPIResource
  /** The details of the different versions in which the item is held */
  version_details: PokemonHeldItemVersion[]
}

/**
 * The details of the different versions in which the item is held
 */
interface PokemonHeldItemVersion {
  /** The version in which the item is held */
  version: NamedAPIResource
  /** How often the item is held */
  rarity: number
}

/**
 * A Move along with learn methods and level details pertaining to specific version groups
 */
interface PokemonMove {
  /** The move the Pokémon can learn */
  move: NamedAPIResource
  /** The details of the version in which the Pokémon can learn the move */
  version_group_details: PokemonMoveVersion[]
}

/**
 * The details of the version in which the Pokémon can learn the move
 */
interface PokemonMoveVersion {
  /** The method by which the move is learned */
  move_learn_method: NamedAPIResource
  /** The version group in which the move is learned */
  version_group: NamedAPIResource
  /** The minimum level to learn the move */
  level_learned_at: number
}

/**
 * Base stat values for the given Pokémon
 */
interface PokemonStat {
  /** The stat the Pokémon has */
  stat: NamedAPIResource
  /** The effort points (EV) the Pokémon has in the stat */
  effort: number
  /** The base value of the stat */
  base_stat: number
}

/** Version Sprites */
interface VersionSprites {
  /** Generation-I Sprites of this Pokémon */
  'generation-i': GenerationISprites
  /** Generation-II Sprites of this Pokémon */
  'generation-ii': GenerationIISprites
  /** Generation-III Sprites of this Pokémon */
  'generation-iii': GenerationIIISprites
  /** Generation-IV Sprites of this Pokémon */
  'generation-iv': GenerationIVSprites
  /** Generation-V Sprites of this Pokémon */
  'generation-v': GenerationVSprites
  /** Generation-VI Sprites of this Pokémon */
  'generation-vi': GenerationVISprites
  /** Generation-VII Sprites of this Pokémon */
  'generation-vii': GenerationVIISprites
  /** Generation-VIII Sprites of this Pokémon */
  'generation-viii': GenerationVIIISprites
}

/**
 * A set of sprites used to depict this Pokémon in the game.
 * A visual representation of the various sprites can be found at [PokeAPI/sprites](https://github.com/PokeAPI/sprites#sprites)
 */
interface PokemonSprites {
  /** The default depiction of this Pokémon from the front in battle */
  front_default: string | null
  /** The shiny depiction of this Pokémon from the front in battle */
  front_shiny: string | null
  /** The female depiction of this Pokémon from the front in battle */
  front_female: string | null
  /** The shiny female depiction of this Pokémon from the front in battle */
  front_shiny_female: string | null
  /** The default depiction of this Pokémon from the back in battle */
  back_default: string | null
  /** The shiny depiction of this Pokémon from the back in battle */
  back_shiny: string | null
  /** The female depiction of this Pokémon from the back in battle */
  back_female: string | null
  /** The shiny female depiction of this Pokémon from the back in battle */
  back_shiny_female: string | null
  /** Dream World, Official Artwork and Home sprites */
  other?: OtherPokemonSprites
  /** Version Sprites of this Pokémon */
  versions: VersionSprites
}

/** Other Pokemon Sprites (Dream World and Official Artwork sprites) */
interface OtherPokemonSprites {
  /** Dream World Sprites of this Pokémon */
  dream_world: DreamWorld
  /** Official Artwork Sprites of this Pokémon */
  'official-artwork': OfficialArtwork
  /** Home Artwork Sprites of this Pokémon */
  home: Home
}

/** Dream World sprites */
interface DreamWorld {
  /** The default depiction of this Pokémon from the front in battle */
  front_default: string | null
  /** The female depiction of this Pokémon from the front in battle */
  front_female: string | null
}

/** Official Artwork sprites */
interface OfficialArtwork {
  /** The default depiction of this Pokémon from the front in battle */
  front_default: string | null
}

/** Home sprites */
interface Home {
  /** The default depiction of this Pokémon from the front in battle */
  front_default: string | null
  /** The female depiction of this Pokémon from the front in battle */
  front_female: string | null
  /** The shiny depiction of this Pokémon from the front in battle */
  front_shiny: string | null
  /** The shiny female depiction of this Pokémon from the back in battle */
  front_shiny_female: string | null
}

/** Generation-I Srites */
interface GenerationISprites {
  /** Red-blue sprites of this Pokémon */
  'red-blue': RedBlue
  /** Yellow sprites of this Pokémon  */
  yellow: Yellow
}

/** Red/Blue Sprites */
interface RedBlue {
  /** The default depiction of this Pokémon from the back in battle */
  back_default: string | null
  /** The gray depiction of this Pokémon from the back in battle */
  back_gray: string | null
  /** The transparent depiction of this Pokémon from the back in battle */
  back_transparent: string | null
  /** The default depiction of this Pokémon from the front in battle */
  front_default: string | null
  /** The gray depiction of this Pokémon from the front in battle */
  front_gray: string | null
  /** The transparent depiction of this Pokémon from the front in battle */
  front_transparent: string | null
}

/** Yellow sprites */
interface Yellow {
  /** The default depiction of this Pokémon from the back in battle */
  back_default: string | null
  /** The gray depiction of this Pokémon from the back in battle */
  back_gray: string | null
  /** The transparent depiction of this Pokémon from the back in battle */
  back_transparent: string | null
  /** The default depiction of this Pokémon from the front in battle */
  front_default: string | null
  /** The gray depiction of this Pokémon from the front in battle */
  front_gray: string | null
  /** The transparent depiction of this Pokémon from the front in battle */
  front_transparent: string | null
}

/** Generation-II Sprites */
interface GenerationIISprites {
  /** Crystal sprites of this Pokémon */
  crystal: Crystal
  /** Gold sprites of this Pokémon */
  gold: Gold
  /** Silver sprites of this Pokémon */
  silver: Silver
}

/** Crystal sprites */
interface Crystal {
  /** The default depiction of this Pokémon from the back in battle */
  back_default: string | null
  /** The shiny depiction of this Pokémon from the back in battle */
  back_shiny: string | null
  /** The back shiny transparent depiction of this Pokémon from the back in battle */
  back_shiny_transparent: string | null
  /** The transparent depiction of this Pokémon from the back in battle */
  back_transparent: string | null
  /** The default depiction of this Pokémon from the front in battle */
  front_default: string | null
  /** The shiny depiction of this Pokémon from the front in battle */
  front_shiny: string | null
  /** The front shiny transparent depiction of this Pokémon from the front in battle */
  front_shiny_transparent: string | null
  /** The transparent depiction of this Pokémon from the front in battle */
  front_transparent: string | null
}

interface Gold {
  /** The default depiction of this Pokémon from the back in battle */
  back_default: string | null
  /** The shiny depiction of this Pokémon from the back in battle */
  back_shiny: string | null
  /** The default depiction of this Pokémon from the front in battle */
  front_default: string | null
  /** The shiny depiction of this Pokémon from the front in battle */
  front_shiny: string | null
  /** The transparent depiction of this Pokémon from the front in battle */
  front_transparent: string | null
}

/** Silver sprites */
interface Silver {
  /** The default depiction of this Pokémon from the back in battle */
  back_default: string | null
  /** The shiny depiction of this Pokémon from the back in battle */
  back_shiny: string | null
  /** The default depiction of this Pokémon from the front in battle */
  front_default: string | null
  /** The shiny depiction of this Pokémon from the front in battle */
  front_shiny: string | null
  /** The transparent depiction of this Pokémon from the front in battle */
  front_transparent: string | null
}

/** Generation-III Sprites */
interface GenerationIIISprites {
  /** Emerald sprites of this Pokémon */
  emerald: Emerald
  /** Firered-Leafgreen sprites of this Pokémon */
  'firered-leafgreen': FireredLeafgreen
  /** Ruby-Sapphire sprites of this Pokémon */
  'ruby-sapphire': RubySapphire
}

/** Emerald sprites */
interface Emerald {
  /** The default depiction of this Pokémon from the front in battle */
  front_default: string | null
  /** The shiny depiction of this Pokémon from the front in battle */
  front_shiny: string | null
}

/** FireRead LeafGreen sprites  */
interface FireredLeafgreen {
  /** The default depiction of this Pokémon from the back in battle */
  back_default: string | null
  /** The shiny depiction of this Pokémon from the back in battle */
  back_shiny: string | null
  /** The default depiction of this Pokémon from the front in battle */
  front_default: string | null
  /** The shiny depiction of this Pokémon from the front in battle */
  front_shiny: string | null
}

/** Ruby/Sapphire sprites */
interface RubySapphire {
  /** The default depiction of this Pokémon from the back in battle */
  back_default: string | null
  /** The shiny depiction of this Pokémon from the back in battle */
  back_shiny: string | null
  /** The default depiction of this Pokémon from the front in battle */
  front_default: string | null
  /** The shiny depiction of this Pokémon from the front in battle */
  front_shiny: string | null
}

/** Generation-IV Sprites */
interface GenerationIVSprites {
  /** Diamond-pearl Generation sprites of this Pokémon */
  'diamond-pearl': DiamondPearl
  /** Heartgold-Soulsilver sprites of this Pokémon */
  'heartgold-soulsilver': HeartgoldSoulsilver
  /** Platinum sprites of this Pokémon */
  platinum: Platinum
}

interface DiamondPearl {
  /** The default depiction of this Pokémon from the back in battle */
  back_default: string | null
  /** The shiny depiction of this Pokémon from the back in battle */
  back_shiny: string | null
  /** The female depiction of this Pokémon from the back in battle */
  back_female: string | null
  /** The default depiction of this Pokémon from the front in battle */
  front_default: string | null
  /** The shiny depiction of this Pokémon from the front in battle */
  front_shiny: string | null
  /** The shiny female depiction of this Pokémon from the back in battle */
  back_shiny_female: string | null
  /** The female depiction of this Pokémon from the front in battle */
  front_female: string | null
  /** The shiny female depiction of this Pokémon from the back in battle */
  front_shiny_female: string | null
}

interface HeartgoldSoulsilver {
  /** The default depiction of this Pokémon from the back in battle */
  back_default: string | null
  /** The shiny depiction of this Pokémon from the back in battle */
  back_shiny: string | null
  /** The female depiction of this Pokémon from the back in battle */
  back_female: string | null
  /** The default depiction of this Pokémon from the front in battle */
  front_default: string | null
  /** The shiny depiction of this Pokémon from the front in battle */
  front_shiny: string | null
  /** The shiny female depiction of this Pokémon from the back in battle */
  back_shiny_female: string | null
  /** The female depiction of this Pokémon from the front in battle */
  front_female: string | null
  /** The shiny female depiction of this Pokémon from the back in battle */
  front_shiny_female: string | null
}

interface Platinum {
  /** The default depiction of this Pokémon from the back in battle */
  back_default: string | null
  /** The shiny depiction of this Pokémon from the back in battle */
  back_shiny: string | null
  /** The female depiction of this Pokémon from the back in battle */
  back_female: string | null
  /** The default depiction of this Pokémon from the front in battle */
  front_default: string | null
  /** The shiny depiction of this Pokémon from the front in battle */
  front_shiny: string | null
  /** The shiny female depiction of this Pokémon from the back in battle */
  back_shiny_female: string | null
  /** The female depiction of this Pokémon from the front in battle */
  front_female: string | null
  /** The shiny female depiction of this Pokémon from the back in battle */
  front_shiny_female: string | null
}

/** Generation-V Sprites */
interface GenerationVSprites {
  /** Black-white sprites of this Pokémon */
  'black-white': BlackWhite
}

/** Black/White sprites */
interface BlackWhite {
  /** The animated sprite of this pokémon */
  animated: Animated
  /** The default depiction of this Pokémon from the back in battle */
  back_default: string | null
  /** The shiny depiction of this Pokémon from the back in battle */
  back_shiny: string | null
  /** The female depiction of this Pokémon from the back in battle */
  back_female: string | null
  /** The default depiction of this Pokémon from the front in battle */
  front_default: string | null
  /** The shiny depiction of this Pokémon from the front in battle */
  front_shiny: string | null
  /** The shiny female depiction of this Pokémon from the back in battle */
  back_shiny_female: string | null
  /** The female depiction of this Pokémon from the front in battle */
  front_female: string | null
  /** The shiny female depiction of this Pokémon from the back in battle */
  front_shiny_female: string | null
}
interface Animated {
  /** The default depiction of this Pokémon from the back in battle */
  back_default: string | null
  /** The shiny depiction of this Pokémon from the back in battle */
  back_shiny: string | null
  /** The female depiction of this Pokémon from the back in battle */
  back_female: string | null
  /** The default depiction of this Pokémon from the front in battle */
  front_default: string | null
  /** The shiny depiction of this Pokémon from the front in battle */
  front_shiny: string | null
  /** The shiny female depiction of this Pokémon from the back in battle */
  back_shiny_female: string | null
  /** The female depiction of this Pokémon from the front in battle */
  front_female: string | null
  /** The shiny female depiction of this Pokémon from the back in battle */
  front_shiny_female: string | null
}

/** Generation-VI Sprites */
interface GenerationVISprites {
  /** Omegaruby-Alphasapphire sprites of this Pokémon */
  'omegaruby-alphasapphire': OmegarubyAlphasapphire
  /** X-Y sprites of this Pokémon */
  'x-y': XY
}

/** Omega/Ruby Alpha/Sapphire sprites */
interface OmegarubyAlphasapphire {
  /** The default depiction of this Pokémon from the front in battle */
  front_default: string | null
  /** The female depiction of this Pokémon from the front in battle */
  front_female: string | null
  /** The shiny depiction of this Pokémon from the front in battle */
  front_shiny: string | null
  /** The shiny female depiction of this Pokémon from the back in battle */
  front_shiny_female: string | null
}

/** XY sprites */
interface XY {
  /** The default depiction of this Pokémon from the front in battle */
  front_default: string | null
  /** The female depiction of this Pokémon from the front in battle */
  front_female: string | null
  /** The shiny depiction of this Pokémon from the front in battle */
  front_shiny: string | null
  /** The shiny female depiction of this Pokémon from the back in battle */
  front_shiny_female: string | null
}

/** Generation-VII Sprites */
interface GenerationVIISprites {
  /** Icon sprites of this Pokémon */
  icons: GenerationViiIcons
  /** Ultra-sun-ultra-moon sprites of this Pokémon */
  'ultra-sun-ultra-moon': UltraSunUltraMoon
}

/** Generation VII icons */
interface GenerationViiIcons {
  /** The default depiction of this Pokémon from the front in battle */
  front_default: string | null
  /** The female depiction of this Pokémon from the front in battle */
  front_female: string | null
}

/** Ultra Sun Ultra Moon sprites */
interface UltraSunUltraMoon {
  /** The default depiction of this Pokémon from the front in battle */
  front_default: string | null
  /** The female depiction of this Pokémon from the front in battle */
  front_female: string | null
  /** The shiny depiction of this Pokémon from the front in battle */
  front_shiny: string | null
  /** The shiny female depiction of this Pokémon from the back in battle */
  front_shiny_female: string | null
}

/** Generation-VIII Sprites */
interface GenerationVIIISprites {
  /** Icon sprites of this Pokémon */
  icons: GenerationViiiIcons
}

/** Generation VIII icons */
interface GenerationViiiIcons {
  /** The default depiction of this Pokémon from the front in battle */
  front_default: string | null
  /** The female depiction of this Pokémon from the front in battle */
  front_female: string | null
}
