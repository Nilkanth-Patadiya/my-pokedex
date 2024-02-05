import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import AppLayout from './AppLayout'
import Home from './pages/Home'
import PokemonDetails from './pages/PokemonDetails'

// Configure nested routes with JSX
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="pokemon-details" element={<PokemonDetails />} />
      </Route>
    </Route>
  )
)
