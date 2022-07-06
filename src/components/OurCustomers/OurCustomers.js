import React, { Fragment } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './OurCustomers.css';
import image1 from '../../asset/images/customers/image1.png';
import image2 from '../../asset/images/customers/image2.png';
import image3 from '../../asset/images/customers/image3.png';
import image4 from '../../asset/images/customers/image4.png';

const OurCustomers = () => {
	return (
		<Fragment>
			<Container className='main-container text-center '>
				<h4 className='main-title'>Our Customers</h4>
				<Row>
					<Col lg={3} md={3} sm={12}>
						<img src={image1} alt='' />
					</Col>
					<Col lg={3} md={3} sm={12}>
						<img src={image2} alt='' />
					</Col>
					<Col lg={3} md={3} sm={12}>
						<img src={image3} alt='' />
					</Col>
					<Col lg={3} md={3} sm={12}>
						<img src={image4} alt='' />
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};

export default OurCustomers;
