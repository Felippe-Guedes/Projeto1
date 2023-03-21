import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconButton from '@mui/material/IconButton';

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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}


export default function CustomizedTables({clientes}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nome</StyledTableCell>
            <StyledTableCell align="center">Telefone</StyledTableCell>
            <StyledTableCell align="center">Rua</StyledTableCell>
            <StyledTableCell align="center">Número</StyledTableCell>
            <StyledTableCell align="center">Complemento</StyledTableCell>
            <StyledTableCell align="center"></StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {clientes.map((cliente) => (
            <StyledTableRow key={cliente.name}>
              <StyledTableCell component="th" scope="cliente">
                {cliente.name}
              </StyledTableCell>
              <StyledTableCell align="center">{cliente.tel}</StyledTableCell>
              <StyledTableCell align="center">{cliente.end.rua}</StyledTableCell>
              <StyledTableCell align="center">{cliente.end.numero}</StyledTableCell>
              <StyledTableCell align="center">{cliente.end.complemento}</StyledTableCell>
              <StyledTableCell align="center"> <IconButton aria-label="delete">< DeleteForeverIcon/></IconButton> 
              </StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}