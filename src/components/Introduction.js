import React from 'react';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Introduction = () => {
	return (
		<section className="mt-16">
			<div className="container  lg:mx-4 ">
				{/* Heading Section */}
				<div className="flex flex-col md:flex-row justify-center items-center mb-10">
					<div className=" text-center">
						<motion.h2
							className="text-3xl lg:text-4xl font-bold text-black w-full font-poppins"
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
						>
							Reliable Home Services at Your Doorstep
						</motion.h2>
					</div>
				</div>

				{/* Content Section */}
				<div className="  flex flex-col lg:flex-row items-center gap-2">
					{/* Left Image Section */}
					<div className="lg:w-1/2 w-full flex flex-wrap justify-center lg:justify-start">
						<div className="flex flex-wrap">
							<motion.div
								className="w-1/2 px-2 hidden lg:block"
								initial={{ opacity: 0, x: -50 }}
								animate={{ opacity: 1, x: 0 }}
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
							<motion.div
								className="w-1/2 px-2 hidden lg:block"
								initial={{ opacity: 0, x: 50 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.8, delay: 0.4 }}
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
							<motion.div
								className="w-full sm:w-1/2 flex justify-center mt-4 lg:mt-[-20px] lg:relative lg:left-4 lg:top-[-20px]"
								initial={{ opacity: 0, y: 50 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.6 }}
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
					</div>

					{/* Right Text Section */}
					<div className="lg:w-1/2 w-full mx-4">
						<motion.div
							className="flex items-start mb-4"
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.3 }}
						>
							<div className="mr-4 mx-4">
								<img
									src="https://mehedi.asiandevelopers.com/demo/html/fouens/images/icon/1.png"
									alt="Icon"
									loading="lazy"
									className="w-10 h-10"
								/>
							</div>
							<h2 className="text-2xl lg:text-2xl font-bold text-blue-900 font-poppins">
								Fast & Reliable Home Assistance Services
							</h2>
						</motion.div>

						<motion.p
							className="text-slate-800 mb-4 leading-7 font-roboto text-base mx-2 "
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.8, delay: 0.5 }}
						>
							Looking for professional home services? We provide experienced maids, cleaners, plumbers,
							electricians, and more, ensuring top-quality assistance for your home and business needs.
							Whether you need housekeeping, elderly care, deep cleaning, or handyman services, our
							trained professionals are just a click away.
						</motion.p>

						<motion.p
							className="text-slate-800 mb-4 leading-7 font-roboto mx-2"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.8, delay: 0.7 }}
						>
							Enjoy hassle-free booking, affordable pricing, and verified service providers who bring
							convenience and comfort to your doorstep. We prioritize safety, reliability, and customer
							satisfaction, ensuring every service meets high-quality standards. With on-demand
							availability and flexible scheduling, we make home maintenance effortless.
						</motion.p>

						<motion.p
							className="text-slate-800 leading-7 font-roboto mx-2"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.8, delay: 0.7 }}
						>
							Book now and experience seamless home management with Zollowup your trusted partner for all
							home service needs!
						</motion.p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Introduction;
