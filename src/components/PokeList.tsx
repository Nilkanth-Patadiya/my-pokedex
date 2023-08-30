import { Grid, Pagination } from '@mui/material'
import Pokecard from './PokeCard'
import React from 'react'
import { PokeListProps } from '../App.props'

const PokeList = ({ items, itemsPerPage, totalPages }: PokeListProps) => {
  const [page, setPage] = React.useState(1)
  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }
  // Calculate the range of items for the current page
  const startIndex = (page - 1) * itemsPerPage
  const currentPageItems = items?.slice(startIndex, startIndex + itemsPerPage)
  return (
    <Grid container flexWrap={'wrap'} spacing={5}>
      {currentPageItems?.map(({ name }, index) => (
        <Grid item xs={12} md={3} key={name}>
          <Pokecard name={name} id={index + 1} page={page - 1} />
        </Grid>
      ))}
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
