'use client'
import { deleteFruit } from '@/api/services/fruits'
import { cn } from '@/utils/classes'
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded'
import { IconButton } from '@mui/material'
import { useRouter } from 'next/navigation'

interface IAddFuitButtonProps {
  fruitId: string
  disabled: boolean
}
export const DeleteFruitButton = ({ fruitId, disabled }: IAddFuitButtonProps) => {
  const router = useRouter()
  const handleDeleteFruit = async (fruitId: string) => {
    await deleteFruit(fruitId)
    router.refresh()
  }

  return (
    <>
      <IconButton
        aria-label="Add icon"
        size="large"
        disabled={disabled}
        onClick={() => handleDeleteFruit(fruitId)}
        className={cn('text-red-600 disabled:text-opacity-40')}
      >
        <DeleteForeverRoundedIcon fontSize="inherit" />
      </IconButton>
    </>
  )
}
