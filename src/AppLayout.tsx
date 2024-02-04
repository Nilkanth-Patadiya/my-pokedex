import { Outlet, ScrollRestoration } from 'react-router-dom'
import { usePokeData, usePokeDescription } from './services/queries'
import { useImgURL } from './hooks/useImgURL'
import ScrollToTop from './components/ScrollToTop'
import { KeyboardArrowUpIcon } from './assets/icons'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Fab from '@mui/material/Fab'

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
        sx={{ minHeight: '100vh', flexWrap: 'nowrap' }}
      >
        <Grid item py={1.25} bgcolor={'primary.main'} id="back-to-top-anchor">
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
            isLoading,
            isDescriptionLoading,
          }}
        />
        <Grid item py={1.5} px={3} bgcolor={'primary.main'}>
          <Stack
            direction={'row'}
            sx={{
              alignItems: 'center',
              justifyContent: { xs: 'center', md: 'space-between' },
            }}
          >
            <Stack
              direction={'row'}
              gap={0.5}
              sx={{
                alignItems: 'center',
                alignContent: 'center',
                display: { xs: 'none', md: 'flex' },
              }}
            >
              <Typography
                fontWeight={'bold'}
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
                lineHeight={1}
              >
                <Box
                  component={'img'}
                  width={50}
                  height={25}
                  sx={{
                    width: 'auto',
                    height: 'auto',
                    maxWidth: 50,
                    maxHeight: 25,
                  }}
                  src={'/pokeapi_logo.webp'}
                  alt={'Pokeapi logo'}
                />
              </Link>
            </Stack>
            <Typography
              fontWeight={'bold'}
              textAlign={'center'}
              color={'gold'}
              sx={{ textShadow: '1px 1px black' }}
            >
              Made with &#x1F496; by{' '}
              <Link
                fontWeight={'bold'}
                color={'inherit'}
                underline="hover"
                href="https://github.com/Nilkanth-Patadiya/my-pokedex"
                target="_blank"
                rel="noopener"
              >
                Nilkanth Patadiya
              </Link>
            </Typography>
          </Stack>
        </Grid>
      </Grid>
      <ScrollToTop>
        <Fab
          size="medium"
          aria-label="scroll back to top"
          title="back to top"
          color="primary"
        >
          <KeyboardArrowUpIcon color="info" />
        </Fab>
      </ScrollToTop>
      <ScrollRestoration
        getKey={(location) => {
          return location.pathname
        }}
      />
    </>
  )
}

export default AppLayout
