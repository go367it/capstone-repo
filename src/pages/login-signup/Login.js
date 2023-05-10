import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import { useContext } from "react";
import MessageContext from "../../context/MessageContext";

export default function Login() {

  const {setOpen, setType, setMessage} = useContext(MessageContext)

  const handleSubmit = () =>{
    setOpen(true)
    setType('info')
    setMessage('kjhvljvjlh')
  }

  return (
    <Container sx={{ mt: 3 }} maxWidth="sm">
      <Card variant="outlined" sx={{ minWidth: 275 }}>
        <CardContent>
          <Stack>
            <div className="d-flex justify-content-center">
              <h4>Login</h4>
            </div>
            <div class="mt-3">
              <label for="email" class="form-label">
                Email address
              </label>
              <input
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
                type="password"
                class="form-control"
                id="password"
                // placeholder="name@example.com"
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
                  onClick={()=> handleSubmit ()}
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
