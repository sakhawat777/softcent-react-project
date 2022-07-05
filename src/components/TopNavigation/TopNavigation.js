import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../asset/images/logo/logo.png';
import { NavLink } from 'react-router-dom';
import './TopNavigation.css';

const TopNavigation = () => {
	return (
		<>
			<Navbar collapseOnSelect expand='lg'>
				<Container className='nav-bar'>
					<div>
						<NavLink to='/'>
							<img className='logo' src={logo} alt='' />
						</NavLink>
					</div>
					<Navbar.Toggle aria-controls='responsive-navbar-nav' />
					<Navbar.Collapse id='responsive-navbar-nav'>
						<Nav className='ms-auto'>
							<div className='d-flex'>
								<NavLink className='nav-link' to='/'>
									HOME
								</NavLink>

								<NavLink className='nav-link' to='/about'>
									ABOUT
								</NavLink>
								<NavLink className='nav-link' to='/work'>
									WORK
								</NavLink>
								<NavLink className='nav-link' to='/premium_product'>
									PREMIUM PRODUCTS
								</NavLink>
								<NavLink className='nav-link' to='/blog'>
									BLOG
								</NavLink>
								<NavLink className='btn btn-primary' to='/project'>
									START A PROJECT
								</NavLink>
							</div>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default TopNavigation;
