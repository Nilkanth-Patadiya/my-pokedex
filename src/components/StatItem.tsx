import { StatItemProps } from '../App.props'
import { normalise } from '../utils/helper'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import LinearProgress from '@mui/material/LinearProgress'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
const StatItem = ({ name, value, color, maxStat }: StatItemProps) => {
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
        sx={{ flex: { xs: '1 1 25%', sm: '1 1 20%' } }}
      >
        {name}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flex: { xs: '1 1 75%', sm: '1 1 80%' },
        }}
      >
        <Box sx={{ flex: { xs: '1 1 15%', md: '1 1 8%' } }}>
          <Typography color="#666">{value}</Typography>
        </Box>
        <Box sx={{ flex: { xs: '1 1 85%', md: '1 1 92%' } }}>
          <LinearProgress
            sx={{ borderRadius: 2, height: '6px' }}
            color={'inherit'}
            variant="determinate"
            value={normalise(value, 0, maxStat)}
          />
        </Box>
      </Box>
    </Stack>
  )
}

export default StatItem
