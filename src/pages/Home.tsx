import Fuse from 'fuse.js'
import React from 'react'
import { useOutletContext } from 'react-router-dom'
import { OutletContextProps } from '../Props'
import Pokecard from '../components/PokeCard'
import PokeCardLoader from '../components/PokeCardLoader'
import NoResults from '../components/NoResults'
import { itemsPerPage } from '../utils/constants'
import { ClearIcon, SearchIcon } from '../assets/icons'
import { useStateContext } from '../providers/StateProvider'
import Grid from '@mui/material/Grid'
import Pagination from '@mui/material/Pagination'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Theme } from '@mui/material/styles'

const Home = () => {
  const [query, setQuery] = React.useState('')
  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))
  const { data: initialData, isLoading } =
    useOutletContext<OutletContextProps>()
  const data = initialData?.map((elm, index) => {
    return { ...elm, id: index + 1 }
  })
  const fuse = new Fuse(data, {
    keys: ['name'],
  })
  const items = query ? fuse.search(query).map((val) => val?.item) : data
  const { page, setPage, oldPage } = useStateContext()
  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value)
  }
  const handleSearchChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPage(1)
    setQuery(e.target.value)
  }
  const clearSearch = () => {
    setQuery('')
    setPage(oldPage)
  }
  // Calculate the range of items for the current page
  const startIndex = (page - 1) * itemsPerPage
  const currentPageItems = items?.slice(startIndex, startIndex + itemsPerPage)

  return (
    <Grid item flexGrow={1} px={{ xs: 3, md: 5 }} py={3}>
      <Grid container flexWrap={'wrap'} spacing={3}>
        <Grid
          item
          xs={12}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box sx={{ width: { xs: 1, sm: 0.5, md: 0.25 } }}>
            <TextField
              id="basic-search"
              variant="outlined"
              disabled={isLoading}
              fullWidth
              placeholder="Search pokémon by name"
              value={query}
              onChange={handleSearchChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                endAdornment: query ? (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={clearSearch}
                      sx={{ '&:hover': { bgcolor: 'initial' } }}
                      title="clear text"
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
          currentPageItems?.map(({ name, id }) => (
            <Grid item xs={6} sm={4} md={3} xl={2} key={name}>
              <Pokecard name={name} id={id} />
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
          sx={{
            display: items?.length > 0 ? 'flex' : 'none',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Pagination
            color="primary"
            disabled={isLoading}
            showFirstButton={matches ? false : true}
            showLastButton={matches ? false : true}
            siblingCount={matches ? 0 : 1}
            variant="outlined"
            count={Math.round((items?.length ?? 20) / itemsPerPage)}
            page={page}
            onChange={handlePageChange}
          ></Pagination>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Home
