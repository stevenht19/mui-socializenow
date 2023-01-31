import { useBoolean } from '@/hooks'
import { Props } from '@/hocs/withAuthModal'
import { Flex } from '@/components/atoms/Flex'
import { Snackbar } from '@/components/atoms/Snackbar'
import { ChatBubbleOutline, FavoriteBorder, FavoriteOutlined, Share } from '@mui/icons-material'
import { CardActions, Checkbox, Collapse, IconButton, Typography } from '@mui/material'

export const Actions: React.FC<Props> = ({ user, verifyUser }) => {
  const [snackbarOpen, showSnackbar, hideSnackbar] = useBoolean()
  const [commentsOpen, ...rest] = useBoolean() 

  const onToggle = () => rest[2]()

  return <>
    <Snackbar
      open={snackbarOpen}
      onClose={hideSnackbar}
      duration={1900}
      message='Link copied to clipboard'
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
            <IconButton onClick={verifyUser}>
              <FavoriteBorder />
            </IconButton>
          )
        }
        <Typography component='span' variant='body2'>
          140
        </Typography>
      </Flex>
      <Flex>
        <IconButton onClick={onToggle}>
          <ChatBubbleOutline />
        </IconButton>
        <Typography component='span' variant='body2'>
          30
        </Typography>
      </Flex>
      <IconButton
        onClick={showSnackbar}
        sx={{
          ml: 'auto'
        }}
      >
        <Share />
      </IconButton>
    </CardActions>
    <Collapse in={commentsOpen}>
      List Of Comments
    </Collapse>
  </>
}
