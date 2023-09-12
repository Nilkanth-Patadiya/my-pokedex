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
import { pokeTypeColors } from '../utils/constants'
import { formatText } from '../utils/helper'
const Pokecard = ({ name, type, id }: PokeCardProps) => {
  const imgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
  const hoverColor = pokeTypeColors?.[type]
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  return (
    <Card
      elevation={8}
      sx={{
        height: '100%',
      }}
    >
      <CardActionArea
        disabled={loading}
        onClick={() => {
          navigate(`details?name=${name}`, { state: { id } })
        }}
        sx={{
          p: 2,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          border: 2,
          borderColor: 'transparent',
          '&:hover': {
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
            width={100}
            height={100}
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
            fetchpriority={id < 22 ? 'high' : 'auto'}
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
              variant="h6"
              textTransform={'uppercase'}
              fontFamily={'cursive'}
              textAlign={'center'}
              fontWeight={'bold'}
            >
              {formatText(name)}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default Pokecard
