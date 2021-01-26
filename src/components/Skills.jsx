import React from 'react'

export default function Skills(props) {
  return (
    <div className="skills-section">
      <div className="skills-display">
        <h2> <span className="sub-title">Skills</span> </h2>
        <div className="skills-bar">
          {props.stacks.map((stack) => (
            <div key={stack.name} className='skills-icon hover-icon-effect' data-lang-name={stack.name}>
              <img src={stack.icon} alt={stack.description} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}