import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import { useContext } from "react";
import MessageContext from "../../context/MessageContext";
import { useNavigate } from "react-router-dom";
import Zoom from "react-reveal/Zoom";

// firebase import
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../FirebaseApp";

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
  const navigate = useNavigate();
  // function for handling submit button
  const handleSubmit = () => {
    if (filedChecking() == true) {
      // creating user
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential);
          setOpen(true);
          setType("success");
          setMessage("User Registered!");

          setTimeout(() => {
            navigate("/");
          }, 3000);
        })
        .catch((error) => {
          // displaying error message
          if (error.code == "auth/email-already-in-use") {
            setOpen(true);
            setType("error");
            setMessage("Email Already Exists!");
          } else if (error.code == "auth/invalid-email") {
            setOpen(true);
            setType("error");
            setMessage("Invalid Email!");
          } else if (error.code == "auth/weak-password") {
            setOpen(true);
            setType("error");
            setMessage("Weak Password!");
          } else {
            setOpen(true);
            setType("error");
            setMessage(`${error.code}`);
          }

          console.log(error.message, error.code);
          console.log(error);
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
                <h4>Sign Up</h4>
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
              <div className="mt-3">
                <div for="confirm-password" className="form-label">
                  Confirm Password
                </div>
                <input
                  value={confirmPassword}
                  onChange={(e) => onChange(e)}
                  type="password"
                  className="mt-3 w-full px-3 py-2 border border-gray-300 rounded-lg outline-none
                focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform duration-300
                "
                  id="confirm-password"
                />
              </div>
              <div className="mt-3 text-center">
                <span>
                  Already have an Account?
                  <Link
                    className=" text-blue-500"
                    style={{ textDecoration: "none" }}
                    to="/"
                  >
                    {" "}
                    Sign In!
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
                  Sign Up
                </button>
              </div>
            </Stack>
          </CardContent>
        </Card>
      </Zoom>
    </Container>
  );
};

export default SIgnUp;
