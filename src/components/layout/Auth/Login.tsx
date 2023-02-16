import { useForm, SubmitHandler } from 'react-hook-form'
import { useAccount, useBoolean } from '@/hooks'
import { TextField } from '@mui/material'
import { getUser } from './services/auth'
import { Form } from './components/Form'
import { Error as TextError } from './components/Error'
import { Props } from './types'
import useError from './hooks/useError'

type Inputs = {
  username: string
  password: string
  unregistered: string
}

export const Login = ({ onClose }: Props) => {
  const [ isLoading, setIsLoading, stopLoading ] = useBoolean()
  const { logIn } = useAccount()
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
  const { error, onError } = useError()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsLoading()
    try {
      const user = await getUser(data, '/login')
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
        sx={{ mt: 2.7 }}
        error={Boolean(errors?.password)}
        {...register('password', { required: true })}
      />
      {
        Boolean(errors?.password) && (
          <TextError>
            {errors.password?.message || 'Required'}
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