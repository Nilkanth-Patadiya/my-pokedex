import { Grid, Typography } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { usePokeData } from './services/queries'

const AppLayout = () => {
  const { data } = usePokeData()

  return (
    <Grid
      container
      direction={'column'}
      sx={{ height: '100vh', flexWrap: 'nowrap' }}
    >
      <Grid item p={2} bgcolor={'primary.main'}>
        <Typography
          variant="h3"
          color={'gold'}
          sx={{ textShadow: '1px 1px black' }}
          textAlign={'center'}
        >
          Pokédex
        </Typography>
      </Grid>
      <Outlet context={data} />
      <Grid item p={2} bgcolor={'primary.main'}>
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

export default AppLayout
