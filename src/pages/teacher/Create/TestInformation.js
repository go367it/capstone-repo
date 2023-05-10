import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

const TestInformation = () => {
  return (
    <div>
      <Container maxWidth="sm" sx={{marginTop: '2rem'}}>
        <Card variant="outlined" sx={{ minWidth: 275 }}>
          <CardContent>
            <Stack spacing={3}>
              <Typography variant="h6" component="div">
                Test details
              </Typography>
              <TextField variant="outlined" label="Test Name" fullWidth />
              <TextField variant="outlined" label="Time Limit" fullWidth />
              <TextField variant="outlined" label="Access Time" fullWidth />
              <TextField variant="outlined" type="password" label="Test Password" fullWidth />
              <TextField
                type="password"
                variant="outlined"
                label="Confirm Password"
                fullWidth
              />
              <Box sx={{
                justifyItems: "end",
                display: "flex",
                // width: '100%'
              }}
              fullWidth
              >
                <Button variant="contained" disableElevation>
                  Next
                </Button>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default TestInformation;
