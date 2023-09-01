import { useContext } from 'react'
import { StateContext } from '../providers/StateProvider'

export const useStateContext = () => {
  return useContext(StateContext)
}
