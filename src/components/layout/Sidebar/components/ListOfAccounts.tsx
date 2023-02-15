import { Divider, List, ListSubheader } from '@mui/material'
import { useAccounts } from '@/hooks'
import { Flex } from '@/components/atoms/Flex'
import { Spinner } from '@/components/atoms/Spinner'
import { AccountItem } from './AccountItem'


type Props = {
  subheader: string
  skip: number
  limit: number
  disableSpinner?: true
}

export const ListOfAccounts = ({ 
  subheader, 
  skip, 
  limit, 
  disableSpinner 
}: Props) => {
  const { accounts, isLoading } = useAccounts(skip, limit)

  if (isLoading && disableSpinner) {
    return (
      <Flex justifyContent={'center'} pt={3}>
        <Spinner size={35} />
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
                key={props._id}
                {...props}
              />
            ))
          }
        </List>
      )
    }
  </>
}