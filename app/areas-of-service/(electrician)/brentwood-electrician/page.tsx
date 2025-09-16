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
	title: "Brentwood Electrician | Burton Electric LLC",
	description:
		"Brentwood residents rely on Burton Electric LLC for safe, efficient electrical work. Call (615) 830-1111 today.",
	icons: {
		icon: icon,
	},
	keywords: [
		"Brentwood Electricians",
		"Nashville Electricians",
		"Franklin Electricians",
		"Electricians",
		...baseKeywords,
	],
};

const page = () => {
	return (
		<PageContainer>
			<SlideInFromLeft amount={0}>
				<CenterDiv>
					<PageHeading>
						<p>Brentwood Electricians</p>
					</PageHeading>

					<Section my="sm" className="space-y-4">
						<p>
							Every home and business in the Brentwood area will need electrical
							repairs from time to time. And while it is always tempting to try
							and save yourself a couple of bucks by taking matters into your
							own hands, there is no electrical job you should do yourself. The
							only exception to this rule is if you are a trained and licensed
							electrician. But in the event that you are not an electrician, you
							need to do the responsible thing and hire a licensed and insured
							electrician to do the required work.
						</p>
						<p>
							Home and business owners who use unlicensed tradespeople to do
							electrical work risk catastrophic property damage, injury or even
							death. One of the biggest risks is fire as a result of faulty
							electrical systems and wiring. And if this happens, an unlicensed
							contractor likely won&apos;t have any insurance to pay for the
							damages to your property. This is the worst-case scenario, but you
							still might be in trouble if the home or business ever gets
							inspected. Rather than put yourself and Brentwood property at
							risk, make sure you are supported by the best, fully licensed
							electricians the area has to offer with Burton Electric LLC.
						</p>
						<p>
							When you choose Burton Electric LLC to complete the residential or
							commercial electrical work you need done, you are making a choice
							to work with the most reliable and efficient electricians in
							Brentwood. Since day one, our calling card has been providing
							exceptional service to residential and commercial clients. To have
							your electrical work completed with confidence and at an
							affordable rate, give Burton Electric LLC a call and get a free
							estimate on the electrical services you require.
						</p>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>The Difference Burton Electric LLC&apos;s Electricians Make</H2>
						<p>
							We can&apos;t reiterate enough that no matter how tempting it is
							to attempt to complete an electrical project yourself, doing so
							would be very irresponsible and dangerous. To make sure you
							don&apos;t act impulsively and do serious damage to your Brentwood
							home or business, here is the difference our electricians make.
						</p>
						<p>
							Safety on the job. Everyone knows that working with electricity
							can be dangerous if it&apos;s not approached with caution. Of
							course, when you don&apos;t have the proper expertise, how do you
							know what&apos;s a hazard and what isn&apos;t? Our electricians
							know the risks inside and out so that you don&apos;t have to worry
							about injury or damage to your property.
						</p>
						<p>
							Long-term safety. A haphazard, incorrect job can compromise your
							home or business, turning it into a giant safety concern complete
							with fires, electric shocks and other dangers. Our electricians
							know the best practices and you can be assured of quality, safe
							work long after the project is complete.
						</p>
						<p>
							Saving you money. Normally, when people think about hiring an
							electrician, they think of it as an expense. This is why so people
							gravitate to the DIY approach. Unfortunately, the DIY approach can
							end up being costlier than just hiring us for the get-go. If you
							make a mistake doing it yourself, not only could you be creating a
							hazard that has the potential of destroying your property, you
							might have to call us in any way to repair damage you have done,
							doubling the money you would have spent if you had just called us.
						</p>
					</Section>
				</CenterDiv>
			</SlideInFromLeft>
			<ContactUs
				desc="For reliable, quality service courtesy of licensed and insured
						electricians, contact Burton Electric LLC today."
			/>
		</PageContainer>
	);
};

export default page;
