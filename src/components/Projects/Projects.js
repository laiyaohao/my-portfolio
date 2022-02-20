import React, { useEffect, useState } from 'react'
import sanityClient from '../../client.js'
import './Projects.css'

const Projects = () => {
  const [projectData, setProjectData] = useState(null)

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
            tags,
        }`,
      )
      .then((data) => setProjectData(data))
      .catch(console.error)
  }, [])

  return (
    <div className="container projectsContainer">
      <div className="headings">
        <h1>My Projects</h1>
        <h2>Welcome to my projects page!</h2>
      </div>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {projectData &&
          projectData.map((project, index) => (
            <div className="col">
              <div className="card h-100 mb-5 bg-black text-white">
                <div className="card-body">
                  <h3 className="card-title">{project.title}</h3>
                  <p className="card-text">{project.description}</p>
                  <a
                    href={project.link}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    View the Project
                  </a>
                </div>
                <div className="card-footer">
                  <strong className="font-bold">Finished on</strong>:{' '}
                  {new Date(project.date).toLocaleDateString()}
                  <br />
                  <strong className="font-bold"> Venue</strong>: {project.place}
                  <br />
                  <strong className="font-bold"> Type</strong>:{' '}
                  {project.projectType}
                  <br />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Projects;