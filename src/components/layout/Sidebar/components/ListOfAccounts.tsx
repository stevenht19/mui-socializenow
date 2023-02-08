import { Divider, List, ListSubheader } from '@mui/material'
import { Flex } from '@/components/atoms/Flex'
import { Spinner } from '@/components/atoms/Spinner'
import { useFakeUsers } from '@/hooks'
import { AccountItem } from './AccountItem'

type Props = {
  subheader: string
  q?: string
  disableSpinner?: true
}

export const ListOfAccounts = ({ subheader, q, disableSpinner }: Props) => {
  const [accounts] = useFakeUsers(q)

  if (disableSpinner && !accounts?.length) {
    return null
  }

  if (!accounts?.length) {
    return (
      <Flex justifyContent={'center'} pt={3}>
        <Spinner />
      </Flex>
    )
  }

  return <>
    <Divider />
    {
      !!accounts?.length && (
        <List
          subheader={
            <ListSubheader
              disableGutters
              sx={{
                position: 'static',
                display: {
                  xs: 'none',
                  md: 'block'
                }
              }}
            >
              {subheader}
            </ListSubheader>
          }
        >
          {
            accounts.map((props) => (
              <AccountItem
                key={props.id}
                {...props}
              />
            ))
          }
        </List>
      )
    }
  </>
}