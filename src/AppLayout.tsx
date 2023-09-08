import { Box, Grid, Stack, Typography } from '@mui/material'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import { usePokeData } from './services/queries'
import { useImgURL } from './hooks/useImgURL'

const AppLayout = () => {
  const { data, isLoading } = usePokeData()
  const imgUrl = useImgURL('/pokeball.png')
  return (
    <>
      <Grid
        container
        direction={'column'}
        sx={{ height: '100vh', flexWrap: 'nowrap' }}
      >
        <Grid item py={1.25} bgcolor={'primary.main'}>
          <Stack
            direction={'row'}
            gap={1}
            sx={{ width: 1, alignItems: 'center', justifyContent: 'center' }}
          >
            <Typography
              variant="h4"
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
                height: 40,
              }}
              src={imgUrl}
              alt={'Pokeball'}
            />
          </Stack>
        </Grid>
        <Outlet context={{ data, isLoading }} />
        <Grid item py={1} bgcolor={'primary.main'}>
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
      <ScrollRestoration
        getKey={(location) => {
          return location.pathname
        }}
      />
    </>
  )
}

export default AppLayout
