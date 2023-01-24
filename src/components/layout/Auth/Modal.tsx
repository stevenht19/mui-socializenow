import { Box, Modal } from '@mui/material';
import { ModalTabs } from './Tabs';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  paddingBottom: '1.5rem',
  bgcolor: 'background.paper',
  maxWidth: 425,
  boxShadow: 24,
  borderRadius: 1.5
}

type Props = {
  isOpen: boolean
  onClose(): void
}

const AuthModal: React.FC<Props> = ({
  isOpen,
  onClose
}) => {
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
    >
      <Box sx={style}>
        <ModalTabs />
      </Box>
    </Modal>
  )
}
export default AuthModal