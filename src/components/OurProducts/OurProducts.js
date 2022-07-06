import React, { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import iPhone1 from '../../asset/images/mockup/iPhone1.png';
import iPhone2 from '../../asset/images/mockup/iPhone2.png';
import './OurProducts.css';
const OurProducts = () => {
	return (
		<Fragment>
			<Container className='container'>
				<h4 className='main-header mb-4 mt-5'>Our Products</h4>
				<Row>
					<Col lg={6} md={6} sm={12}>
						<div className='subtitle'>
							<p className='header-para'>
								We believe that great design should not be out of reach,
								so our services <br /> are less than half the price of a
								full-time designer.
							</p>
						</div>
					</Col>
					<Col lg={6} md={6} sm={12}>
						<div className='d-flex justify-content-center'>
							<button className='btn btn-primary'>See More</button>
						</div>
					</Col>
				</Row>
			</Container>
			<Container className='container product-container mt-5'>
				<Row>
					<Col lg={4} md={4} sm={12}>
						<h3>SwipeXYZ Product</h3>
						<p>
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry. Lorem Ipsum has been the industry's
							standard dummy text ever since the 1500s, when an unknown
							printer took a galley of type and scrambled it to make a
							type specimen book.
						</p>
						<button>View product</button>
					</Col>
					<Col lg={6} md={6} sm={12}>
						<div className='background-img d-flex align-items-center'>
							<img className='iphone1' src={iPhone1} alt='' />
							<img className='iphone2' src={iPhone2} alt='' />
						</div>
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};

export default OurProducts;
