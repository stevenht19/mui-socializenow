import { useFormContext } from 'react-hook-form'
import { InputBase } from '@mui/material'
import { useBoolean } from '@/hooks'
import { Tabs } from '../components/Tabs'
import { User } from '../components/User'
import { Dropzone } from '../components/Dropzone'
import { FormBox } from '../components/Box'

export const CreatePostView = ({ children }: {
  children: React.ReactNode
}) => {
  const { register, watch } = useFormContext()
  const image: File = watch('image')

  const [isOpen, onOpen, onClose] = useBoolean(image ? true : false)

  return (
    <FormBox>
      <User />
      <InputBase
        fullWidth
        key={'text'}
        minRows={4.5}
        maxRows={7.5}
        spellCheck={false}
        multiline
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
          <Dropzone 
            image={image} 
            onClose={onClose} 
          />
        )
      }
      <Tabs onOpen={onOpen} />
      {children}
    </FormBox>
  )
}

