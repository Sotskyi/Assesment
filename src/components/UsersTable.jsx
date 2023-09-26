import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label='expand row'
            size='small'
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component='th' scope='row'>
          {row.email}
        </TableCell>
        <TableCell align='right'>{row.firstName}</TableCell>
        <TableCell align='right'>{row.lastName}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant='h6' gutterBottom component='div'>
                Spent Money
              </Typography>
              <Table size='small' aria-label='purchases'>
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Dollars</TableCell>
                    <TableCell align='right'>Points</TableCell>
                    <TableCell align='right'>Total points</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.usedMoney.map((usedMoneyRow, i) => {
                    if (i === row.usedMoney.length - 1) {
                      return (
                        <TableRow key={i}>
                          <TableCell component='th' scope='row'>
                            {usedMoneyRow.date}
                          </TableCell>
                          <TableCell>{usedMoneyRow.amount}</TableCell>
                          <TableCell align='right'>
                            {usedMoneyRow.points}
                          </TableCell>
                          <TableCell align='right'>
                            {usedMoneyRow.total}
                          </TableCell>
                        </TableRow>
                      );
                    } else
                      return (
                        <TableRow key={i}>
                          <TableCell component='th' scope='row'>
                            {usedMoneyRow.date}
                          </TableCell>
                          <TableCell>{usedMoneyRow.amount}</TableCell>
                          <TableCell align='right'>
                            {usedMoneyRow.points}
                          </TableCell>
                        </TableRow>
                      );
                  })}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

export function UsersTable({ rows }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label='collapsible table'>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Email</TableCell>
            <TableCell align='right'>First Name</TableCell>
            <TableCell align='right'>Last Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
