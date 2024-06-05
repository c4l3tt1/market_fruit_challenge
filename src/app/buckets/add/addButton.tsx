'use client'
import { Button } from '@mui/material'
import { useRouter } from 'next/navigation'

export const ButtonAddBuckets = () => {
  const router = useRouter()

  return (
    <div className="flex justify-end">
      <Button onClick={() => router.push('/buckets/add')} variant="contained" className="mt-3">
        Add Bucket
      </Button>
    </div>
  )
}
