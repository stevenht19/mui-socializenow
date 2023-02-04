import { Fragment } from 'react'
import { Box } from '@mui/material'
import { ModalHeader } from './ModalHeader'

export const FormBox = ({ title, children }: {
  title?: string
  children: React.ReactNode
}) => {
  return (
    <Fragment>
      <ModalHeader {...(title && { disableArrowBack: true })}>
        {title ?? 'Create Post'}
      </ModalHeader>
      <Box
        p={2.4}
        mt={1}
      >
        {children}
      </Box>
    </Fragment>
  )
}