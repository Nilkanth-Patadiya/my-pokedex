import { Theme, createTheme, responsiveFontSizes } from '@mui/material'

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: '#622569',
    },
    info: {
      main: '#FFD700',
    },
  },
})

export const responsiveTheme = responsiveFontSizes(theme)
