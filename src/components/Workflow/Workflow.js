import React, { Fragment } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import workFlow from '../../asset/images/workFlow/workFlow.png';
import underline17 from '../../asset/images/underlines/underline17.png';
import './Workflow.css';

const Workflow = () => {
	return (
		<Fragment>
			<Container className='main-container'>
				<div className='text-center'>
					<h4 className='main-title  text-center'>Workflow</h4>
					<img className='underline-17' src={underline17} alt='' />
				</div>
				<Row>
					<Col lg={6} md={6} sm={12}>
						<div className='mt-5 goal-section '>
							<h6>1. Defining Goal</h6>
							<p>
								Project analysis, defining project requirements and
								objectives <br /> based on clients needs, cost and
								effort estimation, creating <br /> value and process
								planning.
							</p>
						</div>
						<h6 className='mt-4'>2. Product Design</h6>
						<h6 className='mt-4'>3. Development</h6>
						<h6 className='mt-4'>4. Testing</h6>
						<h6 className='mt-4'>5. Product Release</h6>
						<h6 className='mt-4'>6. Maintenance Support</h6>
					</Col>
					<Col lg={6} md={6} sm={12}>
						<img className='work-flow-img' src={workFlow} alt='' />
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};

export default Workflow;
