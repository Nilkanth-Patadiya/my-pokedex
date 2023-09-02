import { Grid } from '@mui/material'
import PokeList from './PokeList'

const Home = () => {
  return (
    <Grid item flexGrow={1} px={5} pb={3} pt={3}>
      <PokeList itemsPerPage={20} totalPages={32} />
    </Grid>
  )
}

export default Home
