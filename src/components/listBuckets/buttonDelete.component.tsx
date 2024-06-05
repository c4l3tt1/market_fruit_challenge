'use client'
import { deleteBucket } from '@/api/services/buckets'
import { cn } from '@/utils/classes'
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded'
import { IconButton } from '@mui/material'
import { useRouter } from 'next/navigation'

interface IRemoveBucketButtonProps {
  bucketId: string
  disabled: boolean
}
export const RemoveBucketButton = ({ bucketId, disabled }: IRemoveBucketButtonProps) => {
  const router = useRouter()

  const handleDeleteBucket = async (bucketId: string) => {
    await deleteBucket(bucketId)
    router.refresh()
  }

  return (
    <>
      <IconButton
        aria-label="Add icon"
        size="large"
        disabled={disabled}
        onClick={() => handleDeleteBucket(bucketId)}
        className={cn('text-red-600 disabled:text-opacity-40')}
      >
        <DeleteForeverRoundedIcon fontSize="inherit" />
      </IconButton>
    </>
  )
}
