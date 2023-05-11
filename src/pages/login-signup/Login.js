import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import MessageContext from "../../context/MessageContext";
import { useNavigate } from "react-router-dom";
import Zoom from "react-reveal/Zoom";

// firebase import
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../FirebaseApp";

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
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (filedChecking() == true) {
      // user login
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential);
          setOpen(true);
          setType("success");
          setMessage("Login Successfull!");
          navigate("/teacher/home");
        })
        .catch((error) => {
          setOpen(true);
          setType("error");
          setMessage(`${error.code}!`);
          console.log(error.message, error.code);
        });
    }
  };

  return (
    <Container sx={{ mt: 3 }} maxWidth="sm">
      <Zoom>
        <Card variant="outlined" sx={{ minWidth: 275 }}>
          <CardContent>
            <Stack>
              <div className="flex justify-center text-center w-full text-3xl font-semibold">
                <h4>Login</h4>
              </div>
              <div className="mt-3">
                <div for="email" className="form-label">
                  Email address
                </div>
                <input
                  value={email}
                  onChange={(e) => onChange(e)}
                  type="email"
                  className="mt-3 w-full px-3 py-2 border border-gray-300 rounded-lg outline-none
                focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform duration-300
                "
                  id="email"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mt-3">
                <div for="password" className="form-label">
                  Password
                </div>
                <input
                  value={password}
                  onChange={(e) => onChange(e)}
                  type="password"
                  className="mt-3 w-full px-3 py-2 border border-gray-300 rounded-lg outline-none
                focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform duration-300
                "
                  id="password"
                />
              </div>
              <div className="mt-3 text-center">
                <span>
                  Don't have an Account?
                  <Link
                    className=" text-blue-500"
                    style={{ textDecoration: "none" }}
                    to="/signup"
                  >
                    {" "}
                    Sign Up!
                  </Link>
                </span>
              </div>

              <div className="mt-3 flex justify-center">
                <button
                  className="mt-3 px-3 py-2 rounded-lg bg-indigo-600 text-white w-1/3
              hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
              transform duration-300
              "
                  onClick={() => handleSubmit()}
                >
                  Login
                </button>
              </div>
            </Stack>
          </CardContent>
        </Card>
      </Zoom>
    </Container>
  );
}
