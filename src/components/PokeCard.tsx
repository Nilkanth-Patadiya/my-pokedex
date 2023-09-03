import {
  Card,
  CardContent,
  Typography,
  Box,
  CardActionArea,
} from '@mui/material'
import { PokeCardProps } from '../App.props'

import { useNavigate } from 'react-router-dom'
import { pokeTypeColors } from '../constants'
const Pokecard = ({ name, type, id }: PokeCardProps) => {
  const imgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
  const hoverColor = pokeTypeColors?.[type]
  const navigate = useNavigate()
  return (
    <Card
      sx={{
        height: '100%',
      }}
    >
      <CardActionArea
        onClick={() => {
          navigate(`details?name=${name}`, { state: { id } })
        }}
        sx={{
          p: 2,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          '&:hover': {
            border: 2,
            borderColor: hoverColor,
            '& .MuiTypography-root': { color: hoverColor, fontWeight: 600 },
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexGrow: 1,
            width: 1,
          }}
        >
          <Box
            component={'img'}
            sx={{
              width: 'auto',
              height: 'auto',
              maxWidth: '100%',
              maxHeight: 200,
              objectFit: 'contain',
            }}
            src={imgURL}
            alt={name}
          />
        </Box>

        <CardContent
          sx={{
            ':last-child': {
              pb: 0,
            },
          }}
        >
          <Typography
            variant="h5"
            textTransform={'uppercase'}
            fontFamily={'cursive'}
          >
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default Pokecard
