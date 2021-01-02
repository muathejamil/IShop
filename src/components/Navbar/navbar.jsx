import React from 'react';
import {
	AppBar,
	Toolbar,
	IconButton,
	Badge,
	MenuItem,
	Menu,
	Typography,
} from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';

import { ShoppingCart } from '@material-ui/icons';
import './styles.css';
const Navbar = ({ totalItems }) => {
	const location = useLocation();
	return (
		<>
			<AppBar position="fixed" className="appBar" color="inherit">
				<Toolbar>
					<Typography
						component={Link}
						to="/"
						variant="h6"
						className="title"
						color="inherit">
						IShop
					</Typography>
					<div className="grow" />
					{location.pathname === '/' && (
						<div className="menuButton">
							<IconButton
								component={Link}
								to="/cart"
								aria-label="Show Cart Items"
								color="inherit">
								<Badge badgeContent={totalItems} color="secondary">
									<ShoppingCart />
								</Badge>
							</IconButton>
						</div>
					)}
				</Toolbar>
			</AppBar>
		</>
	);
};

export default Navbar;
