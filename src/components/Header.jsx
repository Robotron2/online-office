import { useState } from "react"
import { GrLanguage } from "react-icons/gr"
import { FaXmark } from "react-icons/fa6"
import { FaBars } from "react-icons/fa"
import { Link } from "react-scroll"

function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}
	const navItems = [
		{
			link: "Home",
			path: "home",
		},
		{
			link: "Features",
			path: "feature",
		},
		{
			link: "About",
			path: "about",
		},
		{
			link: "Contact",
			path: "contact",
		},
	]
	return (
		<>
			<nav className="bg-white md-px-14 p-4 max-w-screen-2xl mx-auto border-b text-primary fixed top-0 right-0 left-0 z-20">
				<div className="text-xl container mx-auto flex justify-between items-center font-medium">
					<div className="flex items-center space-x-14">
						<a href="/" className="text-2xl font-semibold flex items-center space-x-3 text-primary">
							<img src={"https://avatars.githubusercontent.com/u/70820801?v=4"} alt="img" className="w-10 inline-block items-center" />
							Logo
						</a>
						<ul className="md:flex space-x-12 hidden">
							{navItems.map(({ link, path }) => {
								return (
									<Link
										to={path}
										key={link}
										className="block hover:text-gray-300 cursor-pointer"
										spy={true}
										smooth={true}
										offset={-100}
										activeClass="active"
									>
										{link}
									</Link>
								)
							})}
						</ul>
					</div>

					{/*  */}
					<div className="space-x-12 hidden md:flex items-center">
						<a href="/language" className="hidden lg:flex items-center hover:text-secondary">
							<GrLanguage className="mr-2" />
							<span>Language</span>
						</a>
						<button className=" bg-secondary py-2 px-4 transition-all duration-300 rounded text-white hover:bg-indigo-600">Sign Up</button>
					</div>

					{/*  */}
					<div className="md:hidden">
						<button className="text-white focus:outline-none focus:text-gray-300" onClick={toggleMenu}>
							{isMenuOpen ? <FaXmark className="w-6 h-6 text-primary" /> : <FaBars className="w-6 h-6 text-primary" />}
						</button>
					</div>
				</div>
			</nav>

			<div className={`space-y-4 pt-24 pb-5 px-5 bg-secondary ${isMenuOpen ? "block fixed top-10 left-0 right-0 z-10" : "hidden"}`}>
				{navItems.map(({ link, path }) => {
					return (
						<Link
							to={path}
							key={link}
							className="block hover:text-gray-300 cursor-pointer"
							spy={true}
							smooth={true}
							offset={-100}
							activeClass="active"
							onClick={toggleMenu}
						>
							{link}
						</Link>
					)
				})}
			</div>
		</>
	)
}

export default Header
