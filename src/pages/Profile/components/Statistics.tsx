import { Box, Typography } from '@mui/material'

const getRandomNumber = (max?: number) => {
  return (Math.random() * (max || 2000)).toFixed(0)
}

export const Statistics = () => {
  const followingCount = getRandomNumber(100)
  const followersCount = getRandomNumber()
  const likesCount = getRandomNumber(4)

  return (
    <Box py={4} display='flex' columnGap={3} rowGap={2} flexWrap='wrap'>
      <Statistic 
        value={followingCount}
        title='Following'
      />
      <Statistic 
        value={followersCount}
        title='Followers'
      />
      <Statistic 
        value={likesCount + 'k'}
        title='Likes'
      />
    </Box>
  )
}

type Props = {
  value: string
  title: string
}

const Statistic = ({ value, title }: Props) => {
  return (
    <Typography component='p' color='text.secondary'>
      <Typography component='span' fontWeight={700} color='text.primary' pr={1}>
        {value}
      </Typography>
      {title}
    </Typography>
  )
}
