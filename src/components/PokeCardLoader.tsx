import {
  Card,
  CardActionArea,
  Box,
  Skeleton,
  CardContent,
  Grid,
} from '@mui/material'
import { itemsPerPage } from '../constants'

const PokeCardLoader = () => {
  return Array(itemsPerPage)
    .fill('')
    .map((_, index) => (
      <Grid item xs={12} md={3} key={index + 'loader'}>
        <Card
          sx={{
            height: '100%',
          }}
        >
          <CardActionArea
            sx={{
              p: 2,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            disabled
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexGrow: 1,
                width: 1,
              }}
            >
              <Skeleton
                variant="rounded"
                width={'100%'}
                sx={{ height: { md: 200 } }}
              />
            </Box>
            <CardContent
              sx={{
                width: 1,
                ':last-child': {
                  pb: 0,
                },
              }}
            >
              <Skeleton variant="text" sx={{ fontSize: '1.25rem' }} />
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    ))
}

export default PokeCardLoader
