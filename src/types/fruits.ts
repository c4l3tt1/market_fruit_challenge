export interface IFruit {
  name: string
  price: number
}

export interface IFruitsList {
  listFruits: IFruit[]
}

export interface IFruitFormProps {
  onSubmit: (data: { name: string; price: number }) => void
}
