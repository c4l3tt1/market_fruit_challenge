'use client'
import { Button } from '@mui/material'
import { useRouter } from 'next/navigation'

export const ButtonAddFruits = () => {
  const router = useRouter()

  return (
    <div className="flex justify-end">
      <Button onClick={() => router.push('/fruits/add')} variant="contained" className="mt-3">
        Add Fruit
      </Button>
    </div>
  )
}
