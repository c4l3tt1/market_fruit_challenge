export interface IFruit {
  id: string
  name: string
  price: string
  isInsideBucket: boolean
}

export interface IFruitsList {
  listFruits: IFruit[]
}

export interface IFruitFormProps {
  onSubmit: (data: { name: string; price: string }) => void
}
