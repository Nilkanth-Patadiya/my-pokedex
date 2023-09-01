import { Grid, Typography } from '@mui/material'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
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
      <Outlet />
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

export default AppLayout
