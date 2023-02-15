import { useAccount } from '@/hooks'
import { Avatar as MuiAvatar } from '@mui/material'
import { Avatar } from './Avatar'

type Props = {
  customSize?: number
}

export const UserAvatar = ({ customSize }: Props) => {
  const { account } = useAccount()

  if (!account) {
    return <MuiAvatar />
  }

  return (
    <Avatar 
      username={account.username}
      color={account.color}
      picture={account?.picture}
      ariaLabel={`${account.username}-avatar-profile`}
      size={customSize}
    />
  )
}
