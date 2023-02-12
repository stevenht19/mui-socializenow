import { Flex } from '@/components/atoms/Flex'
import { IconButton, Typography } from '@mui/material'

type Props = {
  id: string
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
        aria-labelledby={id}
        {...auto && { sx: { ml: 'auto' } }}
      >
        {icon}
      </IconButton>
      {children}
    </>
  )
}

export const ButtonValue = ({ id = '', value = 0 }) => {
  return (
    <Typography
      id={id}
      component='span'
      variant='body2'
    >
      {value}
    </Typography>
  )
}
