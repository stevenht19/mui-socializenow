import { useState } from 'react'
import { UserAvatar } from '@/components/atoms/UserAvatar'
import { AccountCircle, ExitToApp } from '@mui/icons-material'
import { IconButton, Menu, MenuItem, Tooltip, styled, MenuProps, Divider } from '@mui/material'

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    transformOrigin={{
      horizontal: 'right',
      vertical: 'top'
    }}
    anchorOrigin={{
      horizontal: 'right',
      vertical: 'bottom'
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    minWidth: 185,
    color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 23,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      }
    }
  }
}))

const menuPaperProps = {
  elevation: 0,
  sx: {
    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
    overflow: 'visible',
    mt: 1.5,
    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      bgcolor: 'background.paper',
      transform: 'translateY(-50%) rotate(45deg)',
      zIndex: 0,
    },
  }
}
export const AccountMenu = () => {
  const [anchorEl, setAnchor] = useState<HTMLElement | null>(null)

  const isOpen = Boolean(anchorEl)

  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchor(e.currentTarget)
  }

  const onClose = () => {
    setAnchor(null)
  }

  return (
    <>
      <Tooltip title='Settings'>
        <IconButton
          onClick={onClick}
          aria-controls={isOpen ? 'account-menu' : undefined}
          aria-expanded={isOpen ? 'true' : undefined}
          aria-haspopup='true'
          sx={{
            ml: .5,
            borderRadius: '50%',
          }}
        >
          <UserAvatar customSize={36} />
        </IconButton>
      </Tooltip>
      <StyledMenu
        id='account-menu'
        anchorEl={anchorEl}
        open={isOpen}
        onClose={onClose}
        PaperProps={menuPaperProps}
      >
        <MenuItem onClick={onClose}>
          <AccountCircle />
          Profile
        </MenuItem>
        <Divider sx={{ my: .5 }}/>
        <MenuItem>
          <ExitToApp />
          Logout
        </MenuItem>
      </StyledMenu>
    </>
  )
}