import { Account } from '@/models'
import {  
  Divider, 
  List, 
  ListSubheader
} from '@mui/material'
import { AccountItem } from './AccountItem'

type Props = {
  subheader: string
  accounts?: Account[]
}

export const Accounts: React.FC<Props> = ({
  subheader,
  accounts
}) => {
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
          sx={{
            pl: {
              xs: 1
            }
          }}
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