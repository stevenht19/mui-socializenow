import { useFormContext } from 'react-hook-form'
import { Flex } from '@/components/atoms/Flex'
import { UserAvatar } from '@/components/atoms/UserAvatar'
import { useAccount } from '@/hooks'
import { Typography } from '@mui/material'

export const User = () => {
  const { getValues } = useFormContext()
  const { account } = useAccount()

  const optionalFeeling: string | undefined = getValues('feeling')
  const feelingSplited = optionalFeeling ? optionalFeeling.split('-') : null

  return (
    <Flex gap={1.5} mb={2}>
      <UserAvatar />
      <Typography variant='body1' fontWeight={400}>
        {account!.username}
        {
          feelingSplited ? (
            <Typography component='span' variant='body1' color='text.secondary'>
              {` - is ${feelingSplited.at(0)} feeling ${feelingSplited.at(1)}`}
            </Typography>
          ) : null
        }
      </Typography>
    </Flex>
  )
}
