import React from 'react';
import Sidebar from '../../components/Sidebar';
import IconSet from '../../components/IconSet';
import './style.css';

export default function Contact() {
  return (
    <div className="contact-landing-page">
      <Sidebar />
      <IconSet />
      <div className="contact-wrapper">
        <p className="contact-header">Contact</p>
        <div className="contact-summary-text">
          <p>I am actively seeking out opportunities to collaborate with companies, individuals, and agencies. I work best with a team of collaborators who can share their collective expertise towards a mutual goal. </p>
          <p> Let me know if that sounds like a good fit for your project, shoot me a message and let's get in touch!</p>
        </div>
          <p className="contact-text">email: desasser79@gmail.com</p>
          <p className="contact-text"><a href="https://github.com/" target="blank" className="contact-text"> github</a>
          </p>
          <p className="contact-text"><a href="https://www.linkedin.com/in/dsasser79/" target="blank" className="contact-text"> linkedin</a>
          </p>
          <p className="contact-text"><a href="https://www.instagram.com/outer_limits_designs/" target="blank" className="contact-text"> instagram</a>
          </p>
          <p><a href="https://drive.google.com/file/d/18fXVmHSaL_0SmbzJARYXzKFlq2hk6zGm/view?usp=sharing" target="blank" className="contact-text">resume</a>
          </p>
      </div>
    </div>
  )
}
