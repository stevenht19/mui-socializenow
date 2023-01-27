import { useAuthModal } from '@/hooks'
import { Flex } from '@/components/atoms/Flex'
import { Modal } from '@/components/layout/Auth'
import { AccountCircle, Add, Inbox, Notifications } from '@mui/icons-material'
import { Badge, Button, IconButton, Tooltip } from '@mui/material'
import { AccountMenu } from './AccountMenu'

type Props = {
  handlePostModal: () => void
}

export const AppbarButtons = ({ handlePostModal }: Props) => {
  const { user, open, onOpen, onClose, verifyIfUserExists } = useAuthModal()

  const handleUploadPost = () => {
    verifyIfUserExists(handlePostModal)
  }

  return (
    <Flex gap={2}>
      <Modal open={open} onClose={onClose} />
      <Button
        variant='outlined'
        startIcon={<Add />}
        onClick={handleUploadPost}
        sx={{
          mr: 1
        }}
      >
        Post
      </Button>
      {
        !user ? (
          <Button
            variant='contained'
            startIcon={<AccountCircle />}
            onClick={onOpen}
          >
            Login
          </Button>
        ) : <>
          <Tooltip title='Inbox'>
            <IconButton>
              <Badge color='error' badgeContent={9}>
                <Inbox color='action' />
              </Badge>
            </IconButton>
          </Tooltip>
          <AccountMenu />
        </>
      }
    </Flex>
  )
}