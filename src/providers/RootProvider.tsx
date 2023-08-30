import { CssBaseline } from '@mui/material'
import { PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
const RootProvider = ({ children }: PropsWithChildren<unknown>) => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <CssBaseline enableColorScheme />
      {children}
    </QueryClientProvider>
  )
}

export default RootProvider
