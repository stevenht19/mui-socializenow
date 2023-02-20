import { Fragment, lazy, Suspense } from 'react'
import { useAccount, useBoolean, usePosts } from '@/hooks'
import { Post } from '@/models'
import { ChatBubbleOutline, Share } from '@mui/icons-material'
import { CardActions, Collapse } from '@mui/material'
import { Flex } from '@/components/atoms/Flex'
import { Snackbar } from '@/components/atoms/Snackbar'
import { Spinner } from '@/components/atoms/Spinner'
import { ActionButton, ButtonValue } from './ActionButton'
import { LikesWithModal } from './LikesWithModal'
import { Likes } from './Likes'

const CommentForm = lazy(() => import('./CommentForm')) 
const CommentList = lazy(() => import('./CommentList'))

export const Actions = (props: Post) => {
  const { _id, likes, totalComments, author } = props
  const { account } = useAccount()
  const { incrementComments } = usePosts()
  const [snackbarOpen, showSnackbar, hideSnackbar] = useBoolean()
  const [commentsOpen, ...rest] = useBoolean()

  const onToggle = () => rest[2]()

  const handleShare = () => {
    navigator.clipboard.writeText(`${window.location.origin}/users/${author._id}`)
    showSnackbar()
  }

  return <>
    <Snackbar
      open={snackbarOpen}
      onClose={hideSnackbar}
      duration={1900}
      message='Link copied to clipboard'
    />
    <CardActions>
      <Flex>
        <Flex mr={1}>
          {
            !account ? (
              <LikesWithModal>
                {likes.length}
              </LikesWithModal>
            ) : (
              <Likes {...props} />
            )
          }
        </Flex>
        <ActionButton
          id='comments'
          icon={<ChatBubbleOutline />}
          onClick={onToggle}
        >
          <ButtonValue
            id='comments'
            value={totalComments}
          />
        </ActionButton>
      </Flex>
      <ActionButton
        id='share'
        icon={<Share />}
        onClick={handleShare}
        auto
      />
    </CardActions>
    <Collapse in={commentsOpen}>
      {
        commentsOpen && (
          <Suspense fallback={<Spinner mx={2} />}>
            <Fragment>
              <CommentForm
                postId={_id}
                incrementComments={incrementComments}
              />
              <CommentList postId={_id} />
            </Fragment>
          </Suspense>
        )
      }
    </Collapse>
  </>
}
