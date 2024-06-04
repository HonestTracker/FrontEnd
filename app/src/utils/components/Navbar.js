import React from "react"
import { images } from "../constants/images/images"

function Navbar() {
	return (
		<nav className="bg-teal-500 p-4 flex items-center w-full ">
			{/* Container for logo and links (right-aligned) */}
			<div className="flex  justify-between w-full">
				{/* Logo on the left */}
				<div className="flex items-center mr-auto">
					<img src={images.logo} alt="Logo" className="h-6 w-6 rounded-full" />
				</div>

				{/* Centered links within the right space */}
				<div className="flex space-x-4 text-white text-lg justify-center">
					<a href="#" className="hover:text-gray-300">
						Home
					</a>
					<a href="#" className="hover:text-gray-300">
						Products
					</a>
					<a href="#" className="hover:text-gray-300">
						About
					</a>
					<a href="#" className="hover:text-gray-300">
						Contact
					</a>
					{/* Logo on the right */}
				</div>
			</div>
		</nav>
	)
}

export default Navbar
