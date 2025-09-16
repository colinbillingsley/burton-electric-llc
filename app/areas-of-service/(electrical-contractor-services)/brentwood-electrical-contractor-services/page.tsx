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
	title: "Brentwood Electrical Contractor Services | Burton Electric LLC",
	description:
		"Burton Electric LLC electrical contractor services will enhance the comfort of any Brentwood home or business. For installations or repair services, call (615) 830-1111 today!",
	icons: {
		icon: icon,
	},
	keywords: [
		"Brentwood Electrical Contractor Services",
		"Nashville Electrical Contractor Services",
		"Franklin Electrical Contractor Services",
		"Electrical Contractor Services",
		...baseKeywords,
	],
};

const page = () => {
	return (
		<PageContainer>
			<SlideInFromLeft amount={0}>
				<CenterDiv>
					<PageHeading>
						<p>Brentwood Electrical Contractor Services</p>
					</PageHeading>

					<Section my="sm" className="space-y-4">
						<H2>About Burton Electric LLC</H2>
						<p>
							There is no secret to running one of the top electrical
							contracting companies in Brentwood. Since we only work with
							professional electricians who have all the necessary knowledge and
							certifications to work on homes and commercial properties
							throughout the area, the rest comes from creating the right
							culture. At Burton Electric LLC, this means approaching every job
							with the right attitude and treating our clients with the utmost
							respect. We don&apos;t believe that a smile or an explanation
							should require extra effort from our representatives. Instead, it
							should be expected every time you give us a call.
						</p>
						<p>
							Speaking of giving us a call, we are available to assist you with
							all your residential and commercial electrical needs. On jobs big
							or small, you can always expect the same level of attention and
							professionalism. You depend on electricity to make your home as
							comfortable as possible. You depend on electricity to keep food on
							your table and your lights on at home, and so do your employees.
							We are very aware of the importance of prompt electrical services.
							Choosing Burton Electric LLC to provide your residential or
							commercial electrical services guarantees fast, quality work to
							get you up and running safely.
						</p>
						<p>
							For a free estimate on any one of our residential or commercial
							electrical services, give Burton Electric LLC a call today.
						</p>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>Residential and Commercial Electricians</H2>
						<p>
							Few Brentwood residents are aware that there are generally two
							categories of electrical contractors: residential and commercial
							electricians. The reason is because commercial electrical jobs are
							much more complex than residential ones.
						</p>
						<p>
							Whether it&apos;s an installation, repair or replacement,
							commercial jobs are typically far more complex because the energy
							demands are much higher than at a residential space. This
							isn&apos;t to suggest that residential jobs aren&apos;t complex,
							because they are. In fact, any time you interact with electricity
							can be hazardous if you haven&apos;t received the proper training.
						</p>
						<p>
							Lucky for you, our electricians have received the proper training.
							They are capable of servicing both your residential and commercial
							spaces. This means, no matter where you are, you only need to
							remember one name and number to get the best possible electrical
							services. Our goal in only working with electricians who had the
							versatility to do both was to make your life more convenient.
						</p>
						<p>
							So, whether you need some electrical work done at work or at home,
							you can count on Burton Electric LLC to get the job done. Give us
							a call today to receive a free estimate on our residential and
							commercial electrical services.
						</p>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>Transparency Is Our Calling Card</H2>
						<p>
							Working with contractors can make certain Brentwood home and
							business owners a little edgy because they aren&apos;t sure what
							they are paying for. You have every right to be suspicious of a
							contractor that can&apos;t account for how they have spent the
							last hour, which is why we are committed to transparency in all
							our activity. When we operate transparently, our clients see
							exactly what they&apos;re paying for, inspiring confidence in the
							service we provide them with.
						</p>
					</Section>
				</CenterDiv>
			</SlideInFromLeft>
			<ContactUs
				desc="For all your residential and commercial electrical needs, Burton
						Electric LLC is only a phone call away."
			/>
		</PageContainer>
	);
};

export default page;
