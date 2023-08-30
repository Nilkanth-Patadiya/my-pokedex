import { Card, CardContent, Typography, Box } from '@mui/material'
import { PokeCardProps } from '../App.props'

const Pokecard = ({ name, id, page }: PokeCardProps) => {
  return (
    <Card
      sx={{
        p: 2,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
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
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
            page * 20 + id
          }.svg`}
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
        <Typography gutterBottom variant="h5" textTransform={'capitalize'}>
          {name}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Pokecard
