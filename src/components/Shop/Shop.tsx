import React from 'react';
import laptop from '../../images/Product-images/laptop/laptop.jpg';
import Cart from '../Cart/Cart';



const productData = [
	{
		id: 1,
		name: 'Lenovo Ideapad Slim 3i (82H801CBIN) 11th Gen Intel Core i5 MX350 2GB 15.6″ FHD IPS Laptop',
		price: '৳ 73,200',
		img: laptop,
	},
	{
		id: 2,
		name: 'Lenovo Ideapad Slim 3i (82H801CBIN) 11th Gen Intel Core i5 MX350 2GB 15.6″ FHD IPS Laptop',
		price: '৳ 73,200',
		img: laptop,
	},
	{
		id: 3,
		name: 'Lenovo Ideapad Slim 3i (82H801CBIN) 11th Gen Intel Core i5 MX350 2GB 15.6″ FHD IPS Laptop',
		price: '৳ 73,200',
		img: laptop,
	},
	{
		id: 4,
		name: 'Lenovo Ideapad Slim 3i (82H801CBIN) 11th Gen Intel Core i5 MX350 2GB 15.6″ FHD IPS Laptop',
		price: '৳ 73,200',
		img: laptop,
	},
	{
		id: 5,
		name: 'Lenovo Ideapad Slim 3i (82H801CBIN) 11th Gen Intel Core i5 MX350 2GB 15.6″ FHD IPS Laptop',
		price: '৳ 73,200',
		img: laptop,
	},
	{
		id: 6,
		name: 'Lenovo Ideapad Slim 3i (82H801CBIN) 11th Gen Intel Core i5 MX350 2GB 15.6″ FHD IPS Laptop',
		price: '৳ 73,200',
		img: laptop,
	},
	{
		id: 7,
		name: 'Lenovo Ideapad Slim 3i (82H801CBIN) 11th Gen Intel Core i5 MX350 2GB 15.6″ FHD IPS Laptop',
		price: '৳ 73,200',
		img: laptop,
	},
	{
		id: 8,
		name: 'Lenovo Ideapad Slim 3i (82H801CBIN) 11th Gen Intel Core i5 MX350 2GB 15.6″ FHD IPS Laptop',
		price: '৳ 73,200',
		img: laptop,
	},
];
const Shop = () => {
	return (
		<div className='container'>
			{productData.map((productData) => (
				<Cart productData={productData} key={productData.id}></Cart>
			))}
		</div>
	);
};

export default Shop;