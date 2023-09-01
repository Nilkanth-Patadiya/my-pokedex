import { Box, Typography } from '@mui/material'
import { useLocation } from 'react-router-dom'

const PokemonDetails = () => {
  const location = useLocation()
  const dataURL = location?.state?.url
  return (
    <Box>
      <Typography textAlign={'center'}>{dataURL}</Typography>
      <Typography></Typography>
    </Box>
  )
}

export default PokemonDetails
