import React from 'react'

export default function Projects() {
  return (
    <section className="project-section row">
      <div className="project-section-header">
        <div id="projects" className='section'></div>
        <h2><span className="sub-title">Projects</span></h2>
      </div>
      <br />
      <br />
      <div className="project-container">
        <div className="project-title-container">
          <span className="project-title">Little Red Hens</span>
        </div>
        <div className="project-img-container">
          <div className="hover-card">
            <img className="project-img" src="https://media.giphy.com/media/fSeopZG6NJvmWkO8FV/giphy.gif" alt="Little Red Hens website gif"/>
            <div className="hover-project-img">
              <a href="https://github.com/PrinceJudah85/Two-Little-Red-Hens" target="_blank" rel="noopener noreferrer">
                <i className="devicon-github-plain-wordmark colored-project"></i>
              </a>
              <a href="http://red-hens-project.surge.sh/" target="_blank" rel="noopener noreferrer">
                <i className="live-site-img" class="devicon-chrome-plain"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="project-content-container">
          <div className="project-content-container-sub">
            <div>
              <p id="project-content">A UX collaboration website re-design project of a New York City based bakery</p>
            </div>
            <div className="project-content-right-container">
              <div className="project-content-right">
                <i className="devicon-html5-plain-wordmark colored"></i>
              </div>
              <div className="project-content-right">
                <i className="devicon-css3-plain-wordmark colored"></i>
              </div>
              <div className="project-content-right">
                <i className="devicon-react-original-wordmark colored"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="project-container">
        <div className="project-title-container">
          <span className="project-title">Transparency</span>
        </div>
        <div className="project-img-container">
          <div className="hover-card">
            <img className="project-img" src="https://media.giphy.com/media/VF4o57VqP2ASnnTqH9/giphy.gif" alt="Transparency website gif"></img>
            <div className="hover-project-img">
              <a href="https://github.com/PrinceJudah85/project-transparency" target="_blank" rel="noopener noreferrer">
                <i className="devicon-github-plain-wordmark colored-project"></i>
              </a>
              <a className="live-site-img" href="http://transparency-project.surge.sh/" target="_blank" rel="noopener noreferrer">
                <i className="live-site-img" class="devicon-chrome-plain"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="project-content-container">
          <div className="project-content-container-sub">
            <div>
              <p id="project-content">A responsive front-end web app, built through React, that hits the USAspending.gov API. Showcasing the annual spending of each top tier government agency during the current fiscal year.</p>
            </div>
            <div className="project-content-right-container">
              <div className="project-content-right top">
                <i className="devicon-html5-plain-wordmark colored"></i>
              </div>
              <div className="project-content-right">
                <i className="devicon-css3-plain-wordmark colored"></i>
              </div>
              <div className="project-content-right">
                <i className="devicon-react-original-wordmark colored"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="project-container">
        <div className="project-title-container">
          <span className="project-title">Undisclosed</span>
        </div>
        <div className="project-img-container">
          <div className="hover-card">
            <img className="project-img" src="https://media.giphy.com/media/H3Xs9sJIuNnbPGe1JG/giphy.gif" alt="Undisclosed website gif"></img>
            <div className="hover-project-img">
              <a href="https://github.com/PrinceJudah85/Undisclosed" target="_blank" rel="noopener noreferrer">
                <i className="devicon-github-plain-wordmark colored-project"></i>
              </a>
              <a className="live-site-img" href="http://undisclosed.surge.sh/" target="_blank" rel="noopener noreferrer">
                <i className="live-site-img" class="devicon-chrome-plain"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="project-content-container">
          <div className="project-content-container-sub">
            <div>
              <p id="project-content">An urban focused, user generated content, full-stack blog web app, built through React and Express, that allows users to upload their favorite city locations and comment on other posts.</p>
            </div>
            <div className="project-content-right-container">
              <div className="project-content-right top">
                <i className="devicon-html5-plain-wordmark colored"></i>
              </div>
              <div className="project-content-right">
                <i className="devicon-css3-plain-wordmark colored"></i>
              </div>
              <div className="project-content-right">
                <i className="devicon-react-original-wordmark colored"></i>
              </div>
              <div className="project-content-right">
                <i className="devicon-express-original-wordmark colored"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}