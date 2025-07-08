import ContactUs, {
	ContactContent,
	ContactTitle,
} from "@/app/components/ContactUs";
import Footer from "@/app/components/Footer";
import H1 from "@/app/components/H1";
import H2 from "@/app/components/H2";
import Important from "@/app/components/Important";
import MainContainer from "@/app/components/MainContainer";
import P from "@/app/components/P";
import PageContainer from "@/app/components/PageContainer";
import Section from "@/app/components/Section";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "Franklin Electrician | Burton Electric LLC",
	description:
		"Franklin residents rely on Burton Electric LLC for safe, efficient electrical work. Call (615) 830-1111 today.",
	icons: {
		icon: "/burton-logo.png",
	},
	keywords: [
		"Brentwood Electricians",
		"Nashville Electricians",
		"Franklin Electricians",
		"Electricians",
		"Nashville Electrician",
		"Nashville Electrical Contractor",
		"Nashville Residential Electrician",
		"Brentwood Electrician",
		"Brentwood Electrical Contractor",
		"Brentwood Residential Electrician",
		"Franklin Electrician",
		"Franklin Electrical Contractor",
		"Franklin Residential Electrician",
	],
};

const page = () => {
	return (
		<PageContainer>
			<MainContainer>
				<H1>
					<Important>Franklin Electricians</Important>
				</H1>

				<Section spacing="small">
					<P>
						There is more to hiring an electrician than their rates and
						availabilities. While these are certainly important factors to
						consider, you also need to think about your Franklin home or
						business&apos;s safety and being assured that whatever you have
						hired the electrician for, they have done the job right.
					</P>
					<P>
						A lot of Franklin residents are easily tempted to hand over the
						electrical work they need completed to unlicensed contractors who
						promise to complete any installations or repairs at half the cost.
						At face value, we totally understand why, in this economic climate,
						home and business owners would let themselves get led astray by the
						promise of a lower price. Everyone wants a good deal, but is it
						really such a good deal when you consider at what cost you are
						receiving this lower price?
					</P>
					<P>
						The reason an unlicensed electrical contractor can offer a lower
						price is because their work comes with no guarantees of correct
						procedures, no protective insurance or quality work. After all, you
						have to wonder whether getting the proper training and
						certifications is the only corner they&apos;ll cut. So, you may
						receive a low price for electrical services rendered, but what good
						is the money you saved if it&apos;s all going to go to expensive
						repairs when the electrical work provided does serious damage to
						your commercial or residential property?
					</P>
					<P>
						If you don&apos;t want to worry about fires, electric shocks and
						other safety hazards taking over your Franklin home or business
						because of inferior electrical work, give Burton Electric LLC a call
						today. Burton Electric LLC has been proud to provide homes and
						businesses all over Franklin with reliable and quality electrical
						services. Our entire team is made up of registered, licensed and
						insured electricians, which means you can be confident when you
						enlist our services. Our electricians have received the necessary
						training to conduct all types of residential and commercial
						electrical services and our safety track record is second to none in
						the area.
					</P>
					<P>
						Plus, Burton Electric LLC&apos;s electricians are available to work
						on residential and commercial jobs at an extremely affordable rate,
						negating the argument for choosing an unlicensed electrician. If you
						want to take advantage of qualified, trustworthy, insured and
						affordable professional electricians, get in touch with Burton
						Electric LLC today.
					</P>
				</Section>

				<Section>
					<H2>How Burton Electric LLC&apos;s Electricians Can Help</H2>
					<P>
						One of the reasons Burton Electric LLC&apos;s electricians are the
						top choice for anyone who needs electrical work done in the Franklin
						area is thanks to their professional versatility. Most electricians
						are only capable of serving either residential or commercial
						clients. Then, there are residential electricians who can only help
						you with wiring repairs and certain commercial electricians who can
						only help with the installation of electrical appliances. These
						specialties often make finding the electrician you need much harder
						than anticipated.
					</P>
					<P>
						Burton Electric LLC has always wanted to help as many people as
						possible, which is why our electricians can help with virtually any
						residential or commercial electrical job.
					</P>
				</Section>

				<ContactUs>
					<ContactTitle>Contact Burton Electric LLC Today!</ContactTitle>
					<ContactContent>
						For all your residential and commercial electrical needs, get the
						help from quality and reliable electricians when you contact Burton
						Electric LLC today.
					</ContactContent>
				</ContactUs>
			</MainContainer>
			<Footer />
		</PageContainer>
	);
};

export default page;
