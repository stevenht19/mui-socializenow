import { LoadingButton as MuiLoadingButton } from '@mui/lab'

type Props = {
  loading: boolean
  isDisabled: boolean
  size?: 'small' | 'medium' | 'large'
  mt?: number
  children: React.ReactNode
}

export const LoadingButton: React.FC<Props> = ({ 
  loading,
  isDisabled, 
  size,
  mt,
  children
}) => {
  return (
    <MuiLoadingButton
      loading={loading}
      disabled={isDisabled}
      type='submit'
      variant='contained'
      size={size || 'large'}
      fullWidth
      sx={{
        mt: mt || 5.2
      }}
    >
      {children}
    </MuiLoadingButton>
  )
}
