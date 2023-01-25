import Modal, { ModalProps } from '@/components/atoms/Modal'
import { Tab } from '@mui/material'
import { ModalTabs } from './Tabs'

type Props = ModalProps & {
  customMessage?: string
}

const AuthModal: React.FC<Props> = ({
  open,
  onClose,
  customMessage
}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
    >
      <ModalTabs customMessage={customMessage}>
        <Tab label='Login' />
        <Tab label='Register' />
      </ModalTabs>
    </Modal>
  )
}
export default AuthModal