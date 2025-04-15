import React from "react"

const Navbar = () => {
	return (
		<nav class="fixed bottom-0 left-0 right-0 bg-white">
			<div class="container mx-auto px-4">
				<div class="flex justify-between items-center py-4">
					<div class="flex space-x-4">
						<a href="#" class="text-gray-800">
							Home
						</a>
						<a href="#" class="text-gray-800">
							About
						</a>
						<a href="#" class="text-gray-800">
							Services
						</a>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
