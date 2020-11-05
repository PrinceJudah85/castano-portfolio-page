import React from 'react'

export default function Contact() {
  return (
    <section className='row'>
      <div id="contact" className="contact-main">
        <div ></div>
        <div className="contact-title">
          <h2><span className="sub-title contact">Contact</span></h2>
        </div>
        <div className="contact-grid">
          <div className="about-links">
            <a href="https://www.linkedin.com/in/rafael-castano/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"><span className='icon-names'>LinkedIn</span></i></a>
          </div>
          <div className="about-links">
            <a href="https://github.com/PrinceJudah85" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"><span className='icon-names'>GitHub</span></i></a>
          </div>
          <div className="about-links">
            <a href="https://docdro.id/1QUE6ab" target="_blank" rel="noopener noreferrer"><i class="far fa-file-alt"><span className='icon-names'>Resume</span></i></a>
          </div>
          <div className="about-links">
            <a href="mailto:castanorafael.85@gmail.com" target="_blank" rel="noopener noreferrer"><i class="far fa-envelope"><span className='icon-names'>castanorafael.85@gmail.com</span></i></a>
          </div>
        </div>
      </div>
    </section>
  )
}