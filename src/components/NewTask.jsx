import React, { useState } from "react";

const NewTask = ({ onAddTask, onDeleteTask }) => {
  const [enteredTask, setEnteredTask] = useState("");
  function handleChange(e) {
    setEnteredTask(e.target.value);
  }

  function handleClickTask() {
    if (enteredTask.trim() === "") return;
    onAddTask(enteredTask);
    setEnteredTask("");
  }
  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleChange}
        value={enteredTask}
      />
      <button
        onClick={handleClickTask}
        className="text-stone-700  hover:text-stone-950"
      >
        Add Task
      </button>
    </div>
  );
};

export default NewTask;
