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
	title: "Nashville Solar Panel Services | Burton Electric LLC",
	description:
		"Solar panels are environmentally friendly and are a worthwhile investment for property owners in Nashville. Call Burton Electric LLC at (615) 830-1111",
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
					<Important>Nashville Solar Panel Services</Important>
				</H1>

				<Section spacing="small">
					<P>
						More and more Nashville homes and businesses are making the switch
						to solar energy. With the potential to save thousands of dollars,
						earn special tax credits and add value to your residential or
						commercial property all while doing your part to save the
						environment, there is no shortage of reasons why adding solar panels
						to your Nashville home or business could be a great decision. Of
						course, the only way to reap all the potential rewards of adding
						solar panels to your property is to make sure you work with licensed
						and insured electricians who have the technical know-how to make
						sure you are properly set up to be powered by the sun.
					</P>
					<P>
						If you have been thinking about making the switch to solar energy
						but haven&apos;t been able to figure out how you are going to
						install the solar panels your need, then get in touch with Burton
						Electric LLC. Burton Electric LLC is an electrical company based out
						of Nashville committed to staying atop all the advancements in all
						facets of electricity to better serve our community. As a result, we
						have felt a responsibility to learn the in&apos;s and out&apos;s of
						solar energy, as well as other forms of alternative energy.
					</P>
					<P>
						To get the installation of your solar panels started, all you have
						to do is give Burton Electric LLC a call and ask about our solar
						panel services.
					</P>
				</Section>

				<Section>
					<H2>How Do Solar Panels Work?</H2>
					<P>
						In the most basic terms, solar panels work like a giant net. They
						are placed somewhere on your residential or commercial property,
						normally the roof but they can be placed elsewhere depending on
						whether or not it gets adequate exposure to sunlight.
					</P>
					<P>
						Electricity requires a positive charge to flow. In the case of solar
						panels, this charge is created when sunlight comes in contact with
						the silicone and boron composition of the solar panels. The contact
						unsettles the electrons inside the solar panel and the
						electrons&apos; desire to return to their undisturbed state creates
						the energy. Once the electricity is created, it travels through an
						inverter into your home where it can be used as energy power to
						power electronics, lights and appliances.
					</P>
				</Section>

				<Section>
					<H2>How Can Solar Panels Save You Money?</H2>
					<P>
						This is the question Burton Electric LLC is asked most frequently by
						Nashville residents interested in making the switch to solar energy.
						It&apos;s a bit complicated, but it&apos;s worth it. First, you have
						to know how much you are currently spending on electricity every
						year.
					</P>
					<P>
						The average American household spends over{" "}
						<span className="font-bold">$1,400 a year</span> on electricity. If
						you are a business, you might be paying more. Electricity is
						generally quite volatile, over the past decade, national electricity
						costs have risen{" "}
						<span className="font-bold">2.2 percent every year</span>.
					</P>
					<P>
						Since the costs of solar energy are all up-front with the solar
						panel and system installation, offsetting your current expenses with
						solar energy could save you upwards of{" "}
						<span className="font-bold">$600 every year</span> on energy.
					</P>
					<P>
						That said, you can only hope to save if you get your solar panels
						professionally installed, which is why you should contact Burton
						Electric LLC today.
					</P>
				</Section>

				<ContactUs>
					<ContactTitle>Contact Burton Electric LLC Today!</ContactTitle>
					<ContactContent>
						For anything related to solar panels and solar energy in the
						Nashville area, get in touch with Burton Electric LLC today.
					</ContactContent>
				</ContactUs>
			</MainContainer>
			<Footer />
		</PageContainer>
	);
};

export default page;
