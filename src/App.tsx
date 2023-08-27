import { CssBaseline, Grid, Typography } from '@mui/material'
import PokeList from './components/PokeList'
import { QueryClient, QueryClientProvider } from 'react-query'

function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <CssBaseline enableColorScheme />
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
        <Grid item flexGrow={1} px={3}>
          <PokeList />
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
    </QueryClientProvider>
  )
}

export default App
