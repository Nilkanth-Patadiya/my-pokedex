import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  Pagination,
  TextField,
} from '@mui/material'
import Pokecard from './PokeCard'
import React from 'react'
import { OutletContextProps } from '../App.props'
import { useOutletContext } from 'react-router-dom'
import PokeCardLoader from './PokeCardLoader'
import { itemsPerPage } from '../utils/constants'
import Fuse from 'fuse.js'
import NoResults from './NoResults'
import { ClearIcon, SearchIcon } from '../assets/icons'
import { useStateContext } from '../providers/StateProvider'

const PokeList = () => {
  const [query, setQuery] = React.useState('')
  const { data, isLoading } = useOutletContext<OutletContextProps>()
  const fuse = new Fuse(data, {
    keys: ['name'],
  })
  const items = query ? fuse.search(query).map((val) => val?.item) : data

  const { page, setPage } = useStateContext()

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }

  // Calculate the range of items for the current page
  const startIndex = (page - 1) * itemsPerPage
  const currentPageItems = items?.slice(startIndex, startIndex + itemsPerPage)

  return (
    <Grid container flexWrap={'wrap'} spacing={3}>
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
            onChange={(e) => {
              setPage(1)
              setQuery(e.target.value)
            }}
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
      ) : items?.length > 0 ? (
        currentPageItems?.map(({ name, types, id }) => (
          <Grid item xs={6} sm={4} md={3} xl={2} key={name}>
            <Pokecard name={name} id={id} type={types?.[0]?.type?.name} />
          </Grid>
        ))
      ) : (
        <Grid item xs={12}>
          <NoResults query={query} />
        </Grid>
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
          count={Math.round((items?.length ?? 20) / itemsPerPage)}
          page={page}
          onChange={handleChange}
        ></Pagination>
      </Grid>
    </Grid>
  )
}

export default PokeList
