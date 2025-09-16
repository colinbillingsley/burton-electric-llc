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
	title: "Franklin Standby Generators | Burton Electric LLC",
	description:
		"You will have consistent, uninterrupted power for your home or business in Franklin with a standby generator. Call Burton Electric LLC today at (615) 830-1111",
	icons: {
		icon: icon,
	},
	keywords: [
		"Brentwood Standby Generators",
		"Nashville Standby Generators",
		"Franklin Standby Generators",
		"Standby Generators",
		...baseKeywords,
	],
};

const page = () => {
	return (
		<PageContainer>
			<SlideInFromLeft amount={0}>
				<CenterDiv>
					<PageHeading>
						<p>Franklin Standby Generators</p>
					</PageHeading>

					<Section my="sm" className="space-y-4">
						<p>
							Whenever harsh weather, faults at power stations and damages to
							electric transmission lines cause your Franklin home or business
							to lose power, don&apos;t you hate the helpless feeling that sinks
							in once you realize that this won&apos;t pass in just a couple of
							minutes? We rely on power to get through our days and in the event
							that you are forced to go without it for an extended period of
							time, how do you plan on getting by? Well, you won&apos;t have to
							rely on your survival instincts if you invest in a standby
							generator.
						</p>
						<p>
							You never know when a power outage will arise. If you don&apos;t
							want it to affect your home or business, then you need to be
							prepared with a backup power source and standby generators
							continue to be one of the best ways to have it when the main grid
							can&apos;t supply the power you need.
						</p>
						<p>
							If you want to invest in a standby generator for your Franklin
							home or business, then contact Burton Electric LLC today. We have
							been proud to install and maintain standby generators for homes
							and businesses all over the area for an affordable price. We know
							that our clients need their standby generators to be reliable,
							which is why they continue to seek us out for our services as one
							of the most reliable electrical companies in the area.
						</p>
						<p>
							To discuss what you&apos;ll need out of a standby generator, give
							Burton Electric LLC a call today.
						</p>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>How Do Standby Generators Work?</H2>
						<p>
							By and large, standby generators consists of two very important
							products: the standby generator itself and an automatic transfer
							switch. The two work together so that when your home or business
							loses power, it will only be a matter of seconds before the backup
							power takes over.
						</p>
						<p>
							Both the standby generator and the automatic transfer switch are
							professionally installed by members of Burton Electric LLC&apos;s
							skilled team to your building&apos;s existing wiring. The
							generator will sit constantly at the ready and when the system
							senses that there&apos;s been an interruption with the utility
							power flowing through your home or business, it takes over within
							seconds. And once the generator system senses utility power is
							back online, power is automatically transferred back to utility
							power and the standby generator shuts down until the next time
							it&apos;s needed.
						</p>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>Types of Standby Generators</H2>
						<p>
							Standby generators are largely divided into two categories:
							natural gas or liquid propane and diesel or gasoline.
						</p>
						<p>
							Standby generators that run on natural gas or liquid propane are
							connected directly to supply lines. These tend to be more
							efficient systems, but if the municipal gas supply lines become
							damaged during a natural disaster, the generator will not work.
						</p>
						<p>
							Diesel or gasoline generators might require the installation of a
							permanent fuel tank, but at least gasoline is typically easy to
							find.
						</p>
					</Section>
				</CenterDiv>
			</SlideInFromLeft>
			<ContactUs
				desc="For all your residential and commercial standby generator needs,
						look no further than Franklin's most trusted professionals at
						Burton Electric LLC."
			/>
		</PageContainer>
	);
};

export default page;
