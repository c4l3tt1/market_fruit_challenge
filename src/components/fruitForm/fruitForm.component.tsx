'use client'
import { IFruitFormProps } from '@/types/fruits'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, TextField } from '@mui/material'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import * as yup from 'yup'

export const moneyFormat = (value: string) => {
  if (!value || value === '') {
    return ''
  }
  let newArrayFormatted = ['R$ ']
  const numbers = value.replace(/\D/g, '')

  const numbersList = numbers.split('')

  for (let i = 0; i < numbersList.length; i++) {
    newArrayFormatted.push(numbersList[i])
  }

  const valueFinally = newArrayFormatted.join('')
  const result = `${valueFinally}`

  if (numbers.length > 0 && numbers.length < 2) return result.replace('R$ ', '')
  if (numbers.length === 2) return result.replace(/(.{4})(\d)/, '$1,$2').replace('R$ ', '')
  if (numbers.length === 3) return result.replace(/(.{4})(\d)(\d)/, '$1,$2$3').replace('R$ ', '')
  if (numbers.length === 4) return result.replace(/(.{5})(\d)(\d)/, '$1,$2$3').replace('R$ ', '')
  if (numbers.length === 5) return result.replace(/(.{6})(\d)(\d)/, '$1,$2$3').replace('R$ ', '')
  if (numbers.length === 6) return result.replace(/(.{4})(\d{3})(\d)/, '$1.$2,$3').replace('R$ ', '')
  if (numbers.length === 7) return result.replace(/(.{5})(\d{3})(\d)/, '$1.$2,$3').replace('R$ ', '')
  if (numbers.length === 8) return result.replace(/(.{6})(\d{3})(\d)/, '$1.$2,$3').replace('R$ ', '')
  if (numbers.length === 9) return result.replace(/(.{4})(\d{3})(\d{3})(\d)/, '$1.$2.$3,$4').replace('R$ ', '')
  if (numbers.length === 10) return result.replace(/(.{5})(\d{3})(\d{3})(\d)/, '$1.$2.$3,$4').replace('R$ ', '')
  return numbers.replace('R$ ', '')
}

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  price: yup.string().required('Price is required'),
})

export const FruitForm = ({ onSubmit }: IFruitFormProps) => {
  const [price, setPrice] = useState<string>('')

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      price: '',
    },
  })

  const handleChangePrice = (price: string) => {
    const formatPrice = moneyFormat(price)
    setPrice(formatPrice)
    setValue('price', formatPrice)
  }

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-80 flex flex-col gap-y-6">
        <div className="w-full">
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                placeholder="Type a name"
                label="Fruit name"
                error={!!errors.name}
                helperText={errors.name?.message}
                variant="outlined"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
            )}
          />
        </div>
        <div className="w-full">
          <Controller
            name="price"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                placeholder="Type a number"
                label="Price"
                error={!!errors.price}
                helperText={errors.price?.message}
                variant="outlined"
                fullWidth
                value={price}
                onChange={(e) => handleChangePrice(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            )}
          />
        </div>
        <div className="flex w-full justify-end -mt-3">
          <Button type="submit" variant="contained">
            Add Fruit
          </Button>
        </div>
      </form>
    </div>
  )
}
