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
	title: "Brentwood Electrical Retrofitting | Burton Electric LLC",
	description:
		"Burton Electric LLC's electrical retrofitting services improve the electrical systems of Brentwood properties. Call (615) 830-1111 today.",
	icons: {
		icon: icon,
	},
	keywords: [
		"Brentwood Electrical Retrofitting Services",
		"Nashville Electrical Retrofitting Services",
		"Franklin Electrical Retrofitting Services",
		"Electrical Retrofitting Services",
		...baseKeywords,
	],
};

const page = () => {
	return (
		<PageContainer>
			<SlideInFromLeft amount={0}>
				<CenterDiv>
					<PageHeading>
						<p>Brentwood Electrical Retrofitting Services</p>
					</PageHeading>

					<Section my="sm" className="space-y-4">
						<p>
							Is there anything Brentwood homes and businesses can do reduce
							their energy costs? High energy bills are a huge nuisance, but,
							luckily, there is something you can do about it that doesn&apos;t
							involve sacrificing your comfort. Depending on how old your
							building is, you might be overdue for an upgrade to your
							electrical infrastructure.
						</p>
						<p>
							In a process known as retrofitting, Burton Electric LLC&apos;s
							very skilled, licensed and insured electricians can make your home
							or business in the Brentwood area perform at peak energy
							efficiency. Say goodbye to inconsistent service and expensive
							bills when Burton Electric LLC&apos;s commercial and residential
							electricians provide this essential service.
						</p>
						<p>
							To schedule your electrical retrofitting consultation, call Burton
							Electric LLC today. Our primary goal is to provide our clients
							with impeccable, up to code and reliable service with transparent
							pricing. After you work with us, you will see why we are
							consistently one of the top-rated electrical companies in the
							Brentwood area.
						</p>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>How Does Electrical Retrofitting Work?</H2>
						<p>
							The first step in the retrofitting process, whether it be for a
							residential or commercial property, is to carefully inspect every
							inch of your home or business&apos;s electrical system. When one
							of our electricians has the chance to see your home or
							business&apos;s system up close, they can take note of anything
							that might need upgrading.
						</p>
						<p>
							Every electrical retrofitting job must begin with an inspection
							because every residential and commercial building has different
							needs and are in different states. By taking our time to identify
							deficient areas of your home or business&apos;s electrical
							infrastructure, we can provide you with an accurate quote for our
							electrical retrofitting work and you will see real savings once we
							are finished.
						</p>
						<p>
							An electrical retrofit might involve upgrading your home or
							business&apos;s electrical panel or perhaps some re-wiring. It
							could be as simple as switching your incandescent lighting for LED
							lighting. Our electricians are always coming up with innovative
							ways to make our clients&apos; buildings more energy efficient, so
							schedule your inspection today.
						</p>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>
							How Do I Know if my Home or Business Needs to be Retrofitted?
						</H2>
						<p>
							As we have mentioned above, the usual telltale sign that your
							commercial or residential building needs to be retrofit is how
							much energy you are using every month. Most people are under the
							impression that the convenience of their new devices come at the
							cost of high energy bills every month but that could be corrected
							with retrofitting the existing systems.
						</p>
						<p>
							Of course, high energy bills aren&apos;t the only sign that your
							home or business needs retrofitting. If your light flicker, your
							breakers constantly trip, your fuses blow regularly, or your panel
							box makes a crackling sound, these are typically symptomatic of an
							overloaded system. But the only way to be certain that your
							property is one of the many properties in the Brentwood area that
							can needs to be retrofitted is by scheduling an inspection with
							one of Burton Electric LLC&apos;s skilled electricians. So,
							contact us today.
						</p>
					</Section>
				</CenterDiv>
			</SlideInFromLeft>
			<ContactUs
				desc="You shouldn't have to pay extra for out-of-date electrical
						systems. Get them retrofitted by getting in touch with Burton
						Electric LLC today."
			/>
		</PageContainer>
	);
};

export default page;
