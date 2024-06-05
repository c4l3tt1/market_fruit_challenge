'use client'
import { createBucket, getBuckets } from '@/api/services/buckets'
import { BucketForm } from '@/components/bucketForm'
import { ButtonBackPage } from '@/components/buttonBack'
import { useRouter } from 'next/navigation'

const AddBucketsPage = () => {
  const router = useRouter()

  const onSubmitCreateBucket = async (data: any) => {
    await createBucket({
      name: data.name,
      capacity: data.capacity,
      totalPrice: 0,
      ocupation: 0,
      fruitsList: [],
    })
    await getBuckets()
    router.push('/buckets')
    router.refresh()
  }

  return (
    <>
      <section className="w-full">
        <div className="container md:px-4">
          <h2 className="text-3xl font-montserrat font-black mb-10 flex items-center gap-x-2 justify-center">
            <ButtonBackPage />
            Add new Bucket
          </h2>
          <BucketForm onSubmit={(data) => onSubmitCreateBucket(data)} />
        </div>
      </section>
    </>
  )
}

export default AddBucketsPage
