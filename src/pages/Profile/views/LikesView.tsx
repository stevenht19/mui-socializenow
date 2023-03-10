import { Flex } from '@/components/atoms/Flex'
import { Lock } from '@mui/icons-material'
import { Typography } from '@mui/material'
import { useProfile } from '../hooks'

const LikesView = ({ id = '' }) => {
  const { profile } = useProfile(id)

  return (
    <Flex
      flexDirection='column'
      py={3}
      px={1}
    >
      <Lock
        sx={{ fontSize: '3.05rem' }}
      />
      <Typography 
        component='h2' 
        variant='h6'
        textAlign='center'
        fontWeight={700}
        mt={1.5}
      >
        This user's liked posts are private.
      </Typography>
      <Typography 
        component='p'
        color='text.secondary'
        textAlign='center'
        fontWeight={400}
        mt={1}
      >
        Posts liked by {profile?.username} are currently hidden
      </Typography>
    </Flex>
  )
}

export default LikesView