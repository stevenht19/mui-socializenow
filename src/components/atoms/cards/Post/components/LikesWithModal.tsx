import withAuthModal, { Props } from '@/hocs/withAuthModal'
import { FavoriteBorder } from '@mui/icons-material'
import { ActionButton, ButtonValue } from './ActionButton'

const LikesGuard = ({ children, verifyUser }: Props) => {
  return (
    <ActionButton
      icon={<FavoriteBorder />}
      onClick={verifyUser}
    >
      <ButtonValue value={children as number} />
    </ActionButton>
  )
}

export const LikesWithModal = withAuthModal(LikesGuard)