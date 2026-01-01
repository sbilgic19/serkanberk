import React, { useRef } from 'react'
import './contact.css' 
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp, BsLinkedin } from 'react-icons/bs'
import emailjs from 'emailjs-com'
import { ScrollReveal, MagneticButton } from '../animations'

const Contact = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ofopu2g', 'template_7joxw68', form.current, 'wu2sklDA4VKD_dusN')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send message. Please try again.');
      });
    e.target.reset();
  };

  return (
    <section id="contact">
      <ScrollReveal animation="fadeUp">
        <div className="section-header">
          <h5>Get In Touch</h5>
          <h2>Contact Me</h2>
        </div>
      </ScrollReveal>
      
      <div className='container contact_container'>
        <div className='contact_options'>
          <ScrollReveal animation="slideRight" delay={0.1}>
            <article className='contact_option terminal-card'>
              <div className="terminal-card__header">
                <div className="terminal-card__dots">
                  <span className="terminal-card__dot terminal-card__dot--red"></span>
                  <span className="terminal-card__dot terminal-card__dot--yellow"></span>
                  <span className="terminal-card__dot terminal-card__dot--green"></span>
                </div>
                <span className="terminal-card__title">email.contact</span>
              </div>
              <div className="terminal-card__body contact_option-body">
                <MdOutlineEmail className='contact_option-icon'/>
                <h4>Email</h4>
                <h5>sbilgic19@ku.edu.tr</h5>
                <a href="mailto:sbilgic19@ku.edu.tr" target="_blank" rel="noopener noreferrer">
                  Send a message →
                </a>
              </div>
            </article>
          </ScrollReveal>
          
          <ScrollReveal animation="slideRight" delay={0.2}>
            <article className='contact_option terminal-card'>
              <div className="terminal-card__header">
                <div className="terminal-card__dots">
                  <span className="terminal-card__dot terminal-card__dot--red"></span>
                  <span className="terminal-card__dot terminal-card__dot--yellow"></span>
                  <span className="terminal-card__dot terminal-card__dot--green"></span>
                </div>
                <span className="terminal-card__title">linkedin.contact</span>
              </div>
              <div className="terminal-card__body contact_option-body">
                <BsLinkedin className='contact_option-icon'/>
                <h4>LinkedIn</h4>
                <h5>serkanberkb</h5>
                <a href="https://www.linkedin.com/in/serkanberkb" target="_blank" rel="noopener noreferrer">
                  Connect →
                </a>
              </div>
            </article>
          </ScrollReveal>
          
          <ScrollReveal animation="slideRight" delay={0.3}>
            <article className='contact_option terminal-card'>
              <div className="terminal-card__header">
                <div className="terminal-card__dots">
                  <span className="terminal-card__dot terminal-card__dot--red"></span>
                  <span className="terminal-card__dot terminal-card__dot--yellow"></span>
                  <span className="terminal-card__dot terminal-card__dot--green"></span>
                </div>
                <span className="terminal-card__title">whatsapp.contact</span>
              </div>
              <div className="terminal-card__body contact_option-body">
                <BsWhatsapp className='contact_option-icon'/>
                <h4>WhatsApp</h4>
                <h5>+90 535 570 6191</h5>
                <a href="https://api.whatsapp.com/send?phone=905355706191" target="_blank" rel="noopener noreferrer">
                  Send a message →
                </a>
              </div>
            </article>
          </ScrollReveal>
        </div>
        
        <ScrollReveal animation="slideLeft" delay={0.2}>
          <form ref={form} onSubmit={sendEmail} className="contact_form terminal-card">
            <div className="terminal-card__header">
              <div className="terminal-card__dots">
                <span className="terminal-card__dot terminal-card__dot--red"></span>
                <span className="terminal-card__dot terminal-card__dot--yellow"></span>
                <span className="terminal-card__dot terminal-card__dot--green"></span>
              </div>
              <span className="terminal-card__title">compose_message.sh</span>
            </div>
            <div className="terminal-card__body">
              <div className="form_group">
                <label htmlFor="name">
                  <span className="form_label-prompt">$</span> name
                </label>
                <input 
                  type="text" 
                  name="name" 
                  id="name"
                  placeholder="Your Full Name" 
                  required
                />
              </div>
              <div className="form_group">
                <label htmlFor="email">
                  <span className="form_label-prompt">$</span> email
                </label>
                <input 
                  type="email" 
                  name="email" 
                  id="email"
                  placeholder='your@email.com' 
                  required 
                />
              </div>
              <div className="form_group">
                <label htmlFor="message">
                  <span className="form_label-prompt">$</span> message
                </label>
                <textarea 
                  name="message" 
                  id="message"
                  rows="6" 
                  placeholder="Your message here..." 
                  required
                ></textarea>
              </div>
              <MagneticButton>
                <button type="submit" className='btn btn-primary'>
                  <span className="mono">→</span> Send Message
                </button>
              </MagneticButton>
            </div>
          </form>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default Contact
