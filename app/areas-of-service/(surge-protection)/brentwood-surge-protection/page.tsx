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
	title: "Brentwood Surge Protection Services | Burton Electric LLC",
	description:
		"Burton Electric LLC will install adequate surge protection for your Brentwood property so your electrical devices are protected. Call (615) 830-1111 today!",
	icons: {
		icon: icon,
	},
	keywords: [
		"Brentwood Surge Protection Services",
		"Nashville Surge Protection Services",
		"Franklin Surge Protection Services",
		"Surge Protection Services",
		...baseKeywords,
	],
};

const page = () => {
	return (
		<PageContainer>
			<SlideInFromLeft amount={0}>
				<CenterDiv>
					<PageHeading>
						<p>Brentwood Surge Protection Services</p>
					</PageHeading>

					<Section my="sm" className="space-y-4">
						<p>
							For all the convenience electricity brings to our lives day in and
							day out, it is important to never forget that it can be a hazard.
							This is especially true if your Brentwood home or business
							experiences a sudden spike in voltage. A spike of this nature is
							known as a power surge and it can do all sorts of damage to your
							residential or commercial building as well as any electronics
							inside.
						</p>
						<p>
							A power surge, also known as a voltage surge or a transient
							voltage fluctuation, is a very brief spike in voltage. For the
							most part, power surges only last a millionth of a second and can
							vary from a few hundred volts to several thousands of volts. To
							put it in perspective, the voltage of the average electric current
							running through your home or businesses electrical system is
							approximate 120 volts.
						</p>
						<p>
							Power surges may vary in duration and magnitude, but even the most
							mild power surges have been known to do significant damage to
							buildings infrastructure and the electronic devices housed within
							them. So, rather than risk incurring thousands of dollars&apos;
							worth of damages, make the prudent decision and invest in Burton
							Electric LLC&apos;s surge protection services today.
						</p>
						<p>
							With Burton Electric LLC&apos;s team of experienced, licensed and
							insured electricians, we can take the necessary precautions to
							make sure your Brentwood home or business is protected from sudden
							bursts of power that could overload its wiring and the appliances
							inside. We have helped hundreds of people protect their property
							and possessions against devastating power surges, so give us a
							call today to get a free estimate on surge protection services.
						</p>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>What Causes Power Surges?</H2>
						<p>
							There are many different ways a power surge can occur. Electrical
							storms have been known to cause surges when they strike power
							lines. And while this might seem like the chances of this actually
							happening are slim, it happens enough that there are plenty of
							people in the Brentwood area kicking themselves for not investing
							in surge protection sooner.
						</p>
						<p>
							Aside from the thunderstorms, surges can also originate from your
							electrical utility supply company. These surges can be quite
							selective, affecting sometimes only one or sometimes several homes
							on the grid. Again, while you might not think that this will
							happen to you, it does happen and it&apos;s better to be safe than
							sorry.
						</p>
						<p>
							Small power surges are also created within your own home when
							larger appliances turn on and off. This is sometimes obvious
							because you can see the lights in the room dim, but then brighten
							up again when the appliance is switched off. The average home is
							hit with over 20 internal energy spikes in a single. So, you can
							either continue to try your luck with surge strips around your
							home, or you can take an extra precaution with Burton Electric
							LLC.
						</p>
						<p>
							What we&apos;ll do is install a main panel surge suppressor on the
							main electrical panel, which will absorb incoming spikes.
						</p>
					</Section>
				</CenterDiv>
			</SlideInFromLeft>
			<ContactUs
				desc="It's always better to be safe than sorry, which why you should
						contact Burton Electric LLC today to find out how our surge
						protection services can help protect your home or business."
			/>
		</PageContainer>
	);
};

export default page;
