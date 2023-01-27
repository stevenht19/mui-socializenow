import { Flex } from '@/components/atoms/Flex'
import { UserAvatar } from '@/components/atoms/UserAvatar'
import { Box, Button, InputBase, Typography } from '@mui/material'
import { usePostInput } from './hooks'

type Props = {
  account: {
    username: string
    color: string
  }
  children: React.ReactNode
  onClose: () => void
}

export const Form: React.FC<Props> = ({ 
  children, 
  account, 
  onClose 
}) => {
  const { value, isDisabled, onChange, handleSubmit } = usePostInput(onClose)

  return (
    <Box
      p={2.2}
      component='form'
      onSubmit={handleSubmit}
    >
      <Flex gap={1.5} mb={2}>
        <UserAvatar />
        <Typography variant='body1' fontWeight={400}>
          {account?.username}
        </Typography>
      </Flex>
      <InputBase
        multiline
        fullWidth
        onChange={onChange}
        minRows={3.5}
        maxRows={10}
        spellCheck={false}
        value={value}
        placeholder={`What's on your mind?`}
        sx={{
          pb: 2
        }}
      />
      {children}
      <Button
        type='submit'
        fullWidth
        variant='contained'
        sx={{ mt: 2 }}
        disabled={isDisabled}
      >
        Post
      </Button>
    </Box>
  )
}
