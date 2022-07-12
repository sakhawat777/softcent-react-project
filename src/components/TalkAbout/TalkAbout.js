import React, { Fragment } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import ellipse6 from '../../asset/images/ellipse/ellipse6.png';
import ellipse5 from '../../asset/images/ellipse/ellipse5.png';
import rectangle1 from '../../asset/images/rectangle/rectangle1.png';
import rectangle2 from '../../asset/images/rectangle/rectangle2.png';
import rectangle3 from '../../asset/images/rectangle/rectangle3.png';
import quote1 from '../../asset/images/Quotation/quote1.png';
import quote2 from '../../asset/images/Quotation/quote2.png';
import underline13 from '../../asset/images/underlines/underline13.png';
import './TalkAbout.css';
const TalkAbout = () => {
	return (
		<Fragment>
			<Container className='main-container text-center '>
				<h4 className='main-title'>Talk About Us!</h4>
				<img className='underline-13' src={underline13} alt='' />
				<Row>
					<Col lg={6} md={6} sm={12}>
						<div>
							<p className='talk-para'>
								<img className='quote-img' src={quote1} alt='' />
								We had a bit of a slow and bumpy start, but after <br />
								changing the designer on their side everything <br />{' '}
								went in a very good direction. The designers were <br />{' '}
								talented and easy to work with.
								<img className='quote-img' src={quote2} alt='' />
							</p>
						</div>
						<div className='mt-5 d-flex justify-content-start'>
							<img className='ellipse5-img' src={ellipse5} alt='' />
							<div>
								<h6 className='sub-para1 d-flex justify-content-center'>
									Shuvo Roy
								</h6>
								<p className=' sub-para2 ms-4'>Softcent Co-Founder</p>
							</div>
						</div>
						<div className='mt-5 d-flex justify-content-start'>
							<img src={rectangle1} alt='' />
							<img src={rectangle2} alt='' />
							<img src={rectangle3} alt='' />
						</div>
					</Col>
					<Col lg={6} md={6} sm={12}>
						<img className='ellipse6-img' src={ellipse6} alt='' />
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};

export default TalkAbout;
