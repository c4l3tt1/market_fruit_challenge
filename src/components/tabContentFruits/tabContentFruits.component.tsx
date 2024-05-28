import { ListFruits } from '@/components/listFruits'
import { Suspense } from 'react'

export const TabContentFruits = (): JSX.Element => {
  return (
    <Suspense fallback={<>Loading fruits....</>}>
      <ListFruits />
    </Suspense>
  )
}
