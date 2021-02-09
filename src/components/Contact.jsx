import React from 'react'

export default function Contact() {
  return (
    <section className='contact-section row'>
      <div id="contact" className="contact-main">
        <div className="contact-title">
          <h2><span className="sub-title contact">Contact</span></h2>
        </div>
        <div className="contact-flex">
          <div className="contact-links">
            <a href="https://www.linkedin.com/in/rafael-castano/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"><span className='icon-names'>LinkedIn</span></i></a>
          </div>
          <div className="contact-links">
            <a href="https://github.com/PrinceJudah85" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"><span className='icon-names'>GitHub</span></i></a>
          </div>
          <div className="contact-links">
            <a href="https://www.canva.com/design/DADnjqFen2U/view" target="_blank" rel="noopener noreferrer"><i className="far fa-file-alt"><span className='icon-names'>Resume</span></i></a>
          </div>
          <div className="contact-links">
            <a href="mailto:castanorafael.85@gmail.com" target="_blank" rel="noopener noreferrer"><i className="far fa-envelope"><span className='icon-names'>Email</span></i></a>
          </div>
        </div>
      </div>
    </section>
  )
}