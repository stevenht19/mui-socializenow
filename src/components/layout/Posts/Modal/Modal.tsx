import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import Modal, { ModalProps } from '@/components/atoms/Modal'
import { TabPanelProvider } from '@/context/TabPanel'
import { FeelingsView } from './views/FeelingsView'
import { CreatePostView } from './views/CreatePostView'
import { CreatePost } from './types'

const PostModal = ({ open, onClose }: ModalProps) => {
  const methods = useForm<CreatePost>({ mode: 'onBlur' })

  const onSubmit: SubmitHandler<CreatePost> = (data) => {
    console.log(data)
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
            firstView={<CreatePostView />}
            secondView={<FeelingsView />}
          />
        </form>
      </FormProvider>
    </Modal>
  )
}


export default PostModal