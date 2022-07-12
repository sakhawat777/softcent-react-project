import React, { Fragment } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './WhatWeDo.css';
import branding from '../../asset/images/logo/branding.png';
import ux from '../../asset/images/logo/UX.png';
import underline3 from '../../asset/images/underlines/underline3.png';

const WhatWeDo = () => {
	return (
		<Fragment>
			<Container className='main-container'>
				<h4 className='main-title text-start mb-5'>What We Do</h4>
				<img className='underline-3' src={underline3} alt='' />
				<Row>
					<Col lg={4} md={4} sm={12}>
						<div className='title-block mb-4'>
							<img src={branding} alt='' />
							<h6 className='head-title mt-4 ms-2'>Branding</h6>
						</div>
						<div className='head-subtitle'>
							<p>Brand Strategy </p>
							<p>Social media </p>
							<p>Marketing Assets </p>
							<p>Presentations</p>
							<p>Build MVP Version</p>
							<p>Pitch Deck</p>
						</div>
					</Col>
					<Col lg={4} md={4} sm={12}>
						<div className='title-block mb-4'>
							<img src={ux} alt='' />
							<h6 className='head-title mt-3  ms-2'>UI/UX Design</h6>
						</div>
						<div className='head-subtitle'>
							<p>Brand Strategy </p>
							<p>Social media </p>
							<p>Marketing Assets </p>
							<p>Presentations</p>
							<p>Build MVP Version</p>
							<p>Pitch Deck</p>
						</div>
					</Col>
					<Col lg={4} md={4} sm={12}>
						<div className='title-block mb-4'>
							<img src={ux} alt='' />
							<h6 className='head-title mt-3  ms-2'>Development</h6>
						</div>
						<div className='head-subtitle'>
							<p>Brand Strategy </p>
							<p>Social media </p>
							<p>Marketing Assets </p>
							<p>Presentations</p>
							<p>Build MVP Version</p>
							<p>Pitch Deck</p>
						</div>
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};

export default WhatWeDo;
