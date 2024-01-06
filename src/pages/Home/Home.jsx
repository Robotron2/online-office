import Footer from "../../components/Footer"
import About from "./components/About"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Services from "./components/Services"

function Home() {
	return (
		<>
			<Hero />
			<About />
			<Services />
			<Contact />
			<Footer />
		</>
	)
}

export default Home
