import React from "react";
import Button from "./Button";

const ProjectSidebar = () => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-lg shadow-lg">
      <h2 className="mb-8 font-bold uppercase">Your Projects</h2>
      <div>
        <Button>+ Add new Project</Button>
      </div>
      <ul></ul>
    </aside>
  );
};

export default ProjectSidebar;
