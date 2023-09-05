import { Grid } from '@mui/material'
import PokeList from '../components/PokeList'

const Home = () => {
  return (
    <Grid item flexGrow={1} px={5} pb={3} pt={3}>
      <PokeList />
    </Grid>
  )
}

export default Home
