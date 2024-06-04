import { IFruit } from '@/types/fruits'
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded'
import { IconButton, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'

interface IAddFuitButtonProps {
  listFruits: IFruit[]
  onAddFruit?: (bucketId: string, fruit: IFruit) => void
  bucketId: string
  disabled: boolean
}
export const AddFruitButton = ({ listFruits, onAddFruit, bucketId, disabled }: IAddFuitButtonProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleCloseMenu = () => {
    setAnchorEl(null)
  }

  const handleClickAdd = (bucketId: string, fruit: IFruit) => {
    if (typeof onAddFruit !== 'undefined' && typeof onAddFruit === 'function') {
      onAddFruit(bucketId, fruit)
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
      >
        <AddCircleOutlineRoundedIcon fontSize="inherit" />
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
            <MenuItem key={fruit.name} onClick={() => handleClickAdd(bucketId, fruit)}>
              {fruit.name}
            </MenuItem>
          ))}
      </Menu>
    </>
  )
}
