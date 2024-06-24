import React from "react"
import { images } from "../utils/constants/Images"
import BackButton from "../utils/BackButton"

function NotFoundPage() {
	return (
		<main class="p-48 items-center">
			<div class="text-center -mt-32">
				<img src={images.logoFNBG} class="h-64 mx-auto" />
				<h1 class="text-7xl mx-auto -mt-4">404</h1>
				<p class="text-2xl mt-6 ">This page could not be found</p>
				<div class="absolute ml-96 pl-2 mt-2">
					<BackButton />
				</div>
			</div>
		</main>
	)
}

export default NotFoundPage
