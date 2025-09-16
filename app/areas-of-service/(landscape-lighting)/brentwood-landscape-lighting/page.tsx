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
	title: "Brentwood Landscape Lighting Services | Burton Electric LLC",
	description:
		"Outdoor lighting will enhance your Brentwood property's landscaping. Call Burton Electric LLC today at (615) 830-1111",
	icons: {
		icon: icon,
	},
	keywords: [
		"Brentwood Landscape Lighting Services",
		"Nashville Landscape Lighting Services",
		"Franklin Landscape Lighting Services",
		"Landscape Lighting Services",
		...baseKeywords,
	],
};

const page = () => {
	return (
		<PageContainer>
			<SlideInFromLeft amount={0}>
				<CenterDiv>
					<PageHeading>
						<p>Brentwood Landscape Lighting Services</p>
					</PageHeading>

					<Section my="sm" className="space-y-4">
						<p>
							Too many commercial and residential properties in the Brentwood
							aren&apos;t paying enough attention to their outdoor lighting
							situations. Some of them have spent small fortunes on their
							landscape designs and it is nothing short of a shame to see that
							these incredible designs with so much untapped potential.
							Landscape lighting is one of the most dramatic improvements you
							can make to a home or business&apos;s outdoor spaces regardless of
							size, shape or elevation.
						</p>
						<p>
							If your Brentwood home or business&apos;s landscape lighting
							leaves a lot to be desired, then correct it with the help of
							Burton Electric LLC. Burton Electric LLC has been helping
							commercial and residential increase their property&apos;s esthetic
							value, monetary value and security through superior craftsmanship
							and professional expertise. We take great pride in being able to
							accent and enhance a landscape in the area, whether it&apos;s an
							existing design or if we are partnered with one of the many
							skilled landscape professionals in the area.
						</p>
						<p>
							Thanks to our extensive experience installing outdoor lighting,
							Burton Electric LLC&apos;s electrical contractors can design,
							install and maintain landscape lighting systems of any size or
							style. Just let us know what you hope to accomplish with your
							outdoor lighting design and a member of our team will be glad to
							give you a free quote.
						</p>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>Why Install Landscape Lighting?</H2>
						<p>
							Unbeknownst to us, there are commercial and residential property
							owners in the Brentwood area that don&apos;t see the value of
							installing landscape lighting even though it&apos;s one of the
							best investments you&apos;ll ever make. Below are just a few
							reasons why you need to consider incorporating some lights into
							your landscape courtesy of the most qualified and experienced
							electricians in the area.
						</p>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>Ambiance and Entertainment</H2>
						<p>
							What&apos;s the point of having a backyard if you aren&apos;t
							doing any outdoor entertaining? When you add landscape lighting,
							you don&apos;t have to cut the festivities short. Illuminate
							pools, decks, outdoor kitchens, patios, recreational spaces and
							sitting areas so that you can enjoy them all even in the dark. The
							right lighting sets the tone for any occasion, so feel free to
							tell us what type of vibe you are going for and we will provide
							you with some options that we feel help you achieve it.
						</p>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>Improve Security</H2>
						<p>
							You know what deters unwanted intruders, vandals and other
							undesirable types from a residential or commercial property?
							Lights. Lighting your home or business will not prevent crime
							entirely, but statistics show that criminals are far less inclined
							to mess with a home or business that&apos;s properly lit.
						</p>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>Safety</H2>
						<p>
							When your residential or commercial property is properly lit, you
							can prevent any accidents. Landscapes can be tricky to navigate in
							the dark, especially if you aren&apos;t very familiar with it. By
							providing adequate lighting to anyone passing by or visiting, you
							can prevent any nasty falls down stairs or similar accidents.
						</p>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>Added Value</H2>
						<p>
							Landscape lighting makes your home or business stand out. By
							accenting the landscape&apos;s design and the building&apos;s
							architecture, the right lighting can add all kinds of value to
							your property.
						</p>
					</Section>
				</CenterDiv>
			</SlideInFromLeft>
			<ContactUs
				desc="For the top outdoor lighting services in the Brentwood area, get in
						touch with Burton Electric LLC today."
			/>
		</PageContainer>
	);
};

export default page;
