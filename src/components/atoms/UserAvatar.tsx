import { useAccount } from '@/hooks'
import { Avatar } from '@mui/material'

type Props = {
  customSize?: number
}

export const UserAvatar = ({ customSize }: Props) => {
  const { account } = useAccount()
  
  if (!account) {
    return <Avatar />
  }

  return (
    <Avatar sx={{
      width: customSize || 40,
      height: customSize || 40,
      bgcolor: account.color,
      ...(customSize && { fontSize: '1.15rem' })
    }}>
      {
        account.username[0].toUpperCase()
      }
    </Avatar>
  )
}
