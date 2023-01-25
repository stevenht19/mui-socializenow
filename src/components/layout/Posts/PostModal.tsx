import Modal, { ModalProps } from '@/components/atoms/Modal'
import { Flex } from '@/components/atoms/Flex'
import { EmojiEmotions, Label, Photo } from '@mui/icons-material'
import { Avatar, Box, Button, IconButton, TextField, Typography } from '@mui/material'

const PostModal = ({ open, onClose }: ModalProps) => {
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
      <Form />
    </Modal>
  )
}

const Form = () => {
  return (
    <Box p={2.2} component='form'>
      <Flex gap={1.5} mb={2}>
        <Avatar>
          M
        </Avatar>
        <Typography variant='body1' fontWeight={400}>
          Martin Steven
        </Typography>
      </Flex>
      <TextField
        multiline
        fullWidth
        variant='standard'
        placeholder={`What's on your mind?`}
        minRows={3.5}
        maxRows={10}
      />
      <Flex py={2}>
        <IconButton color='info'>
          <Label />
        </IconButton>
        <IconButton color='success'>
          <Photo />
        </IconButton>
        <IconButton color='warning'>
          <EmojiEmotions />
        </IconButton>
      </Flex>
      <Button fullWidth variant='contained' sx={{ mt: 2 }}>
        Post
      </Button>
    </Box>
  )
}

export default PostModal