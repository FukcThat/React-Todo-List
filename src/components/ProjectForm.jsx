import { useState } from "react";
import TextInput from "./TextInput";
import { v4 as uuidv4 } from "uuid";

export default function ProjectForm() {
  const [projectName, setProjectName] = useState("");

  const onProjectFormSubmit = (e) => {
    e.preventDefault();

    console.log(projectName, uuidv4());
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
