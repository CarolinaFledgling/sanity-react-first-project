import React, { useEffect, useState } from "react";
import sanityClient from "../../client.js";

export default function Project() {
  const [projectDate, setProjectDate] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
        title,
        date,
        place,
        description,
        projectType,
        link,
      
    }`
      )
      .then((date) => setProjectDate(date))
      .catch(console.error);
  }, []);
  return (
    <main>
      <section>
        <h1>My projects</h1>
        <h2>Welcome to my projects page!</h2>
        <section>
          {projectDate &&
            projectDate.map((project, index) => (
              <article>
                <h3>
                  <a
                    href={project.link}
                    alt={project.title}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>
                <div>
                  <span>
                    <strong>Finished on</strong>:
                    {new Date(project.date).toLocaleDateString()}
                  </span>
                  <span>
                    <strong>Company</strong>:
                    {new Date(project.date).toLocaleDateString()}
                    {project.place}
                  </span>
                  <span>
                    <strong>Type</strong>:{project.projectType}
                  </span>
                  <p>{project.description}</p>
                  <a
                    href={project.link}
                    alt={project.title}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View the project
                    <span role="img" aria-label="right pointer">
                      😂
                    </span>
                  </a>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
}
