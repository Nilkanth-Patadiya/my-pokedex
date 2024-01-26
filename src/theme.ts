import { Theme, createTheme, responsiveFontSizes } from '@mui/material'

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: '#622569',
    },
    info: {
      main: '#FFD700',
    },
    text: {
      primary: '#343434',
    },
  },
})

export const responsiveTheme = responsiveFontSizes(theme)
