import { Box, Grid, Link, Stack, Typography } from '@mui/material'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import { usePokeData, usePokeDescription } from './services/queries'
import { useImgURL } from './hooks/useImgURL'

const AppLayout = () => {
  const { data, isLoading } = usePokeData()
  const { data: descriptionData, isLoading: isDescriptionLoading } =
    usePokeDescription(data?.map((elm) => elm?.species) ?? [])
  const imgUrl = useImgURL('/pokeball.png')
  const descriptions = descriptionData?.map(
    (elm) =>
      elm?.flavor_text_entries.filter?.(
        (elm: { version: { name: string } }) => elm?.version?.name === 'emerald'
      )?.[0]?.flavor_text
  )

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
              width={40}
              height={40}
              sx={{
                width: 'auto',
                height: 40,
              }}
              src={imgUrl}
              alt={'Pokeball'}
            />
          </Stack>
        </Grid>
        <Outlet
          context={{
            data,
            descriptions,
            isLoading: isLoading || isDescriptionLoading,
          }}
        />
        <Grid item p={2} bgcolor={'primary.main'}>
          <Stack
            direction={'row'}
            sx={{ alignItems: 'center', justifyContent: 'space-between' }}
          >
            <Stack direction={'row'} gap={0.5} sx={{ alignItems: 'center' }}>
              <Typography
                variant="h6"
                color={'gold'}
                sx={{ textShadow: '1px 1px black' }}
              >
                Powered by
              </Typography>
              <Link
                href="https://pokeapi.co/"
                target="_blank"
                rel="noopener"
                underline="none"
              >
                <Box
                  component={'img'}
                  width={60}
                  height={30}
                  sx={{
                    width: 'auto',
                    height: 'auto',
                    maxWidth: 60,
                    maxHeight: 30,
                  }}
                  src={'/pokeapi_logo.webp'}
                  alt={'Pokeapi logo'}
                />
              </Link>
            </Stack>
            <Typography
              variant="h6"
              textAlign={'center'}
              color={'gold'}
              sx={{ textShadow: '1px 1px black' }}
            >
              Made with &#x1F496; by Nilkanth Patadiya
            </Typography>
          </Stack>
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
