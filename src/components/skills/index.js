import './skills.css'

const Skill =()=>{
    return(
        <section className="skills" id="skills">
              <div className='skill-top'>
    <h1 className='myskills'>My Skills</h1>

    <p>A goal-oriented Entry Level Frontend Developer with knowledge of HTML, CSS, JavaScript, React, and MYSQL seeking to use technical proficiency and creativity to develop engaging user experiences and advance in a professional career. Looking to leverage effective debugging, code optimization and project collaboration capabilities to produce applications that exceed user expectations.</p>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-6 skill-content">
          <div className="skill-header">
            <span className="">HTML5</span>
            <span className="">90%</span>
          </div>
          <div className="skill-range">
            <input type="range" min="0" max="10" value="9" className="custom-range" />
          </div>
        </div>

        <div className="col-md-6 skill-content">
          <div className="skill-header">
            <span className="">CSS3</span>
            <span className="">70%</span>
          </div>
          <div className="skill-range">
            <input type="range" min="0" max="10" value="7"/>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 skill-content">
          <div className="skill-header">
            <span className="">Javascript</span>
            <span className="">70%</span>
          </div>
          <div className="skill-range">
            <input type="range" min="0" max="10" value="7" />
          </div>
        </div>
        

        <div className="col-md-6 skill-content">
          <div className="skill-header">
            <span className="">Reactjs</span>
            <span className="">60%</span>
          </div>
          <div className="skill-range">
            <input type="range" min="0" max="10" value="6" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 skill-content">
          <div className="skill-header">
            <span className="">MYSQL</span>
            <span className="">80%</span>
          </div>
          <div className="skill-range">
            <input type="range" min="0" max="10" value="8" />
          </div>
        </div>
        

        <div className="col-md-6 skill-content">
          <div className="skill-header">
            <span className="">C#</span>
            <span className="">80%</span>
          </div>
          <div className="skill-range">
            <input type="range" min="0" max="10" value="8" />
          </div>
        </div>
      </div>
    </div>
        </section>
    )
}
export default Skill;