import React, { useEffect, useState } from "react"
import { images } from "../../constants/images/Images"
import { icons } from "../../constants/images/Icons"
import { useLocation, useNavigate } from "react-router-dom"
import CustomLink from "./CustomLink"

/**
 * Represents a navigation bar component.
 *
 * @returns {JSX.Element} The JSX element representing the navigation bar.
 */
function Navbar() {
	const location = useLocation()
	const navigate = useNavigate()
	const [isLoginPage, setIsLoginPage] = useState(false)
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [isOpen, setIsOpen] = useState(false)
	const toggleDropdown = () => setIsOpen(!isOpen)
	const closeDropdown = () => {
		setIsOpen(false)
	}

	// check if the token is still valid
	const checkTokenExpiry = () => {
		const tokenExpiration = localStorage.getItem("tokenExpiration")
		const token = localStorage.getItem("token")

		if (!token) {
			console.log("No token found")
			setIsLoggedIn(false)
			return false
		}
		if (!tokenExpiration) {
			console.log("No token expiration found")
			setIsLoggedIn(false)
			return false
		}
		const expirationTimeMillis = parseInt(tokenExpiration)
		if (isNaN(expirationTimeMillis)) {
			console.error("Invalid token expiration format:", tokenExpiration)
			return
		}

		const expirationDate = new Date(expirationTimeMillis)
		const currentTime = new Date()
		if (expirationDate <= currentTime) {
			console.log("Token expired")
			localStorage.removeItem("user")
			localStorage.removeItem("token")
			localStorage.removeItem("tokenExpiration")
			setIsLoggedIn(false)
			return false
		}
		return true
	}

	// check if the token is still valid on page load. wait, didnt we just do this? ooooh, this is for the first time the page loads, the other one is for when the user navigates to a different page
	useEffect(() => {
		const isValidToken = checkTokenExpiry()
		setIsLoggedIn(isValidToken)

		const path = location.pathname
		setIsLoginPage(path === "/login" || path === "/register")
	}, [location])

	const toLoginPage = () => {
		navigate("/login")
	}

	// render the sign in button if the user is not logged in and the current page is not the login page
	const renderSignInButton = () => {
		if (!isLoggedIn && !isLoginPage) {
			return (
				<div className="absolute right-44">
					<button
						className="bg-teal-400 cursor-pointer text-white px-4 py-2 rounded hover:bg-teal-300"
						onClick={toLoginPage}
					>
						<CustomLink to="/login">Sign in</CustomLink>
					</button>
				</div>
			)
		}
		return null
	}

	// handle the logout process
	const handleLogout = async () => {
		const token = localStorage.getItem("token")
		if (!token) {
			console.error("No token found")
			return
		}
		try {
			const response = await fetch(
				"https://api.honesttracker.nl/api/auth/logout",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Accept: "application/json",
						Authorization: `Bearer ${token}`,
					},
				}
			)

			if (!response.ok) {
				const responseData = await response.json()
				throw new Error(
					responseData.message || "An error occurred during logout."
				)
			}

			localStorage.removeItem("token")
			localStorage.removeItem("user")
			localStorage.removeItem("tokenExpiration")
			console.log("Logged out successfully")
			navigate("/")
		} catch (error) {
			console.error("Error during logout:", error)
		}
	}

	// render the logged in user if the user is logged in, also render the dropdown menu if the user clicks on the user icon
	const renderLoggedInUser = () => {
		if (isLoggedIn) {
			const loggedUserString = localStorage.getItem("user")
			if (!loggedUserString) {
				console.error("No user data found")
				return null
			}

			let loggedUser
			try {
				loggedUser = JSON.parse(loggedUserString)
			} catch (error) {
				console.error("Error parsing user data:", error)
				return null
			}

			if (!loggedUser) {
				console.error("Invalid user data")
				return null
			}
			const profilePictureUrl = loggedUser.picture_url.startsWith("/")
				? `https://api.honesttracker.nl${loggedUser.picture_url}`
				: images.placeholder
			return (
				<div className="absolute right-40 flex items-center space-x-2">
					<div className="inline-block text-left">
						<button
							onClick={toggleDropdown}
							className="flex justify-between text-white px-4 py-2 "
						>
							<span className="text-white mt-3">{loggedUser.name}</span>
							<img
								src={profilePictureUrl}
								alt="thomas"
								className="h-12 w-12 ml-4 rounded-full"
							/>
						</button>
						{isOpen && (
							<div className="absolute right-4 z-10 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
								<CustomLink to="/profile">
									<div
										className="flex items-center cursor-pointer px-4 py-2 text-lg text-gray-700 hover:bg-gray-100"
										onClick={closeDropdown} // Close dropdown when clicking on profile link
									>
										<icons.AddressCard
											width={30}
											height={30}
											className="mr-2"
										/>
										<p className="text-xl">Profile</p>
									</div>
								</CustomLink>

								<CustomLink to="/settingsauth">
									<div
										className="flex items-center cursor-pointer px-4 py-2 text-lg text-gray-700 hover:bg-gray-100"
										onClick={closeDropdown} // Close dropdown when clicking on settings link
									>
										<icons.SettingsGear
											width={30}
											height={30}
											className="mr-2"
										/>
										<p className="text-xl">Settings</p>
									</div>
								</CustomLink>

								<div
									className="flex items-center cursor-pointer px-4 py-2 text-lg text-gray-700 hover:bg-gray-100"
									onClick={handleLogout} // Perform logout and close dropdown
								>
									<icons.DoorOpen width={30} height={30} className="mr-2" />
									<p className="text-xl">Logout</p>
								</div>
							</div>
						)}
					</div>
				</div>
			)
		}
		return null
	}

	return (
		<nav className="bg-customTeal p-4 flex items-center w-full shadow-lg">
			<div className="relative flex items-center w-full">
				<div className="absolute left-40">
					<img
						src={images.logoFNBG}
						alt="Logo"
						className="h-16 w-16 rounded-full"
					/>
				</div>
				<div className="mx-auto">
					<div className="flex space-x-10 text-white text-lg">
						<CustomLink to="/">Home</CustomLink>
						<CustomLink to="/products">Products</CustomLink>
						<CustomLink to="/about">About</CustomLink>
						<CustomLink to="/contact">Contact</CustomLink>
						{isLoggedIn ? (
							<CustomLink to="/settingsauth">Settings</CustomLink>
						) : (
							<CustomLink to="/settings">Settings</CustomLink>
						)}
					</div>
				</div>
				{renderSignInButton()}
				{renderLoggedInUser()}
			</div>
		</nav>
	)
}

export default Navbar
