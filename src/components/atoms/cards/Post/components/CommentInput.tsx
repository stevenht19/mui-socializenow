import { TextField } from '@mui/material'
import { Flex } from '@/components/atoms/Flex'
import { UserAvatar } from '@/components/atoms/UserAvatar'
import { Props } from '@/hocs/withAuthModal'

export const CommentInput = ({ verifyUser, user, children }: Props) => {
  return (
    <Flex p={2} gap={1.5}>
      <UserAvatar />
      {
        user ? (
          children
        ) : (
          <TextField
            placeholder='Write a comment'
            autoComplete='off'
            onClick={verifyUser}
            fullWidth
          />
        )
      }
    </Flex>
  )
}