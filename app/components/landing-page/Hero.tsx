import { ArrowRight } from "lucide-react";

const Hero = () => {
	return (
		<section
			className="relative w-full h-[110vh] bg-cover bg-center bg-no-repeat"
			style={{ backgroundImage: "url('/hero-bg2.jpg')" }}
		>
			{/* Overlay */}
			<div className="absolute inset-0 bg-black/50 z-0" />

			{/* Content */}
			<div className="relative z-10 flex flex-col items-start justify-center text-center h-full w-full px-6 text-white">
				<div className="space-y-4">
					<h1 className="text-5xl sm:text-7xl md:text-9xl font-bold drop-shadow-lg text-start">
						Burton Electric LLC
					</h1>

					<div className="text-start mb-4 space-y-2 sm:space-y-0">
						<p className="text-3xl font-bold">
							25+ Years of Trusted Electrical Service in Nashville
						</p>
						<p>
							From residential repairs to complex commercial installations,
							Burton Electric LLC is built on integrity, safety, and
							satisfaction.
						</p>
					</div>
					<div className="flex items-center gap-2 sm:gap-4">
						<a
							href="/contact"
							className="text-sm sm:text-base group flex items-center gap-2 text-white bg-primary px-4 py-2 font-medium rounded-lg transition-all w-fit text-nowrap"
						>
							<span>Contact Us</span>
							<ArrowRight
								size={16}
								className="group-hover:translate-x-1 transition-all"
							/>
						</a>
						<a
							href="/about"
							className="text-sm sm:text-base group flex items-center gap-2 text-white bg-primary px-4 py-2 font-medium rounded-lg transition-all w-fit text-nowrap"
						>
							<span>Learn More</span>
							<ArrowRight
								size={16}
								className="group-hover:translate-x-1 transition-all"
							/>
						</a>
					</div>
				</div>

				{/* <p className="text-sm sm:text-base max-w-2xl mb-6 drop-shadow-md text-start">
						Welcome to Burton Electric LLC, where quality meets reliability.
						With over 25 years of experience in the electrical industry, we are
						committed to delivering top-notch electrical solutions for both
						commercial and residential clients. Our team is built on the
						principles of integrity, safety, and customer satisfaction. From
						installations to complex commercial projects and routine electrical
						repairs, our team is equipped to handle a wide range of projects,
						ensuring that your electrical systems are safe, efficient, and up to
						code.
					</p> */}
			</div>
		</section>
	);
};

export default Hero;
