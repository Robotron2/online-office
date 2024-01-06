import { motion } from "framer-motion"
import { fadeIn } from "../../../../variants"

function Services() {
	return (
		<div className="my-28 px-4 md:px-14 max-w-screen-2xl mx-auto" id="services">
			<div className="flex flex-col lg:flex-row justify-between items-start gap-10">
				<motion.div
					variants={fadeIn("right", 0.1)}
					initial="hidden"
					whileInView={"show"}
					viewport={{ once: false, amount: 0.4 }}
					className="lg:w-1/4"
				>
					<h3 className="text-3xl">Lorem Headinggggg</h3>
					<p className="text-base text-tertiary">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, hic. Quidem neque impedit numquam aspernatur perferendis assumenda,
						quia cum iure recusandae expedita a, velit quisquam nostrum in itaque nam corporis.
					</p>
				</motion.div>
				<motion.div
					variants={fadeIn("up", 0.1)}
					initial="hidden"
					whileInView={"show"}
					viewport={{ once: false, amount: 0.4 }}
					className="w-full lg:w-3/4"
				>
					<div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8">
						<div className="bg-[rgba(255, 255, 255, 0.04)] rounded -[35px] h-96 shadow-2xl p-8 items-center flex justify-between hover:-translate-y-4 transition-all duration-300 cursor-pointer">
							<div>
								<img src="" alt="" />
								<h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">Convenient user title</h5>
							</div>
						</div>
						<div className="bg-[rgba(255, 255, 255, 0.04)] rounded -[35px] h-96 shadow-2xl p-8 items-center flex justify-between hover:-translate-y-4 transition-all duration-300 cursor-pointer md:mt-16">
							<div>
								<img src="" alt="" />
								<h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">Convenient user title</h5>
							</div>
						</div>
						<div className="bg-[rgba(255, 255, 255, 0.04)] rounded -[35px] h-96 shadow-2xl p-8 items-center flex justify-between hover:-translate-y-4 transition-all duration-300 cursor-pointer">
							<div>
								<img src="" alt="" />
								<h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">Convenient user title</h5>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	)
}

export default Services
