import { useLocation, useNavigate, useOutletContext } from 'react-router-dom'
import { OutletContextProps } from '../App.props'
import { pokeTypeColors, shortStatNames } from '../utils/constants'
import StatItem from '../components/StatItem'
import { formatDescription, formatText } from '../utils/helper'
import { BackArrowIcon, HeightIcon, WeightIcon } from '../assets/icons'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Theme } from '@mui/material/styles'
import Skeleton from '@mui/material/Skeleton'
import { useMemo } from 'react'

const PokemonDetails = () => {
  const { data, descriptions, isDescriptionLoading } =
    useOutletContext<OutletContextProps>()
  const location = useLocation()
  const navigate = useNavigate()
  const dataID = location?.state?.id
  const activeData = data?.filter((elm) => elm?.id === dataID)?.[0]
  const activeDescription = descriptions?.[dataID - 1]
  const activeColor = pokeTypeColors?.[activeData?.types?.[0]?.type?.name]
  const maxStat = useMemo(
    () =>
      activeData?.stats?.reduce((acc, value) => {
        return (acc = acc > value?.base_stat ? acc : value?.base_stat)
      }, 0),
    [activeData?.stats]
  )
  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  return (
    <Grid item flexGrow={1}>
      <Grid
        container
        justifyContent={'center'}
        height={1}
        sx={{
          background: {
            xs: 'none',
            sm: `repeating-linear-gradient(45deg,${activeColor},${activeColor} 10px,#fff 10px,#fff 20px)`,
          },
        }}
        py={{ xs: 0, md: 2 }}
      >
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              display: 'flex',
              color: 'whitesmoke',
              width: 1,
              bgcolor: activeColor,
              py: 2,
              px: { xs: 1, sm: 2 },
            }}
          >
            <Box sx={{ flex: { xs: '1 1 15%', sm: '1 1 28%' } }}>
              <Button
                color="inherit"
                size={matches ? 'small' : 'large'}
                startIcon={<BackArrowIcon />}
                onClick={() => navigate('/')}
              >
                {matches ? 'Back' : 'Go Back'}
              </Button>
            </Box>
            <Stack gap={2} sx={{ flex: { xs: '1 1 70%', sm: '1 1 44%' } }}>
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
                    aspectRatio: '1/1',
                  }}
                  src={'/pokeball_bg.svg'}
                  alt={'Pokeball background'}
                />
                <Box
                  component={'img'}
                  sx={{
                    width: 'auto',
                    maxWidth: '100%',
                    height: { xs: 150, md: '50%' },
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    animation: 'floating 3s ease-in-out infinite',
                    '@keyframes floating': {
                      '0%': {
                        transform: 'translateY(-50%) translateX(-50%)',
                      },
                      '50%': {
                        transform:
                          'translateY(-50%) translateX(-50%) translateY(-5px)',
                      },
                      '100%': {
                        transform: 'translateY(-50%) translateX(-50%)',
                      },
                    },
                  }}
                  src={
                    activeData?.sprites?.other?.dream_world?.front_default ?? ''
                  }
                  alt={activeData?.name}
                />
              </Box>
            </Stack>
            <Box sx={{ flex: { xs: '1 1 15%', sm: '1 1 28%' } }}>
              <Typography
                color="inherit"
                variant="h6"
                textAlign={{ xs: 'center', sm: 'end' }}
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
              gap={{ xs: 1.5, md: 3 }}
              divider={<Divider orientation="vertical" flexItem />}
            >
              <Stack
                gap={1}
                sx={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
              >
                <Stack direction={'row'} alignItems={'center'}>
                  <WeightIcon fontSize={matches ? 'medium' : 'large'} />
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
                <Stack direction={'row'} alignItems={'center'}>
                  <HeightIcon fontSize={matches ? 'medium' : 'large'} />
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
            {isDescriptionLoading ? (
              <Box>
                <Skeleton />
                <Skeleton />
              </Box>
            ) : (
              <Typography variant="subtitle1" textAlign={'center'}>
                {formatDescription(activeDescription)}
              </Typography>
            )}
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
                  name={
                    matches
                      ? shortStatNames?.[formatText(stat?.name)]
                      : formatText(stat?.name)
                  }
                  value={base_stat}
                  color={activeColor}
                  maxStat={maxStat}
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
