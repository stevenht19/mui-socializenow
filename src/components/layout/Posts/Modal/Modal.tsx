import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { useAccount, useBoolean, usePosts } from '@/hooks'
import Modal, { ModalProps } from '@/components/atoms/Modal'
import { TabPanelProvider } from '@/context/TabPanel'
import { FeelingsView } from './views/FeelingsView'
import { CreatePostView } from './views/CreatePostView'
import { PostButton } from './components/PostButton'
import { createPost } from './services/createPost'
import { CreatePost } from './types'

const PostModal = ({ open, onClose }: ModalProps) => {
  const methods = useForm<CreatePost>({ mode: 'onBlur' })
  const { account } = useAccount()
  const [isLoading, setIsLoading, stopLoading] = useBoolean()
  const { addPost } = usePosts()

  const onSubmit: SubmitHandler<CreatePost> = async (data) => {
    try {
      setIsLoading()
      const post = await createPost(data, account!._id)
      addPost(post, account!)
      onClose()
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