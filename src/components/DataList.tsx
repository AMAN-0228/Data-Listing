import { Container } from '@mui/material'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDataContext } from './context/DataContext';

const DataList = () => {
  const content = useDataContext()
  const{data} = content
  console.log(content)
  return (
    <Container >
        <TableContainer component={Paper}>
      <Table style={{ width: "100%",textAlign:"left"}} aria-label="customized table">
        <TableHead>
          <TableRow style={{textAlign:"center"}}>
            <StyledTableCell>id</StyledTableCell>
            <StyledTableCell align="center">UserId</StyledTableCell>
            <StyledTableCell align="center">title</StyledTableCell>
            <StyledTableCell align="center">body</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((item) => (
            <StyledTableRow key={item.id}>              
              <StyledTableCell align="left">{item.id}</StyledTableCell>
              <StyledTableCell align="center">{item.userId}</StyledTableCell>
              <StyledTableCell align="left">{item.title}</StyledTableCell>
              <StyledTableCell align="left">{item.body}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>

  )
}

export default DataList


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
