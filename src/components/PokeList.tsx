import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  Pagination,
  TextField,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import ClearIcon from '@mui/icons-material/Clear'
import Pokecard from './PokeCard'
import React from 'react'
import { OutletContextProps } from '../App.props'
import { useStateContext } from '../hooks/useStateContext'
import { useOutletContext } from 'react-router-dom'
import PokeCardLoader from './PokeCardLoader'
import { itemsPerPage, totalPages } from '../constants'
import Fuse from 'fuse.js'

const PokeList = () => {
  const [query, setQuery] = React.useState('')
  const { data, isLoading } = useOutletContext<OutletContextProps>()
  const fuse = new Fuse(data, {
    keys: ['name'],
  })
  const items = query ? fuse.search(query).map((val) => val?.item) : data

  const state = useStateContext()
  const page = state!.page
  const setPage = state!.setPage
  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }

  // Calculate the range of items for the current page
  const startIndex = (page - 1) * itemsPerPage
  const currentPageItems = items?.slice(startIndex, startIndex + itemsPerPage)
  return (
    <Grid container flexWrap={'wrap'} spacing={{ xs: 3, md: 5 }}>
      <Grid
        item
        xs={12}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Box sx={{ width: { xs: 1, md: 0.25 } }}>
          <TextField
            id="basic-search"
            variant="outlined"
            disabled={isLoading}
            fullWidth
            placeholder="Search pokémon by name"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              endAdornment: query ? (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setQuery('')}
                    sx={{ '&:hover': { bgcolor: 'initial' } }}
                  >
                    <ClearIcon />
                  </IconButton>
                </InputAdornment>
              ) : null,
            }}
            sx={{
              '& .MuiInputBase-input': {
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                py: 1,
              },
            }}
          />
        </Box>
      </Grid>
      {isLoading ? (
        <PokeCardLoader />
      ) : (
        currentPageItems?.map(({ name, types, id }) => (
          <Grid item xs={12} md={3} key={name}>
            <Pokecard name={name} id={id} type={types?.[0]?.type?.name} />
          </Grid>
        ))
      )}
      <Grid
        item
        xs={12}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Pagination
          color="primary"
          disabled={isLoading}
          showFirstButton
          showLastButton
          variant="outlined"
          count={totalPages}
          page={page}
          onChange={handleChange}
        ></Pagination>
      </Grid>
    </Grid>
  )
}

export default PokeList
