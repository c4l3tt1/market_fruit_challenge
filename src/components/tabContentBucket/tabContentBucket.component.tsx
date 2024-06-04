'use client'
import { createBucket } from '@/api/services/buckets'
import { ListBuckets } from '@/components/listBuckets'
import { Button } from '@mui/material'
import { Suspense, useState } from 'react'
import { BucketForm } from '../bucketForm'

export const TabContentBucket = () => {
  const [step, setStep] = useState<string>('list')

  const onSubmitCreateBucket = async (data: any) => {
    await createBucket({
      name: data.name,
      capacity: data.capacity,
      totalPrice: 0,
      ocupation: 0,
      fruitsList: [],
    })
    setStep('list')
  }

  return (
    <>
      {step === 'list' ? (
        <>
          <Suspense fallback={<div>Loading buckets...</div>}>
            <ListBuckets />
          </Suspense>
          <Button onClick={() => setStep('form')} variant="contained">
            Add new
          </Button>
        </>
      ) : (
        <>
          <BucketForm onSubmit={(data) => onSubmitCreateBucket(data)} />
        </>
      )}
    </>
  )
}
