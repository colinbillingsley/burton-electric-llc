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
	title: "Nashville In-Floor Heating Services | Burton Electric LLC",
	description:
		"Burton Electric LLC's electrical contractors specialize in installing and repairing in floor heating in Nashville homes. Call (615) 830-1111",
	icons: {
		icon: icon,
	},
	keywords: [
		"Brentwood In-Floor Heating Services",
		"Nashville In-Floor Heating Services",
		"Franklin In-Floor Heating Services",
		"In-Floor Heating Services",
		...baseKeywords,
	],
};

const page = () => {
	return (
		<PageContainer>
			<SlideInFromLeft amount={0}>
				<CenterDiv>
					<PageHeading>
						<p>Nashville In-Floor Heating Services</p>
					</PageHeading>

					<Section my="sm" className="space-y-4">
						<p>
							If the thing you hate most about cold weather in Nashville is the
							feeling of your bare feet touching the cold floor first thing in
							the morning, then you might want to give in-floor heating some
							serious consideration. Also known as radiant floor heating, this
							luxurious home feature has been steadily rising in popularity.
						</p>
						<p>
							In fact, in-floor heating has become so popular that it&apos;s not
							just found in Nashville homes. Nashville businesses have also
							begun to adopt in-floor heating systems because it keeps employees
							and clients comfortable without creating drafts and blowing around
							allergens and pathogens that can diminish their wellness.
						</p>
						<p>
							If you are interested in adding an in-floor heating system to your
							Nashville home or business, give Burton Electric LLC a call today.
							We have been helping install and maintain these incredible and
							discrete sources of heat for many years and we are confident that
							our licensed and insured electricians can handle anything you need
							related to in-floor heating systems. Give us a call today to
							request a free estimate on the in-floor heating service you
							require.
						</p>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>Energy Efficient Heat</H2>
						<p>
							According to the US Department of Energy, radiant heat has a
							number of advantages over other forms of heat distribution. It is
							more efficient than baseboard heating and almost always more
							efficient than heating through ductwork because no energy is lost
							through the ducts.
						</p>
						<p>
							With in-floor heating, the heat is distributed uniformly over the
							entire surface of a floor. This ends up wasting significantly less
							heat since conventional heating systems see cold air drawn across
							the floor, sending it up to the ceiling, where it then falls and
							heats the room from the top down, creating drafts and allergens.
						</p>
						<p>
							So, if you are tired of paying for heat that you can&apos;t even
							enjoy to the fullest, making the switch to in-floor heating will
							be an investment that pays dividends for years to come.
						</p>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>Freedom of Design</H2>
						<p>
							If you have lived in a home or worked in an office that relied on
							conventional radiators for its heat, you have no doubt had to make
							concessions when it comes to your interior design ideas since
							there&apos;s no easy way of moving a radiator. When you invest in
							in-floor heating, you&apos;ll never face this problem again.
						</p>
						<p>
							With no radiators in the way to foil your grand home or business
							interior design plans, you can decorate your residential or
							commercial space exactly the way you want. No more compromises.
						</p>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>Safe and Comfortable</H2>
						<p>
							With underfloor heating, you never have to worry about sharp edges
							or hot surfaces of radiators coming in contact with younger family
							members in your home. It&apos;s safely tucked away out of reach.
						</p>
						<p>
							Plus, the air quality is much better for homes and businesses
							because there is no dust circling around the room, irritating
							allergies and respiratory systems for a more comfortable source of
							heat.
						</p>
					</Section>
				</CenterDiv>
			</SlideInFromLeft>
			<ContactUs
				desc="Adding in-floor heating is a complicated process, one that requires
						a trained and licensed electrical professional, so give Burton
						Electric LLC a call today to find out how we can get started on this
						amazing way to heat your home or business."
			/>
		</PageContainer>
	);
};

export default page;
