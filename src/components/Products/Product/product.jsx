import React from 'react';
import {
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Typography,
	IconButton,
} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import './styles.css';

const product = ({ product, onAddToCart }) => {
	return (
		<Card className="root">
			<CardMedia
				className="media"
				title={product.name}
				image={product.media.source}
			/>
			<CardContent>
				<div className="cardContent">
					<Typography variant="h5" gutterBottom>
						{product.name}
					</Typography>
					<Typography variant="h5">
						{product.price.formatted_with_symbol}
					</Typography>
				</div>
				<Typography
					dangerouslySetInnerHTML={{ __html: product.description }}
					variant="body2"
					color="textSecondary"
				/>
			</CardContent>
			<CardActions disableSpacing className="cardActions">
				<IconButton
					aria-label="Add to Cart"
					onClick={() => onAddToCart(product.id, 1)}>
					<AddShoppingCart />
				</IconButton>
			</CardActions>
		</Card>
	);
};

export default product;
