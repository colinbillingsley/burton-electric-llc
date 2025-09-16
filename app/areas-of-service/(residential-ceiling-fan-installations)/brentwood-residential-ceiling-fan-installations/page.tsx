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
		"Brentwood Residential Ceiling Fan Installations | Burton Electric LLC",
	description:
		"Burton Electric LLC will correctly install a brand-new ceiling fan for your Brentwood home. Call (615) 830-1111 today",
	icons: {
		icon: icon,
	},
	keywords: [
		"Brentwood Residential Ceiling Fan Installations",
		"Nashville Residential Ceiling Fan Installations",
		"Franklin Residential Ceiling Fan Installations",
		"Residential Ceiling Fan Installations",
		...baseKeywords,
	],
};

const page = () => {
	return (
		<PageContainer>
			<SlideInFromLeft amount={0}>
				<CenterDiv>
					<PageHeading>
						<p>Brentwood Residential Ceiling Fan Installations</p>
					</PageHeading>

					<Section my="sm" className="space-y-4">
						<p>
							The popularity of ceiling fans continues to grow among Brentwood
							homeowners as word continues to spread about the dramatic,
							year-round energy savings they offer. In the summer, ceiling fans
							create cooling breezes to reduce the strain on air conditioners.
						</p>
						<p>
							The cooling effect ceiling fans can have on any given room is
							something you are certainly already aware of, but did you also
							know that they can be used to make your home more comfortable in
							even the harshest Brentwood winters? They can circulate the hot
							air to keep any room in your home warmer without putting any
							additional strain on your home&apos;s heating system. And when you
							aren&apos;t constantly fiddling with your home&apos;s thermostat,
							you should notice your monthly energy bills start to plateau.
						</p>
						<p>
							Of course, reaping the energy saving and comfort boosting benefits
							of a new ceiling fan isn&apos;t as simple as taking it out of the
							box and plugging it in. If you are planning on purchasing a new
							ceiling fan, make sure that you have a reliable, insured and
							licensed electrician on hand so that you can make sure it gets
							properly installed.
						</p>
						<p>
							Attempting to install a ceiling fan yourself is a risky
							proposition. Figuring out how to wire it in a safe way so that
							there is no risk of fires is next to impossible if you
							haven&apos;t received the proper training, but it&apos;s
							exponentially more difficult when you are up on a ladder with this
							cumbersome household feature. Sounds like a hazard waiting to
							happen, right? Rather than risk it, just call Burton Electric LLC.
						</p>
						<p>
							Burton Electric LLC has completed hundreds of residential ceiling
							fan installations over the years and we always approach it with
							the same commitment to excellence that has made us one of the top
							electrical companies in the Brentwood area. So, if you want to
							make sure that your home&apos;s new ceiling fan is properly
							installed, call up Burton Electric LLC and we&apos;ll provide you
							with a free quote.
						</p>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>Fast and Easy Installations With Burton Electric LLC</H2>
						<p>
							Installing a new ceiling fan yourself is something we could never
							recommend in good conscience because there are far too many risks
							associated with it. Installing a new ceiling fan is an easy task
							for our electricians, compared to some of the other things we get
							hired to do, thanks to the amount of experience we have.
						</p>

						<p>
							When you choose Burton Electric LLC to install your home&apos;s
							new ceiling fan, we promise to have your new ceiling fixture
							installed safely and securely. Best of all, Burton Electric LLC
							has a strict transparent pricing policy. So, whatever price you
							were quoted for our residential ceiling fan installation services,
							that is the price you are guaranteed to pay.
						</p>

						<p>
							Not only can we install your home&apos;s new ceiling fan in hardly
							no time at all, we can also remove faulty ceiling fans, lighting
							fixtures, chandeliers and track lighting if necessary. Whatever
							you need to get your new ceiling fan working, Burton Electric LLC
							is here to help.
						</p>
					</Section>
				</CenterDiv>
			</SlideInFromLeft>
			<ContactUs
				desc="To get the best electricians in the Brentwood area to install your
						ceiling fan, get in touch with Burton Electric LLC today."
			/>
		</PageContainer>
	);
};

export default page;
