import { IFruitFormProps } from '@/types/fruits'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const schema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório'),
  price: yup.number().required('Preço é obrigatório').positive('Preço deve ser um número positivo'),
})

export const FruitForm = ({ onSubmit }: IFruitFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Nome da Fruta</label>
        <input id="name" {...register('name')} />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="price">Preço da Fruta</label>
        <input id="price" type="number" step="0.01" {...register('price')} />
        {errors.price && <p>{errors.price.message}</p>}
      </div>
      <button type="submit">Adicionar Fruta</button>
    </form>
  )
}
