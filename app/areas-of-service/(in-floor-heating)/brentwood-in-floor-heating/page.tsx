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
	title: "Brentwood In-Floor Heating Services | Burton Electric LLC",
	description:
		"Burton Electric LLC's electrical contractors specialize in installing and repairing in floor heating in Brentwood homes. Call (615) 830-1111",
	icons: {
		icon: "/burton-logo.png",
	},
	keywords: [
		"Brentwood In-Floor Heating Services",
		"Nashville In-Floor Heating Services",
		"Franklin In-Floor Heating Services",
		"In-Floor Heating Services",
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
					<Important>Brentwood In-Floor Heating Services</Important>
				</H1>

				<Section spacing="small">
					<P>
						What do you look for in a heating system? Obviously, the ability to
						provide heat should be at the top of the list, but what other
						criteria are you looking for? Is energy efficiency a priority? Would
						a heating system that made a lot of noise disqualify it from the
						running? How about a heating system that doesn&apos;t aggravate your
						dust allergies? Or what about a heating system that doesn&apos;t
						take extra space for no reason?
					</P>
					<P>
						If you have been searching for a heating system that is energy
						efficient, quiet, easy on allergies and doesn&apos;t take up space,
						then you have come to the right place be in-floor heating is all of
						these things. This amazing type of heating can be installed
						underneath any type of floor finish. Whether your Brentwood home or
						business has wood, linoleum, tile or some other type of flooring,
						heating cables can be installed underneath and keep your warm.
					</P>
					<P>
						In-floor heating isn&apos;t something you can install in your
						Brentwood home or business yourself in an afternoon. It requires the
						attention of trained professionals. So, if you want to have
						consistent, efficient underfoot, get in touch with Burton Electric
						LLC today.
					</P>
					<P>
						Burton Electric LLC&apos;s licensed and insured electricians have
						successfully installed radiant floor heating in homes and businesses
						all over the area to very satisfied customers. If you would like a
						free estimate on our in-floor heating services, just give us a call
						and a member of our team will be happy to assist you.
					</P>
				</Section>

				<Section>
					<H2>Installing In-Floor Heating</H2>
					<P>
						Normally, the best time to install in-floor heating is when you are
						building a home or commercial building from scratch, or you are
						remodeling and redoing as a part of the project. This is because
						in-floor heating needs to be placed underneath your flooring of
						choice, as the name suggests.
					</P>
					<P>
						Consisting of thin heating cables integrated into a plastic mat,
						in-floor heating covers the floor space of any given room between
						the subfloor and the floor covering of your choice. When the cables
						are turned on, they work like an electric blanket to warm up the
						floor.
					</P>
					<P>
						When Burton Electric LLC&apos;s electricians are tasked with
						installing in-floor heating, they start by measuring the room and
						making a sketch to determine where the heated cables will be placed
						in the room. Once we have a plan in place as to where the cables
						need to go, we install a cement backer board over the subfloor, just
						like with any flooring job, and secure the mats to the cement board.
					</P>
					<P>
						Once it&apos;s in place, we run power to the heated floor and
						connect the thermostat to the floor cable, so you&apos;ll have full
						control of your floor heating. And just like that, you&apos;ll have
						an efficient, clean and reliable way of keeping your Brentwood home
						or business comfortable.
					</P>
				</Section>

				<ContactUs>
					<ContactTitle>Contact Burton Electric LLC Today!</ContactTitle>
					<ContactContent>
						In-floor heating is a smart investment for any home or business
						owner in the area. Once you have it, you won&apos;t be able to
						imagine life without it. So, give Burton Electric LLC a call today
						to get your free estimate today.
					</ContactContent>
				</ContactUs>
			</MainContainer>
			<Footer />
		</PageContainer>
	);
};

export default page;
