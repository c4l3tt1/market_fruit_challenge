import { cn } from '@/utils/classes'
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded'
import { IconButton } from '@mui/material'

interface IAddFuitButtonProps {
  fruitId: string
  disabled: boolean
  onDeleteFruit?: (fruitId: string) => void
}
export const DeleteFruitButton = ({ fruitId, onDeleteFruit, disabled }: IAddFuitButtonProps) => {
  const handleClickRemove = (fruitId: string) => {
    if (typeof onDeleteFruit !== 'undefined' && typeof onDeleteFruit === 'function') {
      onDeleteFruit(fruitId)
    }
  }

  return (
    <>
      <IconButton
        aria-label="Add icon"
        size="large"
        disabled={disabled}
        onClick={() => handleClickRemove(fruitId)}
        className={cn('text-red-600 disabled:text-opacity-40')}
      >
        <DeleteForeverRoundedIcon fontSize="inherit" />
      </IconButton>
    </>
  )
}
