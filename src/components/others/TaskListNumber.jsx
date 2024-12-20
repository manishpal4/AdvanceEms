import React from "react";

const TaskListNumber = ({data}) => {
  return (
    <div className="flex  justify-between mt-10 gap-5">
      <div className="p-10 w-[45%] bg-red-600 rounded-xl py-5 text-left">
        <h2 className="text-3xl font-semibold bg-transparent text-white">0</h2>
        <h3 className="text-xl bg-transparent text-white">New task</h3>
      </div>

      <div className="p-10 w-[45%] bg-blue-600 rounded-xl py-5 text-left">
        <h2 className="text-3xl font-semibold bg-transparent text-white">0</h2>
        <h3 className="text-xl bg-transparent text-white">Completed</h3>
      </div>

      <div className="p-10 w-[45%] bg-green-600 rounded-xl py-5 text-left">
        <h2 className="text-3xl font-semibold bg-transparent text-white">0</h2>
        <h3 className="text-xl bg-transparent text-white">Accepted</h3>
      </div>

      <div className="p-10 w-[45%] bg-yellow-400 rounded-xl py-5 text-left">
        <h2 className="text-3xl font-semibold bg-transparent text-white">0</h2>
        <h3 className="text-xl bg-transparent text-white">Failed</h3>
      </div>
    </div>
  );
};

export default TaskListNumber;
