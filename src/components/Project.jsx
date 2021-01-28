import React from 'react'
 
function Project(props) {
  return (
    <>
      <div className='project-container-title'>
        <h3>{props.title}</h3>
      </div>
      <div className="project-container-img">
          <div className='project-img'>
            <img src={props.image} alt={props.imageAlt}/>
          </div>
          <div className='overlay-icons'>
            <a href={props.githubLink} target="_blank" rel="noopener noreferrer" className='overlay-icons'>
            <img src={props.overlay[0][0]} alt={props.overlay[0][1]} />
            </a>
            <a href={props.projectLink} target="_blank" rel="noopener noreferrer" className='overlay-icons'>
            <img src={props.overlay[1][0]} alt={props.overlay[1][1]} />
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
