import { Grid } from '@mui/material'
import PokeList from '../components/PokeList'

const Home = () => {
  return (
    <Grid item flexGrow={1} px={{ xs: 3, md: 5 }} py={3}>
      <PokeList />
    </Grid>
  )
}

export default Home
