import { getFruits } from '@/api/services/fruits'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

export const ListFruits = async () => {
  const listFruits = await getFruits()

  if (!listFruits || !listFruits.length) return <>Não há dados</>
  return (
    <>
      {listFruits && listFruits.length > 0 && (
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="Table fruits" stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listFruits.map((fruit) => (
                <TableRow key={fruit?.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {fruit?.name}
                  </TableCell>
                  <TableCell align="right">R$ {fruit?.price.toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  )
}
