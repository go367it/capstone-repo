import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

export default function LoginSignup() {
  return (
    <Container maxWidth="sm">
      <Card variant="outlined" sx={{ minWidth: 275 }}>
        <CardContent>
          <Stack spacing={3}>
            <Typography variant="h5" component="div">
              Login
            </Typography>
            <TextField variant="outlined" label="email" fullWidth />
            <TextField
              variant="outlined"
              label="password"
              type="password"
              fullWidth
            />
            <Link style={{ textDecoration: 'none' }} to="/teacher/home">
              <Button
                variant="contained"
                disableElevation
                color="primary"
                size="medium"
              >
                Login
              </Button>
            </Link>
          </Stack>
        </CardContent>
      </Card>
    </Container>
  );
}
