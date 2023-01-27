import { useBoolean, useAuthModal } from '@/hooks'
import { EmojiEmotions, Photo, Place } from '@mui/icons-material'
import { Box, Button, Divider, InputBase, Paper } from '@mui/material'
import { grey } from '@mui/material/colors'
import { Flex } from '@/components/atoms/Flex'
import { PostModal } from '@/components/layout/Posts'
import { Modal } from '@/components/layout/Auth'
import { UserAvatar } from '@/components/atoms/UserAvatar'

const message = `You need an account for posting at first`

const PostBox = ({ openPostModal }: {
  openPostModal: () => void
}) => {
  const { open, onClose, verifyIfUserExists } = useAuthModal()

  const onClick = () => {
    verifyIfUserExists(openPostModal)
  }

  return <>
    <Modal 
      open={open} 
      onClose={onClose}
      customMessage={message} 
    />
    <Paper sx={{
      p: 1.5,
      gap: 1.2,
      mt: 2,
      mb: 6
    }}>
      <Box
        display='flex'
        gap={1.2}
        mb={1.8}
      >
        <UserAvatar />
        <InputBase
          placeholder={`What's on your mind?`}
          fullWidth
          readOnly
          onClick={onClick}
          sx={{
            bgcolor: grey[100],
            borderRadius: '2rem',
            pl: 2
          }}
        />
      </Box>
      <Divider sx={{ mb: 2 }} />
      <Flex>
        <Button
          startIcon={<Photo />}
          onClick={onClick}
          sx={{
            flex: 1,
            textTransform: 'capitalize'
          }}
        >
          Photo
        </Button>
        <Button
          onClick={onClick}
          startIcon={<EmojiEmotions />}
          sx={{
            flex: 1,
            textTransform: 'capitalize'
          }}
        >
          Feeling
        </Button>
        <Button
          onClick={onClick}
          startIcon={<Place />}
          sx={{
            flex: 1,
            textTransform: 'capitalize'
          }}
        >
          Location
        </Button>
      </Flex>
    </Paper>
  </>
}

export const PostInput = () => {
  const { boolean, setTrue, setFalse } = useBoolean()

  return <>
    <PostModal
      open={boolean}
      onClose={setFalse}
    />
    <PostBox openPostModal={setTrue} />
  </>
}