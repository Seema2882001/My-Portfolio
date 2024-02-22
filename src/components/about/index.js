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
                <p>lorem kzdjhvhvh jknevieninh jkjekbebbebiue jkkvbjbvjdbvjkbs jbvjbvbubv bvjbvbuvb</p>
                </div>
                </div>
                <div className ="skill-bar">
                <i class="bi bi-phone-fill icon"></i>
                <div className="skill-bar-text">
                <span className="title-text">Website design</span>
                <p>lorem kzdjhvhvh jknevieninh jkjekbebbebiue jkkvbjbvjdbvjkbs jbvjbvbubv bvjbvbuvb</p>
                </div>
                </div>
                <div className ="skill-bar">
                <i class="bi bi-postcard-heart icon"></i>
                <div className="skill-bar-text">
                <span className="title-text">App design</span>
                <p>lorem kzdjhvhvh jknevieninh jkjekbebbebiue jkkvbjbvjdbvjkbs jbvjbvbubv bvjbvbuvb</p>
                </div>
                </div>
            </div>
        </section>
    )
}
export default About;