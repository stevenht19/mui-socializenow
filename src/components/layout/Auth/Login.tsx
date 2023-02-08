import { useForm, SubmitHandler } from 'react-hook-form'
import { useAccount, useBoolean } from '@/hooks'
import { TextField } from '@mui/material'
import { getUser } from './services/auth'
import { Form } from './Form'
import { Props } from './types'

type Inputs = {
  username: string
  password: string
}

export const Login = ({ onClose }: Props) => {
  const [isLoading, setIsLoading, stopLoading] = useBoolean()
  const { logIn } = useAccount()
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      setIsLoading()
      const user = await getUser(data, '/login')
      logIn(user)
      onClose() 
    } catch(_) {
      stopLoading()
    }
  }

  return (
    <Form
      subtitle='Log in into your account'
      textButton='Login'
      isSubmitting={isLoading}
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        label='Username'
        fullWidth
        sx={{ mt: 2.7 }}
        error={Boolean(errors?.username)}
        {...register('username', { required: true })}
      />
      <TextField
        label='Password'
        type='password'
        fullWidth
        sx={{ mt: 2.7 }}
        error={Boolean(errors?.password)}
        {...register('password', { required: true })}
      />
    </Form>
  )
}