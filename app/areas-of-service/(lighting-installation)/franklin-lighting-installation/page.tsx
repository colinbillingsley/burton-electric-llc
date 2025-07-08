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
import { BsLightningChargeFill } from "react-icons/bs";

export const metadata: Metadata = {
	title: "Franklin Lighting Installations | Burton Electric LLC",
	description:
		"Burton Electric LLC will ensure your Franklin property's lighting system is installed correctly. Call us at (615) 830-1111 today!",
	icons: {
		icon: "/burton-logo.png",
	},
	keywords: [
		"Brentwood Lighting Installations",
		"Nashville Lighting Installations",
		"Franklin Lighting Installations",
		"Lighting Installations",
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

const installedLighting: string[] = [
	"Recessed lighting",
	"Landscape lighting",
	"Track lighting",
	"Kitchen lighting",
	"Deck lighting",
	"Bathroom lighting",
	"Retail store lighting",
	"Restaurant lighting",
	"Chandeliers",
	"Pot lighting",
	"New lighting fixtures",
];

const page = () => {
	return (
		<PageContainer>
			<MainContainer>
				<H1>
					<Important>Franklin Lighting Installations</Important>
				</H1>

				<Section spacing="small">
					<P>
						Lighting is an important piece of the interior and exterior design
						puzzle. Residential and commercial properties need to give careful
						consideration to how they are lit. If you intend for a room to be
						cozy or if you want it to be as productive as possible, proper
						lighting is what sets the tone.
					</P>
					<P>
						When you have decided it&apos;s time to redo your Franklin home or
						business&apos;s lighting, or you need a system installed from
						scratch in your new structure, make sure you hire Burton Electric
						LLC to complete the installation. Burton Electric LLC has been proud
						to serve the Franklin area for many years, providing quality
						workmanship and courteous service on every job.
					</P>
					<P>
						Burton Electric LLC has consistently been one of the top companies
						in Franklin for lighting installations because we guarantee fast,
						friendly and professional electrical services. All of our lighting
						installations are by the book, up-to-code and as energy efficient as
						possible. Plus, with our transparent pricing policy, why would you
						choose another electrical company to complete your residential or
						commercial lighting installation?
					</P>
					<P>To request a free estimate, feel free to give us a call today.</P>
				</Section>

				<Section>
					<H2>Lighting We Install</H2>
					<P>
						Thanks to our team&apos;s extensive experience installing lights for
						residential and commercial clients all over the area, there is no
						install too big or too small. We are familiar with all types of
						interior and exterior commercial and residential lighting,
						including:
					</P>
					<ul className="space-y-4">
						{installedLighting.map((light, index) => (
							<li key={`light-${index}`} className="flex items-center gap-2">
								<BsLightningChargeFill
									size={15}
									className="shrink-0 text-primary"
								/>
								<P className="font-medium">{light}</P>
							</li>
						))}
					</ul>
					<P>
						If you don&apos;t have your heart set on the type of lighting you
						would like installed, please feel free to contact Burton Electric
						LLC to discuss some ideas. With all of our knowledge of these types
						of jobs, it would be a shame for it to go to waste. So, give us a
						call even if you are still only weighing your options.
					</P>
				</Section>

				<Section>
					<H2>Converting to Energy Efficient Lighting</H2>
					<P>
						How old is your home or the building your business is housed in? If
						it&apos;s on the older side, ask yourself when was the last time the
						lighting was redone. If you can&apos;t place it, then you might be
						overdue for a conversion to energy efficient lighting.
					</P>
					<P>
						Lighting technology has made leaps and bounds over the years and
						contemporary lights&apos; energy efficiency puts their predecessors
						to shame. If you haven&apos;t already made the switch to energy
						efficient lighting and you are fed up with a massive electric bill
						every month, then you might want to give us a call.
					</P>
					<P>
						Burton Electric LLC can remove your out-of-date lighting system and
						install brand-new energy efficient lights that will save you money
						in the future. Plus, installing new lights is a cost-effective way
						of giving a residential or commercial space a new lease on life. So,
						give us a call today to request a free estimate.
					</P>
				</Section>

				<ContactUs>
					<ContactTitle>Contact Burton Electric LLC Today!</ContactTitle>
					<ContactContent>
						Franklin&apos;s top-rated and most trusted electrical professionals
						are waiting to install new lighting in your home or business. Just
						contact Burton Electric LLC and we&apos;ll take care of the rest.
					</ContactContent>
				</ContactUs>
			</MainContainer>
			<Footer />
		</PageContainer>
	);
};

export default page;
