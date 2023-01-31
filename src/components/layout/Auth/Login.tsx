import { useAccount } from '@/hooks'
import { Form, FormInput } from './Form'
import { useForm } from './hooks'
import { getUser } from './services/auth'

type Inputs = {
  username: string
  password: string
}

type Props = {
  onClose(): void
}

export const Login: React.FC<Props> = ({ onClose }) => {
  const { logIn } = useAccount()

  const { formValues, onChange, isSubmitting, handleSubmit } = useForm<Inputs>({
    username: '',
    password: ''
  }, onSubmit)

  async function onSubmit() {
    logIn(await getUser(formValues, '/login'))
    onClose()
  }

  return (
    <Form 
      subtitle='Log in into your account'
      textButton='Login'
      isSubmitting={isSubmitting}
      onSubmit={handleSubmit}
    >
      <FormInput 
        label='Username'
        name='username'
        value={formValues.username}
        onChange={onChange}
      />
      <FormInput 
        label='Password' 
        type='password'
        name='password'
        gap={2.5}
        value={formValues.password}
        onChange={onChange}
      />
    </Form>
  )
}