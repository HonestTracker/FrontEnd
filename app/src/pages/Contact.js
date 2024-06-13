import React from "react"
import { images } from "../utils/constants/Images"

const Contact = () => {
	return (
		<div className="min-h-screen flex flex-col">
			{/* Main Content Section */}
			<main className="flex flex-1 justify-center items-center bg-gray-100">
				{/* Contact Form Container */}
				<div className="bg-white p-8 rounded-lg shadow-md text-center max-w-md w-full">
					{/* Contact Logo Image */}
					<img
						src={images.logoFNBG}
						alt="Contact Logo"
						className="w-20 h-20 mx-auto mb-4"
					/>
					<h1 className="text-2xl mb-4">Contact Us</h1>
					<form id="contactForm">
						<div className="mb-4">
							<input
								type="email"
								id="email"
								name="email"
								placeholder="Email..."
								className="w-full p-2 border border-gray-300 rounded"
							/>
						</div>
						<div className="mb-4">
							<textarea
								id="message"
								name="message"
								placeholder="Start typing here..."
								className="w-full p-2 border border-gray-300 rounded h-24 resize-vertical"
							></textarea>
						</div>
						<button
							type="submit"
							className="bg-teal-500 text-white px-4 py-2 rounded"
						>
							Send
						</button>
					</form>
				</div>
			</main>
		</div>
	)
}

export default Contact
