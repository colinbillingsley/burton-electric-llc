import CenterDiv from "@/components/CenterDiv";
import ContactUs from "@/components/ContactUs";
import H2 from "@/components/H2";
import { SlideInFromLeft } from "@/components/motion/SlideInFromLeft";
import PageContainer from "@/components/PageContainer";
import PageHeading from "@/components/PageHeading";
import Section from "@/components/Section";
import { baseKeywords, icon } from "@/data/seo";
import { LucideIcon, Plug, PlugZap, TriangleAlert, Zap } from "lucide-react";
import { Metadata } from "next";

const ICONSIZE: number = 32;
const STROKEWIDTH: number = 1.5;

export const metadata: Metadata = {
	title: "Nashville Electrical Repair | Burton Electric LLC",
	description:
		"Burton Electric LLC provides safe, effective electrical repair services in Nashville. Call (615) 830-1111.",
	icons: {
		icon: icon,
	},
	keywords: [
		"Brentwood Electrical Repair",
		"Nashville Electrical Repair",
		"Franklin Electrical Repair",
		"Electrical Repair",
		...baseKeywords,
	],
};

const electricalRepairs: { icon: LucideIcon; title: string; desc: string }[] = [
	{
		icon: Zap,
		title: "Circuit breakers keep tripping",
		desc: "If the power keeps going out, either in a single room or throughout the building, it is very likely that you have tripped circuit breakers. First, unplug or turn off any electronic or motor-driven appliances to prevent damaging your essentials from power surges when the power comes back. Reset the circuit breakers in your fuse box. If the breakers trip again right away, give us a call. In the event that it doesn't go off right away, but the breakers are tripped regularly, give us a call and we will be happy to troubleshoot it until the right repair is found.",
	},
	{
		icon: PlugZap,
		title: "Appliances spark when plugged in",
		desc: "If sparks fly out of your outlets when you plug in an appliance, this is extremely dangerous because this is how electrical fires start. Never attempt to put out an electrical fire with water because it will only make it worse. Instead, give us a call and we'll be glad to figure out whether it's your appliances, outlets or something else.",
	},
	{
		icon: Plug,
		title: "Outlets and switches not working",
		desc: "Eventually, certain outlets and switches in your home or business will stop working due to age and wear and tear. If your outlets and switches suddenly go dead, we can easily replace them.",
	},
	{
		icon: TriangleAlert,
		title: "Burning smells",
		desc: "This is one of the more obvious signs that you need an electrician to come conduct some electrical repairs, but it's worth repeating nonetheless. Mysterious burning smells are symptomatic of overloaded or badly damaged wires.",
	},
];

const page = () => {
	return (
		<PageContainer>
			<SlideInFromLeft amount={0}>
				<CenterDiv>
					<PageHeading>
						<p>Nashville Electrical Repair Services</p>
					</PageHeading>

					<Section my="sm" className="space-y-4">
						<p>
							There are few things more frustrating than unreliable electrical
							service in your Nashville home or business. Of course, sometimes
							you have to be grateful that it&apos;s only an inconvenience
							because problematic electricity can do serious damage to any type
							of building. If you have been experiencing difficulty with your
							home or business&apos;s electricity, it&apos;s worth giving Burton
							Electric LLC a call so that our licensed and insured electricians
							can conduct the repairs you need.
						</p>
						<p>
							Burton Electric LLC has been proud to provide homes and businesses
							all over the Nashville area with expert electrical repairs. We
							understand that malfunctioning electrical work can be a truly
							scary thing, which is why we are committed to identifying the
							issue and fixing it with maximum efficiency.
						</p>
						<p>
							Whenever you need electrical repairs, give us a call and
							we&apos;ll do whatever we can to provide a lasting resolution.
						</p>
					</Section>

					<Section my="sm" className="space-y-6">
						<H2>Signs Your Home or Business Needs Electrical Repairs</H2>
						<p>
							Unless you have experience working with electricity, it can often
							be difficult to recognize that your home or business needs
							electrical repairs. To put aside any doubts that you should call
							Burton Electric LLC to acquire our electrical repair services,
							here are the surefire signs that there&apos;s something not right
							with your electrical system.
						</p>

						<ul className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-12">
							{electricalRepairs.map((item, index) => (
								<li key={`repair-${index}`} className="space-y-4">
									<div className="flex items-center gap-2">
										<item.icon
											size={ICONSIZE}
											strokeWidth={STROKEWIDTH}
											className="shrink-0"
										/>
										<h3 className="text-xl font-medium">{item.title}</h3>
									</div>
									<p className="text-sm">{item.desc}</p>
								</li>
							))}
						</ul>

						<p>
							Under no circumstances should you ever attempt to do your own
							electrical repairs. You could badly injure yourself or cause
							severe damage to your property. Let Burton Electric LLC&apos;s
							trained and insured professionals handle itself instead.
						</p>
					</Section>
				</CenterDiv>
			</SlideInFromLeft>
			<ContactUs
				desc="Whenever your Nashville home or business's electricity is
						acting strangely, give Burton Electric LLC a call and we will make
						sure we find the problem and fix it."
			/>
		</PageContainer>
	);
};

export default page;
