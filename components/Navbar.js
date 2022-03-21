import React, { useState } from 'react';
import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import { HiMoon, HiSun } from 'react-icons/hi';

const Navbar = ({ search, setSearch }) => {
	const router = useRouter();
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => setMounted(true), []);
	if (!mounted) return null;

	let Links = [
		{ name: 'Login', link: '/loginScreen' },
		{ name: 'About', link: '/about' },
		{ name: 'Cart', link: '/cartScreen' },
	];

	return (
		<div className="fixed top-0 flex flex-col md:flex-row w-full h-[60px]  items-center bg-blue-800 dark:bg-gray-700 z-40">
			<div className="flex flex-row text-center  text-white text-3xl w-full justify-center md:justify-start  xl:pl-[100px] md:pl[10px] py-[1px] bg-blue-800 dark:bg-gray-700 z-30">
				<Link href="/">
					<a
						className="md:text-3xl ml-3 
					font-bold
					
                    
                    "
					>
						amazona
					</a>
				</Link>

				{/* <form
					className="form-group flex-row  pl-2 sm:pl-5 "
					onSubmit={(e) => e.preventDefault()}
				>
					<input
						className="form-control
				block
				w-[200px] sm:w-[275px] md:w-[325px]
				px-3
				py-1.5
				text-base
				font-normal
				text-gray-700
				bg-white bg-clip-padding
				border border-solid border-gray-300
				rounded
				transition
				ease-in-out
				m-0
				focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
						type="text"
						id="search"
						placeholder="Search Posts"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
				</form> */}
			</div>
			<div className="flex flex-col w-full  bg-blue-800 dark:bg-gray-700">
				<ul className="flex flex-row pt-1 pb-1    justify-center md:justify-end md:mr-[50px] xl:mr-[100px]">
					{Links.map((link) => (
						<li key={link.name}>
							<Link href={link.link}>
								<a
									className={`cursor-pointer md:text-[20px] mr-5 xl:mr-10 ${
										router.pathname === link.link
											? 'text-white hover:text-red-500'
											: 'text-red-200 hover:text-red-500'
									}`}
								>
									{link.name}
								</a>
							</Link>
						</li>
					))}
					<button
						className="px-6 py-2  bg-gray-700 dark:bg-blue-100 text-white dark:text-black rounded-full"
						onClick={() =>
							setTheme(theme === 'light' ? 'dark' : 'light')
						}
					>
						{theme === 'light' ? (
							<HiMoon
								width={20}
								height={20}
								className="text-yellow-500"
							/>
						) : (
							<HiSun
								width={20}
								height={20}
								className="text-yellow-500 bg-gray-700"
							/>
						)}
					</button>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
