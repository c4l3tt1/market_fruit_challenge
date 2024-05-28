'use client'
import { TabPanel } from '@/components/dynamicTabs'
import { IDynamicTabsProps } from '@/types/tabs'
import { Tab, Tabs } from '@mui/material'
import { useState } from 'react'

export const DynamicTabs = ({ tabs }: IDynamicTabsProps) => {
  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <div>
      <Tabs value={value} onChange={handleChange} aria-label="dynamic tabs example">
        {tabs.map((tab, index) => (
          <Tab key={index} label={tab.label} id={`tab-${index}`} aria-controls={`tabpanel-${index}`} />
        ))}
      </Tabs>
      {tabs.map((tab, index) => (
        <TabPanel key={index} value={value} index={index}>
          {tab.content}
        </TabPanel>
      ))}
    </div>
  )
}
