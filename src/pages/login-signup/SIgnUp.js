import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import { useContext } from "react";
import MessageContext from "../../context/MessageContext";

const SIgnUp = () => {
  const { setOpen, setType, setMessage } = useContext(MessageContext);
  const [email, setEmail] = useState(""); // state for email
  const [password, setPassword] = useState(""); // state for password
  const [confirmPassword, setConfirmPassword] = useState(""); // state for confirm password

  // function for checking fileds
  const filedChecking = () => {
    if (email === "" || password === "" || confirmPassword === "") {
      setOpen(true);
      setType("warning");
      setMessage("Enter All The Fields!");
      return false;
    }

    if (password != confirmPassword) {
      setOpen(true);
      setType("warning");
      setMessage("Password And Confirm Password Must Be Same!");
      return false;
    }

    return true;
  };

  // function for onchange event on each filed
  const onChange = (e) => {
    // setting the value for particular filed
    switch (e.target.id) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "confirm-password":
        setConfirmPassword(e.target.value);
        break;
      default:
        setOpen(true);
        setType("warning");
        setMessage("Please Type In Correct Field!");
    }
  };

  // function for handling submit button
  const handleSubmit = () => {
    if (filedChecking() == true) {
    }
  };

  return (
    <Container sx={{ mt: 3 }} maxWidth="sm">
      <Card variant="outlined" sx={{ minWidth: 275 }}>
        <CardContent>
          <Stack>
            <div className="d-flex justify-content-center">
              <h4>Sign Up</h4>
            </div>
            <div class="mt-3">
              <label for="email" class="form-label">
                Email address
              </label>
              <input
                value={email}
                onChange={(e) => onChange(e)}
                type="email"
                class="form-control"
                id="email"
                placeholder="name@example.com"
              />
            </div>
            <div class="mt-3">
              <label for="password" class="form-label">
                Password
              </label>
              <input
                value={password}
                onChange={(e) => onChange(e)}
                type="password"
                class="form-control"
                id="password"
              />
            </div>
            <div class="mt-3">
              <label for="confirm-password" class="form-label">
                Confirm Password
              </label>
              <input
                value={confirmPassword}
                onChange={(e) => onChange(e)}
                type="password"
                class="form-control"
                id="confirm-password"
              />
            </div>
            <div className="mt-3 d-flex justify-content-center">
              <span>
                Already have an Account?
                <Link style={{ textDecoration: "none" }} to="/">
                  {" "}
                  Sign In!
                </Link>
              </span>
            </div>

            <div className="mt-3 d-flex justify-content-center">
              <Button
                onClick={() => handleSubmit()}
                variant="contained"
                disableElevation
                color="primary"
                size="medium"
              >
                Sign Up
              </Button>
            </div>
          </Stack>
        </CardContent>
      </Card>
    </Container>
  );
};

export default SIgnUp;
