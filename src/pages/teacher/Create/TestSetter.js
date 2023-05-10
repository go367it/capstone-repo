import React, { useState } from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  Divider,
  Box,
  Typography,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Button,
} from "@mui/material";

let questions = [1]

const TestSetter = () => {
  // const [disableButton, setDisableButton] = useState(true)// to stop the user from moving to another page without entering previous values
  const [answerType, setAnswerType] = useState(""); // for storing the answer type value
  const [questionNumber, setQuestionNumber] = useState([questions]) // for storing the number of questions

  // function for updating the answer type value
  const answer = (e) => {
    console.log(e.target.value);
    if (e.target.value === "text") {
      setAnswerType(e.target.value);
    } else if (e.target.value === "mcq") {
      setAnswerType("mcq");
    }
  };

  const nextButton = () =>{

  }

  return (
    <div>
      <Grid container spacing={2}>
        <Grid
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
        </Grid>

        <Grid item xs={11}>
          <Box sx={{ padding: "1rem" }}>
            <Typography variant="h6">Question</Typography>
            <TextField
              sx={{ marginTop: "1rem" }}
              multiline
              fullWidth
              label="Type here..."
            />
            <Typography sx={{ marginTop: "1rem" }} variant="h6">
              Take answer as:
            </Typography>
            <Box>
              <FormControl>
                <RadioGroup onChange={(e) => answer(e)}>
                  <FormControlLabel
                    value="text"
                    control={<Radio />}
                    label="Text"
                  />
                  <FormControlLabel
                    value="mcq"
                    control={<Radio />}
                    label="MCQ"
                  />
                </RadioGroup>
              </FormControl>
            </Box>

            {answerType === "text" ? (
              <Box>
                <TextField multiline disabled fullWidth label="Type here..." />
              </Box>
            ) : answerType === "mcq" ? (
              <Box sx={{ display: "block", marginTop: "1rem" }}>
                <Typography>Enter your options:</Typography>
                <Box sx={{ marginTop: "1rem" }}>
                  <TextField
                    sx={{ minWidth: "276px" }}
                    multiline
                    label="option1"
                  />
                </Box>
                <Box sx={{ marginTop: "1rem" }}>
                  <TextField
                    sx={{ minWidth: "276px" }}
                    multiline
                    label="option2"
                  />
                </Box>
                <Box sx={{ marginTop: "1rem" }}>
                  <TextField
                    sx={{ minWidth: "276px" }}
                    multiline
                    label="option3"
                  />
                </Box>
                <Box sx={{ marginTop: "1rem" }}>
                  <TextField
                    sx={{ minWidth: "276px" }}
                    multiline
                    label="option4"
                  />
                </Box>
              </Box>
            ) : (
              <Typography variant="h6">Answer Type</Typography>
            )}
            <Box
              fullWidth
              sx={{
                justifyContent: "end",
                display: "flex",
                padding: "0 1rem 0 1rem",
              }}
            >
              <Button
                onClick={()=> nextButton()}
                sx={{ marginTop: "1rem" }}
                variant="contained"
                disableElevation
              >
                Next
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default TestSetter;
