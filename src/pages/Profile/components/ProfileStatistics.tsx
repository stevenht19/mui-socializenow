import { Box, Typography } from '@mui/material'

const getRandomNumber = (max?: number) => {
  return (Math.random() * (max || 2000)).toFixed(0)
}

export const Statistics = () => {
  const followingCount = getRandomNumber(100)
  const followersCount = getRandomNumber()
  const likesCount = getRandomNumber(2200 * 5)

  return (
    <Box py={3} display='flex' gap={4} flexWrap='wrap'>
      <Typography component='p' color='text.secondary'>
        <Typography component='span' fontWeight={700} color='text.primary' pr={1}>
          {followingCount}
        </Typography>
        Following
      </Typography>
      <Typography component='p' color='text.secondary'>
        <Typography component='span' fontWeight={700} color='text.primary' pr={1}>
          {followersCount}
        </Typography>
        Followers
      </Typography>
      <Typography component='p' color='text.secondary'>
        <Typography component='span' fontWeight={700} color='text.primary' pr={1}>
          {likesCount}
        </Typography>
        Likes
      </Typography>
    </Box>
  )
}