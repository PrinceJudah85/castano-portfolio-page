import React from 'react'
import Project from './Project'
import ProjectIcons from './ProjectIcons' 

import { p1, p2, p3, overlay } from '../services/projectStacks' // Project SVG Icons

export default function Projects() {
  return (
    <section className="projects">
      <div className="project-section-header">
        <div className="section" id="projects"></div>
        <h2>Projects</h2>
      </div>
      <div className='project-section'>
        <div className='project-container'> 
          <Project
            title={'Little Red Hens'}
            image={'https://media.giphy.com/media/fSeopZG6NJvmWkO8FV/giphy.gif'}
            imageAlt={"Little Red Hens website gif"}
            githubLink={"https://github.com/PrinceJudah85/Two-Little-Red-Hens"}
            projectLink={"http://red-hens-project.surge.sh/"}
            description={"A UX collaboration website re-design project of a New York City based bakery built with React and CSS3."}
            overlay={overlay} />
          <ProjectIcons
            icons={p1} />
        </div>  
        <div className='project-container'> 
          <Project
            title={'Transparency'}
            image={'https://media.giphy.com/media/VF4o57VqP2ASnnTqH9/giphy.gif'}
            imageAlt={'Transparency website gif'}
            githubLink={'https://github.com/PrinceJudah85/project-transparency'}
            projectLink={'http://transparency-project.surge.sh/'}
            description={'A responsive front-end web app, built through React, that hits the USAspending.gov API. Showcasing the annual spending of each top tier government agency for the current fiscal year.'}
            overlay={overlay} />
          <ProjectIcons
            icons={p2} />
        </div> 
        <div className='project-container'> 
          <Project
            title={'Undisclosed'}
            image={'https://media.giphy.com/media/H3Xs9sJIuNnbPGe1JG/giphy.gif'}
            imageAlt={'Undisclosed website gif'}
            githubLink={'https://github.com/PrinceJudah85/Undisclosed'}
            projectLink={'http://undisclosed.surge.sh/'}
            description={'An urban focused, user generated content, full-stack blog web app, built through React and Express, that allows users to upload their favorite city locations and comment on other posts.'}
            overlay={overlay} />
          <ProjectIcons
            icons={p3} />
        </div> 
      </div>
    </section>
  )
}