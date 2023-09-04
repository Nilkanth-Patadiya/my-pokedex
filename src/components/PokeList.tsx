import { Grid, Pagination } from '@mui/material'
import Pokecard from './PokeCard'
import React from 'react'
import { Pokemon } from '../App.props'
import { useStateContext } from '../hooks/useStateContext'
import { useOutletContext } from 'react-router-dom'
import PokeCardLoader from './PokeCardLoader'
import { itemsPerPage, totalPages } from '../constants'

const PokeList = () => {
  const { data: items, isLoading } = useOutletContext<{
    data: Pokemon[]
    isLoading: boolean
  }>()
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
    <Grid container flexWrap={'wrap'} spacing={5}>
      {!items?.length ? (
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
        sm={12}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Pagination
          color="primary"
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
