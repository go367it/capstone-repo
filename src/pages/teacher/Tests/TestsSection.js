import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../FirebaseApp";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Zoom from "react-reveal/Zoom";
import Chip from "@mui/material/Chip";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import Tooltip from "@mui/material/Tooltip";
import Dialog from "@mui/material/Dialog";
import { Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Slide from "@mui/material/Slide";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

let answerSet = new Set()

const TestsSection = () => {
  const [quizList, setQuizList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [disableAnswer, setDisableAnswer] = useState(false)

  const answerGiven = (e) =>{
    answerSet.add(e.target.value)
  }

  // loading the data
  useEffect(() => {
    getDocs(collection(db, "quizzes"))
      .then((response) => {
        console.log(response.docs);
        // console.log(
        //   response.docs[0]._document.data.value.mapValue.fields.Title
        //     .stringValue
        // );
        let arr = []; // for storing temp data

        if (response.docs.length > 0) {
          response.docs.forEach((element) => {
            let jsonData = {
              id: element.id,
              Title:
                element._document.data.value.mapValue.fields.Title.stringValue,
              Type: element._document.data.value.mapValue.fields.Type
                .stringValue,
              openTime:
                element._document.data.value.mapValue.fields.openTime
                  .stringValue,
              closeTime:
                element._document.data.value.mapValue.fields.closeTime
                  .stringValue,
              TimeLimit:
                element._document.data.value.mapValue.fields.TimeLimit
                  .stringValue,
              Questions:
                element._document.data.value.mapValue.fields.questions
                  .arrayValue.values,
            };
            console.log(
              element._document.data.value.mapValue.fields.questions.arrayValue
                .values
            );
            arr.push(jsonData);
          });
        }

        setQuizList(arr);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // handle modal closing
  const handleClose = () =>{
    setDisableAnswer(false)
    setModalOpen(false)
  }

  return (
    <>
      <div className="w-full text-start text-3xl font-medium">Tests</div>
      <div className="w-full p-5">
        {loading ? (
          <Box>
            <LinearProgress />
          </Box>
        ) : (
          <div className="w-full">
            {quizList.length > 0 ? (
              quizList.map((ele) => {
                return (
                  <Zoom>
                    <div
                      key={ele.id}
                      className="md:flex mt-5 justify-between px-3 py-4 border border-gray-200 
                      bg-gray-50 rounded-lg hover:bg-indigo-200 hover:border-0 
                      hover:text-indigo-700 transform 
                       duration-300"
                    >
                      <div className="w-full">
                        <p className="text-xl font-semibold">{ele.Title}</p>
                        <p className="text-xs mt-3">
                          <Tooltip title="Type of test" arrow placement="top">
                            <Chip variant="filled" label={ele.Type} />
                          </Tooltip>
                        </p>
                      </div>
                      <div className="w-full">
                        <div className="w-full md:flex mt-3 md:mt-0 justify-end space-x-3">
                          <Tooltip title="Test time" arrow placement="top">
                            <Chip
                              variant="outlined"
                              icon={<AccessTimeIcon />}
                              label={ele.TimeLimit}
                            />
                          </Tooltip>
                          <Tooltip
                            title="Test start date"
                            arrow
                            placement="top"
                          >
                            <Chip
                              variant="outlined"
                              icon={<CalendarMonthIcon />}
                              label={ele.openTime}
                            />
                          </Tooltip>
                          <Tooltip title="Test end date" arrow placement="top">
                            <Chip
                              variant="outlined"
                              icon={<EventAvailableIcon />}
                              label={ele.closeTime}
                            />
                          </Tooltip>
                        </div>
                        <div className="w-full flex justify-end mt-3">
                          <Tooltip title="Take Test" arrow placement="top">
                            <IconButton
                              onClick={() => setModalOpen(true)}
                              aria-label="Take Test"
                              size="large"
                            >
                              <DoubleArrowIcon fontSize="inherit" />
                            </IconButton>
                          </Tooltip>
                          <Dialog
                            fullScreen
                            open={modalOpen}
                            onClose={() => setModalOpen(false)}
                            TransitionComponent={Transition}
                          >
                            <AppBar sx={{ position: "relative" }}>
                              <div className="bg-indigo-600">
                                <Toolbar>
                                  <Tooltip title="All the state will be lost" placement="bottom" arrow>
                                  <IconButton
                                    edge="start"
                                    color="inherit"
                                    onClick={() => handleClose()}
                                    aria-label="close"
                                  >
                                    <CloseIcon />
                                  </IconButton>
                                  </Tooltip>
                                  <Typography
                                    sx={{ ml: 2, flex: 1 }}
                                    variant="h6"
                                    component="div"
                                  >
                                    {ele.Title}
                                  </Typography>
                                </Toolbar>
                              </div>
                            </AppBar>
                            <Container maxWidth="md">
                              <div className="w-full mt-4 mb-4 p-4 border border-gray-300 rounded-lg">
                                
                                <div className="questions text-xl mt-3 font-semibold">
                                  Questions
                                </div>
                                <hr />
                                <div className="px-5">
                                  {ele.Questions.map(e=>{
                                    return(
                                      <>
                                        <div className="mt-4">
                                          {e.mapValue.fields.question.stringValue}
                                        </div>
                                        <div className="mt-3">
                                          <div className="flex space-x-2 mb-3">
                                            <input 
                                            disabled={disableAnswer}
                                            name={e.mapValue.fields.question.stringValue}
                                            type="radio" 
                                            value={e.mapValue.fields.option1.stringValue} />
                                            <p>{e.mapValue.fields.option1.stringValue}</p>
                                          </div>
                                          <div className="flex space-x-2 mb-3">
                                            <input 
                                            disabled={disableAnswer}
                                            name={e.mapValue.fields.question.stringValue}
                                            type="radio" 
                                            value={e.mapValue.fields.option2.stringValue} />
                                            <p>{e.mapValue.fields.option2.stringValue}</p>
                                          </div>
                                          <div className="flex space-x-2 mb-3">
                                            <input 
                                            disabled={disableAnswer}
                                            name={e.mapValue.fields.question.stringValue}
                                            type="radio" 
                                            value={e.mapValue.fields.option3.stringValue} />
                                            <p>{e.mapValue.fields.option3.stringValue}</p>
                                          </div>
                                          <div className="flex space-x-2 mb-3">
                                            <input
                                            disabled={disableAnswer}
                                            name={e.mapValue.fields.question.stringValue}
                                            type="radio" 
                                            value={e.mapValue.fields.option4.stringValue} />
                                            <p>{e.mapValue.fields.option4.stringValue}</p>
                                          </div>
                                          {
                                            disableAnswer? 
                                            <div className="flex place-items-center space-x-2 mb-3">
                                            <p className="text-md font-semibold">Answer:</p>
                                            <p>{e.mapValue.fields.answer.stringValue}</p>
                                          </div>
                                            :''
                                          }
                                        </div>
                                        <hr />
                                        
                                      </>
                                    )
                                  })}
                                  <div className="w-full mt-3 flex justify-center">
                                          <Button
                                          onClick={()=> setDisableAnswer(true)}
                                          variant="contained" disableElevation>
                                            Show Result
                                          </Button>
                                        </div>
                                </div>
                              </div>
                            </Container>
                          </Dialog>
                        </div>
                      </div>
                    </div>
                  </Zoom>
                );
              })
            ) : (
              <div className="w-full flex justify-center">
                <div className="w-1/2 bg-yellow-100 rounded-lg text-yellow-700 p-5">
                  No Tests Available!
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default TestsSection;
