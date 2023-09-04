import {
  Card,
  CardContent,
  Typography,
  Box,
  CardActionArea,
  Skeleton,
} from '@mui/material'
import { PokeCardProps } from '../App.props'

import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { pokeTypeColors } from '../constants'
const Pokecard = ({ name, type, id }: PokeCardProps) => {
  const imgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
  const hoverColor = pokeTypeColors?.[type]
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
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
          <Skeleton
            variant="rounded"
            width={'100%'}
            sx={{ height: { md: 200 }, display: loading ? 'initial' : 'none' }}
          />
          <Box
            component={'img'}
            sx={{
              width: 'auto',
              height: 'auto',
              maxWidth: '100%',
              maxHeight: 200,
              objectFit: 'contain',
              display: loading ? 'none' : 'initial',
            }}
            src={imgURL}
            alt={name}
            onLoad={() => setLoading(false)}
          />
        </Box>

        <CardContent
          sx={{
            width: 1,
            ':last-child': {
              pb: 0,
            },
          }}
        >
          {loading ? (
            <Skeleton variant="text" sx={{ fontSize: '1.25rem' }} />
          ) : (
            <Typography
              variant="h5"
              textTransform={'uppercase'}
              fontFamily={'cursive'}
              textAlign={'center'}
            >
              {name}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default Pokecard
