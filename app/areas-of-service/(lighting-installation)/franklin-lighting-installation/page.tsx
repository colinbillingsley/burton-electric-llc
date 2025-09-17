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
	title: "Franklin Lighting Installations | Burton Electric LLC",
	description:
		"Burton Electric LLC will ensure your Franklin property's lighting system is installed correctly. Call us at (615) 830-1111 today!",
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

const installedLighting: string[] = [
	"Recessed lighting",
	"Landscape lighting",
	"Track lighting",
	"Kitchen lighting",
	"Deck lighting",
	"Bathroom lighting",
	"Retail store lighting",
	"Restaurant lighting",
	"Chandeliers",
	"Pot lighting",
	"New lighting fixtures",
];

const page = () => {
	return (
		<PageContainer>
			<SlideInFromLeft amount={0}>
				<CenterDiv>
					<PageHeading>
						<p>Franklin Lighting Installations</p>
					</PageHeading>

					<Section my="sm" className="space-y-4">
						<p>
							Lighting is an important piece of the interior and exterior design
							puzzle. Residential and commercial properties need to give careful
							consideration to how they are lit. If you intend for a room to be
							cozy or if you want it to be as productive as possible, proper
							lighting is what sets the tone.
						</p>
						<p>
							When you have decided it&apos;s time to redo your Franklin home or
							business&apos;s lighting, or you need a system installed from
							scratch in your new structure, make sure you hire Burton Electric
							LLC to complete the installation. Burton Electric LLC has been
							proud to serve the Franklin area for many years, providing quality
							workmanship and courteous service on every job.
						</p>
						<p>
							Burton Electric LLC has consistently been one of the top companies
							in Franklin for lighting installations because we guarantee fast,
							friendly and professional electrical services. All of our lighting
							installations are by the book, up-to-code and as energy efficient
							as possible. Plus, with our transparent pricing policy, why would
							you choose another electrical company to complete your residential
							or commercial lighting installation?
						</p>
						<p>
							To request a free estimate, feel free to give us a call today.
						</p>
					</Section>

					<Section my="sm" className="space-y-6">
						<H2>Lighting We Install</H2>
						<p>
							Thanks to our team&apos;s extensive experience installing lights
							for residential and commercial clients all over the area, there is
							no install too big or too small. We are familiar with all types of
							interior and exterior commercial and residential lighting,
							including:
						</p>
						<ul className="space-y-4">
							{installedLighting.map((light, index) => (
								<li key={`light-${index}`} className="flex items-center gap-2">
									<Zap size={15} className="shrink-0 text-primary" />
									<p className="font-medium">{light}</p>
								</li>
							))}
						</ul>
						<p>
							If you don&apos;t have your heart set on the type of lighting you
							would like installed, please feel free to contact Burton Electric
							LLC to discuss some ideas. With all of our knowledge of these
							types of jobs, it would be a shame for it to go to waste. So, give
							us a call even if you are still only weighing your options.
						</p>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>Converting to Energy Efficient Lighting</H2>
						<p>
							How old is your home or the building your business is housed in?
							If it&apos;s on the older side, ask yourself when was the last
							time the lighting was redone. If you can&apos;t place it, then you
							might be overdue for a conversion to energy efficient lighting.
						</p>
						<p>
							Lighting technology has made leaps and bounds over the years and
							contemporary lights&apos; energy efficiency puts their
							predecessors to shame. If you haven&apos;t already made the switch
							to energy efficient lighting and you are fed up with a massive
							electric bill every month, then you might want to give us a call.
						</p>
						<p>
							Burton Electric LLC can remove your out-of-date lighting system
							and install brand-new energy efficient lights that will save you
							money in the future. Plus, installing new lights is a
							cost-effective way of giving a residential or commercial space a
							new lease on life. So, give us a call today to request a free
							estimate.
						</p>
					</Section>
				</CenterDiv>
			</SlideInFromLeft>
			<ContactUs
				desc="Franklin's top-rated and most trusted electrical professionals
						are waiting to install new lighting in your home or business. Just
						contact Burton Electric LLC and we'll take care of the rest."
			/>
		</PageContainer>
	);
};

export default page;
