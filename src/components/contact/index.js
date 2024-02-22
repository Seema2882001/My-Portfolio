import './contact.css'
import Walmart from '../../assests/images/walmart.png';
import Adobe from '../../assests/images/adobe.png';
import Microsoft from '../../assests/images/microsoft.png';
import Facebook from '../../assests/images/facebook.png';
import Facebookpng from '../../assests/images/facebook-icon.png';
import Instagrampng from '../../assests/images/instagram.png';
import Twitter from '../../assests/images/twitter.png';
import Youtube from '../../assests/images/youtube.png';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
const Contact =()=>{
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_jgl8ktc', 'template_kqxt02v', form.current, 'G38_VeKo7dz91VUuy')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert("email sent");
          }, (error) => {
              console.log(error.text);
          });
      };
    return(
        <section className="contact" id="contact">
              <div id="client">
               <h1 className="contact-page-title">My Clients</h1>
               <p className="client-desc">i have had the oppurtunity to work with a diverse group of companies.
               Some of the notable companies I have worked with includes</p>
               <div className="clients-img">
                <img src={Walmart} alt="img" className="client-img" />
                <img src={Microsoft} alt="img" className="client-img" />
                <img src={Facebook} alt="img" className="client-img" />
                <img src={Adobe} alt="img" className="client-img" />
               </div>

            </div>  
            <div id="contact-me">
                <h1 className='contact-title'>Contact me</h1>
                <p className='contact-desc'>Please fill out the form below to discuss any work opportunities.</p>
                <form className='Contact-form' ref={form} onSubmit={sendEmail}>
                    <input type="text" className="Name" placeholder='Your Name' name="user_name"/>
                    <input type="email" className="Email" placeholder='Your Email'name="user_email"/>
                    <textarea name="message" className="Message" rows="5" placeholder='your message'></textarea>
                    <button type='submit' value='send'className='submit-btn'>Submit</button>
                    <div className='links'>
                        <img src={Facebookpng} alt="Facebook" className='social-media-icons'/>
                        <img src={Instagrampng} alt="Instagram" className='social-media-icons'/>
                        <img src={Twitter} alt="Twitter" className='social-media-icons'/>
                        <img src={Youtube} alt="Youtube" className='social-media-icons'/>
                    </div>
                </form>

                </div> 
        </section>
    )
}
export default Contact;