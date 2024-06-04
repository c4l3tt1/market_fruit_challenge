import { getBuckets, updateBucket } from '@/api/services/buckets'
import { getFruits } from '@/api/services/fruits'
import { IBucket } from '@/types/buckets'
import { IFruit } from '@/types/fruits'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { Suspense } from 'react'
import { AddFruitButton } from './buttonAdd'

export const ListBuckets = async () => {
  const listBuckets = await getBuckets()
  let listFruits = await getFruits()

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
    return bucket.fruitsList.reduce((total, fruit) => total + (fruit.price ?? 0) * (fruit.quantity ?? 1), 0)
  }

  const handleAddFruits = async (bucketId: string, fruit: IFruit) => {
    const bucket = listBuckets.find((item) => item.id === bucketId)

    if (bucket && fruit) {
      // let newListFruits: IBucketFruitsList[] = []
      if (bucket.fruitsList?.length > 0) {
        const alreadyHaveFruitIndex = bucket.fruitsList.findIndex((item) => item.name === fruit.name)

        if (alreadyHaveFruitIndex !== -1) {
          bucket.fruitsList[alreadyHaveFruitIndex].quantity =
            (bucket.fruitsList[alreadyHaveFruitIndex].quantity ?? 0) + 1
        } else {
          bucket.fruitsList = [...bucket.fruitsList, fruit]
        }
      } else {
        bucket.fruitsList = [{ name: fruit.name, price: fruit.price, quantity: 1 }]
      }

      const newTotalPrice = getTotalPrice(bucket)
      const newOcupation = (getTotalQuantity(bucket) / bucket.capacity) * 100

      console.log('newTotalPrice', newTotalPrice)
      console.log('newOcupation', newOcupation)

      const bucketData = {
        name: bucket.name,
        totalPrice: newTotalPrice,
        ocupation: newOcupation,
        capacity: bucket.capacity,
        fruitsList: bucket.fruitsList,
      }
      //@ts-ignore
      await updateBucket(bucket.id, bucketData)
      listFruits = await getFruits()
    }
  }

  const handleRemoveFruits = async (bucketId: string, fruit: IFruit) => {
    const bucket = listBuckets.find((item) => item.id === bucketId)

    if (bucket && fruit) {
      if (bucket.fruitsList?.length > 0) {
        const fruitIndex = bucket.fruitsList.findIndex((item) => item.name === fruit.name)

        if (fruitIndex !== -1) {
          bucket.fruitsList[fruitIndex].quantity = (bucket.fruitsList[fruitIndex].quantity ?? 0) - 1
        }
      }

      const newTotalPrice = getTotalPrice(bucket)
      const newOcupation = (getTotalQuantity(bucket) / bucket.capacity) * 100

      const bucketData = {
        // name: bucket.name,
        totalPrice: newTotalPrice,
        ocupation: newOcupation,
        //     capacity: bucket.capacity,
        fruitsList: bucket.fruitsList,
      }
      //@ts-ignore
      await updateBucket(bucket.id, bucketData)
    }
  }

  if (!listBuckets || !listBuckets.length) return <>Não há dados</>
  return (
    <Suspense fallback={<>Loading Buckets...</>}>
      {listBuckets && listBuckets.length > 0 && (
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="Table fruits" stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Capacity</TableCell>
                <TableCell>Total Price</TableCell>
                <TableCell>Ocupation</TableCell>
                <TableCell>Fruits List</TableCell>
                <TableCell>Add Fruits</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listBuckets.map((bucket) => {
                const canAddFruits = bucket?.ocupation !== 100
                return (
                  <TableRow key={bucket?.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell>{bucket?.name}</TableCell>
                    <TableCell>{bucket?.capacity}</TableCell>
                    <TableCell>R$ {bucket?.totalPrice?.toFixed(2)}</TableCell>
                    <TableCell>{bucket?.ocupation.toFixed(2)}%</TableCell>
                    <TableCell>
                      {bucket?.fruitsList?.map((fruit) => (
                        <>
                          {fruit.name} ({fruit.quantity})<br />
                        </>
                      ))}
                    </TableCell>
                    <TableCell>
                      <AddFruitButton
                        listFruits={listFruits}
                        props={{ disabled: !canAddFruits }}
                        onAddFruit={handleAddFruits}
                        bucketId={bucket?.id}
                      />
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Suspense>
  )
}
