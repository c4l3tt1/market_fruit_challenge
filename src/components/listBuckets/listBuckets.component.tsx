'use client'
import { getBuckets, updateBucket } from '@/api/services/buckets'
import { getFruits, updateFruit } from '@/api/services/fruits'
import { IBucket } from '@/types/buckets'
import { IFruit } from '@/types/fruits'
import { cn } from '@/utils/classes'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { LoadingList } from '../loadingList'
import { AddFruitButton } from './buttonAdd'
import { RemoveFruitButton } from './buttonRemove'

export const convertMoneyToNumber = (value: string) => {
  return Number(value.replace(/\./, '').replace(',', '.'))
}

export const ListBuckets = ({
  listBucketsProp,
  listFruitProp,
}: {
  listBucketsProp: IBucket[]
  listFruitProp: IFruit[]
}) => {
  const [listFruits, setListFruits] = useState<IFruit[]>(listFruitProp)
  const [listBuckets, setListBuckets] = useState<IBucket[]>(listBucketsProp)
  const [loading, setLoading] = useState<boolean>(true)

  const listBucketsFetch = async () => {
    const listBuckets = await getBuckets()
    setListBuckets(listBuckets)
    setLoading(false)
  }

  const listFruitsFetch = async () => {
    const listFruits = await getFruits()
    setListFruits(listFruits)
    setLoading(false)
  }

  useEffect(() => {
    listFruitsFetch()
    listBucketsFetch()
  }, [])

  const updateFruitOnList = async (fruit: IFruit, isInsideBucket: boolean) => {
    await updateFruit(fruit.id, {
      ...fruit,
      isInsideBucket: isInsideBucket,
    })
  }

  const getTotalQuantity = (bucket: IBucket): number => {
    if (!bucket.fruitsList) {
      return 0
    }
    return bucket.fruitsList.reduce((total, fruit) => total + (fruit.quantity ?? 0), 0)
  }

  const getTotalPrice = (bucket: IBucket): number => {
    if (!bucket.fruitsList) {
      return 0
    }
    return bucket.fruitsList.reduce(
      (total, fruit) => total + convertMoneyToNumber(fruit?.price ?? '0') * (fruit.quantity ?? 1),
      0
    )
  }

  const handleAddFruits = async (bucketId: string, fruit: IFruit) => {
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
            updateFruitOnList(fruit, false)
          } else {
            //update fruit isInsideBucket
            updateFruitOnList(fruit, true)
          }
        } else {
          bucket.fruitsList = [...bucket.fruitsList, { ...fruit, quantity: 1 }]
          //update fruit isInsideBucket
          updateFruitOnList(fruit, true)
        }
      } else {
        bucket.fruitsList = [{ id: fruit.id, name: fruit.name, price: fruit.price, quantity: 1 }]
        //update fruit isInsideBucket
        updateFruitOnList(fruit, true)
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
      await updateBucket(bucket.id, bucketData)
      await Promise.all([listBucketsFetch(), listFruitsFetch()])
    }
  }

  const handleRemoveFruits = async (bucketId: string, fruit: IFruit) => {
    const bucket = listBuckets?.find((item) => item.id === bucketId)

    if (bucket && fruit) {
      if (bucket.fruitsList?.length > 0) {
        const fruitIndex = bucket.fruitsList.findIndex((item) => item.name === fruit.name)

        if (fruitIndex !== -1) {
          bucket.fruitsList[fruitIndex].quantity = (bucket.fruitsList[fruitIndex].quantity ?? 0) - 1
          if (bucket.fruitsList[fruitIndex].quantity === 0) {
            bucket.fruitsList.splice(fruitIndex, 1)
            //update fruit isInsideBucket
            updateFruitOnList(fruit, false)
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
      await updateBucket(bucket.id, bucketData)
      await Promise.all([listBucketsFetch(), listFruitsFetch()])
    }
  }

  if (loading) {
    return <LoadingList />
  }
  return (
    <>
      {listBuckets && listBuckets.length > 0 ? (
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="Table fruits" stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Capacity</TableCell>
                <TableCell>Total Price</TableCell>
                <TableCell>Ocupation</TableCell>
                <TableCell>Fruits List</TableCell>
                <TableCell align="right">Add/Remove Fruits</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listBuckets.map((bucket) => {
                const canAddFruits = bucket?.ocupation !== 100
                const canRemoveFruits = bucket?.fruitsList?.length > 0
                return (
                  <TableRow key={bucket?.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell>{bucket?.name}</TableCell>
                    <TableCell>{bucket?.capacity}</TableCell>
                    <TableCell>R$ {bucket?.totalPrice?.toFixed(2)}</TableCell>
                    <TableCell>{bucket?.ocupation?.toFixed(2) || 0}%</TableCell>
                    <TableCell>
                      {bucket?.fruitsList?.map((fruit) => (
                        <React.Fragment key={fruit.name}>
                          {fruit.name} ({fruit.quantity})<br />
                        </React.Fragment>
                      ))}
                    </TableCell>
                    <TableCell align="right">
                      {bucket.id && (
                        <>
                          <AddFruitButton
                            listFruits={listFruits}
                            disabled={!canAddFruits}
                            onAddFruit={handleAddFruits}
                            bucketId={bucket?.id}
                          />
                          <RemoveFruitButton
                            listFruits={bucket?.fruitsList}
                            disabled={!canRemoveFruits}
                            onRemoveFruit={handleRemoveFruits}
                            bucketId={bucket?.id}
                          />
                        </>
                      )}
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <div className={cn('flex flex-col items-center justify-center w-full min-h-20')}>No data</div>
      )}
    </>
  )
}
