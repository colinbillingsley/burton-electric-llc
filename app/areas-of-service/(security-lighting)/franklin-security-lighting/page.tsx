import ContactUs, {
	ContactContent,
	ContactTitle,
} from "@/app/components/ContactUs";
import Footer from "@/app/components/Footer";
import H1 from "@/app/components/H1";
import H2 from "@/app/components/H2";
import Important from "@/app/components/Important";
import MainContainer from "@/app/components/MainContainer";
import P from "@/app/components/P";
import PageContainer from "@/app/components/PageContainer";
import Section from "@/app/components/Section";
import { Eye, Flashlight, ShieldAlert } from "lucide-react";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "Franklin Security Lighting Services | Burton Electric LLC",
	description:
		"Outdoor lighting will improve your Franklin's security. Call Burton Electric LLC today at (615) 830-1111",
	icons: {
		icon: "/burton-logo.png",
	},
	keywords: [
		"Brentwood Security Lighting Services",
		"Nashville Security Lighting Services",
		"Franklin Security Lighting Services",
		"Security Lighting Services",
		"Nashville Electrician",
		"Nashville Electrical Contractor",
		"Nashville Residential Electrician",
		"Brentwood Electrician",
		"Brentwood Electrical Contractor",
		"Brentwood Residential Electrician",
		"Franklin Electrician",
		"Franklin Electrical Contractor",
		"Franklin Residential Electrician",
	],
};

const ICONSIZE: number = 42;
const STROKEWIDTH: number = 1.5;

const page = () => {
	return (
		<PageContainer>
			<MainContainer>
				<H1>
					<Important>Franklin Security Lighting Services</Important>
				</H1>

				<Section spacing="small">
					<P>
						Artificial light makes our day-to-day functions much easier, but it
						can serve another very important purpose: it can protect you from
						harm. Light has proven time and time again to be a major deterrent
						to crime. That&apos;s why it is so important for Franklin home and
						business owners to invest in security lighting for their property.
					</P>
					<P>
						Security lighting can help increase the safety of a Franklin
						commercial or residential property in three ways:
					</P>

					<div className="grid lg:grid-cols-3 gap-4 my-10">
						<div className="p-4 space-y-4 border-2 border-muted bg-white shadow-md rounded-sm">
							<ShieldAlert
								size={ICONSIZE}
								strokeWidth={STROKEWIDTH}
								className="shrink-0"
							/>
							<P className="text-2xl font-medium">Deterring crime</P>
							<P className="text-muted-foreground">
								Most people believe that where there&apos;s light, someone must
								be there using it. And they might be watching, ready to dial
								911.
							</P>
						</div>
						<div className="p-4 space-y-4 border-2 border-muted bg-white shadow-md rounded-sm">
							<Eye
								size={ICONSIZE}
								strokeWidth={STROKEWIDTH}
								className="shrink-0"
							/>
							<P className="text-2xl font-medium">Detecting crime</P>
							<P className="text-muted-foreground">
								In a well-lit area, it is difficult not to notice someone
								breaking a window or picking a lock. Lighting makes detection
								much easier.
							</P>
						</div>
						<div className="p-4 space-y-4 border-2 border-muted bg-white shadow-md rounded-sm">
							<Flashlight
								size={ICONSIZE}
								strokeWidth={STROKEWIDTH}
								className="shrink-0"
							/>
							<P className="text-2xl font-medium">Preventing concealment</P>
							<P className="text-muted-foreground">
								Proper security lighting takes away shadows where someone could
								hide. Without a place to hide when the heat arrives,
								perpetrators are far less likely to take this kind of risk
								because they have a higher chance of getting caught.
							</P>
						</div>
					</div>

					<P>
						If these are qualities you would like your Franklin home or business
						to have, call Burton Electric LLC today. We have been installing
						security lighting systems to all kinds of buildings in the area,
						providing additional security and peace of mind at an affordable
						price. For a free estimate on our security lighting services, give
						us a call today.
					</P>
				</Section>

				<Section spacing="small">
					<H2>Getting the Most Out of Your Security Lighting</H2>
					<P>
						By far, the best way to make sure that your residential or
						commercial property is getting the most out of its security lighting
						system is to get it installed by Burton Electric LLC&apos;s
						electricians. Our electricians are certified, insured and take a
						great deal of pride in the quality of their work. When we install
						security lights, we understand that you are depending on our work to
						keep your home or business secure, which is why we are meticulous in
						making sure that everything works and will work for years to come.
					</P>
					<P>
						Aside from our technical abilities to make sure the security lights
						are properly installed, we can also assist you with:
					</P>
				</Section>

				<Section spacing="small">
					<H2>Positioning and Placement</H2>
					<P>
						To get the most out of your security lightings, you need to make
						sure that vulnerable areas are being illuminated. When you acquire
						our installation services, we can schedule a time for one of our
						experts to identify blind spots so that there are none when
						it&apos;s time for the installation.
					</P>
					<P>
						The biggest mistake people make when installing security lights is
						thinking that they can just use a few really bright lights to deter
						burglars. Unfortunately, a really bright light casts a lot of
						shadows, which ultimately make your home or business more appealing
						to intruders. This is where our experience comes in handy.
					</P>
				</Section>

				<Section spacing="small">
					<H2>Maintenance</H2>
					<P>
						If you ever have a problem with your security lighting, our
						electricians are only a phone call away to come fix the issue. We
						take so much pride in our work that we can&apos;t stand the thought
						of something not working, which is why we are so quick to provide
						the necessary maintenance.
					</P>
				</Section>

				<ContactUs>
					<ContactTitle>Contact Burton Electric LLC Today!</ContactTitle>
					<ContactContent>
						Increase the security of your home or business and call Burton
						Electric LLC today about our security lighting services.
					</ContactContent>
				</ContactUs>
			</MainContainer>
			<Footer />
		</PageContainer>
	);
};

export default page;
