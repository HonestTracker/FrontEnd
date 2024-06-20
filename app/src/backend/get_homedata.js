export const getHomeData = async () => {
	try {
		const response = await fetch(`https://api.honesttracker.nl/api/home`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
		console.log("Response received:", response)
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`)
		}
		const data = await response.json()
		console.log("Data received!", data)
		return data
	} catch (error) {
		console.error("Error fetching data:", error)
		throw error // Re-throw the error so it can be handled in the component
	}
}
