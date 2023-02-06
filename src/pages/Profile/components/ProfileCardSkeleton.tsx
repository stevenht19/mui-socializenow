import { Box, Skeleton } from '@mui/material'

export const ProfileCardSkeleton = () => {
  return (
    <Box display='flex' gap={2.5} px={4} minHeight='13rem'>
      <Skeleton
        variant='circular'
        animation='wave'
        width={120}
        height={120}
      />
      <Box maxWidth='15rem' flex={1}>
        <Skeleton
          variant='rectangular'
          animation='wave'
          height={45}
        />
        <Skeleton
          sx={{ mt: 2 }}
          variant='rectangular'
          animation='wave'
          height={35}
        />
      </Box>
    </Box>
  )
}
