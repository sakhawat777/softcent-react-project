import React, { Fragment } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import cover1 from '../../asset/images/cover/cover1.png';
import cover2 from '../../asset/images/cover/cover2.png';
import mockup3 from '../../asset/images/cover/mockup3.png';

const OurPortfolio = () => {
	return (
		<Fragment>
			<Container className='main-container'>
				<h4 className='main-title mb-5'>Our Portfolio</h4>
				<Row>
					<Col lg={4} md={4} sm={12}>
						<img src={cover1} alt='' />
						<h6 className='mt-3 text-center'>Color System Design</h6>
					</Col>
					<Col lg={4} md={4} sm={12}>
						<img src={cover2} alt='' />
						<h6 className='mt-3 text-center'>Logo Design</h6>
					</Col>
					<Col lg={4} md={4} sm={12}>
						<img src={mockup3} alt='' />
						<h6 className='mt-3 text-center'>UI/UX Design</h6>
					</Col>
				</Row>
				<div className='d-flex justify-content-center'>
					<button className=' btn btn-primary mt-5'>
						See All Protfolio
					</button>
				</div>
			</Container>
		</Fragment>
	);
};

export default OurPortfolio;
