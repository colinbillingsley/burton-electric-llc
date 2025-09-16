import CenterDiv from "@/components/CenterDiv";
import H2 from "@/components/H2";
import { SlideInFromLeft } from "@/components/motion/SlideInFromLeft";
import { SlideInFromRight } from "@/components/motion/SlideInFromRight";
import Section from "@/components/Section";
import Image from "next/image";
import React from "react";

const OurMission = () => {
	return (
		<Section className="py-18 lg:py-18">
			<CenterDiv>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center md:place-items-start">
					<SlideInFromLeft className="order-2 md:order-1">
						<Image
							src="/burton-logo-dark.png"
							alt="image of burton electric logo"
							width={500}
							height={500}
							className="object-contain"
						/>
					</SlideInFromLeft>
					<SlideInFromRight className="space-y-2 order-1 md:order-2">
						<H2>Our Mission</H2>
						<div className="space-y-8">
							<p className="w-full">
								At Burton Electric, our mission is to provide commercial and
								residential clients with cutting-edge electrical solutions that
								prioritize safety, efficiency, and reliability. We strive to
								help businesses stay powered, productive, and compliant,
								offering services that meet the highest standards of quality and
								professionalism.
							</p>
						</div>
					</SlideInFromRight>
				</div>
			</CenterDiv>
		</Section>
	);
};

export default OurMission;
