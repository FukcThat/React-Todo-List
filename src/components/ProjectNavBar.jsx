export default function ProjectNavBar({
  projects,
  setActiveProject,
  activeProject,
}) {
  return (
    <div>
      {projects.map((project) => {
        return (
          <button
            key={project.id}
            style={{ backgroundColor: activeProject == project.id && "red" }}
            onClick={() => setActiveProject(project.id)}
          >
            {project.name}
          </button>
        );
      })}

      <button
        onClick={() => setActiveProject(null)}
        style={{ backgroundColor: activeProject == null && "red" }}
      >
        All
      </button>
    </div>
  );
}
