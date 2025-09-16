import CenterDiv from "@/components/CenterDiv";
import ContactUs from "@/components/ContactUs";
import H2 from "@/components/H2";
import { SlideInFromLeft } from "@/components/motion/SlideInFromLeft";
import PageContainer from "@/components/PageContainer";
import PageHeading from "@/components/PageHeading";
import Section from "@/components/Section";
import { baseKeywords, icon } from "@/data/seo";
import { Zap } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title:
		"Lighting Electrician Nashville, Brentwood, and Franklin | Burton Electric LLC",
	description:
		"Burton Electric LLC will correctly install a brand-new lighting system to brighten up your property. Give us a call at (615) 830-1111 today!",
	icons: {
		icon: icon,
	},
	keywords: [
		"Lighting Electrician Services",
		"Lighting Electrician",
		"Brentwood Lighting Electrician",
		"Franklin Lighting Electrician",
		"Nashville Lighting Electrician",
		...baseKeywords,
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
			<SlideInFromLeft amount={0}>
				<CenterDiv>
					<PageHeading>
						<p>Lighting Electricians</p>
					</PageHeading>

					<Section my="sm" className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="space-y-6">
							<p>
								The way a home or business is lit can drastically change its
								perception and function. Placement and type are two very
								important aspects of making sure that your home or business is
								lit in a way to best serve its intended purpose. That said, the
								placement and type of light pales in comparison when it comes
								time to select a lighting electrician. After all, you may have
								selected the right type of lights and found the perfect place to
								put them in your home or business, but what good are they if
								they haven&apos;t been properly installed by a professional
								lighting electrician?
							</p>
							<p>
								The answer is simple, they won&apos;t do you any good. Whenever
								you choose to get commercial or residential lighting installed,
								or repaired or upgraded for that matter, by an under-qualified
								or unlicensed lighting electrician, the only thing they can do
								is serve as a hazard to everyone on the property.
							</p>
						</div>
						<div className="space-y-6">
							<p>
								Rather than put the inhabitants of your residential or
								commercial property in danger from cutting corners, get in touch
								with Burton Electric LLC. We have been proud to serve homes and
								local businesses for many years whenever they have lighting
								needs. Whether you require assistance designing a new lighting
								system, installing it, upgrading it or providing it with
								repairs, Burton Electric LLC is here to provide reliable
								electrical services at an affordable rate.
							</p>
							<p>
								To get a free quote on your upcoming lighting project from the
								most trusted electrical contractors in the area, give Burton
								Electric LLC a call today.
							</p>
						</div>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>Residential Lighting</H2>
						<p>
							When you choose Burton Electric LLC to conduct some lighting work
							at your home, we guarantee we&apos;ll treat with the utmost
							respect. Our trained, licensed and insured lighting electricians
							are primarily concerned making sure your home is safe from fires,
							property damage and other hazards and it begins with remembering
							we are your guest and should behave as such.
						</p>

						<div className="grid md:grid-cols-2 gap-8">
							<div className="space-y-6">
								<p className="text-2xl font-semibold">
									Interior Residential Lighting
								</p>
								<p>
									Our team of lighting electricians are available to provide
									affordable and reliable design, installation and maintenance
									for all your home&apos;s interior lighting including:
								</p>
								<ul className="space-y-2">
									{interiorLighting.map((light, index) => (
										<li
											key={`light-${index}`}
											className="flex items-center gap-2"
										>
											<Zap size={18} className="shrink-0 text-primary" />
											<span className="font-medium">{light}</span>
										</li>
									))}
								</ul>
							</div>

							<div className="space-y-6">
								<p className="text-2xl font-semibold">
									Exterior Residential Lighting
								</p>
								<p>
									Though most people tend to focus on their home&apos;s
									interior, you can&apos;t forget about the importance of
									exterior lighting. If you&apos;re looking for exterior
									residential lighting services, we can design, install and
									maintain:
								</p>
								<ul className="space-y-2">
									{exteriorLighting.map((light, index) => (
										<li
											key={`light-${index}`}
											className="flex items-center gap-2"
										>
											<Zap size={18} className="shrink-0 text-primary" />
											<span className="font-medium">{light}</span>
										</li>
									))}
								</ul>
							</div>
						</div>

						<p>
							For all your residential lighting needs, Burton Electric LLC is
							here to help.
						</p>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>Commercial Lighting Services</H2>
						<p>
							The lighting needs of a commercial building can be very complex.
							Luckily, our lighting electricians have a wealth of experience
							designing, installing and repairing commercial lighting systems.
							As a result, there is no job too big or too small for us to
							handle.
						</p>
						<p>
							All you need to do is pick up the phone, specify what it is you
							need from us and we&apos;ll get started on devising a plan to
							complete it with minimal interruption to your regular operations.
						</p>
					</Section>
				</CenterDiv>
			</SlideInFromLeft>
			<ContactUs
				desc="You are pushing luck if you haven't updated your home or
						business's wiring, so give Burton Electric LLC a call to make
						sure you're not risking a fire hazard."
			/>
		</PageContainer>
	);
};

export default pages;
