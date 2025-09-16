import CenterDiv from "@/components/CenterDiv";
import ContactUs from "@/components/ContactUs";
import H2 from "@/components/H2";
import { SlideInFromLeft } from "@/components/motion/SlideInFromLeft";
import PageContainer from "@/components/PageContainer";
import PageHeading from "@/components/PageHeading";
import Section from "@/components/Section";
import { baseKeywords, icon } from "@/data/seo";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Brentwood Lighting Installations | Burton Electric LLC",
	description:
		"Burton Electric LLC will ensure your Brentwood property's lighting system is installed correctly. Call us at (615) 830-1111 today!",
	icons: {
		icon: icon,
	},
	keywords: [
		"Brentwood Lighting Installations",
		"Nashville Lighting Installations",
		"Franklin Lighting Installations",
		"Lighting Installations",
		...baseKeywords,
	],
};

const page = () => {
	return (
		<PageContainer>
			<SlideInFromLeft amount={0}>
				<CenterDiv>
					<PageHeading>
						<p>Brentwood Lighting Installations</p>
					</PageHeading>

					<Section my="sm" className="space-y-4">
						<p>
							Lighting is an extremely important part of everyday life. It can
							have a significant impact on a person&apos;s mood and mindset
							while also impacting the design, functionality and atmosphere of
							commercial and residential spaces all over the Brentwood. Given
							the effect lighting can have on people and places, it blows our
							minds to see how certain properties in the area pay zero attention
							to it.
						</p>
						<p>
							Plenty of residential and commercial properties in the Brentwood
							area are guilty of not paying more attention to their lighting.
							Some of them are horrendously designed, making the lighting feel
							harsh or too cold. Others have merely let the advancements in
							lighting technology pass them by and are burning a ton of money
							every month on inefficient lighting systems. No matter what
							situation your residential or commercial building is in, if you
							are ready to invest in new lighting, you are going to need to hire
							a Brentwood electrician to make sure that the new lights are
							safely installed.
						</p>
						<p>
							Burton Electric LLC&apos;s fully licensed and insured electricians
							have been completing all sorts of residential and commercial
							lighting installations for many years. Not only can we ensure that
							your new lighting is installed safely, we can make sure it&apos;s
							working at maximum efficiency for a price that works for your
							budget. Burton Electric LLC doesn&apos;t believe impeccable
							electrical services should cost you your arm and your leg. So, if
							you are interested in new lighting for your Brentwood home or
							business, call Burton Electric LLC today and request a free
							estimate on our installation services.
						</p>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>Residential Lighting Installation Services</H2>
						<p>
							A residential lighting installation is one of the most
							cost-effective ways to improve your home&apos;s environment.
							It&apos;s incredible what new fixtures, new dimmer switches or a
							change up of your lighting scheme can do to transform your home.
							From ambient and task lights to accent your interior&apos;s
							esthetics to motion sensor security lights added to your
							home&apos;s exterior for improved security, Burton Electric
							LLC&apos;s electricians have an incredible amount of installation
							experience they can draw on to accomplish any goals you hope to
							attain with your home&apos;s new lighting.
						</p>
						<p>
							Whether this is a home improvement project or your brand-new home
							needs quality lighting, look no further than Burton Electric LLC.
							Our electricians&apos; experience, creativity and dedication at an
							affordable rate makes them the obvious choice for whatever you
							need to make your home even more comfortable and beautiful.
						</p>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>Commercial Lighting Installation Services</H2>
						<p>
							Have you ever taken a minute to consider how your lighting might
							be affecting employee morale? And how about the effect your
							lighting is having on clients&apos; perceptions of your business?
							Or what about how much of your profits get slashed by expensive
							energy bills?
						</p>
						<p>
							Installing an esthetically pleasing, efficient commercial lighting
							system could change the way you do business. Our electricians have
							completed all sorts of commercial lighting installations, so if
							you would like to discuss some lighting ideas with one of our
							professionals, please go ahead and contact us today.
						</p>
					</Section>
				</CenterDiv>
			</SlideInFromLeft>
			<ContactUs
				desc="Whenever you need new lighting installed in the Brentwood area,
						Burton Electric LLC's expertise and experience are always
						available to you at an unbeatable rate."
			/>
		</PageContainer>
	);
};

export default page;
