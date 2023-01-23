import { 
  Avatar,
  Box,
  Divider, 
  List, 
  ListItem, 
  ListItemAvatar, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText, 
  ListSubheader
} from '@mui/material'
import { Home, People } from '@mui/icons-material'
import { blue, green, purple } from '@mui/material/colors'

const Sidebar = () => {
  return (
    <Box 
      flex={.35}
      top={70}
      position='sticky' 
      height='100%'
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary='Feed' />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <People />
            </ListItemIcon>
            <ListItemText primary='Following' />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List subheader={
        <ListSubheader disableGutters>
          Following accounts
        </ListSubheader>
      }>
        <ListItem disableGutters>
          <ListItemAvatar>
            <Avatar sx={{
              width: 40,
              height: 40,
              bgcolor: blue[200]
            }}>
              W
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary='WW' secondary='Walter White' />
        </ListItem>
        <ListItem disablePadding>
          <ListItemAvatar>
            <Avatar sx={{
              width: 40,
              height: 40,
              bgcolor: purple[200]
            }}>
              W
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary='Jess_20' secondary='Jesse Pinkman' />
        </ListItem>
      </List>
      <List subheader={
        <ListSubheader disableGutters>
          Suggested accounts
        </ListSubheader>
      }>
        <ListItem disableGutters>
          <ListItemAvatar>
            <Avatar sx={{
              width: 40,
              height: 40
            }}>
              T
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary='hello123' secondary='Steven' />
        </ListItem>
        <ListItem disablePadding>
          <ListItemAvatar>
            <Avatar sx={{
              width: 40,
              height: 40,
              bgcolor: green[200]
            }}>
              J
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary='Max_12' secondary='Max' />
        </ListItem>
      </List>
    </Box>
  )
}

export default Sidebar