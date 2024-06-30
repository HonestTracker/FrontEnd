export const getProfileData = async (token) => {
	try {
		const response = await fetch(`https://api.honesttracker.nl/api/auth/profile`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
			},
		})
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`)
		}
		const data = await response.json()
		return data
	} catch (error) {
		console.error("Error fetching data:", error)
		throw error // Re-throw the error so it can be handled in the component
	}
}
