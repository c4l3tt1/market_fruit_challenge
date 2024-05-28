'use client'
import { ITabPanelProps } from '@/types/tabs'
import { Box } from '@mui/material'

export const TabPanel = (props: ITabPanelProps) => {
  const { children, value, index, ...other } = props

  return (
    <div role="tabpanel" hidden={value !== index} id={`tabpanel-${index}`} aria-labelledby={`tab-${index}`} {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}
