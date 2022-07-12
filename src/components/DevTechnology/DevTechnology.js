import React, { Fragment } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import php from '../../asset/images/devTechnology/php.png';
import js from '../../asset/images/devTechnology/js.png';
import html from '../../asset/images/devTechnology/html.png';
import css from '../../asset/images/devTechnology/css.png';
import shell from '../../asset/images/devTechnology/shell.png';
import underline15 from '../../asset/images/underlines/underline15.png';
import './DevTechnology.css';

const DevTechnology = () => {
	return (
		<Fragment>
			<Container className='main-container text-center '>
				<h4 className='main-title'>Our Dev Technology</h4>
				<img className=' underline-15' src={underline15} alt='' />
				<Row>
					<Col lg={3} md={3} sm={12}>
						<h6 className='header-h4'>Programming Languages</h6>
					</Col>
					<Col lg={3} md={3} sm={12}>
						<h6 className='header-h4'>Frameworks</h6>
					</Col>
					<Col lg={3} md={3} sm={12}>
						<h6 className='header-h4'>Databases</h6>
					</Col>
					<Col lg={3} md={3} sm={12}>
						<h6 className='header-h4'>Mobile Platforms</h6>
					</Col>

					<div className='d-flex justify-content-between'>
						<Col lg={2} md={2} sm={12}>
							<img
								className='mt-5 dev-technology-img'
								src={php}
								alt=''
							/>
						</Col>
						<Col lg={2} md={2} sm={12}>
							<img className='mt-5 dev-technology-img' src={js} alt='' />
						</Col>
						<Col lg={2} md={2} sm={12}>
							<img
								className='mt-5 dev-technology-img'
								src={html}
								alt=''
							/>
						</Col>
						<Col lg={2} md={2} sm={12}>
							<img
								className='mt-5 dev-technology-img'
								src={css}
								alt=''
							/>
						</Col>
						<Col lg={2} md={2} sm={12}>
							<img
								className='mt-5 dev-technology-img'
								src={shell}
								alt=''
							/>
						</Col>
					</div>
				</Row>
			</Container>
		</Fragment>
	);
};

export default DevTechnology;
