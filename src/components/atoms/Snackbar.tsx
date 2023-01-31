import { Snackbar as MuiSnackbar } from '@mui/material'

type Props = {
  open: boolean
  duration?: number
  message: string
  onClose(): void
}

export const Snackbar: React.FC<Props> = ({ open, duration, message, onClose }) => (
  <MuiSnackbar
    open={open}
    onClose={onClose}
    message={message}
    autoHideDuration={duration || 3000}
    key='bottom center'
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center'
    }}
  />
)