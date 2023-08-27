import { Grid } from '@mui/material'
import Pokecard from './PokeCard'
import { usePokeData } from '../services/usePokeData'

const PokeList = () => {
  const { data } = usePokeData()
  console.log(data)
  return (
    <Grid container columns={10} flexWrap={'wrap'} spacing={2}>
      {data?.data?.results?.map(({ name }, index) => (
        <Grid item xs={12} md={2} key={name}>
          <Pokecard name={name} id={index + 1} />
        </Grid>
      ))}
    </Grid>
  )
}

export default PokeList
