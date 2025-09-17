import CenterDiv from "@/components/CenterDiv";
import H2 from "@/components/H2";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggeredList } from "@/components/motion/StaggerdList";
import Section from "@/components/Section";
import { Zap } from "lucide-react";
import React from "react";

const commercialServices: {
	title: string;
	description: string;
	imageUrl?: string;
	alt?: string;
}[] = [
	{
		title: "Electrical Systems Installations",
		description:
			"Designing and installing electrical systems for new construction or major renovations, including wiring, panels, and circuit breakers.",
	},
	{
		title: "Lighting Solutions",
		description:
			"Installing and upgrading lighting systems, including energy-efficient LED lighting, emergency lighting, and exterior lighting.",
	},
	{
		title: "Electrical Maintenance",
		description:
			"Regular maintenance to keep systems running efficiently, such as inspecting wiring, testing electrical components, and identifying potential issues before they cause downtime.",
	},
	{
		title: "Upgrades and Retrofits",
		description:
			"Modernizing older electrical systems to meet current safety standards, increase energy efficiency, or accommodate new technology and equipment.",
	},
	{
		title: "Power Distribution",
		description:
			"Installing and maintaining systems that distribute power throughout a commercial building, ensuring all areas are adequately supplied and meet regulatory codes.",
	},
	{
		title: "Backup Power Solutions",
		description:
			"Installing and maintaining backup power systems like generators and uninterruptible power supplies (UPS) to keep businesses running smoothly during power outages.",
	},
	{
		title: "Troubleshooting and Repairs",
		description:
			"Quickly diagnosing and repairing electrical issues to prevent downtime, including issues with circuits, wiring, and appliances.",
	},
	{
		title: "Data and Communication Wiring",
		description:
			"Installing wiring for network systems, communication lines, security systems, and other essential technology. We understand that downtime is costly, so we work around your schedule to minimize disruption while delivering high-quality results.",
	},
];

const residentialServices: {
	title: string;
	description: string;
	imageUrl?: string;
	alt?: string;
}[] = [
	{
		title: "Electrical Installations",
		description:
			"From lighting and outlets to ceiling fans and home appliances, we handle all types of installations to suit your needs.",
	},
	{
		title: "Upgrades and Replacements",
		description:
			"Upgrading electrical panels, rewiring outdated systems, or replacing old fixtures to enhance your home's safety and efficiency.",
	},
	{
		title: "Lighting Solutions",
		description: `Custom lighting design and installation, including indoor, outdoor, and energy-efficient LED lighting options.
Electrical Troubleshooting & Repairs: Diagnosing and fixing electrical issues like flickering lights, tripped breakers, or faulty outlets, ensuring your home is safe and fully functional.`,
	},
	{
		title: "Home Safety Inspections",
		description:
			"Thorough inspections to identify potential hazards, ensuring compliance with safety codes and preventing electrical problems before they occur.",
	},
	{
		title: "Generator and Backup Systems",
		description:
			"Installing backup generators and uninterruptible power supplies (UPS) to keep your home powered during outages.",
	},
];

const ComResServices = () => {
	return (
		<Section my="sm">
			<CenterDiv className="grid grid-cols-1 lg:grid-cols-2 gap-10">
				<div>
					<FadeIn>
						<H2>Commercial Services</H2>
						<p className="text-muted-foreground my-3">
							At Burton Electric LLC, we specialize in providing top-tier
							electrical services for businesses, from commercial buildouts to
							restaurant and retail spaces. Our licensed and experienced
							electricians are committed to ensuring your commercial
							property&apos;s electrical systems run smoothly and safely.
							Whether you need installation, maintenance, or repairs, we offer
							prompt, reliable solutions tailored to meet the unique needs of
							your business.
						</p>
					</FadeIn>
					<StaggeredList amount={0.1} className="space-y-3">
						{commercialServices.map((service) => (
							<div key={service.title.toLowerCase().replace(" ", "-")}>
								<div className="flex items-center gap-2">
									<div className="flex items-center p-2 rounded-full bg-primary/10 w-fit">
										<Zap className="text-primary" size={16} />
									</div>
									<p>{service.title}</p>
								</div>
							</div>
						))}
					</StaggeredList>
				</div>
				<div>
					<FadeIn>
						<H2>Residential Services</H2>
						<p className="text-muted-foreground my-3">
							At Burton Electric LLC, we provide reliable and professional
							electrical services for homeowners. Whether you need a simple
							repair, an electrical upgrade, or a complete installation, our
							licensed electricians are here to ensure your home&apos;s
							electrical systems are safe, efficient, and up to code.
						</p>
					</FadeIn>
					<StaggeredList amount={0.1} className="space-y-3">
						{residentialServices.map((service) => (
							<div key={service.title.toLowerCase().replace(" ", "-")}>
								<div className="flex items-center gap-2">
									<div className="flex items-center p-2 rounded-full bg-primary/10 w-fit">
										<Zap className="text-primary" size={16} />
									</div>
									<p>{service.title}</p>
								</div>
							</div>
						))}
					</StaggeredList>
				</div>
			</CenterDiv>
		</Section>
	);
};

export default ComResServices;
