import { IBucketFruitsList } from '@/types/buckets'
import { IFruit } from '@/types/fruits'
import { cn } from '@/utils/classes'
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded'
import { IconButton, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'

interface IAddFuitButtonProps {
  listFruits: IBucketFruitsList[]
  onRemoveFruit?: (bucketId: string, fruit: IFruit) => void
  bucketId: string
  disabled: boolean
}
export const RemoveFruitButton = ({ listFruits, onRemoveFruit, bucketId, disabled }: IAddFuitButtonProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleCloseMenu = () => {
    setAnchorEl(null)
  }

  const handleClickRemove = (bucketId: string, fruit: IFruit) => {
    if (typeof onRemoveFruit !== 'undefined' && typeof onRemoveFruit === 'function') {
      onRemoveFruit(bucketId, fruit)
    }
    handleCloseMenu()
  }

  return (
    <>
      <IconButton
        aria-label="Add icon"
        size="large"
        disabled={disabled}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleOpenMenu}
        className={cn('text-red-600 disabled:text-opacity-40')}
      >
        <RemoveCircleOutlineRoundedIcon fontSize="inherit" />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseMenu}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {listFruits &&
          listFruits.length > 0 &&
          listFruits.map((fruit) => (
            //@ts-ignore
            <MenuItem key={fruit.name} onClick={() => handleClickRemove(bucketId, fruit)}>
              {fruit.name}
            </MenuItem>
          ))}
      </Menu>
    </>
  )
}
