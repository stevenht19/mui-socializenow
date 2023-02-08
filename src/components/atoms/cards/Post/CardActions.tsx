import { useBoolean } from '@/hooks'
import { Flex } from '@/components/atoms/Flex'
import { Snackbar } from '@/components/atoms/Snackbar'
import { ChatBubbleOutline, Share } from '@mui/icons-material'
import { CardActions, Collapse, IconButton, Typography } from '@mui/material'
import { Comments } from './components/Comments'

type Props = {
  children: React.ReactNode
}

export const Actions = ({ children }: Props) => {
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
      {children}
      <Flex>
        <IconButton onClick={onToggle} aria-labelledby='share'>
          <ChatBubbleOutline />
        </IconButton>
        <Typography id='share' component='span' variant='body2'>
          0
        </Typography>
      </Flex>
      <IconButton
        onClick={showSnackbar}
        aria-label='share post'
        sx={{
          ml: 'auto'
        }}
      >
        <Share />
      </IconButton>
    </CardActions>
    <Collapse in={commentsOpen}>
      <Comments />
    </Collapse>
  </>
}
