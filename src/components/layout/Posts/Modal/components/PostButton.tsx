import { LoadingButton } from '@/components/atoms/LoadingButton'
import { useFormContext } from 'react-hook-form'

const PostButton = () => {
  const { watch } = useFormContext()
  const text: string = watch('text')

  return (
    <LoadingButton
      size='medium'
      mt={2}
      loading={false}
      isDisabled={text?.length < 2}
    >
      Post
    </LoadingButton>
  )
}

export default PostButton