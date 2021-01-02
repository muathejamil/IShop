import React from 'react';
import { Container, Typography, Grid, Button } from '@material-ui/core';
import './styles.css';
import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom';
const Cart = ({ cart, handleUpdateCart, handleRemoveFromCart }) => {
	const EmptyCart = () => (
		<Typography variant="subtitle1">
			You have no item in your shopping cart!
			<Link to="/" className="link">
				Start Adding
			</Link>
		</Typography>
	);

	const FilledCart = () => (
		<>
			<Grid container spaceing={3}>
				{cart.line_items.map((item) => (
					<Grid item xs={12} sm={4} key={item.id}>
						<CartItem
							item={item}
							onUpdateCart={handleUpdateCart}
							onRemoveFromCart={handleRemoveFromCart}
						/>
					</Grid>
				))}
			</Grid>
			<div className=".cardDetails">
				<Typography className="Total">
					Total: {cart.subtotal.formatted_with_symbol}
				</Typography>

				<div className="buttonsMargin">
					<Button
						className="buttonsMargin"
						size="large"
						type="button"
						variant="contained"
						color="primary">
						Order
					</Button>
				</div>
			</div>
		</>
	);
	if (!cart.line_items) return 'Loading ...';
	return (
		<Container className="container">
			<div />
			<Typography variant="h3" gutterBottom>
				Your Shopping Cart
			</Typography>
			{!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
		</Container>
	);
};

export default Cart;
