import * as React from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

export default function TeacherHome() {
  return (
    <>
      <div className="w-full p-4">
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
      </div>
    </>
  );
}
