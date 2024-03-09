import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(text) {
    setProjectsState((prevState) => {
      const taskID = Math.random();
      const newTask = {
        text: text,
        projectID: prevState.selectedProjectId,
        id: taskID,
      };
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }
  function handleDeleteTask(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((tasks) => tasks.id !== id),
      };
    });
  }

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

  function handleCancelProject() {
    setProjectsState((prevState) => {
      return { ...prevState, selectedProjectId: undefined };
    });
  }

  function handleSelectProject(id) {
    setProjectsState((prevState) => {
      return { ...prevState, selectedProjectId: id };
    });
  }

  function handleDeleteProject(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  }

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  let content = (
    <SelectedProject
      onDelete={handleDeleteProject}
      project={selectedProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectsState.tasks}
    ></SelectedProject>
  );
  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject
        onCancel={handleCancelProject}
        onSaveProject={handleSaveProject}
      ></NewProject>
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = (
      <NoProjectSelected onAddProject={handleAddProject}></NoProjectSelected>
    );
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar
        onSelectProject={handleSelectProject}
        projects={projectsState.projects}
        onAddProject={handleAddProject}
        selectedProjectId={projectsState.selectedProjectId}
      ></ProjectSidebar>
      {content}
    </main>
  );
}

export default App;
