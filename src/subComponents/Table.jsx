import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@mantine/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    fontWeight: 600,
    fontSize: 16,
    fontFamily: "Poppins",
    border: "none"
  },
  body: {
    fontSize: 14,
    border: "none"
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(PatientName, ApptDate, Purpose, Type, PaidAmount) {
  return { PatientName, ApptDate, Purpose, Type, PaidAmount };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const CustomizedTables = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} style={{height:577}} className="example">
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center" style={{display:"flex",alignItems:"center"}}>
              <Button style={{backgroundColor:"#e63c3c",fontFamily:"Poppins",borderRadius:50}}>Upcoming</Button>&nbsp;&nbsp;&nbsp;
              <Button style={{backgroundColor:"rgba(242, 17, 54,0.12)",color:"#e63c3c",fontFamily:"Poppins",fontWeight:500,borderRadius:50}}>Today</Button>
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Patient Name</StyledTableCell>
            <StyledTableCell align="center">ApptDate</StyledTableCell>
            <StyledTableCell align="center">Purpose</StyledTableCell>
            <StyledTableCell align="center">Type</StyledTableCell>
            <StyledTableCell align="center">Paid Amount</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell align="center">{row.PatientName}</StyledTableCell>
              <StyledTableCell align="center">{row.ApptDate}</StyledTableCell>
              <StyledTableCell align="center">{row.Purpose}</StyledTableCell>
              <StyledTableCell align="center">{row.Type}</StyledTableCell>
              <StyledTableCell align='center'>
                {row.PaidAmount}
              </StyledTableCell>
              <StyledTableCell align='center' style={{ display: "flex", justifyContent: "space-between" }}>

                <Button
                  component="a"
                  target="_blank"
                  rel="noopener noreferrer"
                  href=""
                  leftIcon={<VisibilityIcon fontSize='small' />}
                  styles={(theme) => ({
                    root: {
                      backgroundColor: 'rgba(2, 182, 179,0.12)',
                      border: 0,
                      height: 33,
                      padding: ".25rem 0.5rem",
                      color: "#1db9aa",
                      fontSize: ".875rem",
                      fontWeight: 400,
                      fontFamily: "Poppins",

                      '&:hover': {
                        backgroundColor: theme.fn.darken('rgba(2, 182, 179,0.12)', 0.05),
                        color: "#1db9aa",
                      },
                    },

                    leftIcon: {
                      marginRight: 15,
                    },
                  })}
                >
                  View
                </Button>
                <Button
                  component="a"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/mantinedev"
                  leftIcon={<CheckIcon fontSize='small' />}
                  styles={(theme) => ({
                    root: {
                      backgroundColor: 'rgba(15, 183, 107,0.12)',
                      border: 0,
                      height: 33,
                      padding: ".25rem .5rem",
                      color: "#26af48",
                      fontSize: ".875rem",
                      fontWeight: 400,
                      fontFamily: "Poppins",

                      '&:hover': {
                        backgroundColor: theme.fn.darken('rgba(15, 183, 107,0.12)', 0.05),
                        color: "#26af48",
                      },
                    },

                    leftIcon: {
                      marginRight: 15,
                    },
                  })}
                >
                  Accept
                </Button>
                <Button
                  component="a"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/mantinedev"
                  leftIcon={<ClearIcon fontSize='small' />}
                  styles={(theme) => ({
                    root: {
                      backgroundColor: 'rgba(242, 17, 54,0.12)',
                      border: 0,
                      height: 33,
                      padding: ".25rem 0.5rem",
                      color: "#e63c3c",
                      fontSize: ".875rem",
                      fontWeight: 400,

                      '&:hover': {
                        backgroundColor: theme.fn.darken('rgba(242, 17, 54,0.12)', 0.05),
                        color: "#e63c3c",
                      },
                    },

                    leftIcon: {
                      marginRight: 15,
                    },
                  })}
                >
                  Cancel
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export { CustomizedTables };
