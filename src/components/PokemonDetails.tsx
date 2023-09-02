import { Box, Grid, Typography } from '@mui/material'
import { useLocation } from 'react-router-dom'

const PokemonDetails = () => {
  const location = useLocation()
  const dataID = location?.state?.id
  return (
    <Grid item flexGrow={1} px={5} pb={3} pt={3}>
      <Box sx={{ display: 'flex' }}>
        <Typography variant="h1">Pokemon ID is: </Typography>
        <Typography variant="h1" textAlign={'center'}>
          {dataID}
        </Typography>
      </Box>
    </Grid>
  )
}

export default PokemonDetails
