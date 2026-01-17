import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { FollowMe } from './FollowMe';
import emailjs from 'emailjs-com';
import { useRef } from 'react';
import './Contact.css';

export function Contact() {
  const navigate = useNavigate();
  const formRef = useRef();

  useEffect(() => {
    gsap.set('.contact-headline', { opacity: 0, y: 30 });
    gsap.set('.contact-details-box', { opacity: 0, scale: 0.95 });

    const tl = gsap.timeline();

    tl.to('.contact-headline', {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out'
    }, 0);

    tl.to('.contact-details-box', {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: 'power3.out'
    }, 0.2);
  }, []);

  const handleNavigate = (to) => {
    const exitTl = gsap.timeline();

    exitTl.to(['.contact-headline', '.contact-details-box'], {
      opacity: 0,
      y: -20,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power3.in'
    });

    exitTl.then(() => {
      navigate(to);
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_3x9iqnc',          // service_id from Email Services
        'template_eqpmttt',         // template_id from Email Templates
        formRef.current,
        'BgWR4Ew_CuIIz9kkm'         // public_key from Account
      )
      .then(
        () => {
          alert('Message sent successfully!');
          formRef.current.reset();
        },
        (error) => {
          console.error(error);
          alert('Failed to send message.');
        }
      );
  };
  return (
    <>
      <div className="contact-headline">
        <h1>Let's Work Together</h1>
        <p className="encourage-text">
          Looking for someone who can turn ideas into effective solutions? I'm
          ready to collaborate on projects that make an impact. Get in touch and
          let's discuss how we can work together.
        </p>
      </div>

      <div className="contact-details-box">
        <div className="contact-box">
          <div className="contact-div">
            <div className="sign">
              <i className="fa-regular fa-envelope"></i>
            </div>
            <span></span>
            <div>
              <p>smithsmithhh21@gmail.com</p>
            </div>
          </div>
          <span></span>
          <div className="contact-div">
            <div className="sign">
              <i className="fa-solid fa-phone-flip"></i>
            </div>
            <span></span>
            <div>
              <p>+601123456789</p>
            </div>
          </div>
          <span></span>
          <div className="contact-div">
            <div className="sign">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <span></span>
            <div>
              <p>Petaling Jaya, Selangor</p>
            </div>
          </div>
          <div className="contact-follow-div">
            <div className="sign">
              <i className="fa-brands fa-facebook-f"></i>
            </div>
            <span></span>
            <div>
              <p>Facebook</p>
            </div>
          </div>
          <div className="contact-follow-div">
            <div className="sign">
              <i className="fa-brands fa-instagram"></i>
            </div>
            <span></span>
            <div>
              <p>Instagram</p>
            </div>
          </div>
          <div className="contact-follow-div">
            <div className="sign">
              <i className="fa-brands fa-linkedin-in"></i>
            </div>
            <span></span>
            <div>
              <p>LinkedIn</p>
            </div>
          </div>
          <div className="contact-follow-div">
            <div className="sign">
              <i className="fa-brands fa-threads"></i>
            </div>
            <span></span>
            <div>
              <p>Thread</p>
            </div>
          </div>
          <div className="contact-follow-div">
            <div className="sign">
              <i className="fa-brands fa-github"></i>
            </div>
            <span></span>
            <div>
              <p>GitHub</p>
            </div>
          </div>
        </div>
        <div className="message-box">
          <div className="message">
            <h2>Send me a message</h2>
            <form ref={formRef} onSubmit={sendEmail} autoComplete="off">
              <div className="row">
                <div className="field">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" name="from_name" required />
                </div>

                <div className="field">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="from_email" required />
                </div>
              </div>

              <div className="field">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required />
              </div>

              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required></textarea>
              </div>

              <button type="submit">
                <i className="fa-solid fa-paper-plane"></i> &nbsp; Send Message
              </button>
            </form>
          </div>
          <span></span>
          <FollowMe variant="desktop" />
          <FollowMe variant="mobile" />
        </div>
      </div>
    </>
  );
}