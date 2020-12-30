import Footer from "./Components/Footer/Footer"
import Navbar from "./Components/Navigation/Navbar"
import Sidedrawer from "./Components/Navigation/Sidedrawer"
import TeamQuote from "./Components/TeamQuote/TeamQuote"
import About from "./Sections/About/About"
import HowItWorks from "./Sections/HowItWorks/HowItWorks"
import Landing from "./Sections/Landing/Landing"
import Look from "./Sections/Look/Look"
import Product from "./Sections/Product/Product"
import Team from "./Sections/Team/Team"
import Why from "./Sections/Why/Why"

function App() {
	return (
		<>
			{/* <header>
				<Navbar />
				<Sidedrawer />
			</header> */}
			<main>
				<Landing />
				<About />
				<HowItWorks />
				<Why />
				<Look />
				<Team />
				<TeamQuote />
				<Product />
			</main>
			<Footer />
		</>
	)
}

export default App
