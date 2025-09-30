export class Project {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

export const ProjectHydrator = (project) =>
  new Project(project.id, project.name);
