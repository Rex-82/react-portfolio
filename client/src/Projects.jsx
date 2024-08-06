import "./Projects.css";
import projectsData from "../utils/projects-data.js";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";

function Project({ title, url, description, technologies }) {
  return (
    <article className="project-article">
      <a title={title} href={url}>
        <div className="flex-container project-heading">
          <h3>{title}</h3>
          <div className="title_link-icon">
            <OpenInNewRoundedIcon fontSize="small" />
          </div>
        </div>
        <p className="project-description">{description}</p>
      </a>
      <div className="technologies">
        {technologies.map((tech) => (
          <a key={tech} title={tech.name} href={tech.url}>
            {tech.name}
          </a>
        ))}
      </div>
    </article>
  );
}
export default function Projects() {
  return projectsData.map((project) => (
    <Project
      key={project.url}
      title={project.title}
      url={project.url}
      description={project.description}
      technologies={project.technologies}
    />
  ));
}
