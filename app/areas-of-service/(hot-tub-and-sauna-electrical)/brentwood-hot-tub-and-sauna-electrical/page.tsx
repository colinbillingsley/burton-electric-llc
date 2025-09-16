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
		"Brentwood Hot Tub and Sauna Electrical Services | Burton Electric LLC",
	description:
		"Burton Electric LLC has the skills and expertise to correctly install the electrical systems for any hot tub or sauna in Brentwood",
	icons: {
		icon: icon,
	},
	keywords: [
		"Brentwood Hot Tub and Sauna Electrical Services",
		"Nashville Hot Tub and Sauna Electrical Services",
		"Franklin Hot Tub and Sauna Electrical Services",
		"Hot Tub and Sauna Electrical Services",
		...baseKeywords,
	],
};

const page = () => {
	return (
		<PageContainer>
			<SlideInFromLeft amount={0}>
				<CenterDiv>
					<PageHeading>
						<p>Brentwood Hot Tub and Sauna Electrical Services</p>
					</PageHeading>

					<Section my="sm" className="space-y-4">
						<p>
							Investing in a hot tub or sauna is a rarely a bad idea. If it
							works for your budget, adding either, or both, to your Brentwood
							home could not only increase the value of your residential
							property but also improve your overall health and quality of life.
							Hot tubs and saunas have been proven to reduce stress not only
							because of the physical relief the warm water and steamy
							atmospheres have been known to provide people suffering from aches
							and pains, but also because they create a soothing and calming
							environment where you can let your worries wash away. When your
							new hot tub or sauna starts easing muscle pain and improving your
							circulation, you&apos;ll wonder how you ever got by without a hot
							tub or sauna.
						</p>
						<p>
							Of course, the only way to make sure that you are reaping all the
							benefits offered by hot tubs and sauna is to get it installed by a
							licensed and insured electrical professional. Failing to do so
							means that you are more than likely going to have to deal with
							overloaded circuits, unreliable functionality of your hot tub or
							sauna and deep regrets for making the tough decision to reinvest
							in your wellbeing. Rather than deal with all these problems, just
							call Burton Electric LLC.
						</p>
						<p>
							Anyone in the Brentwood area looking to add a hot tub or sauna to
							their property needs to make sure that it&apos;s installed by a
							member of Burton Electric LLC&apos;s team. We have an extensive
							amount of experience providing all kinds of electrical support for
							hot tubs and saunas in local businesses and homes and guarantee
							that we make installation seamless and any repairs simple. So, no
							matter what state your hot tub or sauna is in, if it needs the
							touch of a local, affordable and courteous electrical
							professional, give Burton Electric LLC a call today.
						</p>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>
							Protect Your Property With Burton Electric LLC&apos;s Services
						</H2>
						<p>
							Even though certain makes and models of hot tubs and saunas are
							considered to be “plug-n-play,” it is never a bad idea to have one
							of Burton Electric LLC&apos;s electricians on-site to oversee the
							installation. Hot tubs and saunas, even if they are plug-n-play,
							often command a lot of electricity to function. When you forego
							getting one of our electricians to be there for the setup of your
							new hot tub or sauna, there is a high risk for electrical problems
							in the future.
						</p>
						<p>
							When a member of our team is able to make sure that your Brentwood
							home or business has the electrical infrastructure to power your
							new amenities, you won&apos;t have to worry about the system short
							circuiting, cutting short your time to unwind. The last thing you
							want is your new place of respite to cause you to worry about how
							your property functions and we can make sure nothing goes wrong
							thanks to our professional experience and expertise.
						</p>
					</Section>
				</CenterDiv>
			</SlideInFromLeft>
			<ContactUs
				desc="Whether you require electrical installations, repairs or upgrades to
						make sure your hot tub or sauna is working safely and correctly,
						give Burton Electric LLC a call today and we'll be happy to
						provide you with a free quote."
			/>
		</PageContainer>
	);
};

export default page;
