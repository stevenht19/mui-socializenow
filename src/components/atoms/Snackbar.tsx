import { Snackbar as MuiSnackbar } from '@mui/material'

type Props = {
  open: boolean
  duration?: number
  message?: string
  onClose(): void
}

export const Snackbar: React.FC<Props> = ({ 
  open, 
  duration, 
  message, 
  onClose 
}) => (
  <MuiSnackbar
    open={open}
    onClose={onClose}
    message={message || 'Link copied to clipboard'}
    autoHideDuration={duration || 3000}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center'
    }}
  />
)