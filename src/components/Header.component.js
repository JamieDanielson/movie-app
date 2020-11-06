import React from 'react';
import logo from '../img/logo.png';

const Header = () => {
	return (
		<header className="center">
			<div className="logo">
				<img src={logo} alt="logo" />
				<h1>Movie App</h1>
			</div>
		</header>
	);
};

export default Header;
