import React from 'react';
import '../Contact.css'; // Assuming you have a CSS file for styling

export default function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="section-title animate__animated">
                <h1>Get In Touch</h1>
            </div>   
            <div className="contact-content">
                <div className="contact-left">
                    <h3>Let's talk about anything!</h3>
                    <p>Don't like forms? Send me an <span>Email</span> &#12875;</p>
                </div>
                <div className="contact-right">
                    <form action="https://formsubmit.co/alanrivera1204@gmail.com" method="POST">
                        <div>
                            <input type="text" name="name" required placeholder="Your Name" />
                            <input type="email" name="email" required placeholder="Email Address" />
                        </div>
                        <input type="text" name="subject" required placeholder="Subject" />
                        <textarea name="message" cols="30" rows="10" required placeholder="Message"></textarea>
                        <input type="hidden" name="_captcha" value="false" />
                        <button type="submit" className="btn">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
}