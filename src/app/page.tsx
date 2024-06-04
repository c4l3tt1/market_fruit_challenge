import { DynamicTabs } from '@/components/dynamicTabs'
import { TabContentBucket } from '@/components/tabContentBucket'
import { TabContentFruits } from '@/components/tabContentFruits'

const HomePage = () => {
  const dynamicTabsList = [
    {
      label: 'Fruits',
      content: <TabContentFruits />,
    },
    {
      label: 'Buckets',
      content: <TabContentBucket />,
    },
  ]
  return (
    <section className="">
      <div className="container md:px-4">{<DynamicTabs tabs={dynamicTabsList} />}</div>
    </section>
  )
}

export default HomePage
