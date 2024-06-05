'use client'
import { getBuckets } from '@/api/services/buckets'
import { IBucketFruitsList } from '@/types/buckets'
import { IFruit } from '@/types/fruits'
import { cn } from '@/utils/classes'
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded'
import { IconButton, Menu, MenuItem } from '@mui/material'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { getTotalPrice, getTotalQuantity, updateBucketOnList, updateFruitOnList } from './listBuckets.component'

interface IAddFuitButtonProps {
  listFruits: IBucketFruitsList[]
  bucketId: string
  disabled: boolean
}
export const RemoveFruitButton = ({ listFruits, bucketId, disabled }: IAddFuitButtonProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const router = useRouter()
  const open = Boolean(anchorEl)
  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleCloseMenu = () => {
    setAnchorEl(null)
  }

  const removeFruits = async (bucketId: string, fruit: IFruit) => {
    const listBuckets = await getBuckets()
    const bucket = listBuckets?.find((item) => item.id === bucketId)

    if (bucket && fruit) {
      if (bucket.fruitsList?.length > 0) {
        const fruitIndex = bucket.fruitsList.findIndex((item) => item.name === fruit.name)

        if (fruitIndex !== -1) {
          bucket.fruitsList[fruitIndex].quantity = (bucket.fruitsList[fruitIndex].quantity ?? 0) - 1
          if (bucket.fruitsList[fruitIndex].quantity === 0) {
            bucket.fruitsList.splice(fruitIndex, 1)
            //update fruit isInsideBucket
            await updateFruitOnList(fruit, false)
          }
        }
      }

      const newTotalPrice = getTotalPrice(bucket)
      const newOcupation = (getTotalQuantity(bucket) / bucket.capacity) * 100

      const bucketData = {
        name: bucket.name,
        totalPrice: newTotalPrice,
        ocupation: newOcupation,
        capacity: bucket.capacity,
        fruitsList: bucket.fruitsList,
      }
      //@ts-ignore
      await updateBucketOnList(bucket.id, bucketData)
      //await Promise.all([getBuckets(), getFruits()])
    }
    handleCloseMenu()
    router.refresh()
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
            <MenuItem key={fruit.name} onClick={() => removeFruits(bucketId, fruit)}>
              {fruit.name}
            </MenuItem>
          ))}
      </Menu>
    </>
  )
}
