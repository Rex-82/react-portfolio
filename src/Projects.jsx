import projectsData from "../utils/projects-data.js";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";

function Project({ title, url, description, technologies }) {
  return (
    <article>
      <a title={title} href={url}>
        <div>
          <h3>{title}</h3>
          <OpenInNewRoundedIcon />
          <p>{description}</p>
          <div>
            <p1>Made with:</p1>
            {technologies.map((technology) => (
              <p2 key={technology}>{technology}</p2>
            ))}
          </div>
        </div>
      </a>
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
