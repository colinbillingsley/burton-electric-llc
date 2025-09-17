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
	title:
		"Rewiring Service Nashville, Brentwood, and Franklin | Burton Electric LLC",
	description:
		"Burton Electric LLC will correctly rewire your electrical system to maintain safety and ensure it's functioning properly. Give us a call at (615) 830-1111 today!",
	icons: {
		icon: icon,
	},
	keywords: [
		"Rewiring Services",
		"Rewiring",
		"Brentwood Rewiring",
		"Franklin Rewiring",
		"Nashville Rewiring",
		...baseKeywords,
	],
};

const pages = () => {
	return (
		<PageContainer>
			<SlideInFromLeft amount={0}>
				<CenterDiv>
					<PageHeading>
						<p>Rewiring Services</p>
					</PageHeading>

					<Section my="sm" className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="space-y-6">
							<p>
								Studies have shown that since the 1950s electrical use has
								increased by over 400 percent. This shouldn&apos;t come as a
								surprise because we didn&apos;t have computers or smartphones to
								power in those days, and the appliances that were around like
								refrigerators have grown in their sophistication. So, if your
								energy demands have continued to expand, have you made the
								necessary adjustments in your home or business to make sure that
								what&apos;s behind the walls can deliver the electricity you
								need?
							</p>
							<p>
								The type of cable used to wire homes and businesses has made
								dramatic changes since the 1950s as well. Electrical safety
								codes change every four years, which only adds to the urgency of
								the situation. Chances are if you moved in to an older
								commercial or residential building that&apos;s been around for a
								long time, you are overdue for a rewire. Even if you built your
								commercial or residential building from scratch, if it&apos;s
								been a couple of decades since you thought about the wiring, you
								might benefit from a rewire.
							</p>
						</div>
						<div className="space-y-6">
							<p>
								Wiring, over time, eventually starts to show visible signs of
								degradation. Whether it&apos;s been damaged in a rodent
								infestation, exposure to water, overheating or something else,
								rewiring your home or business decreases the risk of fire and
								other hazards associated with damaged electrical systems. The
								key is to a successful and safe rewire begins with finding the
								right electricians for the job.
							</p>
							<p>
								Burton Electric LLC has been proud to provide both commercial
								and residential rewiring services to homes and businesses in the
								area. Outdated and damaged wiring is a huge hazard and it is
								always better to be safe and replace the whole than be sorry.
							</p>
							<p>
								If your home or business needs rewiring services, give Burton
								Electric LLC a call today to request a free quote.
							</p>
						</div>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>Aluminum and Knob and Tube Wiring Needs to Go</H2>
						<p>
							Aluminum wiring was the popular choice for homes and businesses
							built in the 1970s. Unfortunately, there are a lot of problems
							associated with aluminum wires. The main problem with aluminum
							wiring is that it is not the best conductor of electricity. So, if
							your home or business still relies on aluminum wiring, the
							probability that it&apos;s working overtime to get your appliances
							the power they need to function is very high. This generates
							excess heat and makes electrical fires a very real possibility.
						</p>
						<p>
							As for knob and tube wiring, this hasn&apos;t been used much since
							the 1950s but there are a handful of homes and businesses that
							have fallen through the cracks. Given how obsolete these types of
							wires are, if you still rely on them, it is imperative that you
							give Burton Electric LLC a call as soon as possible to arrange a
							rewire.
						</p>
						<p>
							Burton Electric LLC&apos;s electricians are highly skilled at
							spotting these out-of-date types of electrical wires and replacing
							them with new, up to code wiring in a convenient manner.
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
