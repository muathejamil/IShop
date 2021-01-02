import React, { useState } from 'react';
import {
	Typography,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
} from '@material-ui/core';
import './styles.css';

const CartItem = ({ item, onUpdateCart, onRemoveFromCart }) => {
	return (
		<Card>
			<CardMedia image={item.media.source} alt={item.name} className="media" />
			<CardContent className="cardContent">
				<Typography variant="h5">{item.name}</Typography>
				<Typography variant="h6">
					{item.line_total.formatted_with_symbol}
				</Typography>
			</CardContent>
			<CardActions className="cardActions">
				<div className="buttons">
					<Button
						className="buttonsfontSize"
						type="button"
						size="small"
						color="secondary"
						onClick={() => onUpdateCart(item.id, item.quantity - 1)}>
						-
					</Button>
					<Typography>{item.quantity}</Typography>
					<Button
						className="buttonsfontSize"
						type="button"
						size="small"
						color="primary"
						onClick={() => onUpdateCart(item.id, item.quantity + 1)}>
						+
					</Button>
				</div>
				<Button
					variant="contained"
					type="button"
					color="secondary"
					onClick={() => onRemoveFromCart(item.id)}>
					Remove
				</Button>
			</CardActions>
		</Card>
	);
};

export default CartItem;
