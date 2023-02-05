import { LoadingButton } from '@/components/atoms/LoadingButton'
import { useFormContext } from 'react-hook-form'

type Props = {
  isLoading: boolean
}

export const PostButton: React.FC<Props> = ({ isLoading }) => {
  const { watch } = useFormContext()
  const text: string = watch('text')
  const isDisabled = !text ? true : text.length < 2
  
  return (
    <LoadingButton
      size='medium'
      mt={2}
      loading={isLoading}
      isDisabled={isDisabled}
    >
      Post
    </LoadingButton>
  )
}