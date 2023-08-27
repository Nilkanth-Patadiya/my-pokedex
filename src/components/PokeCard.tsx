import { Card, CardMedia, CardContent, Typography } from '@mui/material'
import { PokeCardProps } from '../App.props'

const Pokecard = ({ name, id }: PokeCardProps) => {
  return (
    <Card
      sx={{
        p: 2,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <CardMedia
        component={'img'}
        sx={{
          width: 'auto',
          height: 'auto',
          maxWidth: '100%',
          maxHeight: 200,
          objectFit: 'contain',
        }}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
        alt={name}
      />
      <CardContent
        sx={{
          ':last-child': {
            pb: 0,
          },
        }}
      >
        <Typography gutterBottom variant="h5" textTransform={'capitalize'}>
          {name}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Pokecard
