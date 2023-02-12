import { Flex } from '@/components/atoms/Flex'
import { UserAvatar } from '@/components/atoms/UserAvatar'
import { Props } from '@/hocs/withAuthModal'
import { TextField } from '@mui/material'

export const CommentInput = ({ user, verifyUser, children }: Props) => {
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
            fullWidth
            onClick={verifyUser}
          />
        )
      }
    </Flex>
  )
}