import React from "react"
import { images } from "../utils/constants/Images"

const Contact = () => {
	return (
		<div className="min-h-screen flex flex-col">
			{/* Main Content Section */}
			<main className="flex flex-1 justify-center items-center bg-gray-100">
				{/* Contact Form Container */}
				<div className="bg-white p-10 rounded-lg  shadow-lg w-2/4 ">
					{/* Contact Logo Image */}
					<img
						src={images.logoFNBG}
						alt="Contact Logo"
						className="w-40 h-40 mx-auto mb-4"
					/>
					<h1 className="text-5xl text-center mb-16">Contact Us</h1>
					<form id="contactForm">
						<div className="mb-4">
							<input
								type="email"
								id="email"
								name="email"
								placeholder="Email..."
								className="w-full text-lg p-3 mb-4 border border-gray-300 rounded"
							/>
						</div>
						<div className="mb-4">
							<textarea
								id="message"
								name="message"
								placeholder="Start typing here..."
								rows="8"
								className="w-full text-xl p-2  border border-gray-300 rounded resize-vertical"
							></textarea>
						</div>
						<button
							type="submit"
							className="bg-teal-500 text-white text-2xl px-4 py-2 rounded"
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
