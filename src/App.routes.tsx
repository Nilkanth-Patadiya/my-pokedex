import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from 'react-router-dom'
import AppLayout from './AppLayout'
import Home from './pages/Home'
import PokemonDetails from './pages/PokemonDetails'

// Configure nested routes with JSX
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/pokemons" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="details" element={<PokemonDetails />} />
      </Route>
      <Route path="/" element={<Navigate to={'/pokemons'} replace />} />
    </Route>
  )
)
