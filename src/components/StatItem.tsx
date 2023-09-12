import { Box, Divider, LinearProgress, Stack, Typography } from '@mui/material'
import { StatItemProps } from '../App.props'
import { normalise } from '../utils/helper'

const StatItem = ({ name, value, color }: StatItemProps) => {
  return (
    <Stack
      direction={'row'}
      gap={2}
      p={1}
      divider={<Divider orientation="vertical" flexItem />}
      sx={{ width: 1, color: color }}
    >
      <Typography
        variant="subtitle1"
        color={'inherit'}
        textTransform={'uppercase'}
        sx={{ flex: '1 1 20%' }}
      >
        {name}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', flex: '1 1 80%' }}>
        <Box sx={{ flex: '1 1 5%' }}>
          <Typography color="#666">{value}</Typography>
        </Box>
        <Box sx={{ flex: '1 1 95%' }}>
          <LinearProgress
            sx={{ borderRadius: 2, height: '6px' }}
            color={'inherit'}
            variant="determinate"
            value={normalise(value, 0, 252)}
          />
        </Box>
      </Box>
    </Stack>
  )
}

export default StatItem
