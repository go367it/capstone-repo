import React, { useState, useContext } from "react";
import {
  Grid,
  Container,
  Box,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import MessageContext from "../../../context/MessageContext";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../FirebaseApp";

const TestSetter = () => {
  const { setOpen, setType, setMessage } = useContext(MessageContext);
  // const [disableButton, setDisableButton] = useState(true)// to stop the user from moving to another page without entering previous values
  const [questionNumber, setQuestionNumber] = useState([1]); // for storing the number of questions
  const [questions, setQuestions] = useState([]); // for storing the questions
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [answer, setAnswer] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [showSubmit, setShowSubmit] = useState(false);
  const [title, setTitle] = useState("");
  const [qtype, setQtype] = useState("");
  const [timeLimit, setTimeLimit] = useState("");
  const [openTime, setOpenTime] = useState("");
  const [closeTime, setCloseTime] = useState("");

  // on input change by user
  const onChange = (e) => {
    switch (e.target.id) {
      case "question":
        setQuestion(e.target.value);
        break;
      case "title":
        setTitle(e.target.value);
        break;
      case "qtype":
        setQtype(e.target.value);
        break;
      case "timeLimit":
        setTimeLimit(e.target.value);
        break;
      case "openTime":
        setOpenTime(e.target.value);
        break;
      case "closeTime":
        setCloseTime(e.target.value);
        break;
      case "option1":
        setOption1(e.target.value);
        break;
      case "option2":
        setOption2(e.target.value);
        break;
      case "option3":
        setOption3(e.target.value);
        break;
      case "option4":
        setOption4(e.target.value);
        break;
      case "answer":
        setAnswer(e.target.value);
        break;
      default:
        break;
    }
  };

  const nextButton = () => {
    if (
      question == "" ||
      option1 == "" ||
      option2 == "" ||
      option3 == "" ||
      option4 == "" ||
      answer == ""
    ) {
      setType("warning");
      setMessage("Please enter all the fields!");
      setOpen(true);
    } else {
      let queArr = questions;
      const jsonData = {
        qno: queArr.length + 1,
        question: question,
        option1: option1,
        option2: option2,
        option3: option3,
        option4: option4,
        answer: answer,
      };
      queArr.push(jsonData);
      setQuestions(queArr);
      setQuestion("");
      setOption1("");
      setOption2("");
      setOption3("");
      setOption4("");
      setAnswer("");
      setType("info");
      setMessage("Question saved! Add another question!");
      setOpen(true);

      setShowSubmit(true);
      console.log(queArr, questions);
    }
  };

  // function for submitting to the api
  const apiSubmit = () => {
    if (
      title == "" ||
      qtype == "" ||
      timeLimit == "" ||
      openTime == "" ||
      closeTime == ""
    ) {
      setType("warning");
      setMessage("Please Enter All The Fields!");
      setOpen(true);
    } else {
      addDoc(collection(db, "quizzes"), {
        Title: title,
        Type: qtype,
        TimeLimit: timeLimit,
        closeTime: closeTime,
        openTime: openTime,
        questions: questions,
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div>
      <Container maxWidth="sm">
        <Grid container spacing={2}>
          {/* <Grid
          item
          xs={1}
          sx={{ borderRight: "1px solid gray", justifyContent: "center" }}
        >
          <List>
            <ListItem sx={{ justifyContent: "center" }}>
              <ListItemAvatar>
                <Avatar>1</Avatar>
              </ListItemAvatar>
            </ListItem>
            <Divider />
          </List>
        </Grid> */}

          <Grid item xs={12}>
            <Box sx={{ padding: "1rem" }}>
              <Typography variant="h6">Question</Typography>

              <input
                type="text"
                className="mt-3 w-full px-3 py-4 border border-gray-300 rounded-lg outline-none
                focus:border-2 focus:border-indigo-500 transform duration-300 ease-in-out
                "
                id="question"
                value={question}
                onChange={(e) => onChange(e)}
                placeholder="Type here..."
              />

              <Box sx={{ display: "block", marginTop: "1rem" }}>
                <Typography>Enter your options:</Typography>
                <Box sx={{ marginTop: "1rem" }}>
                  <TextField
                    id="option1"
                    onChange={(e) => onChange(e)}
                    value={option1}
                    sx={{ minWidth: "276px" }}
                    multiline
                    fullWidth
                    label="option1"
                  />
                </Box>
                <Box sx={{ marginTop: "1rem" }}>
                  <TextField
                    id="option2"
                    fullWidth
                    onChange={(e) => onChange(e)}
                    value={option2}
                    sx={{ minWidth: "276px" }}
                    multiline
                    label="option2"
                  />
                </Box>
                <Box sx={{ marginTop: "1rem" }}>
                  <TextField
                    id="option3"
                    fullWidth
                    onChange={(e) => onChange(e)}
                    value={option3}
                    sx={{ minWidth: "276px" }}
                    multiline
                    label="option3"
                  />
                </Box>
                <Box sx={{ marginTop: "1rem" }}>
                  <TextField
                    id="option4"
                    fullWidth
                    onChange={(e) => onChange(e)}
                    value={option4}
                    sx={{ minWidth: "276px" }}
                    multiline
                    label="option4"
                  />
                </Box>
                <Box sx={{ marginTop: "1rem" }}>
                  <TextField
                    id="answer"
                    fullWidth
                    onChange={(e) => onChange(e)}
                    value={answer}
                    sx={{ minWidth: "276px" }}
                    multiline
                    label="Answer"
                  />
                </Box>
              </Box>

              <div className="flex mt-3 justify-center space-x-3">
                <Button
                  onClick={() => nextButton()}
                  sx={{ marginTop: "1rem" }}
                  variant="contained"
                  disableElevation
                >
                  Add
                </Button>

                {showSubmit ? (
                  <button
                    className="mt-3 px-3 py-2 rounded-lg bg-indigo-600 text-white
              hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
              transform duration-300
              "
                    onClick={() => setModalOpen(!modalOpen)}
                  >
                    Submit
                  </button>
                ) : (
                  ""
                )}

                <Dialog
                  open={modalOpen}
                  maxWidth="sm"
                  onClose={() => setModalOpen(false)}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">
                    {"Test Details"}
                  </DialogTitle>
                  <DialogContent>
                    <label className="">Test Title</label>
                    <input
                      type="text"
                      className="mt-3 w-full px-3 py-2 border border-gray-300 rounded-lg outline-none
                      focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform duration-300
                      "
                      value={title}
                      onChange={(e) => onChange(e)}
                      id="title"
                    />
                    <div className="mt-5">Test Type</div>
                    <input
                      type="text"
                      className="mt-3 w-full px-3 py-2 border border-gray-300 rounded-lg outline-none
                      focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform duration-300
                "
                      value={qtype}
                      onChange={(e) => onChange(e)}
                      id="qtype"
                    />
                    <div className="mt-5">Time Limit</div>
                    <input
                      type="text"
                      className="mt-3 w-full px-3 py-2 border border-gray-300 rounded-lg outline-none
                      focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform duration-300
                "
                      value={timeLimit}
                      onChange={(e) => onChange(e)}
                      id="timeLimit"
                    />
                    <div className="mt-5">Open Time</div>
                    <input
                      type="text"
                      className="mt-3 w-full px-3 py-2 border border-gray-300 rounded-lg outline-none
                      focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform duration-300
                "
                      value={openTime}
                      onChange={(e) => onChange(e)}
                      id="openTime"
                    />
                    <div className="mt-5">Close Time</div>
                    <input
                      type="text"
                      className="mt-3 w-full px-3 py-2 border border-gray-300 rounded-lg outline-none
                      focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform duration-300
                "
                      value={closeTime}
                      onChange={(e) => onChange(e)}
                      id="closeTime"
                    />
                  </DialogContent>
                  <div className="flex justify-center p-4">
                    <button
                      className="mt-3 px-3 py-2 rounded-lg bg-indigo-600 text-white
              hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
              transform duration-300
              "
                      onClick={() => apiSubmit()}
                    >
                      Create
                    </button>
                  </div>
                </Dialog>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default TestSetter;
