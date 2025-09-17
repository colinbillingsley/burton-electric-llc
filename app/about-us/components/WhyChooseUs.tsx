import CenterDiv from "@/components/CenterDiv";
import H2 from "@/components/H2";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggeredList } from "@/components/motion/StaggerdList";
import Section from "@/components/Section";
import {
	Building2,
	FileBadge,
	LucideIcon,
	MessagesSquare,
	ShieldCheck,
	Users,
	Zap,
} from "lucide-react";
import React from "react";

const ICONSIZE: number = 32;
const STROKEWIDTH: number = 1.25;

const whyData: {
	icon: LucideIcon;
	title: string;
	description: string;
}[] = [
	{
		icon: Users,
		title: "Family Owned",
		description:
			"Proudly serving Nashville, TN with a personal touch only a family-run business can offer.",
	},
	{
		icon: Building2,
		title: "Commercial Expertise",
		description:
			"Focused experience with businesses, offices, and industrial facilities.",
	},
	{
		icon: FileBadge,
		title: "Licenses & Insured",
		description:
			"Fully licensed and insured for your peace of mind and safety.",
	},
	{
		icon: Zap,
		title: "Efficiency & Reliability",
		description:
			"Projects completed on time, on budget, and with minimal disruption.",
	},
	{
		icon: MessagesSquare,
		title: "Transparent Communication",
		description: "Clear estimates, project updates, and responsive support.",
	},
	{
		icon: ShieldCheck,
		title: "Safety & Compliance",
		description: "Adherence to all safety codes and commercial standards.",
	},
];

const WhyChooseUs = () => {
	return (
		<Section className="py-18 lg:py-18">
			<CenterDiv>
				<FadeIn className="space-y-2">
					<H2>Why Choose Us?</H2>
					<span className="block text-muted-foreground mb-6">
						With a focus on commercial projects, we deliver reliable, efficient,
						and safe electrical solutions that keep your business running
						smoothly. Our experienced team prioritizes quality, communication,
						and minimal disruption to your operations.
					</span>
				</FadeIn>
				<StaggeredList className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
					{whyData.map((item) => (
						<DataCard
							key={item.title.toLowerCase().replace(" ", "-")}
							icon={item.icon}
							title={item.title}
							description={item.description}
						/>
					))}
				</StaggeredList>
			</CenterDiv>
		</Section>
	);
};

export default WhyChooseUs;

export const DataCard = ({
	icon: Icon,
	title,
	description,
}: {
	icon: LucideIcon;
	title: string;
	description: string;
}) => {
	return (
		<div className="group flex flex-col justify-center items-center gap-6 p-5 text-secondary rounded-md bg-primary/10 h-full shadow-md shadow-transparent hover:shadow-primary-darker/30 transition-all duration-300">
			<div className="flex items-center p-3 bg-primary group-hover:bg-primary-darker group-hover:scale-105 rounded-full transition-all">
				<Icon
					size={ICONSIZE}
					strokeWidth={STROKEWIDTH}
					className="text-white"
				/>
			</div>

			<span className="text-center font-medium">{title}</span>
			<p className="text-center text-sm">{description}</p>
		</div>
	);
};
