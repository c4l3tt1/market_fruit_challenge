'use client'
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded'
import { IconButton } from '@mui/material'
import { useRouter } from 'next/navigation'
export const ButtonBackPage = () => {
  const router = useRouter()
  return (
    <IconButton aria-label="Back button" size="large" color="primary" onClick={() => router.back()} className="-ml-3">
      <ArrowCircleLeftRoundedIcon />
    </IconButton>
  )
}
