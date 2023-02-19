import { SubmitHandler, useForm } from 'react-hook-form'
import { useAccount, useBoolean } from '@/hooks'
import { TextField } from '@mui/material'
import { Form } from './components/Form'
import { Error as TextError } from './components/Error'
import { getUser } from './services/auth'
import { Props } from './types'
import useError from './hooks/useError'

type Inputs = {
  username: string
  password: string
  confirmPassword: string
}

export const Signup = ({ onClose }: Props) => {
  const { logIn } = useAccount()
  const { register, handleSubmit, setError, formState: { errors } } = useForm<Inputs>()
  const [isLoading, setIsLoading, stopLoading] = useBoolean()
  const { error, onError } = useError()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const { password, confirmPassword } = data

      if ((password !== confirmPassword)) {
        setError('confirmPassword', { type: 'custom', message: 'Password does not match' })
        return;
      }

      setIsLoading()

      const user = await getUser(data, '/signup')
      logIn(user)
      onClose()
    } catch (e) {
      if (e instanceof Error) {
        onError(e.message)
      }

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
      {
        Boolean(errors?.username) && (
          <TextError>
            {errors.username?.message || 'Required'}
          </TextError>
        )
      }
      <TextField
        label='Password'
        type='password'
        fullWidth
        sx={{ mt: 2.5 }}
        error={Boolean(errors?.password)}
        {...register('password', { required: true })}
      />
      {
        Boolean(errors?.password) && (
          <TextError>
            Required
          </TextError>
        )
      }
      <TextField
        label='Confirm Password'
        type='password'
        fullWidth
        sx={{ mt: 2.5 }}
        error={Boolean(errors?.confirmPassword)}
        {...register('confirmPassword', { required: true })}
      />
      {
        Boolean(errors?.confirmPassword) && (
          <TextError>
            {errors.confirmPassword?.message || 'Required'}
          </TextError>
        )
      }
      {
        Boolean(error) && (
          <TextError>
            {error}
          </TextError>
        )
      }
    </Form>
  )
}