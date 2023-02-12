import { Account } from '@/models'
import { Avatar as MuiAvatar } from '@mui/material'

type Props = {
  picture: Account['picture']
  username: Account['username']
  color: Account['color']
  ariaLabel: string
  size?: number
}

export const Avatar: React.FC<Props> = ({ 
  picture, 
  username, 
  color, 
  ariaLabel, 
  size 
}) => {

  if (!picture) return (
    <MuiAvatar 
      sx={{ 
        bgcolor: color, 
        ...(size && { 
          width: size, 
          height: size, 
          fontSize: (size / 40) + 'rem' 
        }) 
      }} 
      aria-label={ariaLabel}
      alt={username + '-avatar'}
    >
      {username[0].toUpperCase()}
    </MuiAvatar>
  )

  return (
    <MuiAvatar 
      src={picture} 
      alt={username + '-avatar'}
      aria-label={ariaLabel} 
      {...(size && { 
        sx: { 
          width: size, 
          height: size
        } 
      })}
    />
  )
}
