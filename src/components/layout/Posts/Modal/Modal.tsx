import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { useAccount, useBoolean, usePosts, useLocation } from '@/hooks'
import Modal, { ModalProps } from '@/components/atoms/Modal'
import { TabPanelProvider } from '@/context/TabPanel'
import { FeelingsView } from './views/FeelingsView'
import { CreatePostView } from './views/CreatePostView'
import { PostButton } from './components/PostButton'
import { createPost } from './services/createPost'
import { CreatePost } from './types'
import { mutate } from 'swr'

type Props = ModalProps & {
  onSuccess: () => void
}

const PostModal = ({ open, onClose, onSuccess }: Props) => {
  const methods = useForm<CreatePost>({ mode: 'onBlur' })
  const { account } = useAccount()
  const { params } = useLocation()
  const { addPost } = usePosts()
  const [isLoading, startLoading, stopLoading] = useBoolean()

  const onSubmit: SubmitHandler<CreatePost> = async (data) => {
    try {
      startLoading()

      const post = await createPost(data, account!._id)
  
      if (!post?._id) {
        throw new Error('Something went wrong')
      }
      
      addPost(post, account!)

      if (params.length) {
        mutate(`/posts/${account?._id}`)
      }

      onSuccess()

    } catch (_) {
      stopLoading()
    }
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      mxWidth={480}
    >
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <TabPanelProvider
            views={[
              <CreatePostView>
                <PostButton isLoading={isLoading} />
              </CreatePostView>,
              <FeelingsView />
            ]}
          />
        </form>
      </FormProvider>
    </Modal>
  )
}


export default PostModal