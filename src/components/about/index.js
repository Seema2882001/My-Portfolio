import './about.css'

const About =()=>{
    return(
        <section className="about" id="about">
                         <div className ="section-content">
                <span className="skill-title">What i do</span>
                <p className="skill-desc">i am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. i have a strong understanding of design and a keen eye for detail. iam proficient in HTML,CSS and JavaScript as well as design software such as Adobe Photoshop and Illustrator</p>
            </div>
            <div className="skill-bars">
                <div className ="skill-bar">
                <i class="bi bi-front icon"></i>
                <div className="skill-bar-text">
                <span className="title-text">Ui/UX design</span>
                <p>As a budding web developer, I blend creativity and functionality to craft user-centric UI/UX designs that enhance digital experiences. Let's collaborate to turn your visions into intuitive and visually striking web interfaces</p>
                </div>
                </div>
                <div className ="skill-bar">
                <i class="bi bi-phone-fill icon"></i>
                <div className="skill-bar-text">
                <span className="title-text">Website design</span>
                <p>From sleek interfaces to seamless user experiences, I specialize in crafting websites that captivate and engage. Let's elevate your online presence with design that leaves a lasting impression</p>
                </div>
                </div>
                <div className ="skill-bar">
                <i class="bi bi-postcard-heart icon"></i>
                <div className="skill-bar-text">
                <span className="title-text">User Experience</span>
                <p>Crafting digital experiences with precision and passion, I'm dedicated to weaving innovation into every line of code. Let's collaborate and transform ideas into captivating web solutions together</p>
                </div>
                </div>
            </div>
        </section>
    )
}
export default About;