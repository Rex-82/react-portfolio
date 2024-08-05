export default function Project({ title, url, description, technologies }) {
  return (
    <article>
      <a title={title} href={url}>
        <div class="project-card">
          <h3 class="projects-title">{title}</h3>
          <p>{description}</p>
          <div class="made-with">
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
