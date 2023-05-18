import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../FirebaseApp";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Zoom from "react-reveal/Zoom";

const Account = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user.providerData[0].email);
        setEmail(user.providerData[0].email);
      } else {
        navigate("/");
      }
    });
  }, []);
  return (
    <>
      <Container maxWidth="sm">
        <Zoom>
          <Card variant="outlined" sx={{ minWidth: 275 }}>
            <CardContent>
              <Stack spacing={3}>
                <Typography variant="h5" component="div">
                  Account Details
                </Typography>
                {/* <TextField
                variant="outlined"
                label="Name"
                disabled
                value={"Satyam Kumar"}
                fullWidth
              /> */}
                <TextField
                  variant="outlined"
                  label="Email"
                  disabled
                  value={email}
                  fullWidth
                />
                {/* <TextField
                variant="outlined"
                label="Number"
                value={"7845673210"}
                disabled
                type="number"
                fullWidth
              /> */}
              </Stack>
            </CardContent>
          </Card>
        </Zoom>
      </Container>
    </>
  );
};

export default Account;
