import { Link } from 'wouter'
import { Avatar, Typography, styled, Paper } from '@mui/material'
import { Add } from '@mui/icons-material'
import { Button } from '@/components/atoms/Button'
import { FakeAccount } from '@/models'
import { Item } from './Item'
import { Routes } from '@/routes'

const StyledLink = styled(Link)`
  text-decoration: none;
`

export const UserCard: React.FC<FakeAccount> = ({
  id,
  image,
  firstName,
  lastName,
  username
}) => {
  return (
    <Item>
      <StyledLink to={`${Routes.FAKE_USER}/${id}`}>
        <Paper
          elevation={0}
          variant='outlined'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'end',
            alignItems: 'center',
            height: 250,
            px: 3,
            pb: 3,
            borderRadius: 2
          }}
        >
          <Avatar
            src={image}
            alt={`${firstName}-card`}
            sx={{
              width: 85,
              height: 85
            }}
          />
          <Typography 
            component='h2' 
            fontWeight={800}
            mt={1.5}
          >
            {firstName} {lastName}
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
      </StyledLink>
    </Item>
  )
}