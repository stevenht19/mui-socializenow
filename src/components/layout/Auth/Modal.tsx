import Modal, { ModalProps } from '@/components/atoms/Modal'
import { TabPanelProvider } from '@/context/TabPanel'
import { Tab } from '@mui/material'
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
      <TabPanelProvider
        views={[
          <Login onClose={onClose} />, 
          <Signup onClose={onClose} />
        ]}
      >
        <Tab label='Login' />
        <Tab label='Register' />
      </TabPanelProvider>
    </Modal>
  )
}

export default AuthModal