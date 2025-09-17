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
	title: "Nashville Appliance Installation | Burton Electric LLC",
	description:
		"If you would like a new appliance installed for your Nashville home or business, call Burton Electric LLC today! (615) 830-1111",
	icons: {
		icon: icon,
	},
	keywords: [
		"Brentwood Appliance Installation",
		"Nashville Appliance Installation",
		"Franklin Appliance Installation",
		...baseKeywords,
	],
};

const page = () => {
	return (
		<PageContainer>
			<SlideInFromLeft amount={0}>
				<CenterDiv>
					<PageHeading>
						<p>Nashville Appliance Installation</p>
					</PageHeading>

					<Section my="sm" className="space-y-4">
						<p>
							If you are building something new or redoing your existing home or
							business in the Nashville area, you will eventually need to make
							sure your essential appliances are correctly installed by a
							licensed and insured electrician. The average household appliance
							demands a lot of energy and if even the slightest thing is off, it
							can wreak havoc on your home&apos;s whole system. When it comes to
							commercial or industrial grade refrigerators, freezers, washing
							machines, etc., it is even more important to make sure that these
							key pieces of equipment are working well.
						</p>
						<p>
							When you let a professional handle the installation of your
							household or commercial appliances, you spare yourself any
							potential hazards that could damage the appliance or cause injury.
							Some people aren&apos;t aware of the fact that there is more to
							appliance installation than moving it into its desired place and
							plugging it in. For example, installing a new stove requires a
							specific electrical hook up, not a regular type A plug. Plus, if
							you aren&apos;t compliant with the regulations and codes of
							Nashville, there could be consequences down the line.
						</p>
						<p>
							Rather than put yourself in harm&apos;s way, trust Burton Electric
							LLC&apos;s team of experts to complete any appliance installations
							you need. Burton Electric LLC has become known around the
							Nashville area for our excellent appliance installation services
							in recent years. Combining comprehensive knowledge of all
							residential and commercial appliances and a dedication to
							exceptional customer service, it&apos;s no wonder we are the first
							choice of home and business owners who need help installing
							appliances.
						</p>
						<p>
							For a free estimate on our appliance installation services, give
							us a call today.
						</p>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>Home Appliance Installation</H2>
						<p>
							When you have been installing appliances in Nashville for as long
							as some of Burton Electric LLC&apos;s electricians, there is
							practically nothing we haven&apos;t seen before. Our experience is
							one of our biggest assets because we are very familiar with all
							major brands of household appliances. Whether it&apos;s a new
							refrigerator, oven, washer, dryer, dishwasher or something else,
							we are confident we will be able to provide the proper
							installation at an affordable rate.
						</p>
						<p>
							Just give us a call today and let us know the make and model of
							the appliance you need installed. From there, we&apos;ll be able
							to provide you with a free estimate on our home appliance
							installation.
						</p>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>Commercial Appliance Installation</H2>
						<p>
							If a commercial appliance isn&apos;t working at maximum
							efficiency, it can do some serious damage to a local business.
							Making sure your commercial appliances are working correctly
							begins with proper installation conducted by a trained and
							licensed professional. Whether you rely on the appliances as a key
							part of your operations or it&apos;s just to enhance the quality
							of the working environment, you can&apos;t afford to waste money
							on malfunctioning or inefficient appliances, which is why you
							should contact Burton Electric LLC to book our commercial
							appliance installation services.
						</p>
					</Section>
				</CenterDiv>
			</SlideInFromLeft>
			<ContactUs
				desc="To make sure your new appliances are receiving the power they need
						to last, give Burton Electric LLC a call today and let a trained
						professional handle its installation."
			/>
		</PageContainer>
	);
};

export default page;
