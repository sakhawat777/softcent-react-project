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
						<img className='logo-2' src={logo2} alt='' />
						<p className='footer-para'>
							Get a fully stacked design team that will <br /> give you
							accessible design, exhaustive <br /> research, and an
							outstanding experience.
						</p>
						<p className='email'>Email: info@softcent.eu</p>
						<p className='phone'>Phone: +(372) 57836500</p>
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
						<h6 className='header-6'>Company</h6>
						<p className='footer-common-para'>About us</p>
						<p className='footer-common-para'>Our portfolio</p>
						<p className='footer-common-para'>Our Product</p>
						<p className='footer-common-para'>Our Team</p>
						<p className='footer-common-para'>Our Pricing</p>
						<p className='footer-common-para'>Testimonials</p>
						<p className='footer-common-para'>Contact Us</p>
					</Col>
					<Col lg={3} md={3} sm={12}>
						<h6 className='header-6'>Our Service</h6>
						<p className='footer-common-para'>Marketing</p>
						<p className='footer-common-para'>UI/UX Design</p>
						<p className='footer-common-para'>
							Graphic Design (Branding)
						</p>
						<p className='footer-common-para'>Development</p>
						<p className='footer-common-para'>New Products</p>
					</Col>
					<Col lg={3} md={3} sm={12}>
						<h6 className='header-6'>Supports</h6>
						<p className='footer-common-para'>FAQs</p>
						<p className='footer-common-para'>Support Policy</p>
						<p className='footer-common-para'>Privacy Policy</p>
						<p className='footer-common-para'>Trams of Service</p>
						<p className='footer-common-para'>Refund Policy</p>
					</Col>
				</Row>
				<div>
					<img src={line1} alt='' />
					<p className='footer-copyright text-center'>
						© 2022, Softcent EU, A European IT company
					</p>
				</div>
			</Container>
		</Fragment>
	);
};

export default Footer;
