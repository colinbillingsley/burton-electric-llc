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
	title: "Nashville Landscape Lighting Services | Burton Electric LLC",
	description:
		"Outdoor lighting will enhance your Nashville property's landscaping. Call Burton Electric LLC today at (615) 830-1111",
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
						<p>Nashville Landscape Lighting Services</p>
					</PageHeading>

					<Section my="sm" className="space-y-4">
						<p>
							You can never underestimate the value good landscape design can
							add to your property. Both commercial and residential properties
							in the Nashville area can boost their curb appeal and create a
							relaxing, outdoor space when they do, but what are you supposed to
							do once the sun goes down? After all you put in to creating the
							landscape, why should it go unappreciated in the dark when there
							are some many different landscape lighting options available.
						</p>
						<p>
							Path lights, spotlights, floodlights, deck lights, well light,
							post cap lights and more can all be integrated into your Nashville
							home or business&apos;s landscape design to give it more nuance,
							ambiance and depth. And with so many different landscape lighting
							options available, it is worth your while to consult with
							professionals who excel at the design, installation and
							maintenance of landscape lighting systems.
						</p>
						<p>
							For the last several years, Burton Electric LLC has been proud to
							help make residential and commercial landscapes in the Nashville
							area more beautiful and usable thanks to our landscape lighting
							expertise. We have designed and installed all types of landscape
							lighting across the area and we will be happy to provide you with
							the same efficient, detail-oriented and courteous service we are
							known for.
						</p>
						<p>
							To learn more about our landscape lighting services or request a
							free, no obligation estimate, give Burton Electric LLC a call
							today.
						</p>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>The Purpose of Landscape Lighting</H2>
						<p>
							Before you call Burton Electric LLC to inquire about our landscape
							lighting services, we should tell you that we can give you a more
							accurate estimate if you have an idea of what you hope to
							accomplish with your landscape lighting. The subsequent
							installation will be much smoother if there is a clear goal in
							place.
						</p>
						<p>
							So, what purpose do you want your landscape lighting to serve?
							Would you like a little mood lighting to make your new patio or
							backyard area a romantic place to sit once the sun goes down? Or
							is there a part of your commercial property that&apos;s a bit too
							dark and inviting to vandals and other miscreants and you need
							something to deter them?
						</p>
						<p>
							Your goals for your landscape lighting will be the big determining
							factor in how we proceed because, though we are the experts,
							Burton Electric LLC&apos;s biggest priority is and always will be
							customer satisfaction. When you have a clear goal in mind, we can
							get started on how to best achieve that goal. And even if you
							aren&apos;t exactly sure what you want out of your landscape
							lighting, Burton Electric LLC&apos;s experts are always available
							to suggest some options and brainstorm with you whenever you give
							us a call.
						</p>
						<p>
							Our knowledgeable, experienced, licensed and insured team of
							electricians have been helping make residential and commercial
							properties all over the Nashville area increase their value,
							security and functionality so give us a call today.
						</p>
					</Section>
				</CenterDiv>
			</SlideInFromLeft>
			<ContactUs
				desc="Professional outdoor lighting can make a huge impact on commercial
						and residential properties. To take advantage of these benefits, get
						in touch with Burton Electric LLC today to find out how we can help."
			/>
		</PageContainer>
	);
};

export default page;
