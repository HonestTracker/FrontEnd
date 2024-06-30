export const addToFavorites = async (token, product_id) => {
	try {
		const response = await fetch(`https://api.honesttracker.nl/api/auth/user/favorites/store`, {
			method: "post",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({
				product_id: product_id,
				device: "web",
			}),
		})
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`)
		}
		const data = await response.json()
		console.log('RESPONSE', data)
		return data
	} catch (error) {
		console.error("Error fetching data:", error)
		throw error // Re-throw the error so it can be handled in the component
	}
}
