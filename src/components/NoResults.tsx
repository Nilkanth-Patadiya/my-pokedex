import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useImgURL } from '../hooks/useImgURL'

const NoResults = ({ query }: { query: string }) => {
  const imgURL = useImgURL('/Search.svg')
  return (
    <Stack
      gap={3}
      p={3}
      alignItems={'center'}
      justifyContent={'center'}
      width={1}
    >
      <Box
        component={'img'}
        sx={{
          width: 'auto',
          height: 'auto',
          maxWidth: '100%',
          maxHeight: 200,
          objectFit: 'contain',
        }}
        src={imgURL}
        alt={'No results found'}
      />
      <Typography variant="h6">{`No Results Found for "${query}"`}</Typography>
      <Typography variant="subtitle1" color={'#434343'}>
        Try rephrasing or shortening your search
      </Typography>
    </Stack>
  )
}

export default NoResults
