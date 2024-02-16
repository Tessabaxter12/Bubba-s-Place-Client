	import React, { Fragment } from 'react'
	import Nav from 'react-bootstrap/Nav'
	import Navbar from 'react-bootstrap/Navbar'
	import { Link } from 'react-router-dom'
	const linkStyle = {
		color: '#F5F5F5',
		textDecoration: 'none',
		fontSize: '25px'
	}
	const authenticatedOptions = (
		<>
			<Nav.Item className='m-3'>
				<Link to='/reservations' style={linkStyle}>
					Reservations
				</Link>
			</Nav.Item>
			<Nav.Item className='m-3'>
				<Link to='change-password' style={linkStyle}>
					Change Password
				</Link>
			</Nav.Item>
			<Nav.Item className='m-3'>
				<Link to='sign-out' style={linkStyle}>
					Sign Out
				</Link>
			</Nav.Item>
		</>
	)

	const unauthenticatedOptions = (
		<>
			<Nav.Item className='m-3'>
				<Link to='sign-up' style={linkStyle}>Sign Up</Link>
			</Nav.Item>
			<Nav.Item className='m-3'>
				<Link to='sign-in' style={linkStyle}>Sign In</Link>
			</Nav.Item>
		</>
	)

	const alwaysOptions = (
		<>
			<Nav.Item className='m-3'>
				<Link to='/' style={linkStyle}>
					Home
				</Link>
			</Nav.Item>
			<Nav.Item className='m-3'>
				<Link to='/reviewss' style={linkStyle}>
					Reviews
				</Link>
			</Nav.Item>
			<Nav.Item className='m-3'>
				<Link to='/propertyDetails' style={linkStyle}>
					Property
				</Link>
			</Nav.Item>
			<Nav.Item className='m-3'>
				<Link to='/locationDetails' style={linkStyle}>
					Location
				</Link>
			</Nav.Item>
		</>
	)

	const Header = ({ user }) => (
		<Navbar bg='primary' variant='dark' expand='md'>
			<Navbar.Brand className='m-3'>
				<Link to='/' style={linkStyle}>
					Bubba's Place
				</Link>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav' className='justify-content-center'>
				<Nav className='ml-auto'>
					{user && (
						<span className='navbar-text m-3' style={{ fontWeight: 'bold', fontSize: 'larger', color: 'black' }}>
							Welcome, {user.email}
						</span>
					)}
					{alwaysOptions}
					{user ? authenticatedOptions : unauthenticatedOptions}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)

	export default Header