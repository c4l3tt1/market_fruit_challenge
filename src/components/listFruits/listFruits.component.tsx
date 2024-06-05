import { getFruits } from '@/api/services/fruits'
import { DeleteFruitButton } from '@/components/listFruits'
import { cn } from '@/utils/classes'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

export const ListFruits = async () => {
  const listFruits = await getFruits()

  return (
    <>
      {listFruits && listFruits.length > 0 ? (
        <TableContainer>
          <Table sx={{ minWidth: 320 }} aria-label="Table fruits" stickyHeader>
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
                    <DeleteFruitButton fruitId={fruit.id} disabled={fruit.isInsideBucket} />
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
