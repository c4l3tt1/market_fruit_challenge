import { ReactNode } from 'react'

export interface ITabPanelProps {
  children?: ReactNode
  index: any
  value: any
}

export interface IDynamicTabsProps {
  tabs: { label: string; content: ReactNode }[]
}
