import './portfolio.css'
import Portfolio1 from'../../assests/images/portfolio-1.png';
import Portfolio2 from'../../assests/images/portfolio-2.png';
import Portfolio3 from'../../assests/images/portfolio-3.png';
import Portfolio4 from'../../assests/images/portfolio-4.png';
import Portfolio5 from'../../assests/images/portfolio-5.png';
import Portfolio6 from'../../assests/images/portfolio-6.png';
const Portfolio =()=>{
    return(
        <section className="portfolio" id="portfolio">
             <div className ="section-content">
                <span className="portfolio-title">My Portfolio</span>
                <p className="portfolio-desc">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect iam excited to bring my skills and experience to help businesses
                 acheive their goals and create a strong online presence.</p>
            </div>
            <div className='img-container'>
                <img src={Portfolio1} alt="img" className='work-img'/>
                <img src={Portfolio2} alt="img" className='work-img'/>
                <img src={Portfolio3} alt="img" className='work-img'/>
                <img src={Portfolio4} alt="img" className='work-img'/>
                <img src={Portfolio5} alt="img" className='work-img'/>
                <img src={Portfolio6} alt="img" className='work-img'/>
            </div>
        </section>
    )
}
export default Portfolio;