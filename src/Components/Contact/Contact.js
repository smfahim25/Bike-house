import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <div className="contact-container">
		<div className="contact-box">
			<div className="left">
            <iframe className='map-design' title='map' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29229.220907061732!2d90.38175667734907!3d23.688377975476577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1651386397685!5m2!1sen!2sbd"  loading="lazy" ></iframe>
            </div>
			<div className="right">
				<h2 className='contact-title'>Contact Us</h2>
				<input type="text" className="field" placeholder="Your Name"/>
				<input type="text" className="field" placeholder="Your Email"/>
				<input type="text" className="field" placeholder="Phone"/>
				<textarea placeholder="Message" className="field"></textarea>
				<button className="btn contact-button">Send</button>
			</div>
		</div>
	</div>
        </div>
    );
};

export default Contact;