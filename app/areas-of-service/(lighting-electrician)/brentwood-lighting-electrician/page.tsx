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
	title: "Brentwood Lighting Electricians | Burton Electric LLC",
	description:
		"If you're looking for a lighting electrician in Brentwood whose work you can trust, call Burton Electric LLC at (615) 830-1111 today!",
	icons: {
		icon: "/burton-logo.png",
	},
	keywords: [
		"Brentwood Lighting Electricians",
		"Nashville Lighting Electricians",
		"Franklin Lighting Electricians",
		"Lighting Electricians",
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
					<Important>Brentwood Lighting Electricians</Important>
				</H1>

				<Section spacing="small">
					<P>
						Whether you have a residential or commercial property in the
						Brentwood area, its interior and exterior lighting is very
						important. It begins with proper installation planned by a team of
						qualified professionals. And when you choose Burton Electric LLC to
						conduct your residential or commercial lighting installations, you
						can always lean on our licensed and insured electricians whenever
						you require maintenance.
					</P>
					<P>
						When it comes to lighting services in the Brentwood area, you
						can&apos;t go wrong with Burton Electric LLC. Our lighting
						electricians are among the most qualified and experienced in the
						area. They can help you with anything related to incandescent,
						fluorescent, metal halide, high-pressure sodium, neon and LED
						lighting. Interior or exterior, residential or commercial,
						installations or maintenance, Burton Electric LLC&apos;s team of
						licensed and insured lighting electricians are eager to serve.
					</P>
					<P>
						Just call Burton Electric LLC today to request a free quote on our
						lighting electrician services.
					</P>
				</Section>

				<Section>
					<H2>Residential Lighting Electricians</H2>
					<P>
						One of the reasons Brentwood homeowners have come to trust Burton
						Electric LLC&apos;s electricians for all their residential lighting
						needs is thanks the amount of experience we have accrued over the
						years. The vast experience of residential lighting experience our
						electricians are able to draw from to help with your unique
						situation translates to prompt and lasting service.
					</P>
					<P>
						Whether you are looking to install track lighting, dimmer switches,
						recessed lighting, decorative lighting, lighting accents, LED
						lighting or new light switches, our electricians can help and make
						sure it works with your budget. We can also assist in designing your
						home&apos;s new electrical system as well as provide any necessary
						maintenance. Simply let us know if you what you hope to accomplish
						with the help of our residential lighting electricians and
						we&apos;ll put our best foot forward to make your residential
						lighting dreams come true.
					</P>
				</Section>

				<Section>
					<H2>Commercial Lighting Electricians</H2>
					<P>
						Whether your run an office complex, a hotel, a restaurant, a retail
						store, a warehouse or something in between, you must give careful
						consideration on how it&apos;s lit. Your commercial lighting system
						can affect how customers and clients perceive your business. It can
						affect how your employees perform. And if you are thinking about
						revamping how your Brentwood business is lit, then you absolutely
						need to speak with Burton Electric LLC as soon as possible.
					</P>
					<P>
						Staffed by full-service commercial lighting electricians, Burton
						Electric LLC can assist you with the design, installation and
						maintenance of your commercial lighting system. But best of all, we
						understand that no matter what you need from our commercial lighting
						electricians, it&apos;s our responsibility to provide you with quick
						and quality work.
					</P>
					<P>
						Whenever you have tradespeople completing projects in your place of
						business, you can&apos;t help but have your normal operations
						interrupted to accommodate the work. Our goal with all of our
						commercial clients is to keep these interruptions at a minimum. Your
						business shouldn&apos;t have to suffer because you have made a
						decision to reinvest in it.
					</P>
					<P>
						So, whenever you choose Burton Electric LLC as your commercial
						lighting provider, know that we&apos;ll work as quickly as possible
						without sacrificing quality.
					</P>
				</Section>

				<ContactUs>
					<ContactTitle>Contact Burton Electric LLC Today!</ContactTitle>
					<ContactContent>
						To work with the most experienced and trusted lighting electricians
						in the Brentwood area, call Burton Electric LLC today.
					</ContactContent>
				</ContactUs>
			</MainContainer>
			<Footer />
		</PageContainer>
	);
};

export default page;
