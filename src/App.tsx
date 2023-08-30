import { Grid, Typography } from '@mui/material'
import PokeList from './components/PokeList'
import { usePokeData } from './services/usePokeData'

function App() {
  const { data } = usePokeData()
  return (
    <Grid
      container
      direction={'column'}
      sx={{ height: '100vh', flexWrap: 'nowrap' }}
    >
      <Grid item p={2}>
        <Typography
          variant="h3"
          color={'gold'}
          sx={{ textShadow: '1px 1px black' }}
          textAlign={'center'}
        >
          Pokédex
        </Typography>
      </Grid>
      <Grid item flexGrow={1} px={5}>
        <PokeList
          items={data?.data?.results}
          itemsPerPage={20}
          totalPages={32}
        />
      </Grid>
      <Grid item p={2}>
        <Typography
          variant="h6"
          textAlign={'center'}
          color={'gold'}
          sx={{ textShadow: '1px 1px black' }}
        >
          Made with &#x1F496; by Nilkanth Patadiya
        </Typography>
      </Grid>
    </Grid>
  )
}

export default App
