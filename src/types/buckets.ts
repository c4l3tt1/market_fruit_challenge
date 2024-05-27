import { IFruit } from './fruits'

export interface IBucket {
  id?: string
  name: string
  capacity: number
  totalPrice?: number
  fruitsList: IFruit[]
  ocupation?: number
}

export interface IBucketsList {
  items: IBucket
}

export interface IBucketFormProps {
  onSubmit: (data: { name: string; capacity: number }) => void
}
