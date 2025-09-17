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
	title: "Electrician Nashville, Brentwood, and Franklin | Burton Electric LLC",
	description:
		"For safe, quality electrical work for your home or your commercial property, you can rely on Burton Electric LLC. Call us today at (615) 830-1111!",
	icons: {
		icon: icon,
	},
	keywords: [
		"Electrician",
		"Nashville Electrician",
		"Nashville Electrical Contractor",
		"Nashville Residential Electrician",
		...baseKeywords,
	],
};

const pages = () => {
	return (
		<PageContainer>
			<SlideInFromLeft amount={0}>
				<CenterDiv>
					<PageHeading>
						<p>Trusted and Professional Electricians</p>
					</PageHeading>

					<Section my="sm" className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="space-y-6">
							<p>
								When you need electrical work done on your residential or
								commercial property, the only person who should touch it is a
								licensed electrician. Of course, we understand that there are
								plenty temptations to pursue alternatives.
							</p>
							<p>
								The average person, whether they fall into the residential or
								commercial client categories, is typically under the impression
								that hiring an electrician is too expensive. As a result, they
								will try to fix or install their own wiring themselves. And if
								they aren&apos;t confident in their ability to do it themselves,
								they will choose to hire an unlicensed electrical contractor
								offering them a low price.
							</p>
							<p>
								Now, we understand why a home or business owner would always be
								interested in saving money, but when you consider the risks
								involved in doing it yourself or hiring an unlicensed
								electrician, is the low price really worth the risk? One of the
								first rules of gambling is never take a risk you can&apos;t
								afford to lose. And we are willing to bet that your residential
								or commercial property isn&apos;t something you can afford to
								lose. But you need to be prepared for that possibility whenever
								you are led astray by the promise of lower prices.
							</p>
						</div>
						<div className="space-y-6">
							<p>
								If something goes wrong with your DIY electrical project, there
								is a high probability of injury or damage to your property. And
								you can bet that your insurance company won&apos;t be too keen
								to pick up the bill when they find out the damage to your
								building and to yourself was completely self-inflicted and
								avoidable. So, if you like the price tag of doing it yourself,
								factor in hospital bills, the cost of fire restoration services
								and more before you go through with it.
							</p>
							<p>
								Furthermore, an unlicensed electrician doesn&apos;t have a
								license for a reason. Getting your electrical license is more
								than memorizing facts and passing an exam. It holds the
								electrician responsible and liable to penalties in the event of
								illegal, immoral or incompetent actions. Those who fail to
								obtain a license are denied for a good reason. Do you really
								want them working on your home or business?
							</p>
							<p>
								If you want to have confidence an electrical project once
								it&apos;s completed, you need to hire Burton Electric LLC&apos;s
								electricians. We are a full-service electrical contractor
								company that has been providing residential and commercial
								clients with expert, reliable electrical services for many
								years.
							</p>
							<p>
								We specialize in all types of electrical work. Just give us a
								call today, tell us what you need and one of our fully licensed
								and insured electricians will provide you with a free estimate.
							</p>
						</div>
					</Section>

					<Section my="sm" className="space-y-6">
						<H2>Residential and Commercial Electricians</H2>
						<p>
							One of the things that sets Burton Electric LLC apart from other
							electrical companies in the area is that we are equally
							comfortable working in residential and commercial settings. There
							is no job too big or too small for our expertise. After all, we
							would rather provide you with affordable, professional electrical
							services than see disaster strike your home or business.
						</p>
					</Section>
				</CenterDiv>
			</SlideInFromLeft>
			<ContactUs
				desc="For all your electrical needs, get in touch with Burton Electric LLC
						today."
			/>
		</PageContainer>
	);
};

export default pages;
