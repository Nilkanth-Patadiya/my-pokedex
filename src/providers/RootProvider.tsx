import { CssBaseline, ThemeProvider } from '@mui/material'
import { RouterProvider } from 'react-router-dom'
import { router } from '../Router'
import StateProvider from './StateProvider'
import { responsiveTheme } from '../theme'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const RootProvider = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        retry: false,
        staleTime: 60 * 60 * 1000,
      },
    },
  })

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={responsiveTheme}>
        <StateProvider>
          <CssBaseline enableColorScheme />
          <RouterProvider router={router} />
        </StateProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default RootProvider
