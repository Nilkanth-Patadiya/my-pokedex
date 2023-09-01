import { Grid } from '@mui/material'
import { usePokeData } from '../services/queries'
import PokeList from './PokeList'

const Home = () => {
  const { data } = usePokeData()

  return (
    <Grid item flexGrow={1} px={5} pb={3} pt={3}>
      <PokeList items={data?.data?.results} itemsPerPage={20} totalPages={32} />
    </Grid>
  )
}

export default Home
