import React from 'react'
// =========== SVG icons ============= //
import html5Icon from '../svg-icons/html5.svg'
import css3Icon from '../svg-icons/css3.svg'
import jsIcon from '../svg-icons/javascript.svg'
import reactIcon from '../svg-icons/react.svg'
import nodejsIcon from '../svg-icons/nodejs.svg'
import postgresqlIcon from '../svg-icons/postgres.svg'
import mongodbIcon from '../svg-icons/mongodb.svg'
import githubIcon from '../svg-icons/github.svg'
import expressIcon from '../svg-icons/expressWhite.svg'

export default function Skills() {
  return (
    <div className="skills-section">
      <div className="skills-display">
        <h2><span className="sub-title">Skills</span></h2>
        <div className="skills-icons">
          <img src={html5Icon} alt='html5 svg icon'/>
          <img src={css3Icon} alt='css3 svg icon'/>
          <img src={jsIcon} alt='javascript svg icon'/>
          <img src={reactIcon} alt='javascript svg icon'/>
          <img src={nodejsIcon} alt='nodejs svg icon' />
          <img src={expressIcon} alt='express svg icon' />
          <img src={postgresqlIcon} alt='postgreSQL svg icon'/>
          <img src={mongodbIcon} alt='mongoDB svg icon'/>
          <img src={githubIcon} alt='github svg icon'/>
        </div>
      </div>
    </div>
  )
}