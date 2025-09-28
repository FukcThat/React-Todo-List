import { useState } from "react";
import TextInput from "./TextInput";

export default function ProjectNavItem({
  project,
  setProjects,
  activeProject,
  setActiveProject,
  isEditing,
  DeleteProject,
}) {
  const [nameInput, setNameInput] = useState(project.name);

  const UpdateProjectName = (e) => {
    setNameInput(e.target.value);
    setProjects((oldProjects) =>
      oldProjects.map((oldProject) =>
        project.id === oldProject.id
          ? { ...oldProject, name: e.target.value }
          : oldProject
      )
    );
  };

  return (
    <div>
      {!isEditing ? (
        <button
          style={{
            backgroundColor: activeProject == project.id && "red",
          }}
          onClick={() => setActiveProject(project.id)}
        >
          {project.name}
        </button>
      ) : (
        <TextInput
          value={nameInput}
          type={"text"}
          onChange={UpdateProjectName}
        />
      )}

      {isEditing && (
        <button onClick={() => DeleteProject(project.id)}>🗑️</button>
      )}
    </div>
  );
}
