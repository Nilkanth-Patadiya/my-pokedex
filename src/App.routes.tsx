import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from 'react-router-dom'
import Home from './components/Home'
import App from './App'
import PokemonDetails from './components/PokemonDetails'

// Configure nested routes with JSX
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/pokemons" element={<App />}>
        <Route index element={<Home />} />
        <Route path="details" element={<PokemonDetails />} />
      </Route>
      <Route path="/" element={<Navigate to={'/pokemons'} replace />} />
    </Route>
  )
)
