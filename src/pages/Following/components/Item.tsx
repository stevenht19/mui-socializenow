import { Grid } from '@mui/material'

export const Item = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <Grid item xs={4}>
      {children}
    </Grid>
  )
}