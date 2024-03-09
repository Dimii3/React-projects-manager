import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  const handleAddProject = () => {
    setProjectsState((prevState) => {
      return { ...prevState, selectedProjectId: null };
    });
  };

  function handleSaveProject(projectData) {
    setProjectsState((prevState) => {
      const projectID = Math.random();
      const newProject = {
        ...projectData,
        id: projectID,
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  console.log(projectsState);

  let content;
  if (projectsState.selectedProjectId === null) {
    content = <NewProject onSaveProject={handleSaveProject}></NewProject>;
  } else if (projectsState.selectedProjectId === undefined) {
    content = (
      <NoProjectSelected onAddProject={handleAddProject}></NoProjectSelected>
    );
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar
        projects={projectsState.projects}
        onAddProject={handleAddProject}
      ></ProjectSidebar>
      {content}
    </main>
  );
}

export default App;
