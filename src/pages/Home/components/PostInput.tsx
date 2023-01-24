import { useAccount } from '@/hooks'
import { EmojiEmotions, Photo, Place } from '@mui/icons-material'
import { Avatar, Box, Button, Divider, InputBase, Paper } from '@mui/material'
import { Flex } from '@/components/atoms/Flex'
import { grey } from '@mui/material/colors'

export const PostInput = () => {
  const { verifyIfUserExists } = useAccount()

  const onClick = () => {
    verifyIfUserExists(() => console.log('action'))
  }

  return (
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
        <Avatar />
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
  )
}