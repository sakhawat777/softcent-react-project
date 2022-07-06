import React, { Fragment } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './WhatWeDo.css';
import branding from '../../asset/images/logo/branding.png';
import ux from '../../asset/images/logo/UX.png';

const WhatWeDo = () => {
	return (
		<Fragment>
			<Container className='main-container'>
				<h4 className='main-title mb-5'>What We Do</h4>
				<Row>
					<Col lg={4} md={4} sm={12}>
						<div className='title-block mb-4'>
							<img src={branding} alt='' />
							<h6 className='mt-4 ms-2'>Branding</h6>
						</div>
						<div className=''>
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
							<h6 className='mt-3  ms-2'>UI/UX Design</h6>
						</div>
						<div>
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
							<h6 className='mt-3  ms-2'>Development</h6>
						</div>
						<div>
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
