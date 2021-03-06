import React, { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Header.css';
import Vector1 from '../../asset/images/vectors/Vector1.png';
import Vector2 from '../../asset/images/vectors/Vector2.png';
import Vector3 from '../../asset/images/vectors/Vector3.png';
import Vector4 from '../../asset/images/vectors/Vector4.png';
import underline1 from '../../asset/images/underlines/underline1.png';
const Header = () => {
	return (
		<Fragment>
			<Container className='container main-section'>
				<Row>
					<Col lg={8} md={8} sm={12}>
						<div className='main-header'>
							<h2 className=' header-h2'>
								Software services for <br /> startups without <br />{' '}
								limits..
							</h2>
							<img className='underline-1' src={underline1} alt='' />
						</div>
						<div>
							<p className='header-para'>
								We believe that great design should not be out of reach,
								so our services <br /> are less than half the price of a
								full-time designer.
							</p>
						</div>
					</Col>
					<Col lg={4} md={4} sm={12}>
						<div className='main-header-2'>
							<img className='vector-1' src={Vector1} alt='' />
							<img className='vector-2' src={Vector2} alt='' />
							<img className='vector-3' src={Vector3} alt='' />
							<img className='vector-4' src={Vector4} alt='' />
						</div>
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};

export default Header;
