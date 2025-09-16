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
		"Electrical Retrofitting Nashville, Brentwood, and Franklin | Burton Electric LLC",
	description:
		"Burton Electric LLC will retrofit your electrical system to make it more modern, safer and more efficient. Call us at (615) 830-1111! ",
	icons: {
		icon: icon,
	},
	keywords: [
		"Electrical Retrofitting",
		"Brentwood Electrical Retrofitting",
		"Franklin Electrical Retrofitting",
		"Nashville Electrical Retrofitting",
		...baseKeywords,
	],
};

const pages = () => {
	return (
		<PageContainer>
			<SlideInFromLeft amount={0}>
				<CenterDiv>
					<PageHeading>
						<p>Electrical Retrofitting Services</p>
					</PageHeading>

					<Section my="sm" className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="space-y-6">
							<p>
								Have you started to notice that your electricity utility bills
								have been steadily rising even though you haven&apos;t changed
								anything about your usage in your home or local business? If so,
								then you might be the perfect candidate for our electrical
								retrofitting services.
							</p>
							<p>
								Burton Electric LLC has been proud to serve residential and
								commercial clients in the area whenever their electrical assets
								have become out of date and obsolete. Obsolete lights, wires,
								panels, appliances, etc., can all contribute to rising utility
								bills because out of date electrical equipment isn&apos;t as
								efficient, especially when it has to keep up with the amp
								demands of modern technology.
							</p>
							<p>
								Practically anything that uses electricity in your home or
								business could be retrofitted so that it becomes more efficient.
								And while the prospect of all the savings you stand to see on
								your next energy bill is very exciting, we must remind you that
								it does take some time.
							</p>
						</div>
						<div className="space-y-6">
							<p>
								This can take some time depending on the size and layout of your
								home or business. It can take a long time only because our
								commercial and residential electricians are doing their very
								best to make sure there are no stones unturned. We need to make
								sure that we correctly identify the biggest energy wasters on
								your property so that we can effectively retrofit your
								electrical system.
							</p>
							<p>
								When you choose Burton Electric LLC to conduct an electrical
								retrofitting, everyone wins. You&apos;ll be all set to save
								money on electricity, you&apos;ll be making your home or
								business more environmentally friendly and we&apos;ll have yet
								another satisfied customer. To arrange for your electrical
								retrofitting consultation, call Burton Electric LLC today.
							</p>
						</div>
					</Section>

					<Section my="sm" className="space-y-6">
						<H2>How Does Electrical Retrofitting Work?</H2>
						<p>
							As we mentioned above, the first and most important step of an
							electrical retrofitting begins with an audit. Every inch of your
							home or business needs to be inspected by one of our expert
							residential or commercial electricians so that they can take note
							of everything obsolete piece that needs updating. Once we have
							completed the audit, we will provide you with a free quote on the
							retrofitting process. It&apos;s company policy to clearly explain
							every little cost included in the quote so that you know exactly
							what you are paying for.
						</p>
						<p>
							Once we get to work on the actual retrofitting process, we will
							replace everything piece of electrical equipment that has been
							deemed old and inefficient, which may include light fixtures, the
							wiring or electrical panels, for more energy efficient models. By
							the time we are done replacing any obsolete electrical equipment,
							your home or business will be more energy efficient than ever
							before and ready to save you a bunch of money in utilities every
							month.
						</p>
						<p>
							You won&apos;t believe the difference our electrical retrofitting
							can make, so give us a call today.
						</p>
					</Section>
				</CenterDiv>
			</SlideInFromLeft>
			<ContactUs
				desc="Get your commercial or residential property up to code when you
						contact Burton Electric LLC today."
			/>
		</PageContainer>
	);
};

export default pages;
