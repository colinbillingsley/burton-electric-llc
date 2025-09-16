import CenterDiv from "@/components/CenterDiv";
import { FadeIn } from "@/components/motion/FadeIn";
import PageContainer from "@/components/PageContainer";
import PageHeading from "@/components/PageHeading";
import { baseKeywords, icon } from "@/data/seo";
import { Metadata } from "next";
import React from "react";
import Services from "./components/Services";
import ComResServices from "./components/ComResServices";
import ContactUs from "@/components/ContactUs";

export const metadata: Metadata = {
	title:
		"Electrical Services Nashville, Franklin, Brentwood | Burton Electric LLC",
	description:
		"Burton Electric LLC's expert electricians provide effective, efficient electrical services in Nashville, Brentwood and Franklin",
	icons: {
		icon: icon,
	},
	keywords: [...baseKeywords],
};

const page = () => {
	return (
		<PageContainer>
			<FadeIn>
				<CenterDiv className="space-y-4">
					<PageHeading>
						<p>Our Services</p>
					</PageHeading>
					<p className="text-muted-foreground max-w-2xl">
						From residential repairs to complex commercial installations, Burton
						Electric LLC offers expert electrical solutions tailored to your
						needs.
					</p>
				</CenterDiv>
			</FadeIn>

			<ComResServices />

			<Services />

			<ContactUs />
		</PageContainer>
	);
};

export default page;
