import { Box, Typography } from '@mui/material'

export const Statistics = () => (
  <Box py={4} display='flex' gap={4}>
    <Typography component='p' color='text.secondary'>
      <Typography component='span' fontWeight={700} color='text.primary' pr={1}>
        95
      </Typography>
      Following
    </Typography>
    <Typography component='p' color='text.secondary'>
      <Typography component='span' fontWeight={700} color='text.primary' pr={1}>
        95
      </Typography>
      Following
    </Typography>
    <Typography component='p' color='text.secondary'>
      <Typography component='span' fontWeight={700} color='text.primary' pr={1}>
        100
      </Typography>
      Following
    </Typography>
  </Box>
)