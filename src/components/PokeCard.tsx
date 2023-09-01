import {
  Card,
  CardContent,
  Typography,
  Box,
  CardActionArea,
} from '@mui/material'
import { PokeCardProps } from '../App.props'

import { useColor } from 'color-thief-react'
import { useNavigate } from 'react-router-dom'
const Pokecard = ({ name, url, id, page }: PokeCardProps) => {
  const imgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
    page * 20 + id
  }.svg`
  const { data } = useColor(imgURL, 'hex', {
    crossOrigin: 'anonymous',
  })
  const navigate = useNavigate()
  return (
    <Card
      sx={{
        height: '100%',
      }}
    >
      <CardActionArea
        onClick={() => {
          navigate(`details?name=${name}`, { state: { url } })
        }}
        sx={{
          p: 2,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          '&:hover': {
            border: 2,
            borderColor: data,
            '& .MuiTypography-root': { color: data, fontWeight: 600 },
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
          <Typography variant="h5" textTransform={'uppercase'}>
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default Pokecard
