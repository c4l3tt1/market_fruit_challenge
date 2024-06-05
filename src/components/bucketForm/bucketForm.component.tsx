'use client'
import { IBucketFormProps } from '@/types/buckets'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, TextField } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import * as yup from 'yup'

const schema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório'),
  capacity: yup
    .number()
    .typeError('Only numbers are accepted')
    .required('Capacity id required')
    .positive('Must be a positive number')
    .integer('Must be an integer'),
})

export const BucketForm = ({ onSubmit }: IBucketFormProps) => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      capacity: 1,
    },
  })

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
                label="Bucket name"
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
            name="capacity"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                placeholder="Type a number"
                label="Bucket capacity"
                error={!!errors.capacity}
                helperText={errors.capacity?.message}
                variant="outlined"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
            )}
          />
        </div>
        <div className="flex w-full justify-end -mt-3">
          <Button type="submit" variant="contained">
            Create Bucket
          </Button>
        </div>
      </form>
    </div>
  )
}
