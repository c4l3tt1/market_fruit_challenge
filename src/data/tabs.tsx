import { TabContentBucket } from '@/components/tabContentBucket'
import { TabContentFruits } from '@/components/tabContentFruits'

export const dynamicTabsList = [
  { label: 'Fruits', content: <TabContentFruits /> },
  { label: 'Buckets', content: <TabContentBucket /> },
]
