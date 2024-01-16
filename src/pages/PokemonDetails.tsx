import { useLocation, useNavigate, useOutletContext } from 'react-router-dom'
import { OutletContextProps } from '../App.props'
import { useImgURL } from '../hooks/useImgURL'
import { pokeTypeColors } from '../utils/constants'
import StatItem from '../components/StatItem'
import { formatText } from '../utils/helper'
import { BackArrowIcon, HeightIcon, WeightIcon } from '../assets/icons'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'

const PokemonDetails = () => {
  const { data, descriptions } = useOutletContext<OutletContextProps>()
  const location = useLocation()
  const navigate = useNavigate()
  const dataID = location?.state?.id
  const activeData = data?.filter((elm) => elm?.id === dataID)?.[0]
  const activeDescription = descriptions?.[dataID - 1]
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
            <Box sx={{ flex: '0 0 28%' }}>
              <Button
                color="inherit"
                size="large"
                startIcon={<BackArrowIcon />}
                onClick={() => navigate('/pokemons')}
              >
                Go Back
              </Button>
            </Box>
            <Stack gap={2} sx={{ flex: '0 0 44%' }}>
              <Typography
                color="inherit"
                variant="h4"
                textTransform={'capitalize'}
                textAlign={'center'}
                sx={{ textShadow: `2px 2px 2px #000` }}
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
                    height: { xs: 150, md: 200 },
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
            <Box sx={{ flex: '0 0 28%' }}>
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
          <Stack gap={2} bgcolor={'white'} p={{ xs: 2, md: 3 }}>
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
              sx={{ textShadow: '1px 1px 2px black' }}
            >
              About
            </Typography>
            <Stack
              direction={'row'}
              gap={3}
              divider={<Divider orientation="vertical" flexItem />}
            >
              <Stack
                gap={1}
                sx={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
              >
                <Stack direction={'row'} gap={1} alignItems={'center'}>
                  <WeightIcon fontSize="large" />
                  <Typography>
                    {(activeData?.weight / 10).toLocaleString('en', {
                      style: 'unit',
                      unit: 'kilogram',
                    })}
                  </Typography>
                </Stack>
                <Typography variant="body2" color={'#666'}>
                  Weight
                </Typography>
              </Stack>
              <Stack
                gap={1}
                sx={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
              >
                <Stack direction={'row'} gap={1} alignItems={'center'}>
                  <HeightIcon fontSize="large" />
                  <Typography>
                    {(activeData?.height / 10).toLocaleString('en', {
                      style: 'unit',
                      unit: 'meter',
                    })}
                  </Typography>
                </Stack>
                <Typography variant="body2" color={'#666'}>
                  Height
                </Typography>
              </Stack>
              <Stack
                gap={1}
                sx={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
              >
                <Box>
                  {activeData?.moves?.slice(0, 2)?.map((elm, i) => (
                    <Typography
                      textTransform={'capitalize'}
                      textAlign={'center'}
                      key={i}
                    >
                      {formatText(elm?.move?.name)}
                    </Typography>
                  ))}
                </Box>
                <Typography variant="body2" color={'#666'}>
                  Moves
                </Typography>
              </Stack>
            </Stack>
            <Typography variant="subtitle1" textAlign={'center'}>
              {activeDescription}
            </Typography>
            <Stack>
              <Typography
                variant="h5"
                fontWeight={'medium'}
                color={activeColor}
                textAlign={'center'}
                sx={{ textShadow: '1px 1px 2px black' }}
              >
                Base Stats
              </Typography>
              {activeData?.stats?.map(({ base_stat, stat }, index) => (
                <StatItem
                  key={index}
                  name={formatText(stat?.name)}
                  value={base_stat}
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
