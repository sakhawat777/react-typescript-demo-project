import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


interface CartProps {
	productData: {
		id: number;
		name: string;
		price: string;
		img: string;
	} 
	}
	

const Cart = ({ productData }:  CartProps) => {
	return (
		<div className='card-section'>
			<Card style={{ width: '16.81rem' }}>
				<Card.Img variant='top' src={productData.img} />
				<Card.Body>
					<Card.Title>{productData.name}</Card.Title>
					<Card.Text>{productData.price}</Card.Text>
					<Button variant='primary'>
						<FontAwesomeIcon icon={faCartShopping} /> add to cart
					</Button>
				</Card.Body>
			</Card>
		</div>
	);
};

export default Cart;