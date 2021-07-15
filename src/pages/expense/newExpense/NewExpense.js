import { useEffect, useState } from "react";
import {
  Button,
  TextField,
  CircularProgress,
  MenuItem,
  Select,
  InputLabel,
  Checkbox,
  FormControl,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { useDispatch, useSelector } from "react-redux";
import { newExpense, getAllUsers } from "../../../actions/expenseAction";

function NewExpense() {
  const dispatch = useDispatch();
  const { fetching, error, success } = useSelector((state) => state.newExpense);

  const userState = useSelector((state) => state.allUsers);
  const { users } = userState;

  useEffect(() => {
    dispatch(getAllUsers());
    console.log(users, "members");
  }, [dispatch]);

  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState("ILS");
  const [members, setEmails] = useState([]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        console.log("error");
      }, 1000);
    }
  }, [dispatch, error]);

  const handleChange = (event) => {
    setEmails(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open(
      "https://checkout.rapyd.net/?token=checkout_e2f6bb67ce65c50e171d9334b710c135",
      "_blank"
    );

    if (amount !== undefined && currency !== undefined) {
      dispatch(newExpense(amount, currency));
    }
  };

  return (
    <form noValidate onSubmit={handleSubmit}>
      {success ? (
        <Alert
          severity="success"
          style={{ marginBottom: "14px ", marginTop: "14px " }}
        >
          Wallet has been funded successfully.
        </Alert>
      ) : error ? (
        <Alert
          severity="error"
          style={{ marginBottom: "14px ", marginTop: "14px " }}
        >
          {error.message}
        </Alert>
      ) : null}
      <TextField
        fullWidth
        type="number"
        margin="normal"
        label="Amount"
        name="amount"
        onChange={(e) => setAmount(e.target.valueAsNumber)}
        defaultValue={amount}
        variant="outlined"
        size="small"
      />

      <TextField
        fullWidth
        margin="normal"
        label="Currency"
        name="currency"
        onChange={(e) => setCurrency(e.target.value)}
        defaultValue={currency}
        variant="outlined"
        size="small"
      />
      <Button
        sx={{ mt: 3 }}
        color="primary"
        startIcon={fetching ? <CircularProgress size="1rem" /> : null}
        disabled={fetching}
        type="submit"
        fullWidth
        size="large"
        variant="contained"
      >
        Submit
      </Button>
    </form>
  );
}

export default NewExpense;
