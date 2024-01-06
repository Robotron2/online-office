import { Icons } from "../pages/Home/components/AllIcons"
import FooterItems from "../pages/Home/components/FooterItems"
import SocialIcons from "../pages/Home/components/SocialIcons"

function Footer() {
	return (
		<footer className="bg-gray-900 text-white ">
			<div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7 md:px-12 p-4 max-w-screen-2xl mx-auto">
				<h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
					<span className="text-primary">Subscribe</span> to the newsletter
				</h1>
				<div>
					<input
						type="text"
						placeholder="Enter your email address"
						className="text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
					/>
					<button className="btnPrimary">Subscribe</button>
				</div>
			</div>

			<FooterItems />

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8">
				<span>© Robotron 2023. All rights reserved.</span>
				<SocialIcons Icons={Icons} />
			</div>
		</footer>
	)
}

export default Footer
