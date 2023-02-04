import { createContext } from 'react'
import { Tabs } from '@mui/material'
import { TabPanel } from '@/components/atoms/TabPanel'
import { useTabs } from '@/context/hooks'

type TabPanelContextType = {
  value: number
  onBack(): void
  onChange(e: React.SyntheticEvent, newValue: number): void
}

export const TabPanelContext = createContext<TabPanelContextType>({
  value: 0,
  onBack() {},
  onChange() {},
})

type Props = {
  firstView: React.ReactNode
  secondView: React.ReactNode
  children?: React.ReactNode
}

export function TabPanelProvider({ 
  firstView, 
  secondView,
  children
}: Props) {
  const { value, onChange, onBack } = useTabs()
  
  return (
    <TabPanelContext.Provider value={{
      value,
      onChange,
      onBack
    }}>
      {
        (children) ? (
          <Tabs
            value={value} 
            onChange={onChange}
            variant='fullWidth'
          >
            {children}
          </Tabs>
        ) : null
      }
      <TabPanel
        value={value}
        index={0}
      >
        {firstView}
      </TabPanel>
      <TabPanel
        value={value}
        index={1}
      >
        {secondView}
      </TabPanel>
    </TabPanelContext.Provider>
  )
}
