import { IFruit } from './fruits'

export interface IBucketFruitsList {
  id?: string
  name?: string
  price?: string
  quantity?: number
}

export interface IBucket {
  id?: string
  name: string
  capacity: number
  totalPrice: number
  fruitsList: IBucketFruitsList[]
  ocupation: number
}

export interface IBucketsList {
  listBuckets: IBucket[]
}

export interface IBucketFormProps {
  onSubmit: (data: { name: string; capacity: number; fruitsList?: IFruit[] }) => void
}
