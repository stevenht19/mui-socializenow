import { useAuthModal, useBoolean } from '@/hooks'
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
  Snackbar,
  Typography
} from '@mui/material'
import { red } from '@mui/material/colors'
import { Flex } from './Flex'
import { Modal } from '../layout/Auth'

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
      <Actions />
    </Card>
  )
}

const Actions = () => {

  const { boolean: isOpen, setTrue: onOpenSnackbar, setFalse: onCloseSnackbar } = useBoolean()
  const { user, open, onClose, verifyIfUserExists } = useAuthModal()

  const handleShare = () => {
    onOpenSnackbar()
  }

  const handleLike = () => {
    console.log('fetch')
  }

  const onClick = () => {
    verifyIfUserExists(handleLike)
  }

  return <>
    <Modal
      open={open}
      onClose={onClose}
      customMessage='You will need an account to like posts'
    />
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open={isOpen}
      onClose={onCloseSnackbar}
      autoHideDuration={1900}
      message='Link copied to clipboard'
      key={'bottom center'}
    />
    <CardActions>
      <Flex>
        {
          user ? (
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<FavoriteOutlined />}
            />
          ) : (
            <IconButton onClick={onClick}>
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
      <IconButton
        onClick={handleShare} 
        sx={{
          ml: 'auto'
        }}
      >
        <Share />
      </IconButton>
    </CardActions>
  </>
}

export default PostCard