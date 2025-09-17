import CenterDiv from "@/components/CenterDiv";
import H2 from "@/components/H2";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggeredList } from "@/components/motion/StaggerdList";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import {
	Building2,
	CheckCircle,
	CircuitBoard,
	Home,
	LucideIcon,
	Wrench,
	Zap,
} from "lucide-react";
import Link from "next/link";
import React from "react";

type ServiceType = {
	icon: LucideIcon;
	title: string;
	description: string;
	features: string[];
}[];

const services: ServiceType = [
	{
		icon: Building2,
		title: "Commercial Services",
		description:
			"We provide comprehensive electrical solutions for businesses, from commercial buildouts to restaurant and retail spaces.",
		features: [
			"Electric System Installation",
			"Lighting Upgrades",
			"Routine Maintenance",
			"Emergency Repairs",
		],
	},
	{
		icon: Home,
		title: "Residential Services",
		description: "Safe, reliable electrical work for your home and family.",
		features: [
			"Electrical Repairs",
			"Electrical Installations",
			"Electrical Upgrades",
			"Circuit Installation",
		],
	},
];

const OurServices = () => {
	return (
		<Section className="py-18 lg:py-18">
			<CenterDiv className="space-y-12">
				<FadeIn>
					<H2>Our Services</H2>
					<span className="text-muted-foreground text-base">
						We specialize in a wide range of commercial and residential
						electrical services, including:
					</span>
				</FadeIn>

				<StaggeredList className="grid md:grid-cols-2 gap-8">
					{services.map((service, index) => (
						<div key={index} className="group h-full">
							<div className="h-full bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-primary/25 hover:shadow-xl transition-all duration-300">
								<div className="bg-primary w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-primary-darker transition-all duration-300">
									<service.icon className="h-8 w-8 text-white " />
								</div>

								<h3 className="text-2xl font-bold text-gray-900 mb-4">
									{service.title}
								</h3>
								<p className="text-gray-600 mb-6 text-lg leading-relaxed">
									{service.description}
								</p>

								<div className="space-y-3">
									{service.features.map((feature, idx) => (
										<div key={idx} className="flex items-center">
											<CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
											<span className="text-gray-700">{feature}</span>
										</div>
									))}
								</div>
							</div>
						</div>
					))}
				</StaggeredList>

				{/* Additional Services Grid */}
				<StaggeredList className="grid md:grid-cols-3 gap-6">
					{[
						{
							icon: CircuitBoard,
							title: "Circuit Installations",
							desc: "Reliable power circuits for appliances & equipment",
						},
						{
							icon: Zap,
							title: "Power Distributions",
							desc: "Reliable electrical power distribution for commercial buildings",
						},
						{
							icon: Wrench,
							title: "Troubleshooting",
							desc: "Fast, accurate fixes for electrical issues",
						},
					].map((item, index) => (
						<div
							key={index}
							className="h-full bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300"
						>
							<div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
								<item.icon className="h-6 w-6 text-primary" />
							</div>
							<h4 className="text-lg font-semibold text-gray-900 mb-2">
								{item.title}
							</h4>
							<p className="text-gray-600 text-sm">{item.desc}</p>
						</div>
					))}
				</StaggeredList>

				<FadeIn>
					<div className="flex items-center justify-center">
						<Link href={"/services"} className="w-full md:w-fit">
							<Button size={"lg"} className="w-full md:w-fit">
								View More
							</Button>
						</Link>
					</div>
				</FadeIn>
			</CenterDiv>
		</Section>
	);
};

export default OurServices;
