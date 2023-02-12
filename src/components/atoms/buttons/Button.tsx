import { Button as MuiButton, ButtonProps } from '@mui/material'

type Props = ButtonProps & {
  onClick?: () => void
  children: React.ReactNode
}

export const Button: React.FC<Props> = ({ 
  onClick, 
  children,  
  variant,
  ...rest
}) => {
  return (
    <MuiButton
      variant={variant || 'contained'}
      disableFocusRipple
      sx={{
        zIndex: (theme) => theme.zIndex.drawer - 1
      }}
      {...(onClick && { onClick })}
      {...rest}
    >
      {children}
    </MuiButton>
  )
}
