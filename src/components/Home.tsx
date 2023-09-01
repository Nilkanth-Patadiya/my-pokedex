import { Grid } from '@mui/material'
import { usePokeData } from '../services/usePokeData'
import PokeList from './PokeList'
import React from 'react'

const Home = () => {
  const [page, setPage] = React.useState(1)
  const { data } = usePokeData()

  return (
    <Grid item flexGrow={1} px={5}>
      <PokeList
        page={page}
        setPage={setPage}
        items={data?.data?.results}
        itemsPerPage={20}
        totalPages={32}
      />
    </Grid>
  )
}

export default Home
