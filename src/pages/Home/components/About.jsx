import { motion } from "framer-motion"
import { fadeIn } from "../../../../variants"

import ContactSVG from "./ContactSVG"

function About() {
	return (
		<div className="my-28 px-4 md:px-14 max-w-screen-2xl mx-auto space-y-16" id="about">
			<motion.div
				variants={fadeIn("down", 0.2)}
				initial="hidden"
				whileInView={"show"}
				viewport={{ once: false, amount: 0.4 }}
				className="flex flex-col md:flex-row gap-4 justify-between"
			>
				<div className="md:w-1/2">
					<img src="" alt="" />
					<ContactSVG />
				</div>
				<div className="md:w-2/5">
					<h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">
						We have been improving <span className="text-secondary">over the years</span>
					</h2>
					<p className="text-tertiary text-lg mb-7">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et debitis accusantium voluptas repellendus molestias autem ipsa aspernatur id.
						Minima autem tempore amet quos aliquam nulla molestiae eius. Voluptatem, sit consectetur!
					</p>
					<button className="btnPrimary">Get Started</button>
				</div>
			</motion.div>
			{/*  */}
			<motion.div
				variants={fadeIn("up", 0.2)}
				initial="hidden"
				whileInView={"show"}
				viewport={{ once: false, amount: 0.4 }}
				className="flex flex-col md:flex-row-reverse gap-4 justify-between"
			>
				<div className="md:w-1/2">
					<img src="" alt="" />
					<ContactSVG />
				</div>
				<div className="md:w-2/5">
					<h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">
						We have been improving <span className="text-secondary">over the years</span>
					</h2>
					<p className="text-tertiary text-lg mb-7">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et debitis accusantium voluptas repellendus molestias autem ipsa aspernatur id.
						Minima autem tempore amet quos aliquam nulla molestiae eius. Voluptatem, sit consectetur!
					</p>
					<button className="btnPrimary">Learn More</button>
				</div>
			</motion.div>
		</div>
	)
}

export default About
