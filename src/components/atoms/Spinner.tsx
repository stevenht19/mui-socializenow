import { CircularProgress } from '@mui/material'

export const Spinner = ({ size }: {
  size?: number
}) => {
  return (
    <CircularProgress {...(size && { size })} />
  )
}
