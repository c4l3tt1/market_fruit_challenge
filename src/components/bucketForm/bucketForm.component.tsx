'use client'
import { IBucketFormProps } from '@/types/buckets'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const schema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório'),
  capacity: yup
    .number()
    .required('Capacidade é obrigatória')
    .positive('Capacidade deve ser um número positivo')
    .integer('Capacidade deve ser um número inteiro'),
})

export const BucketForm = ({ onSubmit }: IBucketFormProps) => {
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
        <label htmlFor="name">Nome do Balde</label>
        <input id="name" {...register('name')} />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="capacity">Capacidade do Balde</label>
        <input id="capacity" type="number" {...register('capacity')} />
        {errors.capacity && <p>{errors.capacity.message}</p>}
      </div>
      <button type="submit">Criar Balde</button>
    </form>
  )
}
