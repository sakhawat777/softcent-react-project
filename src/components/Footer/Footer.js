import React, { Fragment } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import logo2 from '../../asset/images/logo/logo2.png';
import line1 from '../../asset/images/line/line1.png';
import fb from '../../asset/images/socialMedia/facebook.png';
import wa from '../../asset/images/socialMedia/whatsapp.png';
import tw from '../../asset/images/socialMedia/twitter.png';
import insta from '../../asset/images/socialMedia/instagram.png';
import instaBg from '../../asset/images/socialMedia/insta-bg.png';
import instaDot from '../../asset/images/socialMedia/insta-dot.png';

import './Footer.css';
const Footer = () => {
	return (
		<Fragment>
			<Container className='main-container'>
				<Row>
					<Col lg={12} md={12} sm={12}>
						<div className='bg-img mb-4 d-flex d-flex justify-content-between align-items-center'>
							<h4 className='bg-header ms-5'>
								Looking for a <br /> Software Partner?
							</h4>
							<button className='project-btn me-5'>
								Start A Project
							</button>
						</div>
					</Col>
					<Col lg={3} md={3} sm={12}>
						<img src={logo2} alt='' />
						<p className='footer-para'>
							Get a fully stacked design team that will <br /> give you
							accessible design, exhaustive <br /> research, and an
							outstanding experience.
						</p>
						<p>Email: info@softcent.eu</p>
						<p>Phone: +(372) 57836500</p>
						<div>
							<img className='fb-img me-2' src={fb} alt='' />
							<img className='ms-2' src={wa} alt='' />
							<img className='ms-2' src={tw} alt='' />

							<img className='ms-2' src={instaBg} alt='' />
							<img className='insta-img' src={insta} alt='' />
							<img className='insta-dot' src={instaDot} alt='' />
						</div>
					</Col>
					<Col lg={3} md={3} sm={12}>
						<h6>Company</h6>
						<p>About us</p>
						<p>Our portfolio</p>
						<p>Our Product</p>
						<p>Our Team</p>
						<p>Our Pricing</p>
						<p>Testimonials</p>
						<p>Contact Us</p>
					</Col>
					<Col lg={3} md={3} sm={12}>
						<h6>Our Service</h6>
						<p>Marketing</p>
						<p>UI/UX Design</p>
						<p>Graphic Design (Branding)</p>
						<p>Development</p>
						<p>New Products</p>
					</Col>
					<Col lg={3} md={3} sm={12}>
						<h6>Supports</h6>
						<p>FAQs</p>
						<p>Support Policy</p>
						<p>Privacy Policy</p>
						<p>Trams of Service</p>
						<p>Refund Policy</p>
					</Col>
				</Row>
				<div>
					<img src={line1} alt='' />
					<p className='text-center'>
						© 2022, Softcent EU, A European IT company
					</p>
				</div>
			</Container>
		</Fragment>
	);
};

export default Footer;
