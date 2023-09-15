/* eslint-disable react-refresh/only-export-components */
import React, { PropsWithChildren } from 'react'
import { StateProviderProps } from '../App.props'

const StateContext = React.createContext<StateProviderProps | null>(null)

const StateProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [page, setPage] = React.useState(1)

  return (
    <StateContext.Provider value={{ page, setPage }}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => {
  const context = React.useContext(StateContext)
  if (!context) {
    throw new Error('useStateContext must be used within StateProvider')
  }
  return context
}

export default StateProvider
