import * as React from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Link } from "react-router-dom";
import { Zoom } from "react-reveal";

export default function TeacherHome() {
  return (
    <>
      
      <div className="w-full p-4">
      <Zoom>
        <div className="message space-y-2 w-full rounded-lg text-blue-800 p-4 bg-blue-100">
          <span className="flex space-x-4 place-items-center">
            <InfoOutlinedIcon />
            <p className=" text-lg font-medium">Information</p>
          </span>
          <div className=" ml-10">
            <p>
              Attention! New feature will coming to the platform so get excited
            </p>
            <p>
              Some of the new features we are working on are: Instant connect
              between users, more security etc..
            </p>
          </div>
        </div>
        </Zoom>
        
        <div className="grid grid-cols-2 m-4 gap-5">
        <Zoom>
          <div className="w-full rounded-lg bg-green-200 h-52 p-4 text-center text-3xl font-semibold">
            <div className="w-full h-full flex justify-center place-items-center">
              <Link to="/teacher/tests">Tests</Link>
            </div>
          </div>
          </Zoom>
          <Zoom>
          <div className="w-full rounded-lg bg-yellow-200 h-52 p-4 text-center text-3xl font-semibold">
            <div className="w-full h-full flex justify-center place-items-center">
              <Link to="/teacher/create">Create</Link>
            </div>
          </div>
          </Zoom>
        </div>
        
      </div>
    </>
  );
}
