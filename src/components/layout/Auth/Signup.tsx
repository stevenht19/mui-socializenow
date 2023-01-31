import { ModalProps } from '@/components/atoms/Modal'
import { useAccount } from '@/hooks'
import { Form, FormInput } from './Form'
import { useForm } from './hooks'
import { getUser } from './services/auth'

type Inputs = {
  username: string
  password: string
  confirmPassword: string
}

export const Signup = ({ onClose }: {
  onClose: ModalProps['onClose']
}) => {
  const { logIn } = useAccount()

  const { formValues, onChange, isSubmitting, handleSubmit } = useForm<Inputs>({
    username: '',
    password: '',
    confirmPassword: ''
  }, onSubmit)

  const { username, password, confirmPassword } = formValues

  async function onSubmit() {
    logIn(await getUser({ username, password }, '/signup'))
    onClose()
  }

  return (
    <Form 
      subtitle='Create an account for free'
      textButton='Sign up'
      isSubmitting={isSubmitting}
      onSubmit={handleSubmit}
    >
      <FormInput 
        label='Username'
        name='username'
        value={username}
        onChange={onChange}
      />
      <FormInput 
        label='Password' 
        type='password'
        name='password'
        value={password}
        onChange={onChange}
      />
      <FormInput 
        label='Confirm Password' 
        type='password'
        name='confirmPassword'
        value={confirmPassword}
        onChange={onChange}
      />
    </Form>
  )
}