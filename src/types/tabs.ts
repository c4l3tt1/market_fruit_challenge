export interface ITabPanelProps {
  children?: React.ReactNode
  index: any
  value: any
}

export interface IDynamicTabsProps {
  tabs: { label: string; content: React.ReactNode }[]
}
