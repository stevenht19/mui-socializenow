import { Favorite, MoreVert, Reply, Share } from '@mui/icons-material'
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import { red } from '@mui/material/colors'

const PostCard = () => {
  return (
    <Card>
      <CardHeader
        title='Jesse Pinkman'
        subheader='3 days ago'
        avatar={
          <Avatar 
            sx={{ bgcolor: red[300] }} 
            aria-label='post'
          >
            R
          </Avatar>
        }
      />
      <CardMedia 
        component='img'
        height='300'
        image='https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067__340.png'
      />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          This is a post
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton>
          <Favorite />
        </IconButton>
        <IconButton>
          <Reply />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default PostCard