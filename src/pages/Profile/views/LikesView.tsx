import { Flex } from '@/components/atoms/Flex';
import { Typography } from '@mui/material';
import { Lock }  from '@mui/icons-material';
import { Props } from '../types';
import { useFakeProfile } from '../hooks/useFakeProfile';

export const LikesView = ({ params }: Props) => {
  const { id } = params
  const { profile } = useFakeProfile(id!)

  return (
    <Flex 
      justifyContent='center'
      flexDirection='column'
      py={4.5}
      gap={2}
    >
      <Lock sx={{ fontSize: '3rem' }} />
      <Typography 
        variant='h6' 
        fontWeight={700}
        lineHeight={1}
      >
        The user's liked posts are private
      </Typography>
      <Typography 
        variant='body1' 
        fontWeight={500}
        color='text.secondary'
      >
        Videos liked by {profile?.username} are currently hidden.
      </Typography>
    </Flex>
  )
}
