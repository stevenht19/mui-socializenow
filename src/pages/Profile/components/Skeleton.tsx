import { Box, Skeleton as MuiSkeleton } from '@mui/material'

export const Skeleton = () => {
  return (
    <Box 
      display='flex'
      minHeight='13rem' 
      gap={2.5}
    >
      <MuiSkeleton
        variant='circular'
        animation='wave'
        width={120}
        height={120}
      />
      <Box maxWidth='13rem' flex={1}>
        <MuiSkeleton
          variant='rectangular'
          animation='wave'
          height={45}
        />
        <MuiSkeleton
          sx={{ mt: 2 }}
          variant='rectangular'
          animation='wave'
          height={35}
        />
      </Box>
    </Box>
  )
}
