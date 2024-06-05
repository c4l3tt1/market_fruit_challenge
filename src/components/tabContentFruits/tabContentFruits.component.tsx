'use client'
import { createFruit } from '@/api/services/fruits'
import { IFruit } from '@/types/fruits'
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded'
import { Alert, Button, Snackbar } from '@mui/material'
import { useState } from 'react'
import { FruitForm } from '../fruitForm'
import { ListFruits } from '../listFruits'

export const TabContentFruits = ({ listFruits }: { listFruits: IFruit[] }) => {
  const [step, setStep] = useState<string>('list')
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
      setStep('list')
    }
  }

  return (
    <>
      {step === 'list' ? (
        <>
          <ListFruits listFruitsProps={listFruits} />
          <div className="flex justify-end">
            <Button onClick={() => setStep('form')} disabled={!listFruits} variant="contained" className="mt-3">
              Add Fruit
            </Button>
          </div>
        </>
      ) : (
        <>
          <Button variant="text" onClick={() => setStep('list')} className="text-sm flex gap-2 mb-6 mt-1">
            <ArrowCircleLeftRoundedIcon />
            <span>Back to list</span>
          </Button>
          <FruitForm onSubmit={(data) => onSubmitCreateFruit(data)} />
        </>
      )}

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
