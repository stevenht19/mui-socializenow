import Modal, { ModalProps } from '@/components/atoms/Modal'
import { ModalTabs } from './Tabs'
import { Login } from './Login'
import { Signup } from './Signup'

const AuthModal: React.FC<ModalProps> = ({
  open,
  onClose
}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
    >
      <ModalTabs 
        firstView={<Login onClose={onClose} />}
        secondView={<Signup onClose={onClose} />}
      />
    </Modal>
  )
}

export default AuthModal