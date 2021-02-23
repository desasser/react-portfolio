import React from 'react';
// , {useRef} 
import Sidebar from '../../components/Sidebar';
import IconSet from '../../components/IconSet';
import './style.css';

export default function Contact() {
  // const [copy, setCopy] = useState('');
  // const myRef = useRef();

  // const copyToClipboard = () => {
  //   myRef.current.select();
  //   document.execCommand("copy");
  // };

  return (
    <main>
      <Sidebar />
      <div className="main-iconset">
        <IconSet />
      </div>
      <div className="contact-wrapper">
        <p className="contact-header">Contact</p>
        <div className="contact-summary-text">
          <p>I am actively seeking out opportunities to collaborate with companies, individuals, and agencies. I work best with a team of collaborators who can share their collective expertise towards a mutual goal. </p>
          <p> If that sounds like a good fit for your project, shoot me a message and let's chat!</p>
        </div>
        <span className="contact-text contact-email-label copy-email contact-slide-20" value="desasser79@gmail.com" onClick={navigator.clipboard.writeText('desasser79@gmail.com')}></span>
        {/* onClick={copyToClipboard} ref={myRef} */}
        <p className="contact-text contact-slide-20"><a href="https://github.com/" target="blank" className="contact-text"> github</a>
        </p>
        <p className="contact-text contact-slide-20"><a href="https://www.linkedin.com/in/dsasser79/" target="blank" className="contact-text"> linkedin</a>
        </p>
        <p className="contact-text contact-slide-20"><a href="https://www.instagram.com/outer_limits_designs/" target="blank" className="contact-text"> instagram</a>
        </p>
        <p><a href="https://drive.google.com/file/d/18fXVmHSaL_0SmbzJARYXzKFlq2hk6zGm/view?usp=sharing" target="blank" className="contact-text contact-slide-20">resume</a>
        </p>
      </div>
    </main>
  )
}
