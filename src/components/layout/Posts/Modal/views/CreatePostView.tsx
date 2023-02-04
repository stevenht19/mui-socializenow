import { Fragment } from 'react'
import { useFormContext } from 'react-hook-form'
import { Box, InputBase } from '@mui/material'
import { Close } from '@mui/icons-material'
import { useBoolean } from '@/hooks'
import { Button } from '@/components/atoms/AbsoluteButton'
import { LoadingButton } from '@/components/atoms/LoadingButton'
import { ModalHeader } from '../components/ModalHeader'
import { Tabs } from '../components/Tabs'
import { User } from '../components/User'
import { Dropzone } from '../components/Dropzone'

export const CreatePostView = () => {
  const { register, watch } = useFormContext()
  const image: File = watch('picture')
  const [isOpen, onOpen, onClose] = useBoolean(image ? true : false)

  return (
    <Fragment>
      <ModalHeader disableArrowBack>
        Create Post
      </ModalHeader>
      <Box
        p={2.4}
        mt={1}
      >
        <User />
        <InputBase
          multiline
          fullWidth
          minRows={4.5}
          maxRows={10}
          spellCheck={false}
          placeholder={`What's on your mind?`}
          {...register('text', {
            required: true
          })}
          sx={{
            px: .5,
            pb: 4,
            lineHeight: 1.55
          }}
        />
        {
          isOpen && (
            <Dropzone image={image}>
              <Button
                onClick={onClose}
                sx={{
                  right: 5,
                  top: 5
                }}>
                <Close />
              </Button>
            </Dropzone>
          )
        }
        <Tabs onOpen={onOpen} />
        <LoadingButton
          loading={false}
          isDisabled={false}
          size='medium'
          mt={2}
        >
          Post
        </LoadingButton>
      </Box>
    </Fragment>
  )
}
