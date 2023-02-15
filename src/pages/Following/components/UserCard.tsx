import { Typography, Paper } from '@mui/material'
import { Add } from '@mui/icons-material'
import { Button } from '@/components/atoms/buttons/Button'
import { Account } from '@/models'
import { Avatar } from '@/components/atoms/Avatar'
import { Link } from '@/components/atoms/Link'
import { Routes } from '@/utils'
import { Item } from './Item'

export const UserCard: React.FC<Account> = ({
  _id,
  picture,
  firstname,
  lastname,
  username,
  color
}) => {
  return (
    <Item>
      <Link to={`${Routes.USER}/${_id}`}>
        <Paper
          elevation={0}
          variant='outlined'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'end',
            alignItems: 'center',
            height: 255,
            px: 3,
            pb: 3,
            borderRadius: 2
          }}
        >
          <Avatar
            picture={picture}
            username={username}
            color={color}
            ariaLabel={'following-card'}
            size={85}
          />
          <Typography 
            component='h2' 
            fontWeight={800}
            mt={1.5}
          >
            {firstname} {lastname}
          </Typography>
          <Typography
            variant='body2'
            component='span'
            textAlign='center'
            color='text.secondary'
          >
            {username}
          </Typography>
          <Button
            fullWidth
            size='small'
            startIcon={<Add />}
            variant='outlined'
            sx={{ mt: 2.5 }}
          >
            Follow
          </Button>
        </Paper>
      </Link>
    </Item>
  )
}