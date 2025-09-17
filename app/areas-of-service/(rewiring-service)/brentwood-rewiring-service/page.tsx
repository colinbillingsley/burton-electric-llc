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
	title: "Brentwood Rewiring Services | Burton Electric LLC",
	description:
		"Burton Electric LLC are trusted for safe, efficient electrical rewiring in Brentwood. Call us at (615) 830-1111 today!",
	icons: {
		icon: icon,
	},
	keywords: [
		"Brentwood Rewiring Services",
		"Nashville Rewiring Services",
		"Franklin Rewiring Services",
		"Rewiring Services",
		...baseKeywords,
	],
};

const whenRewire: string[] = [
	"The building is over 40 years old",
	"Frequent blown fuses or tripped breakers",
	"Dimming or flickering lights",
	"You are relying on extension cords for power",
	"Buzzing or sizzling sounds",
	"Burning smells",
	"Loose outlets",
	"Arcs or sparks from an outlet when you plug or unplug a cord",
	"You don't have grounded outlets, i.e., three-pronged outlets",
	"You have added new appliances putting new demands on your existing system",
	"The building uses aluminum wiring rather than copper",
];

const page = () => {
	return (
		<PageContainer>
			<SlideInFromLeft amount={0}>
				<CenterDiv>
					<PageHeading>
						<p>Brentwood Rewiring Services</p>
					</PageHeading>

					<Section my="sm" className="space-y-4">
						<p>
							Rewiring a home or business is a big job. Even if there are just a
							handful of areas that need to be rewired, it&apos;s a huge job. By
							no means should you think that you can do it yourself. You need to
							have a thorough electrical plan that meets the standards and codes
							of Brentwood, you need to understand the way circuits work, how
							grounding works, how electrical panels work and have an awareness
							of potential dangers when working with wiring and connections.
						</p>
						<p>
							And when you get down to it, the wiring of your Brentwood home or
							business is the most important part of its electrical system. None
							of your outlets, light switches, appliances or devices can
							function properly if there&apos;s a problem with the wiring. And
							as if this wasn&apos;t enough cause for concern, faulty wiring
							won&apos;t just cause problems with the building&apos;s electrical
							service, it could also start a fire, or shock occupants, etc.
						</p>
						<p>
							To keep your home or business&apos;s electrical system safe and
							providing you and everyone in the building with reliable
							electricity, you might want to invest in Burton Electric
							LLC&apos;s rewiring services. When you do, Burton Electric
							LLC&apos;s licensed and insured electricians will identify the
							areas of your home or business were the wiring is worn down or out
							of date and replace it new wiring that you can be confident
							operating.
						</p>
						<p>
							Request a free estimate on our rewiring services when you call
							Burton Electric LLC today.
						</p>
					</Section>

					<Section my="sm" className="space-y-6">
						<H2>When Should You Rewire?</H2>
						<p>
							Approximately 39 percent of home electrical fires involve outlets,
							interior wiring and other electrical wiring. Luckily, there are
							measures you can take to prevent yourself becoming a part of this
							statistic. Namely, you can call Burton Electric LLC and request an
							estimate on our rewiring services.
						</p>
						<p>
							Of course, most Brentwood home and business owners don&apos;t want
							to spend money on rewiring services unless they absolutely have
							to. We fully understand this attitude, which is why we have made
							this convenient list of criteria that make your home or business a
							good candidate to get rewired. Review the list below and give us a
							call as soon as possible if several of them apply to your
							building.
						</p>

						<ul className="space-y-4">
							{whenRewire.map((item, index) => (
								<li key={`rewire-${index}`} className="flex items-center gap-2">
									<Zap size={15} className="shrink-0 text-primary" />
									<p className="font-medium">{item}</p>
								</li>
							))}
						</ul>

						<p>
							In the event that you haven&apos;t noticed these symptoms of
							faulty or out-of-date wiring and you would like peace of mind that
							there&apos;s no problem with your home or business&apos;s wiring,
							Burton Electric LLC&apos;s electricians are always available to
							conduct an inspection of your building&apos;s existing wiring and
							provide preventative maintenance before the issue becomes urgent.
						</p>
					</Section>
				</CenterDiv>
			</SlideInFromLeft>
			<ContactUs
				desc="Proper wiring is an essential part of any building. Make sure your
						electrical system is distributing power safely when you contact
						Burton Electric LLC today."
			/>
		</PageContainer>
	);
};

export default page;
