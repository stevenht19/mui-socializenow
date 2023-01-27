import Modal, { ModalProps } from '@/components/atoms/Modal'
import { useAccount } from '@/hooks'
import { Flex } from '@/components/atoms/Flex'
import { EmojiEmotions, Label, Photo } from '@mui/icons-material'
import { IconButton, Paper, Typography } from '@mui/material'
import { Form } from './Form'

const PostModal = ({ open, onClose }: ModalProps) => {
  const { account } = useAccount()

  return (
    <Modal
      open={open}
      onClose={onClose}
    >
      <Typography
        variant='body1'
        component='h2'
        textAlign={'center'}
        py={1.5}
        borderBottom={(theme) => `1px solid ${theme.palette.divider}`}>
        Create Post
      </Typography>
      <Form onClose={onClose} account={account!}>
        <Paper variant='outlined' sx={{
          p: .4,
          mb: 1.5
        }}>
          <Flex>
            <IconButton sx={{
              color: '#F5A524'
            }}>
              <EmojiEmotions />
            </IconButton>
            <IconButton color='success'>
              <Photo />
            </IconButton>
            <IconButton color='info'>
              <Label />
            </IconButton>
          </Flex>
        </Paper>
      </Form>
    </Modal>
  )
}


export default PostModal