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
	title: "Franklin Solar Panel Services | Burton Electric LLC",
	description:
		"Solar panels are environmentally friendly and are a worthwhile investment for property owners in Franklin. Call Burton Electric LLC at (615) 830-1111",
	icons: {
		icon: icon,
	},
	keywords: [
		"Brentwood Solar Panel Services",
		"Nashville Solar Panel Services",
		"Franklin Solar Panel Services",
		"Solar Panel Services",
		...baseKeywords,
	],
};

const page = () => {
	return (
		<PageContainer>
			<SlideInFromLeft amount={0}>
				<CenterDiv>
					<PageHeading>
						<p>Franklin Solar Panel Services</p>
					</PageHeading>

					<Section my="sm" className="space-y-4">
						<p>
							Burton Electric LLC is proud to be at the forefront of homes and
							businesses all over the greater Franklin area making the switch to
							solar energy. Everyone has their own set of reasons for making the
							switch. Some clients are interested in reducing or eliminating
							their utility bills, some want protection against rising energy
							costs, some are looking to increase their property&apos;s value
							while some simply feel a responsibility to move forward with ways
							of powering their lives that don&apos;t hurt the environment and
							our planet.
						</p>
						<p>
							Whatever your reason for making the switch to solar energy, the
							key to realizing your new solar panels&apos; potential begins with
							a proper installation conducted by Burton Electric LLC&apos;s
							licensed and insured electricians. We were quick to accept that
							solar energy would someday become the norm, and now that it is
							rising in popularity, our team is able to offer high-quality solar
							panel installation services as well as any maintenance and repairs
							that you might need in the future.
						</p>
						<p>
							Making the switch to solar power will be one of the best decisions
							you ever make, provided that Burton Electric LLC is who you choose
							to install the solar panels and set up the system. For a free
							estimate on our solar panel services, get in touch with us today.
						</p>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>Are Solar Panels Right for You?</H2>
						<p>
							A lot of home and business owners interested in investing in solar
							panels often call Burton Electric LLC with the objective of
							finding out whether or not solar panels are right for their
							property. It&apos;s no secret that, depending of the size of
							system you hope to install, solar panels can be a big initial
							investment. Of course, you are guaranteed to make the money back
							in future energy savings and by how much value is added to your
							residential or commercial property. Still, home and business
							owners don&apos;t want to make the initial investment unless they
							are sure they will benefit, which is totally fair.
						</p>

						<p>
							Their biggest concern, typically, is that they feel that their
							home or business doesn&apos;t receive enough sunlight to make it
							worth their while. If this is something you have been wrestling
							with, you might be happy to learn that solar panels produce
							electricity from the photons present in natural daylight, rather
							than from the sunlight itself. This means that solar panels
							don&apos;t actually need to be installed in direct sunlight to
							work.
						</p>
						<p>
							Modern solar panels include all kinds of concentrators which use
							lenses and mirrors to maximize any light reaching their PV cells.
							So, whether your property is affected by a lot of shade or we run
							into a bad stretch of cloudy weather, you won&apos;t have to worry
							about being left high and dry without power.
						</p>
						<p>
							Yes, proper placement of the solar panels is still essential to
							making it a viable producer of electricity, but with the skilled
							team of solar panel experts on staff at Burton Electric LLC, it
							should be no problem for us to find the best place to maximize its
							potential.
						</p>
					</Section>
				</CenterDiv>
			</SlideInFromLeft>
			<ContactUs
				desc="For anything related to solar panels and solar energy in the
						Franklin area, get in touch with Burton Electric LLC today."
			/>
		</PageContainer>
	);
};

export default page;
