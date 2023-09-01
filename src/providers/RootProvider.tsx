import { CssBaseline, ThemeProvider } from '@mui/material'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RouterProvider } from 'react-router-dom'
import { router } from '../App.routes'
import StateProvider from './StateProvider'
import { theme } from '../theme'
const RootProvider = () => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <StateProvider>
          <CssBaseline enableColorScheme />
          <RouterProvider router={router} />
        </StateProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default RootProvider
