import { getBuckets } from '@/api/services/buckets'
import { getFruits } from '@/api/services/fruits'
import { DynamicTabs } from '@/components/dynamicTabs'
import { LoadingList } from '@/components/loadingList'
import { TabContentBucket } from '@/components/tabContentBucket'
import { TabContentFruits } from '@/components/tabContentFruits'
import { Suspense } from 'react'

const HomePage = async () => {
  const listBuckets = await getBuckets()
  const listFruits = await getFruits()

  await new Promise((resolve) => setTimeout(resolve, 3000))

  const dynamicTabsList = [
    {
      label: 'Fruits',
      content: (
        <Suspense fallback={<LoadingList />}>
          <TabContentFruits listFruits={listFruits} />
        </Suspense>
      ),
    },
    {
      label: 'Buckets',
      content: (
        <Suspense fallback={<LoadingList />}>
          <TabContentBucket listBuckets={listBuckets} listFruits={listFruits} />
        </Suspense>
      ),
    },
  ]
  return (
    <section className="">
      <div className="container md:px-4">{<DynamicTabs tabs={dynamicTabsList} />}</div>
    </section>
  )
}

export default HomePage
