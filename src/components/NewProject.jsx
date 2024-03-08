import React from "react";
import Input from "./Input";

const NewProject = () => {
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="duration-300 border-solid border-[1px] border-stone-800 text-stone-800 hover:bg-stone-950 hover:text-stone-50 rounded-md py-1 px-4 ">
            Cancel
          </button>
        </li>
        <li>
          <button className="duration-300 border-solid border-[1px] border-stone-800 bg-stone-800 text-stone-50 hover:bg-stone-950 rounded-md py-1 px-4 ">
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input label="Title"></Input>
        <Input label="Description" isTextArea={true}></Input>
        <Input label="Due Date"></Input>
      </div>
    </div>
  );
};

export default NewProject;
