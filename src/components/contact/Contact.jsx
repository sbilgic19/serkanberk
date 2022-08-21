import React from 'react'
import './contact.css' 
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ofopu2g', 'template_7joxw68', form.current, 'wu2sklDA4VKD_dusN')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineEmail className='contact-option-icon'/>
            <h4>Email</h4>
            <h5>sbilgic19@ku.edu.tr</h5>
            <a href="mailto:sbilgic19@ku.edu.tr" target="_blank">Send a message</a>
          </article>
          <article className='contact_option'>
            <MdOutlineEmail className='contact-option-icon'/>
            <h4>Messenger</h4>
            <h5>sbilgic19@ku.edu.tr</h5>
            <a href="mailto:sbilgic19@ku.edu.tr" target="_blank">Send a message</a>
          </article>
          <article className='contact_option'>
            <BsWhatsapp className='contact-option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+905355706191</h5>
            <a href="https://api.whatsapp.com/send?=phone+905355706191" target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact