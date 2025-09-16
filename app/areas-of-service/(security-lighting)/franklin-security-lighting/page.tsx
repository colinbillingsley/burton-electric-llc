import CenterDiv from "@/components/CenterDiv";
import ContactUs from "@/components/ContactUs";
import H2 from "@/components/H2";
import { SlideInFromLeft } from "@/components/motion/SlideInFromLeft";
import PageContainer from "@/components/PageContainer";
import PageHeading from "@/components/PageHeading";
import Section from "@/components/Section";
import { baseKeywords, icon } from "@/data/seo";
import { Eye, Flashlight, ShieldAlert } from "lucide-react";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "Franklin Security Lighting Services | Burton Electric LLC",
	description:
		"Outdoor lighting will improve your Franklin's security. Call Burton Electric LLC today at (615) 830-1111",
	icons: {
		icon: icon,
	},
	keywords: [
		"Brentwood Security Lighting Services",
		"Nashville Security Lighting Services",
		"Franklin Security Lighting Services",
		"Security Lighting Services",
		...baseKeywords,
	],
};

const ICONSIZE: number = 42;
const STROKEWIDTH: number = 1.5;

const page = () => {
	return (
		<PageContainer>
			<SlideInFromLeft amount={0}>
				<CenterDiv>
					<PageHeading>
						<p>Franklin Security Lighting Services</p>
					</PageHeading>

					<Section my="sm" className="space-y-4">
						<p>
							Artificial light makes our day-to-day functions much easier, but
							it can serve another very important purpose: it can protect you
							from harm. Light has proven time and time again to be a major
							deterrent to crime. That&apos;s why it is so important for
							Franklin home and business owners to invest in security lighting
							for their property.
						</p>
						<p>
							Security lighting can help increase the safety of a Franklin
							commercial or residential property in three ways:
						</p>

						<div className="grid lg:grid-cols-3 gap-4 my-10">
							<div className="p-4 space-y-4 border-2 border-muted bg-white shadow-md rounded-sm">
								<ShieldAlert
									size={ICONSIZE}
									strokeWidth={STROKEWIDTH}
									className="shrink-0"
								/>
								<p className="text-2xl font-medium">Deterring crime</p>
								<p className="text-muted-foreground text-sm">
									Most people believe that where there&apos;s light, someone
									must be there using it. And they might be watching, ready to
									dial 911.
								</p>
							</div>
							<div className="p-4 space-y-4 border-2 border-muted bg-white shadow-md rounded-sm">
								<Eye
									size={ICONSIZE}
									strokeWidth={STROKEWIDTH}
									className="shrink-0"
								/>
								<p className="text-2xl font-medium">Detecting crime</p>
								<p className="text-muted-foreground text-sm">
									In a well-lit area, it is difficult not to notice someone
									breaking a window or picking a lock. Lighting makes detection
									much easier.
								</p>
							</div>
							<div className="p-4 space-y-4 border-2 border-muted bg-white shadow-md rounded-sm">
								<Flashlight
									size={ICONSIZE}
									strokeWidth={STROKEWIDTH}
									className="shrink-0"
								/>
								<p className="text-2xl font-medium">Preventing concealment</p>
								<p className="text-muted-foreground text-sm">
									Proper security lighting takes away shadows where someone
									could hide. Without a place to hide when the heat arrives,
									perpetrators are far less likely to take this kind of risk
									because they have a higher chance of getting caught.
								</p>
							</div>
						</div>

						<p>
							If these are qualities you would like your Franklin home or
							business to have, call Burton Electric LLC today. We have been
							installing security lighting systems to all kinds of buildings in
							the area, providing additional security and peace of mind at an
							affordable price. For a free estimate on our security lighting
							services, give us a call today.
						</p>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>Getting the Most Out of Your Security Lighting</H2>
						<p>
							By far, the best way to make sure that your residential or
							commercial property is getting the most out of its security
							lighting system is to get it installed by Burton Electric
							LLC&apos;s electricians. Our electricians are certified, insured
							and take a great deal of pride in the quality of their work. When
							we install security lights, we understand that you are depending
							on our work to keep your home or business secure, which is why we
							are meticulous in making sure that everything works and will work
							for years to come.
						</p>
						<p>
							Aside from our technical abilities to make sure the security
							lights are properly installed, we can also assist you with:
						</p>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>Positioning and Placement</H2>
						<p>
							To get the most out of your security lightings, you need to make
							sure that vulnerable areas are being illuminated. When you acquire
							our installation services, we can schedule a time for one of our
							experts to identify blind spots so that there are none when
							it&apos;s time for the installation.
						</p>
						<p>
							The biggest mistake people make when installing security lights is
							thinking that they can just use a few really bright lights to
							deter burglars. Unfortunately, a really bright light casts a lot
							of shadows, which ultimately make your home or business more
							appealing to intruders. This is where our experience comes in
							handy.
						</p>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>Maintenance</H2>
						<p>
							If you ever have a problem with your security lighting, our
							electricians are only a phone call away to come fix the issue. We
							take so much pride in our work that we can&apos;t stand the
							thought of something not working, which is why we are so quick to
							provide the necessary maintenance.
						</p>
					</Section>
				</CenterDiv>
			</SlideInFromLeft>
			<ContactUs
				desc="Increase the security of your home or business and call Burton
						Electric LLC today about our security lighting services."
			/>
		</PageContainer>
	);
};

export default page;
