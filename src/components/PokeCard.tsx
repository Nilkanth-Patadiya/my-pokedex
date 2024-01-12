import { PokeCardProps } from '../App.props'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { pokeTypeColors, pokemonImgURL } from '../utils/constants'
import { formatText } from '../utils/helper'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import Box from '@mui/material/Box'
import Skeleton from '@mui/material/Skeleton'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
const Pokecard = ({ name, type, id }: PokeCardProps) => {
  const imgURL = `${pokemonImgURL}/${id}.svg`
  const hoverColor = pokeTypeColors?.[type]
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  return (
    <Card
      elevation={8}
      sx={{
        height: '100%',
        '&:hover': {
          animation: 'jump 0.3s ease-out 1',
          '@keyframes jump': {
            '0%': {
              transform: 'translateY(-3px)',
            },
            '100%': {
              transform: 'translateY(0px)',
            },
          },
        },
      }}
    >
      <CardActionArea
        disabled={loading}
        onClick={() => {
          navigate(`details?name=${name}`, { state: { id } })
        }}
        sx={{
          pt: 2,
          px: 2,
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
            sx={{ height: 180, display: loading ? 'initial' : 'none' }}
          />
          <Box
            component={'img'}
            width={100}
            height={100}
            sx={{
              width: 'auto',
              height: 'auto',
              maxWidth: '100%',
              maxHeight: 180,
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
          }}
        >
          {loading ? (
            <Skeleton variant="text" sx={{ fontSize: '1.25rem' }} />
          ) : (
            <Typography
              variant="h6"
              textTransform={'uppercase'}
              fontFamily={'Alkatra Variable'}
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
