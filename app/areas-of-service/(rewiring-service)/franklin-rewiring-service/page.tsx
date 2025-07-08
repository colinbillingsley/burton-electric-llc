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
	title: "Franklin Rewiring Services | Burton Electric LLC",
	description:
		"Burton Electric LLC are trusted for safe, efficient electrical rewiring in Franklin. Call us at (615) 830-1111 today!",
	icons: {
		icon: "/burton-logo.png",
	},
	keywords: [
		"Brentwood Rewiring Services",
		"Nashville Rewiring Services",
		"Franklin Rewiring Services",
		"Rewiring Services",
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
					<Important>Franklin Rewiring Services</Important>
				</H1>

				<Section spacing="small">
					<P>
						You may not think about your home or business&apos;s electrical
						wiring often, but it is something you should give more consideration
						to because if it goes unchecked for too long, major problems can
						arise. Most electrical fires start as a result of faulty wiring and
						since that&apos;s most certainly something you would not like to
						happen to your Franklin home or business, it&apos;s worth giving
						Burton Electric LLC a call.
					</P>
					<P>
						Burton Electric LLC and our team of licensed and insured
						electricians have been proud to help homes and businesses in
						Franklin rewire their buildings so that they can live and operate
						without fear of electrical fires or other hazards. We have been the
						first choice of any home or business in the area that needs rewiring
						services because we are proud to offer fast, reliable and quality
						service.
					</P>
					<P>
						Under no circumstances should you ever attempt to complete a
						rewiring job yourself or leave it to someone trying to pass
						themselves off as an unlicensed electrician. There is no shortage of
						people who think it&apos;s ok to look up a tutorial online and save
						themselves a couple of bucks. This won&apos;t cut it when it comes
						to a job as serious as rewiring. The Internet isn&apos;t a place
						where you can find qualified electrical instructions. Not only do
						electricians want to protect their profit margins, but they
						can&apos;t afford to be sued by someone who misinterpreted the
						information received from a tutorial. And besides, there&apos;s no
						way to explain the complexities of rewiring a home or business in a
						nine-minute clip.
					</P>
					<P>
						Make sure your Franklin home or business is rewired for maximum
						safety and efficiency when you call Burton Electric LLC today.
					</P>
				</Section>

				<Section>
					<H2>Signs it&apos;s Time for a Rewire</H2>
					<P>
						We get a significant number of clients calling Burton Electric LLC
						in panic because they don&apos;t know whether or not they are at
						risk because they don&apos;t know what they are looking for. And
						while we are grateful that they aren&apos;t taking a gung-ho
						approach, ripping open their walls to check for frayed or aluminum
						wires, there are a few telltale signs that you are due for a rewire.
					</P>
					<P>
						Frequently flickering or dimming lights are a common problem that
						arise when the building&apos;s wires are worn out. Same is true if
						they are constantly buzzing when they are turned on. Of course, this
						might be a problem with the fixtures or the lamps. Either way,
						it&apos;s worth getting one of Burton Electric LLC&apos;s certified
						electricians to take a look.
					</P>
					<P>
						Electric outlets are another thing to look at. They should never be
						hot to the touch, never buzz, never have char marks or be loose.
						These are warning signs of bad wiring inside or near the outlet.
						Additionally, if one or more of your outlets are dead, this should
						be a sign that it&apos;s time for a rewire.
					</P>
					<P>
						These are just a few of the more common signs that you need our
						rewiring services, but we are always available to assist you should
						you be concerned that there&apos;s faulty wiring in your home or
						business&apos;s walls.
					</P>
				</Section>

				<ContactUs>
					<ContactTitle>Contact Burton Electric LLC Today!</ContactTitle>
					<ContactContent>
						Burton Electric LLC has been providing Franklin homes and businesses
						with exceptional rewiring services for many years. Give us a call
						today as soon as you suspect there&apos;s a problem and we&apos;ll
						be happy to help.
					</ContactContent>
				</ContactUs>
			</MainContainer>
			<Footer />
		</PageContainer>
	);
};

export default page;
