import React from 'react'


function Project(props) {
  // <div className="hover-card"></div>
  return (
    <>
      <div className='project-container-title'>
        <h3>{props.title}</h3>
      </div>
      <div className="project-container-img"> 
        <img className="project-img" src={props.image} alt={props.imageAlt}/>
        <div className="hover-links">
          <a href={props.githubLink} target="_blank" rel="noopener noreferrer">
            <i class="devicon-github-plain"></i>
          </a>
          <a href={props.projectLink} target="_blank" rel="noopener noreferrer">
            <i class="devicon-chrome-plain"></i>
          </a>
        </div>
      </div>
      <div className="project-description">
        <p>{props.description}</p>
      </div>
    </>
  )
}

export default Project
