export interface IFruit {
  name: string
  price: number
}

export interface IListFruits {
  items: IFruit[]
}

export interface IFruitFormProps {
  onSubmit: (data: { name: string; price: number }) => void
}
