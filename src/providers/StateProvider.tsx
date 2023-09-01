import React, { PropsWithChildren } from 'react'
import { StateProviderProps } from '../App.props'

export const StateContext = React.createContext<StateProviderProps | null>(null)

const StateProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [page, setPage] = React.useState(1)

  return (
    <StateContext.Provider value={{ page, setPage }}>
      {children}
    </StateContext.Provider>
  )
}

export default StateProvider
