'use client'
import { createFruit, getFruits } from '@/api/services/fruits'
import { ButtonBackPage } from '@/components/buttonBack'
import { FruitForm } from '@/components/fruitForm'

import { Alert, Snackbar } from '@mui/material'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const AddFruitsPage = () => {
  const router = useRouter()
  const [open, setOpen] = useState<boolean>(false)

  const handleOpenSnackBar = () => {
    setOpen(true)
  }
  const handleCloseSnackBar = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  const onSubmitCreateFruit = async (data: any) => {
    const listFruits = await getFruits()

    const alreadyHaveFruitName = listFruits.findIndex(
      (item) => item?.name?.toLocaleLowerCase() === data.name?.toLocaleLowerCase()
    )

    if (alreadyHaveFruitName !== -1) {
      handleOpenSnackBar()
    } else {
      await createFruit({
        name: data.name,
        price: data.price,
        isInsideBucket: false,
      })
      await getFruits()
      router.push('/fruits')
      router.refresh()
    }
  }

  return (
    <>
      <section className="w-full">
        <div className="container md:px-4">
          <h2 className="text-3xl font-montserrat font-black mb-10 flex items-center gap-x-2 justify-center">
            <ButtonBackPage />
            Add new Fruit
          </h2>
          <FruitForm onSubmit={(data) => onSubmitCreateFruit(data)} />
        </div>
      </section>
      <Snackbar
        autoHideDuration={3000}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={open}
        onClose={handleCloseSnackBar}
        key={'noRegisterFruit'}
      >
        <Alert onClose={handleCloseSnackBar} severity="warning" variant="filled" sx={{ width: '100%' }}>
          You cant register fruits with same name.
        </Alert>
      </Snackbar>
    </>
  )
}

export default AddFruitsPage
