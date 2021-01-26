import React from 'react'

function ProjectIcons(props) {
  return (
    <div className="project-icon-bar">
      {props.icons.map((stack) => (
        <div key={stack.name} className='project-icon hover-icon-effect' data-lang-name={stack.name}>
          <img src={stack.icon} alt={stack.description} /> 
        </div>
      ))}
    </div>
  )
}

export default ProjectIcons