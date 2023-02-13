import { Fragment, useState } from 'react'
import { useAccount, useBoolean, usePosts } from '@/hooks'
import { Post } from '@/models'
import { Flex } from '@/components/atoms/Flex'
import { Snackbar } from '@/components/atoms/Snackbar'
import { ChatBubbleOutline, Share } from '@mui/icons-material'
import { CardActions, Collapse } from '@mui/material'
import { CommentForm } from './CommentForm'
import { LikesWithModal } from './LikesWithModal'
import { ActionButton, ButtonValue } from './ActionButton'
import { CommentList } from './CommentList'

type Props = Post & {
  children: React.ReactNode
}

export const Actions = ({
  _id,
  likes,
  totalComments,
  children
}: Props) => {
  const { account } = useAccount()
  const { incrementComments } = usePosts()
  const [snackbarOpen, showSnackbar, hideSnackbar] = useBoolean()
  const [commentsOpen, ...rest] = useBoolean()

  const onToggle = () => rest[2]()

  const handleShare = () => {
    navigator.clipboard.writeText('link/' + _id)
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
              children
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
          <Fragment>
            <CommentForm
              postId={_id}
              incrementComments={incrementComments}
            />
            <CommentList postId={_id} />
          </Fragment>
        )
      }
    </Collapse>
  </>
}
