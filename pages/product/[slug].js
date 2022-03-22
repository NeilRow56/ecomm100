import React from 'react';

import Layout from '../../components/Layout';

import db from '../../utils/db';
import Product from '../../models/Product';
import Link from 'next/link';
import Image from 'next/image';

export default function ProductScreen(props) {
	const { product } = props;

	if (!product) {
		return (
			<div className="">
				<h2 className="text-2xl font-bold ml-20 mt-20">
					Product not Found
				</h2>
			</div>
		);
	}
	return (
		<Layout title={product.name} description={product.description}>
			<div className="mt-5 ml-10  mb-5">
				<Link href="/">
					<a className="text-orange-400">Back to products</a>
				</Link>
			</div>

			<div className="flex justify-center">
				<div className="flex flex-col md:flex-row mx-10 rounded-lg bg-white shadow-lg">
					<Image
						className=" w-full   object-cover  rounded-t-lg md:rounded-none md:rounded-l-lg"
						width={700}
						height={700}
						src={product.image}
						alt="{product.name}"
					/>
					<div className="p-6 flex flex-col 2xl:flex-row justify-start dark:bg-gray-700 dark:text-white text-gray-900">
						<div className="flex-col min-w-[350px]  max-w-[640px] px-5 pb-5">
							<h1 className=" lg:text-3xl text-2xl font-medium mb-5 mt-5">
								{product.name}
							</h1>
							<h5 className=" text-xl font-medium mb-2">
								Category: {product.category}
							</h5>
							<h5 className=" text-xl font-medium mb-2">
								Brand: {product.brand}
							</h5>
							<h5 className=" text-xl font-medium mb-2">
								Rating: {product.rating} stars (
								{product.numReviews} reviews)
							</h5>
							<p className="text-gray-600 dark:text-white opacity-75 text-xl">
								Descrition: {product.description}
							</p>
						</div>
						<div className="flex flex-col ">
							<div className="border border-gray-200 rounded-md ">
								<div className=" flex space-x-1 flex-row min-w-[350px] max-w-[640px] pl-5 ">
									<div className=" text-xl font-medium mb-2">
										<h2 className="text-2xl">Price £</h2>
									</div>
									<div className=" text-xl font-medium mb-2">
										<h2 className="text-2xl">
											{product.price}
										</h2>
									</div>
								</div>
								<div className="flex flex-col ">
									<div className=" flex space-x-1  min-w-[350px] max-w-[640px] pl-5 ">
										<div className=" flex flex-row text-xl font-medium mb-2">
											<h2 className="text-xl">Status:</h2>
										</div>
										<div className=" text-xl font-medium mb-2">
											<h2 className="text-xl">
												{product.countInStock > 0
													? 'InStock'
													: 'Out of Stock'}
											</h2>
										</div>
									</div>
									<div className="flex flex-col ">
										<button
											type="button"
											className=" inline-block px-6 py-2.5 bg-orange-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-900 hover:shadow-lg focus:bg-blue-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-900 active:shadow-lg transition duration-150 ease-in-out ml-5 mr-36 mb-5"
										>
											ADD TO CART
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export async function getServerSideProps(context) {
	const { params } = context;
	const { slug } = params;
	await db.connect();
	const product = await Product.findOne({ slug }).lean();
	await db.disconnect();
	return {
		props: {
			product: db.convertDocToObj(product),
		},
	};
}
