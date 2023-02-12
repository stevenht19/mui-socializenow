import { CircularProgress } from '@mui/material'

export const Spinner = ({ size, mx }: {
  size?: number,
  mx?: number
}) => {
  return (
    <CircularProgress 
      {...(size && { size })} 
      {...(mx && { sx: { mx: mx } })} 
    />
  )
}
