import { useState } from "react";
import TextInput from "./TextInput";
import { v4 as uuidv4 } from "uuid";
import { Project } from "../lib/Project";

export default function ProjectForm({ setProjects }) {
  const [projectName, setProjectName] = useState("");

  const onProjectFormSubmit = (e) => {
    e.preventDefault();
    if (projectName == "") return;

    const newProject = new Project(uuidv4(), projectName);
    setProjects((oldProjects) => [...oldProjects, newProject]);

    setProjectName("");
  };

  return (
    <form onSubmit={onProjectFormSubmit}>
      <TextInput
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
        label="Project Name"
        type={"text"}
        isForm={true}
      />

      <button type="submit">Done!</button>
    </form>
  );
}
