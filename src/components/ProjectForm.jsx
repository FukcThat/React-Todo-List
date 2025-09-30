import { useRef, useState } from "react";
import TextInput from "./TextInput";
import { v4 as uuidv4 } from "uuid";
import { Project } from "../lib/Project";
import { useGlobal } from "../context/Context";

export default function ProjectForm({ setProjects }) {
  // const [projectName, setProjectName] = useState("");

  const projectNameRef = useRef(null);

  const { toggleVisibility } = useGlobal();

  const onProjectFormSubmit = (e) => {
    e.preventDefault();
    if (projectNameRef.current.value == "") return;
    // if (projectName == "") return;
    const newProject = new Project(uuidv4(), projectNameRef.current.value);
    setProjects((oldProjects) => [...oldProjects, newProject]);
    // setProjectName("");
    toggleVisibility(false);
  };

  return (
    <form onSubmit={onProjectFormSubmit}>
      {/* <TextInput
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
        label="Project Name"
        type={"text"}
        isForm={true}
      /> */}
      <input type="text" ref={projectNameRef} />
      <button type="submit">Done!</button>
    </form>
  );
}
