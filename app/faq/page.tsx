import CenterDiv from "@/components/CenterDiv";
import ContactUs from "@/components/ContactUs";
import { FadeIn } from "@/components/motion/FadeIn";
import PageContainer from "@/components/PageContainer";
import PageHeading from "@/components/PageHeading";
import { baseKeywords, icon } from "@/data/seo";
import { Metadata } from "next";
import React from "react";
import FAQS from "./components/FAQS";

export const metadata: Metadata = {
	title: "Frequently Asked Questions | Burton Electric LLC",
	description:
		"Here are some answers to electrical-related questions Burton Electric LLC frequently receives from Nashville, Brentwood and Franklin residents.",
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
						<span>General Electrican</span>
						<p>Frequently Asked Questions</p>
					</PageHeading>
					<span className="block text-muted-foreground max-w-2xl">
						Have questions about electrical systems, safety, or services? Here
						are answers to some of the most common questions people have about
						general electrical work.
					</span>
				</CenterDiv>
			</FadeIn>

			<FAQS />

			<ContactUs desc="Didn't see your question answered here? Please feel free to call Burton Electric LLC and ask your question directly to one of our licensed electricians." />
		</PageContainer>
	);
};

export default page;
