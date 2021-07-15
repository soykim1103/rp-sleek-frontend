import { useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useDispatch, useSelector } from 'react-redux';
import { getAllExpense } from '../../../actions/expenseAction';
import Table from './Table';

function ExpenseTable() {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.expense);
  const { fetching, expenses, error } = userState;

  const refresh = () => {
    dispatch(getAllExpense());
  };
  
  useEffect(() => {
    dispatch(getAllExpense());
  }, [dispatch]);

  console.log(expenses, "expenses")

  return (
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
          sx={{ mb: 12 }}
        >
          <Grid item xs={12}>
            {fetching ? (
              <CircularProgress />
            ) : error ? (
              error
            ) : (
              <Table expenses={error ? [] : expenses} refresh={refresh} />
            )}
          </Grid>
        </Grid>
      </Container>
  );
}

export default ExpenseTable;
