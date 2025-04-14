import "@/assets/styles/globals.css"

export const metadata = {
	title: "BearForge",
	description: `Workout tracker`,
	keyworks: "workout, tracker, fitness, gym, fasting, nutrition, health",
}

const MainLayout = ({ children }) => {
	return (
		<html lang="en">
			<body>
				<div>{children}</div>
			</body>
		</html>
	)
}

export default MainLayout
