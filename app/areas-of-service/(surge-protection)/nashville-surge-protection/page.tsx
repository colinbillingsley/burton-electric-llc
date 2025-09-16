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
	title: "Nashville Surge Protection Services | Burton Electric LLC",
	description:
		"Burton Electric LLC will install adequate surge protection for your Nashville property so your electrical devices are protected. Call (615) 830-1111 today!",
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
						<p>Nashville Surge Protection Services</p>
					</PageHeading>

					<Section my="sm" className="space-y-4">
						<p>
							There is electricity flowing throughout your Nashville home and
							business at all times. The standard designated flow of electricity
							is about 120 volts. Whenever there is an increase in voltage that
							substantially exceeds the 120 volts it&apos;s considered to be a
							power surge. Power surges are something you need to be aware of
							because you don&apos;t want it to be the reason your Nashville
							home or business burns down.
						</p>
						<p>
							Thankfully, Burton Electric LLC is here to help make sure that
							power surges don&apos;t pose a threat to your residential or
							commercial property and all the important electrical things like
							computers, phones, stereos, TVs, microwaves and more. For the most
							part, Nashville home and business owners think that the only
							protection they need against power surges lie in plugging in power
							strips. A surge above the designated level causes the surge
							protector to automatically redirect the extra electricity into the
							grounding wire attached to the outlet, which returns the voltage
							to the normal when using a power strip, but it doesn&apos;t offer
							the best protection.
						</p>
						<p>
							If you want to make sure that your home or business is protected
							against even the biggest power surges, then you need to call
							Burton Electric LLC today and ask for a free estimate on our surge
							protection services. For the last several years, Nashville home
							and business owners have trusted our team of licensed and insured
							electricians to provide the protection they need against power
							surges. Don&apos;t incur any unnecessary, completely avoidable
							losses when you invest in surge protection.
						</p>
						<p>
							Get your free estimate on these essential precautions when you
							give Burton Electric LLC a call today.
						</p>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>The Best Surge Protection in Nashville</H2>
						<p>
							If you want your home or business to be protected against surges,
							it requires a two-pronged approach. First, a whole-house
							suppressor to tame the big, dangerous power spikes and an
							individual surge suppressor for vulnerable appliances and
							electronic devices. Both types act like pressure-relief valves but
							for electricity.
						</p>
						<p>
							Whole-house suppressors are hard-wired to the service panel, which
							rarely takes our electricians longer than two hours to wire to the
							service panel. When the whole-house suppressor works in tandem
							with the surge protecting power strips around your home or
							business, you should be able to plug in your electronics with
							confidence that the wiring in the walls isn&apos;t going to
							overheat or fry your valuable electronics.
						</p>
						<p>
							When we are tasked with equipping a home or business with surge
							protection, we begin by thoroughly inspecting every inch of your
							electrical systems. By doing this, we are able to locate any
							current problems and provide maintenance to problem areas. When we
							find that your electrical system is vulnerable, or that the surge
							protector already in place is past its best before date, we will
							apply our many years of experience to provide a long lasting,
							affordable solution.
						</p>
						<p>
							So, if you want to be protected, get in touch with Burton Electric
							LLC today.
						</p>
					</Section>
				</CenterDiv>
			</SlideInFromLeft>
			<ContactUs
				desc="Power surges can cause thousands of dollars' worth of damage.
						Make sure you are protected and give us a call today."
			/>
		</PageContainer>
	);
};

export default page;
