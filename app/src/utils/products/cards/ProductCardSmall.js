import React from "react"
import { useNavigate } from "react-router-dom"
import { icons } from "../../constants/images/Icons"
import { images } from "../../constants/images/Images"
import { formatPrice } from "../utils/Formatters"

// TEMPORARY. when i remove this it breaks everything so i'll just leave it here for now cause im too lazy to fix it
function ProductCard({ product }) {
	const navigate = useNavigate()

	const navigateToDetails = (product) => {
		navigate(`/product/${product.id}`)
		window.scrollTo(0, 0)
	}

	return (
		<div
			className="bg-white rounded-lg mb-4 flex flex-row"
			style={{
				boxShadow:
					"0 -2px 5px rgba(0, 0, 0, 0.1), 0 2px 3px rgba(0, 0, 0, 0.1)",
			}}
			onClick={() => navigateToDetails(product)}
		>
			<img
				src={product.picture_url || images.placeholder}
				alt={product.name || "Placeholder"}
				className="max-w-32 max-h-32 object-contain rounded-lg p-4"
			/>
			<div>
				<div className="flex justify-center h-full">
					<div className="flex flex-col justify-center ml-4">
						<h3 className="text-l font-black">{product.name}</h3>
						<div className="flex items-start">
							<div className="mr-4">
								<p
									className={`text-2xl text-bold ${
										product.change_percentage > 0
											? "text-red-500"
											: "text-green-500"
									}`}
								>
									{formatPrice(product.current_price)}
								</p>
								<span
									className={`text-sm ${
										product.change_percentage > 0
											? "text-red-500"
											: "text-green-500"
									}`}
								>
									{product.change_percentage > 0 ? "+" : "-"}
									{Math.abs(product.change_percentage)}%
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductCard
