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
	title: "Nashville Rewiring Services | Burton Electric LLC",
	description:
		"Burton Electric LLC are trusted for safe, efficient electrical rewiring in Nashville. Call us at (615) 830-1111 today!",
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

const page = () => {
	return (
		<PageContainer>
			<SlideInFromLeft amount={0}>
				<CenterDiv>
					<PageHeading>
						<p>Nashville Rewiring Services</p>
					</PageHeading>

					<Section my="sm" className="space-y-4">
						<p>
							Things wear out with the passage of time and your Nashville home
							or business&apos;s wiring is no exception. As your wiring ages and
							starts to break down, the bigger threat it poses to your
							residential or commercial building and everyone who occupies it.
							Rather than continue to test your luck it&apos;s worth your while
							to get Burton Electric LLC&apos;s rewiring services.
						</p>
						<p>
							For the last several years, Burton Electric LLC has been proud to
							provide high-quality and efficient rewiring services to
							residential and commercial clients in the Nashville area. The
							reason people continue to seek out Burton Electric LLC&apos;s
							licensed and insured electricians whenever they need rewiring
							services is largely due to the fact that our dedication to our
							profession has garnered a reputation for being the best. And the
							best is exactly what you can expect when you choose Burton
							Electric LLC for our rewiring services.
						</p>
						<p>
							To get a free estimate on our rewiring services, give Burton
							Electric LLC a call today.
						</p>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>Signs You Need Burton Electric LLC&apos;s Rewiring Services</H2>
						<p>
							If you have never had to rewire your Nashville home or business,
							it can be difficult to know whether or not you could benefit from
							our rewiring services. And since you don&apos;t want the smoke
							alarm going off in the middle of the night because of an
							electrical fire, here is what you need to look out for. If any one
							or more of the symptoms below describe your home or business, give
							Burton Electric LLC a call immediately.
						</p>
						<p>
							Frequent blown fuses or tripped breakers. While there a couple of
							different explanations for why your home or business&apos;s fuses
							are getting blown or the breakers tripped regularly, it usually
							indicative of a worn out electrical system or one that can&apos;t
							handle the amount of electricity your various appliances and
							devices are demanding to operate.
						</p>
						<p>
							Buzzing or sizzling sounds in your wiring or outlets. This is a
							surefire sign that you are overdue for a rewiring. As soon as you
							hear buzzing, call Burton Electric LLC.
						</p>
						<p>
							Loose outlets. If plugs wiggle and fall out of electrical outlets,
							it&apos;s about time you upgrade to modern outlets, which are
							included in most cases of rewiring.
						</p>
						<p>
							The building is over 40 years old. If you live in an older home or
							work in an older building, the existing electrical system is very
							likely wearing out. It is very possible that the existing system
							relies on aluminum wires instead of copper, which means your
							system is not adequately equipped to meet modern energy demands,
							increasing the risk of fire and shock.
						</p>
						<p>
							You only have two-pronged outlets. All of your outlets should be
							grounded, i.e., three-pronged, to reduce the threat of
							electrocution. If you only have two-pronged outlets, it is high
							time you get rewired and upgraded.
						</p>
						<p>
							Burning smell. Burned or overheated wires give off a noticeable
							burning odor and it won&apos;t be long before a fire breaks out.
						</p>
					</Section>
				</CenterDiv>
			</SlideInFromLeft>
			<ContactUs
				desc="Reduce the risk of electrical fires and get Burton Electric
						LLC's highly skilled electricians to rewire your Nashville home
						or business today."
			/>
		</PageContainer>
	);
};

export default page;
