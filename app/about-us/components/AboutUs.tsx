import CenterDiv from "@/components/CenterDiv";
import H2 from "@/components/H2";
import { SlideInFromLeft } from "@/components/motion/SlideInFromLeft";
import { SlideInFromRight } from "@/components/motion/SlideInFromRight";
import Section from "@/components/Section";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
	return (
		<Section className="py-18 lg:py-18">
			<CenterDiv className="grid lg:grid-cols-1 items-start justify-center gap-12">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center md:place-items-start">
					<SlideInFromLeft className="space-y-8">
						<H2>About Us</H2>
						<div className="space-y-8">
							<p className="w-full">
								Welcome to Burton Electric LLC, where tradition meets expertise
								in electrical services. As a proud fourth-generation
								electrician, I bring over 25 years of experience in providing
								top-quality electrical solutions to homes and businesses in our
								local community. From a young age, I learned the trade from my
								family, and that hands-on experience has shaped my passion for
								delivering reliable, safe, and efficient electrical services.
							</p>
							<p className="w-full">
								For the past two decades, we&apos;ve built a reputation for
								outstanding customer service and high-quality work, specializing
								in both commercial and residential electrical services. Whether
								you need a quick repair, a major installation, or ongoing
								maintenance, we&apos;re here to ensure your electrical systems
								are running smoothly and safely.
							</p>
							<p className="w-full">
								As a local business, we value our customers and the trust they
								place in us. Our commitment to integrity, professionalism, and
								personalized service sets us apart, and we&apos;re proud to
								continue the legacy of excellence that has been passed down
								through generations.
							</p>
						</div>
					</SlideInFromLeft>
					<SlideInFromRight>
						<Image
							src="/bna-airport/castle-6.jpg"
							alt="image of 2 burton electrical vans on a jobsite"
							width={500}
							height={500}
							className="object-contain rounded-xl shadow-lg"
						/>
					</SlideInFromRight>
				</div>
			</CenterDiv>
		</Section>
	);
};

export default AboutUs;
