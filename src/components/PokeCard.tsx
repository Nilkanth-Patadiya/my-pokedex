import { Card, CardContent, Typography, Box } from '@mui/material'
import { PokeCardProps } from '../App.props'

import { useColor } from 'color-thief-react'
const Pokecard = ({ name, id, page }: PokeCardProps) => {
  const imgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
    page * 20 + id
  }.svg`
  const { data } = useColor(imgURL, 'hex', {
    crossOrigin: 'anonymous',
    quality: 20,
  })
  return (
    <Card
      sx={{
        p: 2,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '&:hover': {
          cursor: 'pointer',
          border: 2,
          borderColor: data,
          transform: 'rotate(2deg)',
          '& .MuiTypography-root': { color: data },
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
        <Typography gutterBottom variant="h5" textTransform={'uppercase'}>
          {name}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Pokecard
