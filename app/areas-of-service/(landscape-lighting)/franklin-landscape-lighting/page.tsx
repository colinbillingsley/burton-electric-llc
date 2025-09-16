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
	title: "Franklin Landscape Lighting Services | Burton Electric LLC",
	description:
		"Outdoor lighting will enhance your Franklin property's landscaping. Call Burton Electric LLC today at (615) 830-1111",
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
						<p>Franklin Landscape Lighting Services</p>
					</PageHeading>

					<Section my="sm" className="space-y-4">
						<p>
							The sun should never set on Franklin&apos;s most beautiful
							landscapes. At least, that&apos;s what we believe at Burton
							Electric LLC. You invest time, money and energy to create a
							beautiful outdoor space perfect rest and relaxation at home and at
							work. So, why is this space only usable during the day?
							Shouldn&apos;t you be able to take advantage of it at all hours of
							the day? If you agree that you could be getting more use out of
							your residential or commercial landscape in the Franklin area,
							then you need to get in touch with Burton Electric LLC today.
						</p>
						<p>
							Burton Electric LLC is an electrical contracting firm that has
							specialized in the design, installation and maintenance of outdoor
							lighting systems for commercial and residential properties all
							over the Franklin area. As registered, licensed and insured
							electricians and general admirers of the natural world, we are
							always happy to lend our expertise to make your existing or soon
							to be completed landscape even more gorgeous thanks to proper
							lighting techniques.
						</p>
						<p>
							For a free estimate on landscape lighting services, get in touch
							with Burton Electric LLC today.
						</p>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>Landscape Lighting Design Ideas</H2>
						<p>
							Strong landscape lighting design always begins with considering
							how you intend to use your space. If you are interested in our
							residential outdoor lighting services, ask yourself if you are
							planning on doing a lot of entertaining in your back yard. If you
							are, you will most likely need good lighting on pathways, patios
							and decks on the property. Or do you simply want to see your home
							all lit up when you come home? If you are a commercial client,
							then you might be more interested in installing lights that serve
							the dual purposes of making the building beautiful and increasing
							its security.
						</p>
						<p>
							To stoke the fires of your creativity, here are some design ideas
							to consider.
						</p>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>Focal Points</H2>
						<p>
							Choosing one or two elements you want to highlight with lighting
							can influence the overall design of your lighting system. For
							example, if you have a tree or a fountain in your landscape, you
							may want to call extra attention to them, making them the focal
							points of your design.
						</p>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>Sense of Depth</H2>
						<p>
							Depth refers to the distance the viewer&apos;s gaze travels as
							they view the scene. When you adorn your walkways and flower beds
							with proper lighting, the viewer&apos;s gaze is encouraged to
							travel down the walkways, along the flower bed until they have
							taken it all in. This makes people feel like they are an active
							participant in your landscape and can do wonders for setting an
							unforgettable ambiance.
						</p>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>Cohesion and Balance</H2>
						<p>
							Ultimately, your lighting design must make visual sense to
							residents, guests and anyone who comes across the property. Areas
							of light and shadows need to feel synchronized and deliberate. If
							plants and structures are lit out of proportion, there will be no
							sense of intentionality, that the placement was haphazard,
							diminishing the curb appeal. Cohesion and balance take practice to
							master, which is why we are here to help.
						</p>
					</Section>
				</CenterDiv>
			</SlideInFromLeft>
			<ContactUs
				desc="For all your residential and commercial landscape lighting needs,
						Burton Electric LLC is only a phone call away."
			/>
		</PageContainer>
	);
};

export default page;
