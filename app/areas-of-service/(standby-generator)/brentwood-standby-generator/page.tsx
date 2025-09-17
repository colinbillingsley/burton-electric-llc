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
	title: "Brentwood Standby Generators | Burton Electric LLC",
	description:
		"You will have consistent, uninterrupted power for your home or business in Brentwood with a standby generator. Call Burton Electric LLC today at (615) 830-1111",
	icons: {
		icon: icon,
	},
	keywords: [
		"Brentwood Standby Generators",
		"Nashville Standby Generators",
		"Franklin Standby Generators",
		"Standby Generators",
		"Nashville Electrician",
		...baseKeywords,
	],
};

const page = () => {
	return (
		<PageContainer>
			<SlideInFromLeft amount={0}>
				<CenterDiv>
					<PageHeading>
						<p>Brentwood Standby Generators</p>
					</PageHeading>

					<Section my="sm" className="space-y-4">
						<p>
							What are you supposed to do when the power goes out in the
							Brentwood area? Most home and business owners in the area are
							content to wait it out and hope that it won&apos;t last longer
							than a few minutes. Of course, there is always the possibility
							that the power stays off for several days. In the event that we
							experience a prolonged power outage, how prepared are you to be
							without power?
						</p>
						<p>
							While you might want to run off to the supermarket to stock up on
							non-perishable food now that we&apos;ve got you thinking about
							what you&apos;ll do if the Brentwood area loses power for an
							extended period of time, there&apos;s more to worry about the food
							in your refrigerator spoiling. How will communicate with friends
							and family once your phone is out of batteries? Will your home or
							business be secure if the security system is down for a few days?
						</p>
						<p>
							If you don&apos;t want to feel totally helpless in the event of a
							blackout then getting in touch with Burton Electric LLC is worth
							your while. Burton Electric LLC&apos;s licensed and insured
							electricians have helped more Brentwood residences and businesses
							be equipped to handle any duration of power outage with our
							standby generator services. When you give us a call today, we can
							work out the needs of your residential or commercial
							building&apos;s electrical needs so that there&apos;s a safety net
							to catch you and whoever else is occupying the premises.
						</p>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>Standby Generator Installations</H2>
						<p>
							Installing a standby generator is a job for professional
							electricians. It doesn&apos;t matter how experienced you are, you
							could void the warranty of your brand-new generator or sow the
							seeds of future hazardous malfunctions, like a natural gas leak
							for example. This is no doubt something you would like to avoid
							since the whole purpose of getting a standby generator is to keep
							your home and business safe.
						</p>
						<p>
							Rather than risk ruining your investment, let one of our
							electricians install your standby generator. 99 percent of our
							installation can be completed in a day, so you don&apos;t have to
							live with the stress of having an ongoing construction project in
							your home or disrupting the normal operations of your Brentwood
							business.
						</p>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>Standby Generator Maintenance and Repairs</H2>
						<p>
							The reason you invest in a standby generator is to make sure that
							you have power when you need it the most. Of course, like any
							piece of machinery, you don&apos;t want it to fail you when it is
							finally called upon, which is why it is essential to provide it
							with routine maintenance. By hiring our certified professionals to
							provide the necessary maintenance and conduct any repairs deemed
							necessary will be just the thing you need to proceed with
							confidence.
						</p>
						<p>
							If you have a residential or commercial generator and you
							can&apos;t remember the last time it received maintenance or
							repairs, give Burton Electric LLC a call today to have it
							inspected by our professionals.
						</p>
					</Section>
				</CenterDiv>
			</SlideInFromLeft>
			<ContactUs
				desc="Whenever you need reliable professionals to install, maintain or
						repair your home or business's standby generator, look no
						further than Burton Electric LLC."
			/>
		</PageContainer>
	);
};

export default page;
