import { ButtonAddBuckets } from '@/app/buckets/add/addButton'
import { ButtonBackPage } from '@/components/buttonBack'
import { ListBuckets } from '@/components/listBuckets'
import { LoadingList } from '@/components/loadingList'
import { Suspense } from 'react'

const BucketsPage = () => {
  return (
    <section className="w-full">
      <div className="container md:px-4">
        <h2 className="text-3xl font-montserrat font-black mb-10 flex items-center gap-x-2">
          <ButtonBackPage />
          Buckets List
        </h2>
        <Suspense fallback={<LoadingList />}>
          <ListBuckets />
        </Suspense>
        <ButtonAddBuckets />
      </div>
    </section>
  )
}

export default BucketsPage
