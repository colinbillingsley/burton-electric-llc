import CenterDiv from "@/components/CenterDiv";
import ContactUs from "@/components/ContactUs";
import H2 from "@/components/H2";
import { SlideInFromLeft } from "@/components/motion/SlideInFromLeft";
import PageContainer from "@/components/PageContainer";
import PageHeading from "@/components/PageHeading";
import Section from "@/components/Section";
import { baseKeywords, icon } from "@/data/seo";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "Nashville Solar Panel Services | Burton Electric LLC",
	description:
		"Solar panels are environmentally friendly and are a worthwhile investment for property owners in Nashville. Call Burton Electric LLC at (615) 830-1111",
	icons: {
		icon: icon,
	},
	keywords: [
		"Brentwood Solar Panel Services",
		"Nashville Solar Panel Services",
		"Franklin Solar Panel Services",
		"Solar Panel Services",
		...baseKeywords,
	],
};

const page = () => {
	return (
		<PageContainer>
			<SlideInFromLeft amount={0}>
				<CenterDiv>
					<PageHeading>
						<p>Nashville Solar Panel Services</p>
					</PageHeading>

					<Section my="sm" className="space-y-4">
						<p>
							More and more Nashville homes and businesses are making the switch
							to solar energy. With the potential to save thousands of dollars,
							earn special tax credits and add value to your residential or
							commercial property all while doing your part to save the
							environment, there is no shortage of reasons why adding solar
							panels to your Nashville home or business could be a great
							decision. Of course, the only way to reap all the potential
							rewards of adding solar panels to your property is to make sure
							you work with licensed and insured electricians who have the
							technical know-how to make sure you are properly set up to be
							powered by the sun.
						</p>
						<p>
							If you have been thinking about making the switch to solar energy
							but haven&apos;t been able to figure out how you are going to
							install the solar panels your need, then get in touch with Burton
							Electric LLC. Burton Electric LLC is an electrical company based
							out of Nashville committed to staying atop all the advancements in
							all facets of electricity to better serve our community. As a
							result, we have felt a responsibility to learn the in&apos;s and
							out&apos;s of solar energy, as well as other forms of alternative
							energy.
						</p>
						<p>
							To get the installation of your solar panels started, all you have
							to do is give Burton Electric LLC a call and ask about our solar
							panel services.
						</p>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>How Do Solar Panels Work?</H2>
						<p>
							In the most basic terms, solar panels work like a giant net. They
							are placed somewhere on your residential or commercial property,
							normally the roof but they can be placed elsewhere depending on
							whether or not it gets adequate exposure to sunlight.
						</p>
						<p>
							Electricity requires a positive charge to flow. In the case of
							solar panels, this charge is created when sunlight comes in
							contact with the silicone and boron composition of the solar
							panels. The contact unsettles the electrons inside the solar panel
							and the electrons&apos; desire to return to their undisturbed
							state creates the energy. Once the electricity is created, it
							travels through an inverter into your home where it can be used as
							energy power to power electronics, lights and appliances.
						</p>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>How Can Solar Panels Save You Money?</H2>
						<p>
							This is the question Burton Electric LLC is asked most frequently
							by Nashville residents interested in making the switch to solar
							energy. It&apos;s a bit complicated, but it&apos;s worth it.
							First, you have to know how much you are currently spending on
							electricity every year.
						</p>
						<p>
							The average American household spends over{" "}
							<span className="font-bold">$1,400 a year</span> on electricity.
							If you are a business, you might be paying more. Electricity is
							generally quite volatile, over the past decade, national
							electricity costs have risen{" "}
							<span className="font-bold">2.2 percent every year</span>.
						</p>
						<p>
							Since the costs of solar energy are all up-front with the solar
							panel and system installation, offsetting your current expenses
							with solar energy could save you upwards of{" "}
							<span className="font-bold">$600 every year</span> on energy.
						</p>
						<p>
							That said, you can only hope to save if you get your solar panels
							professionally installed, which is why you should contact Burton
							Electric LLC today.
						</p>
					</Section>
				</CenterDiv>
			</SlideInFromLeft>
			<ContactUs
				desc="For anything related to solar panels and solar energy in the
						Nashville area, get in touch with Burton Electric LLC today."
			/>
		</PageContainer>
	);
};

export default page;
