import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";

const TeacherSecurity = () => {
  return (
    <>
      <Container maxWidth="sm">
        <Card variant="outlined" sx={{ minWidth: 275 }}>
          <CardContent>
            <Stack spacing={3}>
              <Typography variant="h5" component="div">
                Update Password
              </Typography>
              <TextField variant="outlined" label="Previous password" type="password" fullWidth />
              <TextField
                variant="outlined"
                label="New password"
                type="password"
                fullWidth
              />
              <TextField
                variant="outlined"
                label="Confirm password"
                type="password"
                fullWidth
              />

              <Button
                variant="outlined"
                disableElevation
                color="error"
                size="medium"
              >
                Update
              </Button>

            </Stack>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default TeacherSecurity;
