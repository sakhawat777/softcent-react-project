import React, { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './YourPlan.css';
import vector from '../../asset/images/vectors/Vector.png';
import vector0 from '../../asset/images/vectors/Vector0.png';
import underline5 from '../../asset/images/underlines/underline5.png';
import rectangle11 from '../../asset/images/underlines/rectangle11.png';
import rectangle13 from '../../asset/images/underlines/rectangle13.png';
const YourPlan = () => {
	return (
		<Fragment>
			<Container className='container '>
				<h4 className='main-header text-center mb-4 mt-5'>
					Pricing Package Choose Your Plan
				</h4>
				<img className='underline-5' src={underline5} alt='' />
				<p className='header-para text-center'>
					We believe that great design should not be out of reach, so our
					services <br /> are less than half the price of a full-time
					designer.
				</p>
				<div className='text-center'>
					<button className='monthly-btn me-3'>Monthly</button>
					<button className='yearly-btn'>Yearly</button>
				</div>
				<Row>
					<Col lg={4} md={4} sm={12}>
						<div className='plan-block mt-5'>
							<div className='d-flex justify-content-between ms-3'>
								<h6 className='mb-4 mt-3'>Merketing</h6>
								<img
									className='rectangle-11'
									src={rectangle11}
									alt=''
								/>
								<p className='price-tag mt-4 me-3'>$899/ mo</p>
							</div>
							<div className='d-flex'>
								<img
									className='plan-info ms-3 me-2'
									src={vector}
									alt=''
								/>
								<p className='plan-para  ms-3'>Dedicated Designer</p>
							</div>
							<div className='d-flex'>
								<img
									className='plan-info  ms-3 me-2'
									src={vector}
									alt=''
								/>
								<p className='plan-para  ms-3'>Unlimited requests</p>
							</div>
							<div className='d-flex'>
								<img
									className='plan-info  ms-3 me-2'
									src={vector}
									alt=''
								/>
								<p className='plan-para  ms-3'>
									Unlimited brand profiles
								</p>
							</div>
							<div className='d-flex'>
								<img
									className='plan-info  ms-3 me-2'
									src={vector}
									alt=''
								/>
								<p className='plan-para  ms-3'>Native source files</p>
							</div>
							<div className='d-flex'>
								<img
									className='plan-info  ms-3 me-2'
									src={vector}
									alt=''
								/>
								<p className='plan-para  ms-3'>
									Real-time collaboration
								</p>
							</div>
							<div className='d-flex'>
								<img
									className='plan-info  ms-3 me-2'
									src={vector}
									alt=''
								/>
								<p className='plan-para  ms-3'>Banner Ads</p>
							</div>
							<div className='d-flex'>
								<img
									className='plan-info  ms-3 me-2'
									src={vector}
									alt=''
								/>
								<p className='plan-para  ms-3'>
									Clothing & Merchandise Design
								</p>
							</div>
							<div className='d-flex'>
								<img
									className='plan-info  ms-3 me-2'
									src={vector}
									alt=''
								/>
								<p className='plan-para  ms-3'>Packaging & Label</p>
							</div>
							<div className='d-flex'>
								<img
									className='plan-info  ms-3 me-2'
									src={vector}
									alt=''
								/>
								<p className='plan-para  ms-3'>Logo & Brand Guide</p>
							</div>
							<div className='d-flex justify-content-center'>
								<button className='price-btn mt-3 mb-4 text-center'>
									$899 / mo
								</button>
							</div>
						</div>
					</Col>
					<Col lg={4} md={4} sm={12}>
						<div className='plan-block2 mt-5'>
							<div className='d-flex justify-content-between ms-3'>
								<h6 className='mb-4 mt-3'>UI/UX Design</h6>
								<div>
									<img
										className='rectangle-12'
										src={rectangle11}
										alt=''
									/>
									<p className='price-tag2 me-3'>$1000/ mo</p>
								</div>
							</div>
							<div className='d-flex'>
								<img
									className='plan-info2 ms-3 me-2'
									src={vector0}
									alt=''
								/>
								<p className='plan-para2  ms-3'>Dedicated Designer</p>
							</div>
							<div className='d-flex'>
								<img
									className='plan-info2  ms-3 me-2'
									src={vector0}
									alt=''
								/>
								<p className='plan-para2  ms-3'>Unlimited requests</p>
							</div>
							<div className='d-flex'>
								<img
									className='plan-info2  ms-3 me-2'
									src={vector0}
									alt=''
								/>
								<p className='plan-para2  ms-3'>
									Unlimited brand profiles
								</p>
							</div>
							<div className='d-flex'>
								<img
									className='plan-info2  ms-3 me-2'
									src={vector0}
									alt=''
								/>
								<p className='plan-para2  ms-3'>Native source files</p>
							</div>
							<div className='d-flex'>
								<img
									className='plan-info2  ms-3 me-2'
									src={vector0}
									alt=''
								/>
								<p className='plan-para2  ms-3'>
									Real-time collaboration
								</p>
							</div>
							<div className='d-flex'>
								<img
									className='plan-info2  ms-3 me-2'
									src={vector0}
									alt=''
								/>
								<p className='plan-para2  ms-3'>Banner Ads</p>
							</div>
							<div className='d-flex'>
								<img
									className='plan-info2  ms-3 me-2'
									src={vector0}
									alt=''
								/>
								<p className='plan-para2  ms-3'>
									Clothing & Merchandise Design
								</p>
							</div>
							<div className='d-flex'>
								<img
									className='plan-info2  ms-3 me-2'
									src={vector0}
									alt=''
								/>
								<p className='plan-para2  ms-3'>Packaging & Label</p>
							</div>
							<div className='d-flex'>
								<img
									className='plan-info2  ms-3 me-2'
									src={vector0}
									alt=''
								/>
								<p className='plan-para2  ms-3'>Logo & Brand Guide</p>
							</div>
							<div className='d-flex justify-content-center'>
								<button className='price-btn mt-3 mb-4 text-center'>
									$1000/ mo
								</button>
							</div>
						</div>
					</Col>
					<Col lg={4} md={4} sm={12}>
						<div className='plan-block mt-5'>
							<div className='d-flex justify-content-between ms-3'>
								<h6 className='mb-4 mt-3'>Development</h6>
								<div>
									<img
										className='rectangle-13'
										src={rectangle13}
										alt=''
									/>

									<p className='price-tag me-3 '>$1000/ mo</p>
								</div>
							</div>

							<div className='d-flex'>
								<img
									className='plan-info ms-3 me-2'
									src={vector}
									alt=''
								/>
								<p className='plan-para  ms-3'>Dedicated Designer</p>
							</div>
							<div className='d-flex'>
								<img
									className='plan-info  ms-3 me-2'
									src={vector}
									alt=''
								/>
								<p className='plan-para  ms-3'>Unlimited requests</p>
							</div>
							<div className='d-flex'>
								<img
									className='plan-info  ms-3 me-2'
									src={vector}
									alt=''
								/>
								<p className='plan-para  ms-3'>
									Unlimited brand profiles
								</p>
							</div>
							<div className='d-flex'>
								<img
									className='plan-info  ms-3 me-2'
									src={vector}
									alt=''
								/>
								<p className='plan-para  ms-3'>Native source files</p>
							</div>
							<div className='d-flex'>
								<img
									className='plan-info  ms-3 me-2'
									src={vector}
									alt=''
								/>
								<p className='plan-para  ms-3'>
									Real-time collaboration
								</p>
							</div>
							<div className='d-flex'>
								<img
									className='plan-info  ms-3 me-2'
									src={vector}
									alt=''
								/>
								<p className='plan-para  ms-3'>Banner Ads</p>
							</div>
							<div className='d-flex'>
								<img
									className='plan-info  ms-3 me-2'
									src={vector}
									alt=''
								/>
								<p className='plan-para  ms-3'>
									Clothing & Merchandise Design
								</p>
							</div>
							<div className='d-flex'>
								<img
									className='plan-info  ms-3 me-2'
									src={vector}
									alt=''
								/>
								<p className='plan-para  ms-3'>Packaging & Label</p>
							</div>
							<div className='d-flex'>
								<img
									className='plan-info  ms-3 me-2'
									src={vector}
									alt=''
								/>
								<p className='plan-para  ms-3'>Logo & Brand Guide</p>
							</div>
							<div className='d-flex justify-content-center'>
								<button className='price-btn mt-3 mb-4 text-center'>
									$1000/ mo
								</button>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};

export default YourPlan;
