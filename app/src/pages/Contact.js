import React, { useState } from "react"
import { images } from "../utils/constants/Images"


const Contact = () => {
	const [formData, setFormData] = useState({email: '', message: ''});

	const handleSubmit = async (event) => {
		event.preventDefault();
		console.log(formData)

		/*try {
			const response = await fetch('http://localhost:4000/contactSubmit', {
			  method: 'POST',
			  headers: {
				'Content-Type': 'application/json',
			  },
			  credentials: 'include',
			  body: JSON.stringify({formData.email, formData.message}),
	  
			})
			alert("Succes! message sent")
		}catch(error){
			console.log(error)
		 }*/
	}

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	return (
		<div className="">
			{/* Main Content Section */}
			<main className="py-24 bg-gray-100">
				{/* Contact Form Container */}
				<div className="bg-white mx-auto p-10 rounded-lg  shadow-lg w-2/4 ">
					{/* Contact Logo Image */}
					<img
						src={images.logoFNBG}
						alt="Contact Logo"
						className="w-40 h-40 mx-auto mb-4"
					/>
					<h1 className="text-5xl text-center mb-16">Contact Us</h1>
					<form id="contactForm" onSubmit={handleSubmit}>
						<div className="mb-4">
							<input
								type="email"
								id="email"
								name="email"
								placeholder="Email..."
								onChange={handleChange}
								value={formData.email}
								className="w-full text-lg p-3 mb-4 border border-gray-300 rounded"
							/>
						</div>
						<div className="mb-4">
							<textarea
								id="message"
								name="message"
								placeholder="Start typing here..."
								rows="8"
								onChange={handleChange}
								value={formData.message}
								className="w-full text-xl p-2  border border-gray-300 rounded resize-vertical"
							></textarea>
						</div>
						<button
							type="submit"
							className="bg-teal-500 text-white text-2xl px-6 py-2 rounded"
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
