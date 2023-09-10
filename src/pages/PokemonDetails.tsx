import { Box, Button, Chip, Grid, Stack, Typography } from '@mui/material'
import { useLocation, useNavigate, useOutletContext } from 'react-router-dom'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import { OutletContextProps } from '../App.props'
import { useImgURL } from '../hooks/useImgURL'
import { pokeTypeColors } from '../utils/constants'
import StatItem from '../components/StatItem'
import { formatText, normalise } from '../utils/helper'

const PokemonDetails = () => {
  const { data } = useOutletContext<OutletContextProps>()
  const location = useLocation()
  const navigate = useNavigate()
  const dataID = location?.state?.id
  const activeData = data?.filter((elm) => elm?.id === dataID)?.[0]
  const activeColor = pokeTypeColors?.[activeData?.types?.[0]?.type?.name]
  const imgUrl = useImgURL('/pokeball_bg.svg')
  return (
    <Grid item flexGrow={1}>
      <Grid
        container
        justifyContent={'center'}
        height={1}
        sx={{
          background: `repeating-linear-gradient(45deg,${activeColor},${activeColor} 10px,#fff 10px,#fff 20px)`,
        }}
        py={2}
      >
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              display: 'flex',
              color: 'whitesmoke',
              width: 1,
              bgcolor: activeColor,
              p: 2,
            }}
          >
            <Box sx={{ flex: '0 0 25%' }}>
              <Button
                color="inherit"
                size="large"
                startIcon={<KeyboardBackspaceIcon />}
                onClick={() => navigate('/pokemons')}
              >
                Go Back
              </Button>
            </Box>
            <Stack gap={2} sx={{ flex: '0 0 50%' }}>
              <Typography
                color="inherit"
                variant="h3"
                textTransform={'capitalize'}
                textAlign={'center'}
                sx={{ textShadow: `2px 2px #000` }}
              >
                {formatText(activeData?.name)}
              </Typography>
              <Box
                sx={{
                  position: 'relative',
                }}
              >
                <Box
                  component={'img'}
                  sx={{
                    width: 1,
                    height: 'auto',
                    animation: 'spin 2s linear 2',
                    '@keyframes spin': {
                      '0%': {
                        transform: 'rotate(360deg)',
                      },
                      '100%': {
                        transform: 'rotate(00deg)',
                      },
                    },
                  }}
                  src={imgUrl}
                  alt={'Pokeball background'}
                />
                <Box
                  component={'img'}
                  sx={{
                    width: 'auto',
                    height: { md: 200 },
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    m: '0 auto',
                    top: '20%',
                  }}
                  src={
                    activeData?.sprites?.other?.dream_world?.front_default ?? ''
                  }
                  alt={activeData?.name}
                />
              </Box>
            </Stack>
            <Box sx={{ flex: '0 0 25%' }}>
              <Typography
                color="inherit"
                variant="h6"
                textAlign={'end'}
                fontWeight={'bold'}
              >
                {`#${activeData?.id?.toLocaleString('en', {
                  minimumIntegerDigits: 3,
                })}`}
              </Typography>
            </Box>
          </Box>
          <Stack gap={2} bgcolor={'white'} p={2}>
            <Stack
              direction={'row'}
              justifyContent={'center'}
              alignItems={'center'}
              spacing={2}
            >
              {activeData?.types?.map(({ type: { name } }) => (
                <Chip
                  key={name}
                  label={name}
                  sx={{
                    bgcolor: pokeTypeColors?.[name],
                    color: 'white',
                    fontSize: '1rem',
                    textTransform: 'capitalize',
                  }}
                />
              ))}
            </Stack>
            <Typography
              variant="h5"
              fontWeight={'medium'}
              color={activeColor}
              textAlign={'center'}
            >
              About
            </Typography>
            <Stack>
              <Typography
                variant="h5"
                fontWeight={'medium'}
                color={activeColor}
                textAlign={'center'}
              >
                Base Stats
              </Typography>
              {activeData?.stats?.map(({ base_stat, stat }, index) => (
                <StatItem
                  key={index}
                  name={formatText(stat?.name)}
                  value={normalise(base_stat, 0, 252)}
                  color={activeColor}
                />
              ))}
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default PokemonDetails
