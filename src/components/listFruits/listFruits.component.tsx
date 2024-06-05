'use client'
import { deleteFruit, getFruits } from '@/api/services/fruits'
import { IFruit } from '@/types/fruits'
import { cn } from '@/utils/classes'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { useEffect, useState } from 'react'
import { LoadingList } from '../loadingList'
import { DeleteFruitButton } from './buttonDelete'

export const ListFruits = ({ listFruitsProps }: { listFruitsProps: IFruit[] }) => {
  const [listFruits, setListFruits] = useState<IFruit[]>(listFruitsProps)
  const [loading, setLoading] = useState<boolean>(true)

  const listFruitsFetch = async () => {
    const listFruits = await getFruits()
    setListFruits(listFruits)
    setLoading(false)
  }

  useEffect(() => {
    listFruitsFetch()
  }, [])

  const handleDeleteFruit = async (fruitId: string) => {
    await deleteFruit(fruitId)
    listFruitsFetch()
  }

  if (loading) {
    return <LoadingList />
  }
  return (
    <>
      {listFruits && listFruits.length > 0 ? (
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="Table fruits" stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Price</TableCell>
                <TableCell align="right">Delete Fruit</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listFruits.map((fruit) => (
                <TableRow key={fruit?.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {fruit?.name}
                  </TableCell>
                  <TableCell>R$ {fruit?.price}</TableCell>
                  <TableCell align="right">
                    <DeleteFruitButton
                      onDeleteFruit={handleDeleteFruit}
                      fruitId={fruit.id}
                      disabled={fruit.isInsideBucket}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <div className={cn('flex flex-col items-center justify-center w-full min-h-20')}>No data</div>
      )}
    </>
  )
}
