import { Tabs } from '@mui/material'
import { Form } from './Form'
import { useTabs } from './hooks'

const loginInputs = ['Username', 'Password']
const signUpInputs = loginInputs.concat('Confirm Password')

type TabPanelProps = {
  children?: React.ReactNode
  index: number
  value: number
}

const TabPanel = ({
  value,
  index,
  children
}: TabPanelProps) => {
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
    >
      {
        value === index ? (
          children
        ) : null
      }
    </div>
  )
}

export const ModalTabs = ({ customMessage, children }: {
  customMessage?: string
  children: React.ReactNode
}) => {
  const { value, onChange } = useTabs(Boolean(customMessage))

  return <>
    <Tabs value={value} onChange={onChange} variant='fullWidth'>
      {children}
    </Tabs>
    <TabPanel value={value} index={0}>
      <Form
        subtitle={'Welcome again!'}
        textButton='Login'
        inputs={loginInputs}
      />
    </TabPanel>
    <TabPanel value={value} index={1}>
      <Form
        subtitle={customMessage || 'Create an account for free!'}
        textButton='Sign up'
        inputs={signUpInputs}
      />
    </TabPanel>
  </>
}
