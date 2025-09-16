import React from "react";
import { Metadata } from "next";
import PageContainer from "@/components/PageContainer";
import PageHeading from "@/components/PageHeading";
import { baseKeywords, icon } from "@/data/seo";
import OurServices from "./components/OurServices";
import WhyChooseUs from "./components/WhyChooseUs";
import OurMission from "./components/OurMission";
import AboutUs from "./components/AboutUs";
import { FadeIn } from "@/components/motion/FadeIn";
import CenterDiv from "@/components/CenterDiv";
import { SlideInFromLeft } from "@/components/motion/SlideInFromLeft";

export const metadata: Metadata = {
	title: "About Us | Burton Electric LLC",
	description:
		"Burton Electric LLC is the top-rated electrical services company servicing Nashville, Brentwood, and Franklin.",
	icons: {
		icon: icon,
	},
	keywords: [...baseKeywords],
};

const pages = () => {
	return (
		<PageContainer>
			<SlideInFromLeft amount={0}>
				<CenterDiv>
					<PageHeading>
						<p>About</p>
						<span>Burton Electric LLC</span>
					</PageHeading>
				</CenterDiv>

				<AboutUs />

				<OurMission />

				<OurServices />

				<WhyChooseUs />
			</SlideInFromLeft>
		</PageContainer>
	);
};

export default pages;
