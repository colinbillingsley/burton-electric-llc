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
	title: "Brentwood Security Lighting Services | Burton Electric LLC",
	description:
		"Outdoor lighting will improve your Brentwood's security. Call Burton Electric LLC today at (615) 830-1111",
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

const secLighting: string[] = [
	"Flood lights",
	"Post lights",
	"Dusk to dawn lights",
	"Exterior LED lights",
	"Low voltage security lights",
	"Spot lights",
	"Motion sensor lights",
	"Fluorescent exterior lights",
	"Emergency lights",
];

const page = () => {
	return (
		<PageContainer>
			<SlideInFromLeft amount={0}>
				<CenterDiv>
					<PageHeading>
						<p>Brentwood Security Lighting Services</p>
					</PageHeading>

					<Section my="sm" className="space-y-6">
						<p>
							A home or business in the Brentwood area without security lighting
							can be unsettling and can leave occupants feel like they are at
							risk. For example, what are you going to do if you hear some
							rustling around your property late at night? If it&apos;s pitch
							black outside, looking out the windows won&apos;t do you much
							good. You can dig out a flashlight, but it will be reflected back
							from the window glass and block your view to the outdoors, meaning
							the only thing you can do is venture outside. Do you feel
							confident that you can venture outside with only a flashlight and
							come out unscathed?
						</p>
						<p>
							And what about nights when you are working late? When you finally
							call it a night and walk to your car in the darkness, do you feel
							safe? What about when you hear footsteps coming from the other end
							of the parking lot? This is precisely the type of situation where
							you need security lighting to provide peace of mind.
						</p>
						<p>
							With security lighting expertly installed by one of Burton
							Electric LLC&apos;s licensed and insured electricians, you will
							feel much safer knowing that your home or business is lit in a way
							that will make any predators think twice before they act. Vandals,
							thieves, assailants and anyone else who might do you harm rely on
							darkness to do their criminal activity. Protect yourself, your
							family, you employees, your clients and everyone in between when
							you call Burton Electric LLC today and inquire about our security
							lighting services.
						</p>
						<p>
							Burton Electric LLC is a team of experienced electricians who have
							installed security lighting systems in homes and businesses across
							the Brentwood area. If you are tired of getting spooked by things
							that go bump in the night, give us a call today. We can set you up
							with:
						</p>

						<ul className="space-y-4">
							{secLighting.map((light, index) => (
								<li
									key={`security-${index}`}
									className="flex items-center gap-2"
								>
									<Zap size={15} className="shrink-0 text-primary" />
									<p className="font-medium">{light}</p>
								</li>
							))}
						</ul>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>Residential Security Lighting</H2>
						<p>
							Some homeowners decide to forego getting security lighting
							installed because they are worried it might detract from their
							home&apos;s esthetics. This is a legitimate concern because you
							shouldn&apos;t have to sacrifice all your curb appeal in the name
							of security. If this is something that&apos;s holding you back
							from investing in residential security lighting, don&apos;t worry
							because Burton Electric LLC has you covered.
						</p>
						<p>
							We can equip your home with low voltage LED lights that serve as a
							tasteful security measure. We&apos;ll install them in vulnerable
							areas so that your home looks beautiful and is ultimately more
							secure.
						</p>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>Commercial Security Lighting</H2>
						<p>
							Depending on the size of your commercial building in Brentwood,
							our electricians can install flood or spot lights so that
							perpetrators will think twice about messing with your business.
							Plus, we can also install indoor security lighting to make sure
							it&apos;s up to code.
						</p>
						<p>
							Whatever your commercial space needs to be more secure, our
							electricians are available to help.
						</p>
					</Section>
				</CenterDiv>
			</SlideInFromLeft>
			<ContactUs
				desc="Security lighting is an effective and affordable way of increasing
						your home or business's security, so give Burton Electric LLC a
						call today if you want a free estimate on how we can improve your
						building's security."
			/>
		</PageContainer>
	);
};

export default page;
