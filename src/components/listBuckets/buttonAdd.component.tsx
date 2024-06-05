'use client'
import { getBuckets } from '@/api/services/buckets'
import { IFruit } from '@/types/fruits'
import { cn } from '@/utils/classes'
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded'
import { IconButton, Menu, MenuItem } from '@mui/material'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { getTotalPrice, getTotalQuantity, updateBucketOnList, updateFruitOnList } from './listBuckets.component'

interface IAddFuitButtonProps {
  listFruits: IFruit[]
  bucketId: string
  disabled: boolean
}
export const AddFruitButton = ({ listFruits, bucketId, disabled }: IAddFuitButtonProps) => {
  const router = useRouter()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleCloseMenu = () => {
    setAnchorEl(null)
  }

  const addFruit = async (bucketId: string, fruit: IFruit) => {
    const listBuckets = await getBuckets()
    const bucket = listBuckets?.find((item) => item.id === bucketId)

    if (bucket && fruit) {
      if (bucket.fruitsList?.length > 0) {
        const alreadyHaveFruitIndex = bucket.fruitsList.findIndex((item) => item.name === fruit.name)
        if (alreadyHaveFruitIndex !== -1) {
          //in case the same fruit stay on this bucket
          bucket.fruitsList[alreadyHaveFruitIndex].quantity =
            (bucket.fruitsList[alreadyHaveFruitIndex].quantity ?? 0) + 1

          //verify the quantity is different of 0
          if (bucket.fruitsList[alreadyHaveFruitIndex].quantity === 0) {
            bucket.fruitsList.splice(alreadyHaveFruitIndex, 1)
            await updateFruitOnList(fruit, false)
          } else {
            //update fruit isInsideBucket
            await updateFruitOnList(fruit, true)
          }
        } else {
          bucket.fruitsList = [...bucket.fruitsList, { ...fruit, quantity: 1 }]
          //update fruit isInsideBucket
          await updateFruitOnList(fruit, true)
        }
      } else {
        bucket.fruitsList = [{ id: fruit.id, name: fruit.name, price: fruit.price, quantity: 1 }]
        //update fruit isInsideBucket
        await updateFruitOnList(fruit, true)
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
      // await Promise.all([getBuckets(), getFruits()])
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
        className={cn('text-green-600 disabled:text-opacity-40')}
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
            <MenuItem key={fruit.name} onClick={() => addFruit(bucketId, fruit)}>
              {fruit.name}
            </MenuItem>
          ))}
      </Menu>
    </>
  )
}
