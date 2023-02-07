import { Backdrop as MuiBackdrop, CircularProgress } from '@mui/material'

export const Backdrop = () => {
  return (
    <MuiBackdrop 
      sx={{ color: '#fff', zIndez: (theme) => theme.zIndex.drawer + 1000 }}
      open={true}
    >
      <CircularProgress color='inherit' />
    </MuiBackdrop>
  )
}