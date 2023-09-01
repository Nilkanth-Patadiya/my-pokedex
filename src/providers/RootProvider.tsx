import { CssBaseline } from '@mui/material'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RouterProvider } from 'react-router-dom'
import { router } from '../App.routes'
const RootProvider = () => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <CssBaseline enableColorScheme />
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default RootProvider
