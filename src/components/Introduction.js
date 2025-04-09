import React from 'react';
import { motion } from 'framer-motion';

const Introduction = () => {
	return (
		<section className="bg-[#F8FBFF] py-10 px-4 md:px-16">
			<div className="max-w-7xl mx-auto">
				{/* Heading Section */}
				<div className="text-center mb-12">
					<motion.h2
						className="text-3xl md:text-4xl font-bold text-black font-poppins"
						initial={{ opacity: 0, y: -20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
					>
						Reliable Home Services at Your Doorstep
					</motion.h2>
				</div>

				{/* Content Section */}
				<div className="flex flex-col lg:flex-row items-center gap-10">
					{/* Left Image Column */}
					<div className="lg:w-1/2 w-full flex flex-wrap justify-center lg:justify-start">
						{/* Image 1 */}
						<motion.div
							className="w-1/2 px-2 hidden lg:block"
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: 0.2 }}
						>
							<div className="rounded-2xl overflow-hidden">
								<img
									src="https://mehedi.asiandevelopers.com/demo/html/fouens/images/resources/welcome-thumb-1.jpg"
									alt="Child on Carpet"
									className="w-full h-auto object-cover"
									loading="lazy"
								/>
							</div>
						</motion.div>

						{/* Image 2 */}
						<motion.div
							className="w-1/2 px-2 hidden lg:block"
							initial={{ opacity: 0, x: 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: 0.3 }}
						>
							<div className="rounded-2xl overflow-hidden relative border-8 border-white lg:left-[-120px] lg:mt-10">
								<img
									src="https://mehedi.asiandevelopers.com/demo/html/fouens/images/resources/welcome.jpg"
									alt="Cleaning Lady"
									className="w-full h-64 lg:h-[320px] object-cover"
									loading="lazy"
								/>
							</div>
						</motion.div>

						{/* Image 3 */}
						<motion.div
							className="w-full sm:w-1/2 flex justify-center mt-6 lg:mt-[-20px] lg:relative lg:left-4 lg:top-[-20px]"
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: 0.4 }}
						>
							<div className="rounded-2xl overflow-hidden border-8 border-white">
								<img
									src="https://mehedi.asiandevelopers.com/demo/html/fouens/images/resources/welcome-thumb-2.jpg"
									alt="Child on Carpet"
									className="w-full h-[200px] sm:h-auto object-cover"
									loading="lazy"
								/>
							</div>
						</motion.div>
					</div>

					{/* Right Text Column */}
					<div className="lg:w-1/2 w-full px-2">
						<motion.div
							className="flex items-start mb-5"
							initial={{ opacity: 0, x: 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: 0.5 }}
						>
							<img
								src="https://mehedi.asiandevelopers.com/demo/html/fouens/images/icon/1.png"
								alt="Icon"
								className="w-10 h-10 mr-4"
								loading="lazy"
							/>
							<h3 className="text-2xl md:text-3xl font-bold text-black leading-snug font-poppins">
								Fast & Reliable Services <br />
								<span className="text-blue-600 font-[Lobster] italic">At Your Home</span>
							</h3>
						</motion.div>

						{/* Paragraphs */}
						{[
							`Need professional help around the house? Zollowup connects you with skilled maids, cleaners, plumbers, electricians, and more — all vetted and ready to serve.`,
							`Enjoy seamless booking, competitive pricing, and trustworthy professionals at your convenience. With flexible scheduling and safety-first standards, we bring comfort, care, and cleanliness to your doorstep.`,
							`Join thousands of happy clients who count on Zollowup for hassle-free home service solutions. Book today and experience the difference!`
						].map((text, index) => (
							<motion.p
								key={index}
								className="text-gray-600 mb-4 leading-6 font-roboto text-base"
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
							>
								{text}
							</motion.p>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Introduction;
