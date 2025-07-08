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
	title: "Franklin Solar Panel Services | Burton Electric LLC",
	description:
		"Solar panels are environmentally friendly and are a worthwhile investment for property owners in Franklin. Call Burton Electric LLC at (615) 830-1111",
	icons: {
		icon: "/burton-logo.png",
	},
	keywords: [
		"Brentwood Solar Panel Services",
		"Nashville Solar Panel Services",
		"Franklin Solar Panel Services",
		"Solar Panel Services",
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
					<Important>Franklin Solar Panel Services</Important>
				</H1>

				<Section spacing="small">
					<P>
						Burton Electric LLC is proud to be at the forefront of homes and
						businesses all over the greater Franklin area making the switch to
						solar energy. Everyone has their own set of reasons for making the
						switch. Some clients are interested in reducing or eliminating their
						utility bills, some want protection against rising energy costs,
						some are looking to increase their property&apos;s value while some
						simply feel a responsibility to move forward with ways of powering
						their lives that don&apos;t hurt the environment and our planet.
					</P>
					<P>
						Whatever your reason for making the switch to solar energy, the key
						to realizing your new solar panels&apos; potential begins with a
						proper installation conducted by Burton Electric LLC&apos;s licensed
						and insured electricians. We were quick to accept that solar energy
						would someday become the norm, and now that it is rising in
						popularity, our team is able to offer high-quality solar panel
						installation services as well as any maintenance and repairs that
						you might need in the future.
					</P>
					<P>
						Making the switch to solar power will be one of the best decisions
						you ever make, provided that Burton Electric LLC is who you choose
						to install the solar panels and set up the system. For a free
						estimate on our solar panel services, get in touch with us today.
					</P>
				</Section>

				<Section>
					<H2>Are Solar Panels Right for You?</H2>
					<P>
						A lot of home and business owners interested in investing in solar
						panels often call Burton Electric LLC with the objective of finding
						out whether or not solar panels are right for their property.
						It&apos;s no secret that, depending of the size of system you hope
						to install, solar panels can be a big initial investment. Of course,
						you are guaranteed to make the money back in future energy savings
						and by how much value is added to your residential or commercial
						property. Still, home and business owners don&apos;t want to make
						the initial investment unless they are sure they will benefit, which
						is totally fair.
					</P>

					<P>
						Their biggest concern, typically, is that they feel that their home
						or business doesn&apos;t receive enough sunlight to make it worth
						their while. If this is something you have been wrestling with, you
						might be happy to learn that solar panels produce electricity from
						the photons present in natural daylight, rather than from the
						sunlight itself. This means that solar panels don&apos;t actually
						need to be installed in direct sunlight to work.
					</P>
					<P>
						Modern solar panels include all kinds of concentrators which use
						lenses and mirrors to maximize any light reaching their PV cells.
						So, whether your property is affected by a lot of shade or we run
						into a bad stretch of cloudy weather, you won&apos;t have to worry
						about being left high and dry without power.
					</P>
					<P>
						Yes, proper placement of the solar panels is still essential to
						making it a viable producer of electricity, but with the skilled
						team of solar panel experts on staff at Burton Electric LLC, it
						should be no problem for us to find the best place to maximize its
						potential.
					</P>
				</Section>

				<ContactUs>
					<ContactTitle>Contact Burton Electric LLC Today!</ContactTitle>
					<ContactContent>
						For anything related to solar panels and solar energy in the
						Franklin area, get in touch with Burton Electric LLC today.
					</ContactContent>
				</ContactUs>
			</MainContainer>
			<Footer />
		</PageContainer>
	);
};

export default page;
