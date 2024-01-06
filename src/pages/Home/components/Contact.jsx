import { motion } from "framer-motion"
import { fadeIn } from "../../../../variants"

import ContactSVG from "./ContactSVG"

function Contact() {
	return (
		<>
			<div>
				<div className="max-w-screen-2xl mt-24 mb-24 p-4 px-6 grid gap-12 grid-cols-1 md:grid-cols-2 md:px-12  py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
					<motion.div
						variants={fadeIn("right", 0.1)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.4 }}
						className="flex flex-col justify-between"
					>
						<div>
							<h2 className="text-4xl lg:text-5xl font-bold leading-tight">Lets talk about everything!</h2>
						</div>
						<div className="mt-8 text-center">
							<ContactSVG />
						</div>
					</motion.div>
					<motion.div
						variants={fadeIn("left", 0.1)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.4 }}
						className="flex flex-col justify-between"
					>
						<div>
							<span className="uppercase text-sm text-gray-600 font-bold">Full Name</span>
							<input
								className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
								type="text"
								placeholder
							/>
						</div>
						<div className="mt-8">
							<span className="uppercase text-sm text-gray-600 font-bold">Email</span>
							<input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" />
						</div>
						<div className="mt-8">
							<span className="uppercase text-sm text-gray-600 font-bold">Message</span>
							<textarea
								className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
								defaultValue={""}
							/>
						</div>
						<div className="mt-8">
							<button className="btnPrimary tracking-wide text-sm font-bold w-full">Send Message</button>
						</div>
					</motion.div>
				</div>
			</div>
		</>
	)
}

export default Contact
