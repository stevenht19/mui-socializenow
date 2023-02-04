import { Modal as MuiModal , Box } from '@mui/material'

export type ModalProps = {
  children?: React.ReactNode
  p?: number
  mxWidth?: number
  open: boolean
  onClose(): void
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  paddingBottom: '.5rem',
  bgcolor: 'background.paper',
  width: '100%',
  boxShadow: 24,
  borderRadius: 1.5
}

const Modal: React.FC<ModalProps> = ({ 
  children,
  p,
  mxWidth,
  open, 
  onClose 
}) => {
  return (
    <MuiModal 
      open={open} 
      onClose={onClose}
    >
      <Box 
        sx={style}
        maxWidth={mxWidth || 430}
        {...(p && { p })}
      >
        {children}
      </Box>
    </MuiModal>
  )
}

export default Modal