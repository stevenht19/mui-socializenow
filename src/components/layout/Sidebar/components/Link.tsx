import { ListItemButton } from '@mui/material'
import { Link as WouterLink, LinkProps } from 'wouter'

type Props = {
  to: LinkProps['to']
  children: React.ReactNode
  disablePadding?: true
}

export const Link = ({ to, disablePadding, children }: Props) => {
  return (
    <ListItemButton 
      component={WouterLink}
      to={to}
      {...(disablePadding && { sx: { py: 0, pr: 0, pl: 1 }})}
    >
      {children}
    </ListItemButton>
  )
}