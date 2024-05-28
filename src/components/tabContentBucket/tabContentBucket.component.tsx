'use client'
import { createBucket } from '@/api/services/buckets'
import { ListBuckets } from '@/components/listBuckets'
import { Button } from '@mui/material'
import { Suspense, useState } from 'react'
import { BucketForm } from '../bucketForm'

export const TabContentBucket = () => {
  const [step, setStep] = useState<string>('list')

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
          <BucketForm
            onSubmit={async (data) => {
              await createBucket({
                name: data.name,
                capacity: data.capacity,
                totalPrice: 0,
                ocupation: 0,
              })
              setStep('list')
            }}
          />
        </>
      )}
    </>
  )
}
