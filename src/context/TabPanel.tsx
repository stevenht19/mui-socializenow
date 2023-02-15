import { createContext } from 'react'
import { Tabs, Box } from '@mui/material'
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
  children?: React.ReactNode
  views?: React.ReactNode[]
}

export function TabPanelProvider({
  views,
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
          <Box 
            sx={{ 
              borderBottom: 1, 
              borderColor: 'divider' 
            }}
          >
            <Tabs
              value={value}
              onChange={onChange}
              variant='fullWidth'
            >
              {children}
            </Tabs>
          </Box>
        ) : null
      }
      {
        views?.map((view, i) => (
          <TabPanel
            key={i}
            value={value}
            index={i}
          >
            {view}
          </TabPanel>
        ))
      }
    </TabPanelContext.Provider>
  )
}
