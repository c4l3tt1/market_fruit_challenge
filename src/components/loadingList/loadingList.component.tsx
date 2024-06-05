'use client'
import { cn } from '@/utils/classes'
import { CircularProgress } from '@mui/material'

export const LoadingList = () => {
  return (
    <div className={cn('flex flex-col items-center justify-center w-full min-h-20')}>
      <CircularProgress size={30} />
    </div>
  )
}
