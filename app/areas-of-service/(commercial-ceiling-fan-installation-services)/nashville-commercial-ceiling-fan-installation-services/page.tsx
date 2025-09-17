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
	title:
		"Nashville Commercial Ceiling Fan Installation Services | Burton Electric LLC",
	description:
		"Burton Electric LLC's expert electricians will effectively install a new ceiling fan for your Nashville business space. Call (615) 830-1111 today",
	icons: {
		icon: icon,
	},
	keywords: [
		"Brentwood Commercial Ceiling Fan Installations",
		"Nashville Commercial Ceiling Fan Installations",
		"Franklin Commercial Ceiling Fan Installations",
		"Commercial Ceiling Fan Installations",
		...baseKeywords,
	],
};

const page = () => {
	return (
		<PageContainer>
			<SlideInFromLeft amount={0}>
				<CenterDiv>
					<PageHeading>
						<p>Nashville Commercial Ceiling Fan Installations</p>
					</PageHeading>

					<Section my="sm" className="space-y-4">
						<p>
							One thing every business in the Nashville area needs to do to be
							successful is to be mindful of their operational costs. For
							example, if you are paying too much to heat and cool your business
							every month, you need to be proactive when it comes to finding a
							solution to lower these costs. When you do, you should find it
							much easier to reach your financial goals.
						</p>
						<p>
							If paying for heating and cooling has continually been an issue
							for your Nashville business, then you might be surprised to learn
							that there is a relatively easy solution to keep these costs down.
							All you have to do is call Burton Electric LLC and ask us about
							our commercial ceiling fan installation services.
						</p>
						<p>
							Commercial ceiling fans can serve a very important purpose beyond
							adding to your business&apos;s decor, though adding to your
							business&apos;s decor is an incredibly important purpose in of
							itself. Believe it or not, adding commercial ceiling fans to your
							business could really help reduce the energy you expend on a
							monthly basis.
						</p>
						<p>
							However, the only way you can expect a commercial ceiling fan to
							reduce your commercial energy costs is by making sure it has been
							safely installed one of Burton Electric LLC&apos;s trained,
							licensed and insured electricians. For the last several years,
							Burton Electric LLC&apos;s commercial electricians have been
							helping Nashville businesses with all their electrical needs,
							including commercial ceiling fan installations.
						</p>
						<p>
							To find out more about how a commercial ceiling fan installation
							can positively impact how your business runs, give Burton Electric
							LLC a call today.
						</p>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>Reduce Energy Costs With a Commercial Ceiling Fan</H2>
						<p>
							Though some commercial ceiling fans can really improve your
							business&apos;s interior design, most Nashville businesses are
							interested in getting them installed because of their ability to
							reduce energy costs. How so?
						</p>
						<p>
							During the summer, ceiling fans create air circulation that makes
							the indoor temperature feel cooler. The air current helps remove
							the heat, making them feel less hot and humid. Your air
							conditioner won&apos;t have to work nearly as hard to cool your
							place of business when you have ceiling fans assisting the
							distribution of cool air.
						</p>
						<p>
							And these energy saving benefits aren&apos;t limited to hot
							weather. When it&apos;s cold outside, you have to crank up the
							heat to stay comfortable. This can quickly cause your energy usage
							to spike, especially when you consider the fact that all the hot
							air produced by your business&apos;s heating system is collecting
							at the ceiling. When you have a commercial ceiling fan installed,
							you can reverse the direction of the blades to push the hot air
							down. By doing this, you take a lot of stress off your heater to
							generate more heat while the fans take care of making sure it is
							evenly redistributed.
						</p>
						<p>
							Of course, the only way to make sure that your commercial ceiling
							fans accomplish this feat is to get them installed by a trained
							professional. So, if you want to start saving money, get in touch
							with Burton Electric LLC today.
						</p>
					</Section>
				</CenterDiv>
			</SlideInFromLeft>
			<ContactUs
				desc="Whether you need your commercial ceiling fans installed ASAP or you
						require some professional advice before you make the investment, get
						in touch with Burton Electric LLC and we'll be happy to assist
						you in any way we can."
			/>
		</PageContainer>
	);
};

export default page;
