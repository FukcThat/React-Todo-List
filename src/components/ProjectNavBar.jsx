import { useState } from "react";
import TextInput from "./TextInput";
import ProjectNavItem from "./ProjectNavItem";

export default function ProjectNavBar({
  todos,
  projects,
  setProjects,
  setActiveProject,
  activeProject,
}) {
  const [isEditing, setIsEditing] = useState(false);

  const EditProjects = () => {
    setIsEditing(!isEditing);
  };

  const DeleteProject = (projectId) => {
    if (activeProject == projectId) {
      setActiveProject("");
    }

    todos.forEach((todo) => {
      todo.ResetProject();
    });

    setProjects((oldProjects) =>
      oldProjects.filter((project) => project.id !== projectId)
    );
  };

  return (
    <div>
      <button onClick={EditProjects}>Edit</button>
      {projects.map((project) => {
        return (
          <ProjectNavItem
            project={project}
            setProjects={setProjects}
            activeProject={activeProject}
            setActiveProject={setActiveProject}
            isEditing={isEditing}
            DeleteProject={DeleteProject}
            key={project.id}
          />
        );
      })}

      <button
        onClick={() => setActiveProject("")}
        style={{ backgroundColor: activeProject == "" && "red" }}
      >
        All
      </button>
    </div>
  );
}
