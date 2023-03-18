import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";

const Account = () => {
  return (
    <>
      <Container maxWidth="sm">
        <Card variant="outlined" sx={{ minWidth: 275 }}>
          <CardContent>
            <Stack spacing={3}>
              <Typography variant="h5" component="div">
                Account Details
              </Typography>
              <TextField
                variant="outlined"
                label="Name"
                disabled
                value={"Satyam Kumar"}
                fullWidth
              />
              <TextField
                variant="outlined"
                label="Email"
                disabled
                value={"satyamkumar3001@gmail.com"}
                fullWidth
              />
              <TextField
                variant="outlined"
                label="Number"
                value={"7845673210"}
                disabled
                type="number"
                fullWidth
              />
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default Account;
