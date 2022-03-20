import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import data from '../utils/data';

const Home = () => {
	return (
		<div className="container mx-auto   mb-5">
			<h1 className="text-3xl xl:ml-20 pb-5 ml-3 font-semibold">
				Products
			</h1>
			<div className="grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-10">
				{data.products.map((product) => (
					<div key={product.name}>
						<div className="flex justify-center">
							<div className="rounded-lg shadow-lg bg-white max-w-sm">
								<Link href="/">
									<a>
										<Image
											className="rounded-t-lg"
											width={375}
											height={375}
											src={product.image}
											alt=""
										/>
									</a>
								</Link>
								<div className="p-6 items-center">
									<h5 className="text-gray-900 text-xl font-medium mb-2">
										{product.name}
									</h5>
									<div className="flex items-center">
										<div className="text-gray-700  text-base mb-4">
											<h2 className="text-sm font-bold mr-10 mt-5">
												£ {product.price}
											</h2>
										</div>
										<button
											type="button"
											className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-900 hover:shadow-lg focus:bg-blue-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-900 active:shadow-lg transition duration-150 ease-in-out"
										>
											ADD TO CART
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Home;
