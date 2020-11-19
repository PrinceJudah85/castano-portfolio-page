import React from 'react'

function ProjectIcons(props) {
  // <span className='project-icons' key={index}></span>
  return (
    <div className="project-icon-bar">
      {props.icons.map((icon, index) => {
        return (
            <img className='project-icons' key={index} src={icon[0]} alt={icon[1]} /> 
        )
      })}
    </div>
  )
}

export default ProjectIcons
