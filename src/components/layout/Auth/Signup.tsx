import { SubmitHandler, useForm } from 'react-hook-form'
import { useAccount, useBoolean } from '@/hooks'
import { TextField } from '@mui/material'
import { Form } from './Form'
import { getUser } from './services/auth'
import { Props } from './types'

type Inputs = {
  username: string
  password: string
  confirmPassword: string
}

export const Signup = ({ onClose }: Props) => {
  const { logIn } = useAccount()
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
  const [isLoading, setIsLoading, stopLoading] = useBoolean()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (data.password !== data.confirmPassword) return

    try {
      setIsLoading()
      const user = await getUser(data, '/signup')
      logIn(user)
      onClose()
    } catch (_) {
      stopLoading()
    }
  }

  return (
    <Form
      subtitle='Create an account for free'
      textButton='Sign up'
      isSubmitting={isLoading}
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        label='Username'
        fullWidth
        sx={{ mt: 2.5 }}
        error={Boolean(errors?.username)}
        {...register('username', { required: true })}
      />
      <TextField
        label='Password'
        type='password'
        fullWidth
        sx={{ mt: 2.5 }}
        error={Boolean(errors?.password)}
        {...register('password', { required: true })}
      />
      <TextField
        label='Confirm Password'
        type='password'
        fullWidth
        sx={{ mt: 2.5 }}
        error={Boolean(errors?.password)}
        {...register('confirmPassword', { required: true })}
      />
    </Form>
  )
}