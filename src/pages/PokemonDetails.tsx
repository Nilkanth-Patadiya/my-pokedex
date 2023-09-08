import {
  Box,
  Button,
  Chip,
  Grid,
  IconButton,
  Stack,
  Typography,
} from '@mui/material'
import { useLocation, useNavigate, useOutletContext } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import { OutletContextProps } from '../App.props'
import { useImgURL } from '../hooks/useImgURL'
import { pokeTypeColors } from '../constants'

const PokemonDetails = () => {
  const { data } = useOutletContext<OutletContextProps>()
  const location = useLocation()
  const navigate = useNavigate()
  const dataID = location?.state?.id
  const activeData = data?.filter((elm) => elm?.id === dataID)?.[0]
  const activeColor = pokeTypeColors?.[activeData?.types?.[0]?.type?.name]
  const imgUrl = useImgURL('/pokeball_bg.svg')
  return (
    <Grid item flexGrow={1} py={3}>
      <Grid container height={1}>
        <Grid
          item
          xs={2}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 1,
          }}
        >
          <IconButton color="primary">
            <ArrowBackIcon />
          </IconButton>
        </Grid>
        <Grid item xs={8}>
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
                {activeData?.name}
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
                        transform: 'rotate(0deg)',
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
                    height: { md: 250 },
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
                variant="subtitle1"
                textAlign={'end'}
                fontWeight={'bold'}
              >
                {`#${activeData?.id?.toLocaleString('en', {
                  minimumIntegerDigits: 3,
                })}`}
              </Typography>
            </Box>
          </Box>
          <Stack direction={'row'} justifyContent={'center'} spacing={1} mt={2}>
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
        </Grid>
        <Grid
          item
          xs={2}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 1,
          }}
        >
          <IconButton color="primary">
            <ArrowForwardIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default PokemonDetails
