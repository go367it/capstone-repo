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

function SimpleSnackbar(props) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Button
        sx={{
          borderRadius: "30px",
          border: "0px",
          backgroundColor: "#FFD8D8",
          color: "#DF3434",
        }}
        onClick={handleClick}
      >
        {props.testId}
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Copied!"
        action={action}
      />
    </div>
  );
}

const TestsSection = () => {
  const [quizList, setQuizList] = useState([]);
  const [loading, setLoading] = useState(true);

  // loading the data
  useEffect(() => {
    getDocs(collection(db, "quizzes"))
      .then((response) => {
        console.log(response.docs);
        console.log(
          response.docs[0]._document.data.value.mapValue.fields.Title
            .stringValue
        );
        let arr = []; // for storing temp data

        response.docs.forEach((element) => {
          let jsonData = {
            id: element.id,
            Title:
              element._document.data.value.mapValue.fields.Title.stringValue,
            Type: element._document.data.value.mapValue.fields.Type.stringValue,
            openTime:
              element._document.data.value.mapValue.fields.openTime.stringValue,
            closeTime:
              element._document.data.value.mapValue.fields.closeTime
                .stringValue,
            TimeLimit:
              element._document.data.value.mapValue.fields.TimeLimit
                .stringValue,
          };
          console.log(jsonData);
          arr.push(jsonData);
        });

        setQuizList(arr);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
                      className="md:flex justify-between px-3 py-4 border border-gray-200 
                      bg-gray-50 rounded-lg hover:bg-indigo-200 hover:text-indigo-700 transform 
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
                      <div className="w-full md:flex mt-3 md:mt-0 justify-end space-x-3">
                        <Tooltip title="Test time" arrow placement="top">
                          <Chip
                            variant="outlined"
                            icon={<AccessTimeIcon />}
                            label={ele.TimeLimit}
                          />
                        </Tooltip>
                        <Tooltip title="Test start date" arrow placement="top">
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
