import CenterDiv from "@/components/CenterDiv";
import ContactUs from "@/components/ContactUs";
import H2 from "@/components/H2";
import { SlideInFromLeft } from "@/components/motion/SlideInFromLeft";
import PageContainer from "@/components/PageContainer";
import PageHeading from "@/components/PageHeading";
import Section from "@/components/Section";
import { baseKeywords, icon } from "@/data/seo";
import { LampCeilingIcon, Leaf, Lightbulb } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title:
		"Residential Ceiling Fan Installation Nashville, Brentwood, and Franklin | Burton Electric LLC",
	description:
		"Ceiling fans will all you to regulate the temperature in your home and keep you nice and cool. For effective installation service, give us a call at (615) 830-1111",
	icons: {
		icon: icon,
	},
	keywords: [
		"Residential Ceiling Fan Installation Services",
		"Residential Ceiling Fan Installation",
		"Brentwood Residential Ceiling Fan Installation",
		"Franklin Residential Ceiling Fan Installation",
		"Nashville Residential Ceiling Fan Installation",
		...baseKeywords,
	],
};

const pages = () => {
	return (
		<PageContainer>
			<SlideInFromLeft amount={0}>
				<CenterDiv>
					<PageHeading>
						<p>Residential Ceiling Fan Installation Services</p>
					</PageHeading>

					<Section my="sm" className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="space-y-6">
							<p>
								Whether you want a ceiling fan in your kitchen, bathroom,
								bedroom or even outdoors, it is almost always a smart
								investment. Ceiling fans aren&apos;t just an excellent piece of
								decor for any area of your home, they can also increase the
								energy efficiency and overall comfort of virtually any home in
								the area.
							</p>
							<p>
								With these benefits your home is waiting to reap, you are
								probably ready to rush to the store to grab yourself that
								brand-new ceiling fan you&apos;ve been thinking about buying,
								but we must ask you to be patient and get in touch with Burton
								Electric LLC first. Whether you want a ceiling fan with lights
								or without, a ceiling fan with remote controls or one for your
								outdoor space, you need to think about who is going to install
								it.
							</p>
						</div>
						<div className="space-y-6">
							<p>
								Installing a ceiling fan isn&apos;t as simple as climbing up on
								your ladder and plugging it in. You need an intimate
								understanding of how your home&apos;s electrical infrastructure
								works to successfully install a ceiling fan. Without an
								expertise in all things electrical, you won&apos;t be installing
								a ceiling fan so much as a fire hazard. Plus, there is a serious
								risk of injury when you do take the matter of installation in
								your own hands. Rather than put yourself and your home in danger
								over a new ceiling fan, give Burton Electric LLC a call.
							</p>
							<p>
								Burton Electric LLC&apos;s licensed and insured electricians
								have a ton of experience installing ceiling fans in homes all
								over the area. Our electricians can successfully install ceiling
								fans wherever you need them, even there is no existing wiring.
								We can run the ceiling fan wiring wherever it&apos;s needed.
								Regardless of size or style, our electricians have the expertise
								necessary to safely connect your new ceiling fan in a safe,
								efficient and affordable manner.
							</p>
							<p>
								To request a free quote on Burton Electric LLC&apos;s
								residential ceiling fan installation services, give us a call
								today.
							</p>
						</div>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>What A Ceiling Fan Can Do for Your Home</H2>
						<p>
							You probably don&apos;t realize how much good a professionally
							installed residential ceiling fan can do for your home. A few of
							the highlights include:
						</p>
						<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
							<li className="space-y-4">
								<div className="flex items-start gap-2">
									<Leaf size={32} className="shrink-0" />
									<span className="text-2xl font-medium">Energy Savings</span>
								</div>
								<p className="text-sm">
									In the winter, heated air rises and collects around the
									ceiling. Ceiling fans circulate the warm air and push it back
									down to where you are. In the summer, ceiling fans create a
									cool breeze to keep air circulating so that it does not become
									too damp or stagnant. When you let a ceiling fan redistribute
									the hot or cool air in your home, you are taking a significant
									amount of strain off your air conditioner and heater.
								</p>
							</li>
							<li className="space-y-4">
								<div className="flex items-start gap-2">
									<Lightbulb size={32} className="shrink-0" />
									<span className="text-2xl font-medium">Light Up a Room</span>
								</div>
								<p className="text-sm">
									While it&apos;s not totally necessary to get a ceiling fan
									with lights, they are always a great source of overhead
									lighting. So, if you want to save energy while changing up the
									ambiance of a certain room, just let us know and we&apos;ll
									take care of it.
								</p>
							</li>
							<li className="space-y-4">
								<div className="flex items-start gap-2">
									<LampCeilingIcon size={32} className="shrink-0" />
									<span className="text-2xl font-medium">Decoration</span>
								</div>
								<p className="text-sm">
									Want to draw guests&apos; eyes upward to make the room look
									larger? Ceiling fans of all shapes and sizes can do this for
									you.
								</p>
							</li>
						</ul>
					</Section>
				</CenterDiv>
			</SlideInFromLeft>
			<ContactUs
				desc="Call Burton Electric LLC today to get a free quote on our
						residential ceiling fan installation services."
			/>
		</PageContainer>
	);
};

export default pages;
