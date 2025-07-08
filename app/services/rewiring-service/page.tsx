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

export const metadata: Metadata = {
	title:
		"Rewiring Service Nashville, Brentwood, and Franklin | Burton Electric LLC",
	description:
		"Burton Electric LLC will correctly rewire your electrical system to maintain safety and ensure it's functioning properly. Give us a call at (615) 830-1111 today!",
	icons: {
		icon: "/burton-logo.png",
	},
	keywords: [
		"Burton Electric LLC",
		"Rewiring Services",
		"Rewiring",
		"Brentwood Rewiring",
		"Franklin Rewiring",
		"Nashville Rewiring",
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

const pages = () => {
	return (
		<PageContainer>
			<MainContainer>
				<H1>
					<Important>Rewiring Services</Important>
				</H1>

				<Section spacing="small" className="grid md:grid-cols-2 gap-8">
					<div className="space-y-6">
						<P>
							Studies have shown that since the 1950s electrical use has
							increased by over 400 percent. This shouldn&apos;t come as a
							surprise because we didn&apos;t have computers or smartphones to
							power in those days, and the appliances that were around like
							refrigerators have grown in their sophistication. So, if your
							energy demands have continued to expand, have you made the
							necessary adjustments in your home or business to make sure that
							what&apos;s behind the walls can deliver the electricity you need?
						</P>
						<P>
							The type of cable used to wire homes and businesses has made
							dramatic changes since the 1950s as well. Electrical safety codes
							change every four years, which only adds to the urgency of the
							situation. Chances are if you moved in to an older commercial or
							residential building that&apos;s been around for a long time, you
							are overdue for a rewire. Even if you built your commercial or
							residential building from scratch, if it&apos;s been a couple of
							decades since you thought about the wiring, you might benefit from
							a rewire.
						</P>
					</div>
					<div className="space-y-6">
						<P>
							Wiring, over time, eventually starts to show visible signs of
							degradation. Whether it&apos;s been damaged in a rodent
							infestation, exposure to water, overheating or something else,
							rewiring your home or business decreases the risk of fire and
							other hazards associated with damaged electrical systems. The key
							is to a successful and safe rewire begins with finding the right
							electricians for the job.
						</P>
						<P>
							Burton Electric LLC has been proud to provide both commercial and
							residential rewiring services to homes and businesses in the area.
							Outdated and damaged wiring is a huge hazard and it is always
							better to be safe and replace the whole than be sorry.
						</P>
						<P>
							If your home or business needs rewiring services, give Burton
							Electric LLC a call today to request a free quote.
						</P>
					</div>
				</Section>

				<Section>
					<H2>Aluminum and Knob and Tube Wiring Needs to Go</H2>
					<P>
						Aluminum wiring was the popular choice for homes and businesses
						built in the 1970s. Unfortunately, there are a lot of problems
						associated with aluminum wires. The main problem with aluminum
						wiring is that it is not the best conductor of electricity. So, if
						your home or business still relies on aluminum wiring, the
						probability that it&apos;s working overtime to get your appliances
						the power they need to function is very high. This generates excess
						heat and makes electrical fires a very real possibility.
					</P>
					<P>
						As for knob and tube wiring, this hasn&apos;t been used much since
						the 1950s but there are a handful of homes and businesses that have
						fallen through the cracks. Given how obsolete these types of wires
						are, if you still rely on them, it is imperative that you give
						Burton Electric LLC a call as soon as possible to arrange a rewire.
					</P>
					<P>
						Burton Electric LLC&apos;s electricians are highly skilled at
						spotting these out-of-date types of electrical wires and replacing
						them with new, up to code wiring in a convenient manner.
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
