import CenterDiv from "@/components/CenterDiv";
import ContactUs from "@/components/ContactUs";
import H2 from "@/components/H2";
import { SlideInFromLeft } from "@/components/motion/SlideInFromLeft";
import PageContainer from "@/components/PageContainer";
import PageHeading from "@/components/PageHeading";
import Section from "@/components/Section";
import { baseKeywords, icon } from "@/data/seo";
import {
	AlertTriangle,
	Flame,
	FlameIcon,
	LucideIcon,
	Plug,
	PlugZap,
	TriangleAlert,
	Zap,
} from "lucide-react";
import { Metadata } from "next";
import React from "react";

const ICONSIZE: number = 32;
const STROKEWIDTH: number = 1.5;

export const metadata: Metadata = {
	title: "Brentwood Electrical Repair | Burton Electric LLC",
	description:
		"Burton Electric LLC provides safe, effective electrical repair services in Brentwood. Call (615) 830-1111.",
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
		title: "Frequent Surges",
		desc: "Electrical surges can be caused by anything from lightning, damaged power lines, faulty appliances and bad electrical wiring in the house. While most surges only last a microsecond, frequent surges can do serious damage to your devices and appliances. If it happens all the time, the culprit is probably an electric device connected to the grid or the wiring itself.",
	},
	{
		icon: PlugZap,
		title: "Circuit Overloads",
		desc: "If your circuit breaker trips regularly, you can be relieved knowing that it's doing its job to protect your home or business. Of course, it's indicative that there's something wrong. There are a number of different reasons why this could be happening, which is why our electricians can be a huge asset in troubleshooting the different possible causes until we find the right repair.",
	},
	{
		icon: FlameIcon,
		title: "Warm Outlets",
		desc: "When your outlets start giving off heat whenever they are in use, you have to first of all avoid plugging anything in that particular outlet and check others around the immediate vicinity for heat or burn marks. Faulty wiring and faulty outlets can easily start an electric fire, which can do serious damage to your home or business.",
	},
	{
		icon: TriangleAlert,
		title: "Strange smells",
		desc: "If you detect any strange burning smells around your home or business, particularly from an outlet, you need to call us immediately so that we can take a look at it before serious damage is done to your home or business.",
	},
];

const page = () => {
	return (
		<PageContainer>
			<SlideInFromLeft amount={0}>
				<CenterDiv>
					<PageHeading>
						<p>Brentwood Electrical Repair Services</p>
					</PageHeading>

					<Section my="sm" className="space-y-4">
						<p>
							Problems with your Brentwood home or business can be more than
							just a nuisance. Electrical problems can be a massive hazard,
							wreaking thousands of dollars&apos; worth of damage. And since no
							one in their right mind wants to see their home or business go up
							in flames due to an electrical fire. So, whenever you have
							something unusual happening with your electricity, it is
							imperative that you contact Burton Electric LLC as soon as
							possible.
						</p>
						<p>
							Whenever your home or business in the Brentwood area is
							experiencing irregularities with its electricity, Burton Electric
							LLC&apos;s reliable, licensed and insured electricians will be
							on-site as soon as they can to repair the issue. More and more
							home and business owners trust our electrical repair services
							whenever issues arise because they know they are always getting
							trusted, detail-oriented electrical repair services. Whether
							it&apos;s major or minor, we will make sure that the issue is
							resolved for good.
						</p>
						<p>
							So, if you have a problem with your electricity, give Burton
							Electric LLC a call today and we&apos;ll find a solution to make
							your home or business safe again.
						</p>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>Common Electrical Repairs</H2>
						<p>
							There are a variety of different things that can go wrong with
							your home or business&apos;s electrical system. For the most part,
							if you don&apos;t have any experience working with electricity, it
							can be difficult to determine the exact nature and severity of the
							problem. Below are some of the most common electrical issues that
							Burton Electric LLC&apos;s professionals can repair with ease.
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
					</Section>
				</CenterDiv>
			</SlideInFromLeft>
			<ContactUs
				desc="Attempting to do your own electrical repairs can have serious
						consequences. You are very likely to hurt yourself or make the
						situation worse, which is why you need to call Burton Electric LLC
						whenever you suspect there's a problem."
			/>
		</PageContainer>
	);
};

export default page;
