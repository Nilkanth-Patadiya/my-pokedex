import { Box, Grid, Stack, Typography } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { usePokeData } from './services/queries'

const AppLayout = () => {
  const { data } = usePokeData()
  const imgUrl = new URL('/pokeball.png', import.meta.url).href
  return (
    <Grid
      container
      direction={'column'}
      sx={{ height: '100vh', flexWrap: 'nowrap' }}
    >
      <Grid item p={2} bgcolor={'primary.main'}>
        <Stack
          direction={'row'}
          gap={1}
          sx={{ width: 1, alignItems: 'center', justifyContent: 'center' }}
        >
          <Typography
            variant="h3"
            color={'gold'}
            sx={{ textShadow: '1px 1px black' }}
            textAlign={'center'}
          >
            Pokédex
          </Typography>
          <Box
            component={'img'}
            sx={{
              width: 'auto',
              height: 'auto',
              maxWidth: '100%',
              maxHeight: 60,
              objectFit: 'contain',
            }}
            src={imgUrl}
            alt={'Pokeball'}
          />
        </Stack>
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
