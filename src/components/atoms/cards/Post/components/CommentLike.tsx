import { Button } from '@/components/atoms/buttons/Button'
import { Props } from '@/hocs/withAuthModal'

export const CommentLike = ({ verifyUser, children }: Props) => {
  return (
    <Button
      onClick={verifyUser}
      variant='text'
      sx={{
        color: 'text.secondary',
        textTransform: 'lowercase',
        pl: 1,
      }}
    >
      {children}
    </Button>
  )
}