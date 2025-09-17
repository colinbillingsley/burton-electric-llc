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
	title: "Franklin Residential Ceiling Fan Installations | Burton Electric LLC",
	description:
		"Burton Electric LLC will correctly install a brand-new ceiling fan for your Franklin home. Call (615) 830-1111 today",
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
						<p>Franklin Residential Ceiling Fan Installations</p>
					</PageHeading>

					<Section my="sm" className="space-y-4">
						<p>
							If you are dissatisfied with how much you are spending on energy
							every month and your Franklin home&apos;s lighting could use a
							slight makeover, then you might want to consider replacing it with
							a ceiling fan. Ceiling fans can provide excellent lighting for
							every room in your home while reducing your energy costs. Plus,
							depending on the style of ceiling fan you choose, it can add value
							to your home.
						</p>
						<p>
							Given all the good ceiling fans can provide to your Franklin home,
							you must be kicking yourself for not having one installed sooner.
							Well, better late than ever, especially when you choose Burton
							Electric LLC to complete your residential ceiling fan
							installation.
						</p>
						<p>
							Burton Electric LLC is an electrical company made up of trained,
							licensed and insured electricians that have completed hundreds of
							residential ceiling fan installations over the years. Thanks to
							our extensive experience completing these types of installations,
							our electricians are guaranteed to get it done faster, safer and
							at a better price than any other electrical company in the
							Franklin area.
						</p>
						<p>
							When you are ready to get more beautiful lighting, energy savings
							and exceptional decor added to your home in one fell swoop, get in
							touch with Burton Electric LLC.
						</p>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>Seasonal Benefits of Ceiling Fans</H2>
						<p>
							Normally, when people think about any time of fan, they think of
							it as a means of cooling down. And while your newly installed
							ceiling fan can certainly help circulate cool air throughout your
							home during warmer weather, you can also rotate the blades in the
							other direction to push warm air down. As you may already be aware
							of, heat rises. But when you have some force pushing the hot air
							down, it helps keep your rooms warmer throughout the winter
							season.
						</p>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>Endless Design Options</H2>
						<p>
							One of the reasons why residential ceiling fan installations can
							increase the value of your home is because they come in a ton of
							different designs. And best of all, there isn&apos;t a make, model
							or design of ceiling fan that we haven&apos;t successfully
							installed. So, if you find a residential ceiling fan that you
							absolutely fall in love with, you don&apos;t have to pause to
							consider whether it will end up collecting dust. We will take care
							with making sure it&apos;s compatible with your home&apos;s
							electrical infrastructure.
						</p>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>Here to Help</H2>
						<p>
							Obviously, when people call us up for our residential ceiling fan
							installation services, our licensed and insured electricians will
							be prepared to make sure it is correctly wired and safely secured.
							But our expertise goes far beyond just the installation of ceiling
							fans. When you have been installing ceiling fans for as long as we
							have, you can&apos;t help but pick up little kernels of wisdom
							along the way. So, no matter what questions you might have for us,
							please do not hesitate to ask us. Our goal is to provide any help
							we can, whenever we can.
						</p>
					</Section>
				</CenterDiv>
			</SlideInFromLeft>
			<ContactUs
				desc="For reliable and affordable residential ceiling fan installation
						services, give Burton Electric LLC a call to request a free quote."
			/>
		</PageContainer>
	);
};

export default page;
