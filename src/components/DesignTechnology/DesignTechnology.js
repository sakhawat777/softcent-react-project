import React, { Fragment } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import image5 from '../../asset/images/designTechnology/image5.png';
import image6 from '../../asset/images/designTechnology/image6.png';
import image7 from '../../asset/images/designTechnology/image7.png';
import image8 from '../../asset/images/designTechnology/image8.png';
import image9 from '../../asset/images/designTechnology/image9.png';
const DesignTechnology = () => {
	return (
		<Fragment>
			<Container className='main-container text-center '>
				<h4 className='main-title'>Our Design Technology</h4>
				<Row>
					<div className='d-flex justify-content-between'>
						<Col lg={2} md={2} sm={12}>
							<img
								className='mt-5 dev-technology-img'
								src={image5}
								alt=''
							/>
						</Col>
						<Col lg={2} md={2} sm={12}>
							<img
								className='mt-5 dev-technology-img'
								src={image6}
								alt=''
							/>
						</Col>
						<Col lg={2} md={2} sm={12}>
							<img
								className='mt-5 dev-technology-img'
								src={image7}
								alt=''
							/>
						</Col>
						<Col lg={2} md={2} sm={12}>
							<img
								className='mt-5 dev-technology-img'
								src={image8}
								alt=''
							/>
						</Col>
						<Col lg={2} md={2} sm={12}>
							<img
								className='mt-5 dev-technology-img'
								src={image9}
								alt=''
							/>
						</Col>
					</div>
				</Row>
			</Container>
		</Fragment>
	);
};

export default DesignTechnology;
