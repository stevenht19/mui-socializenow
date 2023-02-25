import { LoadingButton as MuiLoadingButton } from '@mui/lab'

type Props = {
  loading: boolean
  isDisabled: boolean
  mt?: number | null
  children: React.ReactNode
  size?: 'small' | 'medium' | 'large'
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
        mt: mt === null ? 0 : 5.2
      }}
    >
      <span>
        {children}
      </span>
    </MuiLoadingButton>
  )
}
