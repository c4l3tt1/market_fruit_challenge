import { getBuckets, updateBucket } from '@/api/services/buckets'
import { getFruits, updateFruit } from '@/api/services/fruits'
import { AddFruitButton, RemoveBucketButton, RemoveFruitButton } from '@/components/listBuckets'
import { IBucket } from '@/types/buckets'
import { IFruit } from '@/types/fruits'
import { cn } from '@/utils/classes'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

export const convertMoneyToNumber = (value: string) => {
  return Number(value.replace(/\./, '').replace(',', '.'))
}

export const updateBucketOnList = async (bucketId: string, bucketData: IBucket) => {
  await updateBucket(bucketId, bucketData)
}
export const updateFruitOnList = async (fruit: IFruit, isInsideBucket: boolean) => {
  await updateFruit(fruit.id, {
    ...fruit,
    isInsideBucket: isInsideBucket,
  })
}

export const getTotalQuantity = (bucket: IBucket): number => {
  if (!bucket.fruitsList) {
    return 0
  }
  return bucket.fruitsList.reduce((total, fruit) => total + (fruit.quantity ?? 0), 0)
}

export const getTotalPrice = (bucket: IBucket): number => {
  if (!bucket.fruitsList) {
    return 0
  }
  return bucket.fruitsList.reduce(
    (total, fruit) => total + convertMoneyToNumber(fruit?.price ?? '0') * (fruit.quantity ?? 1),
    0
  )
}

export const ListBuckets = async () => {
  const listFruits = await getFruits()
  const listBuckets = await getBuckets()

  return (
    <>
      {listBuckets && listBuckets.length > 0 ? (
        <TableContainer>
          <Table sx={{ minWidth: 720 }} aria-label="Table fruits" stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Capacity</TableCell>
                <TableCell>Total Price</TableCell>
                <TableCell>Ocupation</TableCell>
                <TableCell>Fruits List</TableCell>
                <TableCell align="right">Add/Remove Fruits</TableCell>
                <TableCell align="right">Delete Bucket</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listBuckets.map((bucket) => {
                const canAddFruits = bucket?.ocupation !== 100
                const canRemoveFruits = bucket?.fruitsList?.length > 0
                const canRemoveBucket = !bucket?.fruitsList || bucket?.fruitsList?.length === 0
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
                          <AddFruitButton listFruits={listFruits} disabled={!canAddFruits} bucketId={bucket?.id} />
                          <RemoveFruitButton
                            listFruits={bucket?.fruitsList}
                            disabled={!canRemoveFruits}
                            bucketId={bucket?.id}
                          />
                        </>
                      )}
                    </TableCell>
                    <TableCell align="right">
                      {bucket.id && (
                        <>
                          <RemoveBucketButton disabled={!canRemoveBucket} bucketId={bucket?.id} />
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
