import { useAccount } from '@/hooks'
import { 
  ChatBubbleOutline,
  FavoriteBorder, 
  FavoriteOutlined,
  Share 
} from '@mui/icons-material'
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography
} from '@mui/material'
import { red } from '@mui/material/colors'
import { Flex } from './Flex'

const PostCard = () => {
  return (
    <Card>
      <CardHeader
        title='Jesse Pinkman'
        titleTypographyProps={{
          fontWeight: 500
        }}
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
        <Typography variant='body2'>
          This is a post
        </Typography>
      </CardContent>
      <PostCardActions />
    </Card>
  )
}

const PostCardActions = () => {
  const { user, verifyIfUserExists } = useAccount()

  const handleLike = () => {
    verifyIfUserExists(() => console.log('like'))
  }

  return (
    <CardActions>
      <Flex>
        {
          user ? (
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<FavoriteOutlined />}
            />
          ) : (
            <IconButton onClick={handleLike}>
              <FavoriteBorder />
            </IconButton>
          )
        }
        <Typography component='span' variant='body2'>
          140
        </Typography>
      </Flex>
      <Flex>
        <IconButton>
          <ChatBubbleOutline />
        </IconButton>
        <Typography component='span' variant='body2'>
          30
        </Typography>
      </Flex>
      <IconButton sx={{
        ml: 'auto'
      }}>
        <Share />
      </IconButton>
    </CardActions>
  )
}

export default PostCard