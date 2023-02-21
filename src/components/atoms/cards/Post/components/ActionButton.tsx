import { IconButton, Typography } from '@mui/material'

type Props = {
  id?: string
  auto?: boolean
  icon: React.ReactNode
  children?: React.ReactNode
  onClick: () => void
}

export const ActionButton = ({ 
  id,
  auto,
  children,
  icon,
  onClick 
}: Props) => {

  return (
    <>
      <IconButton
        onClick={onClick}
        {...(id && { id, "aria-labelledby": id })}
        {...auto && { sx: { ml: 'auto' } }}
      >
        {icon}
      </IconButton>
      {children}
    </>
  )
}

type ButtonValueProps = {
  id?: Props['id']
  value: number
}

export const ButtonValue = ({ id, value = 0 }: ButtonValueProps) => {
  return (
    <Typography
      component='span'
      variant='body2'
      {...(id && { id })}
    >
      {value}
    </Typography>
  )
}
