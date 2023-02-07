import { Spinner } from '@/components/atoms/Spinner'
import { Home, Phone } from '@mui/icons-material'
import { List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { useFakeProfile } from '../hooks/useFakeProfile'
import { Props } from '../types'

export const AboutView = ({ params }: Props) => {
  const { id } = params
  const { profile, isLoading } = useFakeProfile(id!)

  return (
    <div>
      <Typography color='text.secondary' py={4}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum facilis quaerat libero assumenda itaque, quam explicabo? Commodi in expedita nesciunt, esse provident adipisci vero nisi ullam magnam libero voluptates ab!
      </Typography>
      {
        !isLoading ? (
          <List>
            <ListItem disableGutters>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary={`Lives in ${profile?.address.city || ''}, ${profile?.address.state || ''}`} />
            </ListItem>
            <ListItem disableGutters>
              <ListItemIcon>
                <Phone />
              </ListItemIcon>
              <ListItemText primary={`${profile?.phone}`} />
            </ListItem>
          </List>
        ) : (
          <Spinner />
        )
      }
    </div>
  )
}