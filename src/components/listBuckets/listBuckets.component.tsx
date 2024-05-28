import { getBuckets } from '@/api/services/buckets'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

export const ListBuckets = async () => {
  const listBuckets = await getBuckets()

  if (!listBuckets || !listBuckets.length) return <>Não há dados</>
  return (
    <>
      {listBuckets && listBuckets.length > 0 && (
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="Table fruits" stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Capacity</TableCell>
                <TableCell>Total Price</TableCell>
                <TableCell>Ocupation</TableCell>
                <TableCell>Fruits List</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listBuckets.map((bucket) => (
                <TableRow key={bucket?.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell>{bucket?.name}</TableCell>
                  <TableCell>{bucket?.capacity}</TableCell>
                  <TableCell>{bucket?.totalPrice?.toFixed(2)}</TableCell>
                  <TableCell>{bucket?.ocupation}</TableCell>
                  <TableCell>{bucket?.fruitsList?.map((fruit) => fruit?.name).join(', ')}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  )
}
