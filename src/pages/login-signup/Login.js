import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import MessageContext from "../../context/MessageContext";


export default function Login() {
  const { setOpen, setType, setMessage } = useContext(MessageContext);
  const [email, setEmail] = useState(""); // state for email
  const [password, setPassword] = useState(""); // state for password

  // function for checking fileds
  const filedChecking = () => {
    if (email === "" || password === "") {
      setOpen(true);
      setType("warning");
      setMessage("Enter All The Fields!");
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
      default:
        setOpen(true);
        setType("warning");
        setMessage("Please Type In Correct Field!");
    }
  };

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
              <h4>Login</h4>
            </div>
            <div className="mt-3">
              <label for="email" className="form-label">
                Email address
              </label>
              <input
                value={email}
                onChange={(e) => onChange(e)}
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
              />
            </div>
            <div className="mt-3">
              <label for="password" className="form-label">
                Password
              </label>
              <input
                value={password}
                onChange={(e) => onChange(e)}
                type="password"
                className="form-control"
                id="password"
              />
            </div>
            <div className="mt-3 d-flex justify-content-center">
              <span>
                Don't have an Account?
                <Link style={{ textDecoration: "none" }} to="/signup">
                  {" "}
                  Sign Up!
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
                Login
              </Button>
            </div>
          </Stack>
        </CardContent>
      </Card>
    </Container>
  );
}
