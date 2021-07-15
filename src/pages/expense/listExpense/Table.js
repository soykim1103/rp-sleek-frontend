import { useState } from "react";
import PropTypes from "prop-types";
// import { Link as RouterLink } from 'react-router-dom';
import {
  Tooltip,
  Divider,
  Box,
  Card,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableContainer,
  Button,
  Typography,
  CardHeader,
} from "@material-ui/core";
import RefreshTwoToneIcon from "@material-ui/icons/RefreshTwoTone";

const applyPagination = (expenses, page, limit) => {
  return expenses.slice(page * limit, page * limit + limit);
};

const ExpenseTable = ({ expenses, refresh }) => {
  console.log("expenses: ", expenses);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);

  console.log("JGK = ", expenses);

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleLimitChange = (event) => {
    setLimit(parseInt(event.target.value));
  };

  // const paginatedExpenses = applyPagination(expenses, page, limit);

  return (
    <Card>
      <CardHeader
        title="Account Balance"
        action={
          <IconButton color="inherit" onClick={() => refresh()}>
            <RefreshTwoToneIcon />
          </IconButton>
        }
      />
      <Divider />
      <span style={{ textAlign: "center" }}>
        <h2>
          <b>
            {expenses.balance} {expenses.currency}
          </b>
        </h2>
      </span>
    </Card>
  );
};

ExpenseTable.propTypes = {
  expenses: PropTypes.array.isRequired,
};

ExpenseTable.defaultProps = {
  expenses: [],
};

export default ExpenseTable;
