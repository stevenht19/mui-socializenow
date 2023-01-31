import { Button as MuiButton, ButtonProps } from '@mui/material'

type Props = ButtonProps & {
  onClick: () => void
  children: React.ReactNode
}

export const Button: React.FC<Props> = ({ 
  onClick, 
  children, 
  startIcon, 
  variant, 
  sx
}) => {
  return (
    <MuiButton
      variant={variant || 'contained'}
      onClick={onClick}
      {...(startIcon && { startIcon })}
      {...(sx && { sx })}
    >
      {children}
    </MuiButton>
  )
}