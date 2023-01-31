import { LoadingButton as MuiLoadingButton } from '@mui/lab'

type Props = {
  loading: boolean
  children: React.ReactNode
}

export const LoadingButton: React.FC<Props> = ({ loading, children }) => {
  return (
    <MuiLoadingButton
      loading={loading}
      disabled={loading}
      type='submit'
      variant='contained'
      size='large'
      fullWidth
      sx={{
        mt: 5.2
      }}
    >
      {children}
    </MuiLoadingButton>
  )
}
