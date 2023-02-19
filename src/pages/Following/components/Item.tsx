import { Grid } from '@mui/material'

export const Item = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <Grid item xs={12} sm={6} lg={4}>
      {children}
    </Grid>
  )
}