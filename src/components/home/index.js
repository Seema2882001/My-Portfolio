import React from 'react'
import './home.css'
import Typed from 'typed.js';
import bg from '../../assests/images/img.webp';
import resume from '../../assests/sam.resume.pdf';
function Home() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Web Devloper', 'Frontend Devloper','Dancer','Gamer'],
      // startDelay: 160,
      typeSpeed: 120,
      backSpeed: 50,
      showCursor: false,
      // fadeOut: true,
      // fadeOutDelay: 500,
      loop:true
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <section className='home' id='home'>

<div className="left-side-content">
          <span className="hi">Hi, It's Me</span><br/>
          <span className="blue-name name">Seema Thabasum,</span><br/>
          <span className="hi">I'm a <span className="blue-name" ref={el}></span></span><br/>

          <p className="intro-para">I'm a front-end developer who likes to craft solid and scalable <span> front-end projects </span><br/>with great user experience</p>
          <a href={resume} download={resume}><button className="abt-btn">Download cv</button></a>
        </div>
        <div className="right-side-content">
            <img src={bg} className="bg-img" alt="image"/>
            </div>

    </section>
  )
}

export default Home