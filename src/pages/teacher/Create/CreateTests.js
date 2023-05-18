import React from "react";
import CreateButton from "./createButton";
import { Zoom } from "react-reveal";

const CreateTests = () => {
  return (
    <Zoom>
      <div className="w-full flex justify-center md:p-5">
        <div className="w-1/2 flex justify-center rounded-lg flex-col bg-indigo-100 p-4">
          <span className="text-lg text-indigo-700 text-center font-medium">
            Create New Tests/Quizzes{" "}
          </span>
          <div className="w-full flex justify-center">
            <CreateButton />
          </div>
        </div>
      </div>
    </Zoom>
  );
};

export default CreateTests;
