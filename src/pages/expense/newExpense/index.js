import { Box, Card, Typography, Container } from "@material-ui/core";
import NewExpense from "./NewExpense";

function Expense() {
  console.log("expense");

  return (
    <div>
      <Container maxWidth="sm">
        <Card style={{ marginTop: "10px", padding: "20px" }}>
          <Box>
            <Typography variant="h4" style={{ marginBottom: "10px" }}>
              Top Up Wallet
            </Typography>
            <Typography variant="h6" color="text.secondary" fontWeight="normal">
              Fill in the fields below.
            </Typography>
          </Box>
          <NewExpense />
        </Card>
      </Container>
    </div>
  );
}

export default Expense;
