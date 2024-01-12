import {
  Card,
  CardActionArea,
  Box,
  Skeleton,
  CardContent,
  Grid,
} from '@mui/material'
import { itemsPerPage } from '../utils/constants'

const PokeCardLoader = () => {
  return Array(itemsPerPage)
    .fill('')
    .map((_, index) => (
      <Grid item xs={12} md={3} key={index + 'loader'}>
        <Card
          elevation={8}
          sx={{
            height: '100%',
          }}
        >
          <CardActionArea
            sx={{
              pt: 2,
              px: 2,
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
                sx={{ height: { md: 180 } }}
              />
            </Box>
            <CardContent
              sx={{
                width: 1,
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
