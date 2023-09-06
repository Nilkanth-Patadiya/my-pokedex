import { createTheme, responsiveFontSizes } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: '#622569',
    },
  },
})

export const responsiveTheme = responsiveFontSizes(theme)
