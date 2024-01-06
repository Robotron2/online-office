import { motion } from "framer-motion"
import { fadeIn } from "../../../../variants"

function Hero() {
	return (
		<div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-24" id="home">
			<div className="gradientBg rounded rounded-br-[80px] md:p-9 px-4 py-9">
				<div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
					<motion.div variants={fadeIn("down", 0.1)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.4 }}>
						<img src="https://avatars.githubusercontent.com/u/70820801?v=4" alt="" className="lg:h-[386px]" />
					</motion.div>

					<motion.div variants={fadeIn("up", 0.1)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.4 }} className="md:w-3/5">
						<h2 className="md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed">Get your personal website with Robotron</h2>
						<p className="text-[#EBEBEB] text-2xl mb-8">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</p>
						<div className="space-x-5 space-y-4">
							<button className="btnPrimary">Contact Us</button>
						</div>
					</motion.div>
					{/*  */}
				</div>
			</div>
		</div>
	)
}

export default Hero
