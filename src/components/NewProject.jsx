import React, { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

const NewProject = ({ onSaveProject }) => {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    // validation ...
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      // show error..
      modal.current.open();
      return;
    }

    onSaveProject({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} ButtonCaption="Okay">
        <h2>Invalid input</h2>
        <p>Opps.. look like you forgot to enter a value</p>
        <p>Please make sure you provide a valid value for every input field.</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="duration-300 border-solid border-[1px] border-stone-800 text-stone-800 hover:bg-stone-950 hover:text-stone-50 rounded-md py-1 px-4 ">
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="duration-300 border-solid border-[1px] border-stone-800 bg-stone-800 text-stone-50 hover:bg-stone-950 rounded-md py-1 px-4 "
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={title} label="Title"></Input>
          <Input
            ref={description}
            label="Description"
            isTextArea={true}
          ></Input>
          <Input type="date" ref={dueDate} label="Due Date"></Input>
        </div>
      </div>
    </>
  );
};

export default NewProject;
