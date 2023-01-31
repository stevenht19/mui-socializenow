import { useTabs } from './hooks'
import { Tab, Tabs } from '@mui/material'

type TabsProps = {
  firstView: React.ReactNode
  secondView: React.ReactNode
}

export const ModalTabs: React.FC<TabsProps> = ({ firstView, secondView }) => {
  const { value, onChange } = useTabs()

  return <>
    <Tabs value={value} onChange={onChange} variant='fullWidth'>
      <Tab label='Login' />
      <Tab label='Register' />
    </Tabs>
    <TabPanel value={value} index={0}>
      {firstView}
    </TabPanel>
    <TabPanel value={value} index={1}>
      {secondView}
    </TabPanel>
  </>
}

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