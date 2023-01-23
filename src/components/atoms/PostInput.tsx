import { EmojiEmotions, Photo, Place } from '@mui/icons-material'
import { Avatar, Box, Button, Divider, InputBase, Paper } from '@mui/material'
import { grey } from '@mui/material/colors'
import { Flex } from '@/components/atoms/Flex'

const PostInput = () => {
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
          sx={{ 
            flex: 1, 
            textTransform: 'capitalize' 
          }}
        >
          Photo
        </Button>
        <Button 
          startIcon={<EmojiEmotions />} 
          sx={{ 
            flex: 1, 
            textTransform: 'capitalize' 
          }}
        >
          Feeling
        </Button>
        <Button 
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

export default PostInput