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
		"In-Floor Heating Nashville, Brentwood, and Franklin | Burton Electric LLC",
	description:
		"Electrical in-floor heating is a great way to keep your home or business warm and cozy. Call Burton Electric LLC at (615) 830-1111 today!",
	icons: {
		icon: icon,
	},
	keywords: [
		...baseKeywords,
		"In-Floor Heating",
		"Nashville In-Floor Heating",
		"Brentwood In-Floor Heating",
		"Franklin In-Floor Heating",
	],
};

const pages = () => {
	return (
		<PageContainer>
			<SlideInFromLeft amount={0}>
				<CenterDiv>
					<PageHeading>
						<p>In-Floor Heating Services</p>
					</PageHeading>

					<Section my="sm" className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<p>
							There&apos;s no question that there&apos;s nothing worse than
							setting foot on an ice-cold floor first thing in the morning. If
							you have had too many days ruined by insufficient heat where you
							need it most, then you might be interested to know that, with
							Burton Electric LLC&apos;s help, your floor could become the heat
							source for your whole home or business.
						</p>

						<p>
							In-floor heating continues to rise in popularity for reasons that
							will be made abundantly clear below. If by the end of this page
							you are convinced that you need in-floor heating in your home or
							business, just give Burton Electric LLC a call and we will be
							happy to give you a free estimate.
						</p>
					</Section>

					<Section
						my="sm"
						className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8"
					>
						<div className="space-y-4">
							<H2>Energy Efficient</H2>
							<p>
								Underfloor heating uses a lower temperature than standard
								residential or commercial radiators and baseboards. Since the
								electric cords underneath your floorboards or tiles don&apos;t
								need to get so hot, they use less energy to provide comfortable
								heat.
							</p>
							<p>
								And since the heat source is spread throughout the floor, it is
								more evenly distributed and provides significantly higher levels
								of comfort. HVAC heating systems and radiators are prone to
								leaving homes and businesses with cold spots and drafts. These
								will become a distant memory when you get in touch with Burton
								Electric LLC and let our licensed and insured electricians
								install this energy efficient and effective way of heating your
								home or business.
							</p>
						</div>

						<div className="space-y-4">
							<H2>Design Freedom</H2>
							<p>
								For all of our clients who fancy themselves amateur interior
								designers, how many times have your floor plans been up-ended by
								heat vents, ducts, radiators or baseboards in the way? It&apos;s
								infuriating when you have to improvise and find a new place to
								put the new couch on the fly or go back to the drawing board
								altogether. The good news is that if you make the switch to
								in-floor heating, you won&apos;t have to make compromises
								between how you want your home or business to look and whether
								or not it receives adequate heat.
							</p>
							<p>
								There are no heat vents, no ducts, no pipes and no mechanical
								room when you opt for in-floor heating. It&apos;s all contained
								neatly between the subfloor and the floor. So, if you want
								complete freedom when you are decorating or remodeling, the best
								way to achieve it is by getting in touch with Burton Electric
								LLC today.
							</p>
						</div>

						<div className="space-y-4 col-span-full">
							<H2>Improved Health and Safety</H2>
							<p>
								Because radiant in-floor heating systems don&apos;t rely on
								ductwork to distribute the heat they produce, you don&apos;t
								have to worry about humidity and air circulation. Why would you
								be worried about humidity and air circulation? Because these
								contribute to the circulation of dust mites and other allergens
								diminishing your indoor air quality. If you suffer from asthma,
								allergies or other respiratory issues, this is a great option.
							</p>
							<p>
								Plus, if you have young children at home or provide care to them
								as a part of your business, in-floor heating doesn&apos;t rely
								on hard metal edges making it the child-friendly system.
							</p>
						</div>
					</Section>
				</CenterDiv>
				<ContactUs desc="If you want to get this incredible heating system installed in your home or business, give Burton Electric LLC a call today." />
			</SlideInFromLeft>
		</PageContainer>
	);
};

export default pages;
