import { Typography } from '@mui/material'

export const Error = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <Typography color='error' variant='body2' pt={1}>
      {children}
    </Typography>
  )
}
