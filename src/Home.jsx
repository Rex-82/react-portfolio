import Project from "./Project";
import projects from "../utils/Projects.js";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      {projects.map((project) => (
        <Project
          key={project.url}
          title={project.title}
          url={project.url}
          description={project.description}
          technologies={project.technologies}
        />
      ))}
    </>
  );
}
