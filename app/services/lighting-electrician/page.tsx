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
import { Metadata } from "next";
import React from "react";
import { BsLightningChargeFill } from "react-icons/bs";

export const metadata: Metadata = {
	title:
		"Lighting Electrician Nashville, Brentwood, and Franklin | Burton Electric LLC",
	description:
		"Burton Electric LLC will correctly install a brand-new lighting system to brighten up your property. Give us a call at (615) 830-1111 today!",
	icons: {
		icon: "/burton-logo.png",
	},
	keywords: [
		"Burton Electric LLC",
		"Lighting Electrician Services",
		"Lighting Electrician",
		"Brentwood Lighting Electrician",
		"Franklin Lighting Electrician",
		"Nashville Lighting Electrician",
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

const interiorLighting: string[] = [
	"Standard lighting systems",
	"Custom lighting systems",
	"Track lighting",
	"New light fixtures",
	"Retrofitting",
];

const exteriorLighting: string[] = [
	"Outdoor fixtures",
	"Motion activated lighting installations",
	"Landscape lighting",
];

const pages = () => {
	return (
		<PageContainer>
			<MainContainer>
				<H1>
					<Important>Lighting Electricians</Important>
				</H1>

				<Section spacing="small" className="grid md:grid-cols-2 gap-8">
					<div className="space-y-6">
						<P>
							The way a home or business is lit can drastically change its
							perception and function. Placement and type are two very important
							aspects of making sure that your home or business is lit in a way
							to best serve its intended purpose. That said, the placement and
							type of light pales in comparison when it comes time to select a
							lighting electrician. After all, you may have selected the right
							type of lights and found the perfect place to put them in your
							home or business, but what good are they if they haven&apos;t been
							properly installed by a professional lighting electrician?
						</P>
						<P>
							The answer is simple, they won&apos;t do you any good. Whenever
							you choose to get commercial or residential lighting installed, or
							repaired or upgraded for that matter, by an under-qualified or
							unlicensed lighting electrician, the only thing they can do is
							serve as a hazard to everyone on the property.
						</P>
					</div>
					<div className="space-y-6">
						<P>
							Rather than put the inhabitants of your residential or commercial
							property in danger from cutting corners, get in touch with Burton
							Electric LLC. We have been proud to serve homes and local
							businesses for many years whenever they have lighting needs.
							Whether you require assistance designing a new lighting system,
							installing it, upgrading it or providing it with repairs, Burton
							Electric LLC is here to provide reliable electrical services at an
							affordable rate.
						</P>
						<P>
							To get a free quote on your upcoming lighting project from the
							most trusted electrical contractors in the area, give Burton
							Electric LLC a call today.
						</P>
					</div>
				</Section>

				<Section>
					<H2>Residential Lighting</H2>
					<P>
						When you choose Burton Electric LLC to conduct some lighting work at
						your home, we guarantee we&apos;ll treat with the utmost respect.
						Our trained, licensed and insured lighting electricians are
						primarily concerned making sure your home is safe from fires,
						property damage and other hazards and it begins with remembering we
						are your guest and should behave as such.
					</P>

					<div className="grid md:grid-cols-2 gap-8">
						<div className="space-y-6">
							<P className="text-2xl font-semibold">
								Interior Residential Lighting
							</P>
							<P>
								Our team of lighting electricians are available to provide
								affordable and reliable design, installation and maintenance for
								all your home&apos;s interior lighting including:
							</P>
							<ul className="space-y-2">
								{interiorLighting.map((light, index) => (
									<li
										key={`light-${index}`}
										className="flex items-center gap-2"
									>
										<BsLightningChargeFill
											size={18}
											className="shrink-0 text-primary"
										/>
										<span className="font-medium">{light}</span>
									</li>
								))}
							</ul>
						</div>

						<div className="space-y-6">
							<P className="text-2xl font-semibold">
								Exterior Residential Lighting
							</P>
							<P>
								Though most people tend to focus on their home&apos;s interior,
								you can&apos;t forget about the importance of exterior lighting.
								If you&apos;re looking for exterior residential lighting
								services, we can design, install and maintain:
							</P>
							<ul className="space-y-2">
								{exteriorLighting.map((light, index) => (
									<li
										key={`light-${index}`}
										className="flex items-center gap-2"
									>
										<BsLightningChargeFill
											size={18}
											className="shrink-0 text-primary"
										/>
										<span className="font-medium">{light}</span>
									</li>
								))}
							</ul>
						</div>
					</div>

					<P>
						For all your residential lighting needs, Burton Electric LLC is here
						to help.
					</P>
				</Section>

				<Section>
					<H2>Commercial Lighting Services</H2>
					<P>
						The lighting needs of a commercial building can be very complex.
						Luckily, our lighting electricians have a wealth of experience
						designing, installing and repairing commercial lighting systems. As
						a result, there is no job too big or too small for us to handle.
					</P>
					<P>
						All you need to do is pick up the phone, specify what it is you need
						from us and we&apos;ll get started on devising a plan to complete it
						with minimal interruption to your regular operations.
					</P>
				</Section>

				<ContactUs>
					<ContactTitle>Contact Us Today!</ContactTitle>
					<ContactContent>
						You are pushing luck if you haven&apos;t updated your home or
						business&apos;s wiring, so give Burton Electric LLC a call to make
						sure you&apos;re not risking a fire hazard.
					</ContactContent>
				</ContactUs>
			</MainContainer>
			<Footer />
		</PageContainer>
	);
};

export default pages;
