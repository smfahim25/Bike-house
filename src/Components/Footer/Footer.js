import React from 'react';
import './Footer.css'

const Footer = () => {
	return (
		<div>
			<footer className="footer">
				<div className="container">
					<div className="row">
						<div className="footer-col">
							<h4>company</h4>
							<ul>
								<li><a href="#">about us</a></li>
								<li><a href="#">our services</a></li>
								<li><a href="#">privacy policy</a></li>
								<li><a href="#">affiliate program</a></li>
							</ul>
						</div>
						<div className="footer-col">
							<h4>get help</h4>
							<ul>
								<li><a href="#">FAQ</a></li>
								<li><a href="#">Support</a></li>
								<li><a href="#">Contact</a></li>
								<li><a href="#">Location</a></li>

							</ul>
						</div>
						<div className="footer-col">
							<h4>Our Brands</h4>
							<ul>
								<li><a href="#">Yamha</a></li>
								<li><a href="#">BMW</a></li>
								<li><a href="#">Gixxer</a></li>
								<li><a href="#">Kawasaki</a></li>
							</ul>
						</div>
						<div className="footer-col">
							<h4>follow us</h4>
							<div className="social-links">
								<a href="#"><i className="fab fa-facebook-f"></i></a>
								<a href="#"><i className="fab fa-twitter"></i></a>
								<a href="#"><i className="fab fa-instagram"></i></a>
								<a href="#"><i className="fab fa-linkedin-in"></i></a>
							</div>
						</div>
					</div>

				</div>
				<div className="copy-right">

					<p className='foot-text'>Copyright &copy; S M Fahim Hossen | 2022 All right reserved</p>
				</div>
			</footer>
		</div>
	);
};

export default Footer;