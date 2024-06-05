import { updateBucket } from '@/api/services/buckets'
import { updateFruit } from '@/api/services/fruits'
import { IBucket } from '@/types/buckets'
import { IFruit } from '@/types/fruits'
import { convertMoneyToNumber } from '@/utils/format'

export const updateBucketOnList = async (bucketId: string, bucketData: IBucket): Promise<void> => {
  try {
    await updateBucket(bucketId, bucketData)
  } catch (error) {
    console.error('Error updating bucket:', error)
    throw error
  }
}

export const updateFruitOnList = async (fruit: IFruit, isInsideBucket: boolean): Promise<void> => {
  try {
    await updateFruit(fruit.id, {
      ...fruit,
      isInsideBucket: isInsideBucket,
    })
  } catch (error) {
    console.error('Error updating fruit:', error)
    throw error
  }
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
