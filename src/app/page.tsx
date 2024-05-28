import { DynamicTabs } from '@/components/dynamicTabs'
import { dynamicTabsList } from '@/data/tabs'

const HomePage = () => {
  const hasTabsList = dynamicTabsList && dynamicTabsList.length > 0
  return (
    <section className="">
      <div className="container md:px-4">{hasTabsList && <DynamicTabs tabs={dynamicTabsList} />}</div>
    </section>
  )
}

export default HomePage
