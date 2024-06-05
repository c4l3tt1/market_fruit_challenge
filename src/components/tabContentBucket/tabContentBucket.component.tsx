'use client'
import { createBucket } from '@/api/services/buckets'
import { IBucket } from '@/types/buckets'
import { IFruit } from '@/types/fruits'
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded'
import { Button } from '@mui/material'
import { useState } from 'react'
import { BucketForm } from '../bucketForm'
import { ListBuckets } from '../listBuckets'

export const TabContentBucket = ({ listBuckets, listFruits }: { listBuckets: IBucket[]; listFruits: IFruit[] }) => {
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
          <ListBuckets listBucketsProp={listBuckets} listFruitProp={listFruits} />
          <div className="flex justify-end">
            <Button
              onClick={() => setStep('form')}
              variant="contained"
              disabled={!listBuckets || !listFruits}
              className="mt-3"
            >
              Add Bucket
            </Button>
          </div>
        </>
      ) : (
        <>
          <Button variant="text" onClick={() => setStep('list')} className="text-sm flex gap-2 mb-6 mt-1">
            <ArrowCircleLeftRoundedIcon />
            <span>Back to list</span>
          </Button>
          <BucketForm onSubmit={(data) => onSubmitCreateBucket(data)} />
        </>
      )}
    </>
  )
}
