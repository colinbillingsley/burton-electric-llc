import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Building, HomeIcon, Zap } from "lucide-react";
import React from "react";
import Image from "next/image";
import Section from "../Section";
import H2 from "../H2";
import P from "../P";

const ICONSIZE = 42;
const STROKEWIDTH = 1.75;

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

const Services = () => {
	return (
		<Section spacing="large">
			<div className="grid gap-4 md:grid-cols-2 my-12">
				<Card>
					<CardHeader>
						<CardTitle className="flex items-center gap-2 text-xl font-medium">
							<Building size={ICONSIZE} strokeWidth={STROKEWIDTH} />
							<span>Commercial Services</span>
						</CardTitle>
					</CardHeader>
					<CardContent>
						We provide comprehensive electrical solutions for businesses, from
						commercial buildouts to restaurant and retail spaces. Our expertise
						includes electrical system installations, lighting upgrades, routine
						maintenance, and emergency repairs to keep your business running
						smoothly.
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle className="flex items-center gap-2 text-xl font-medium">
							<HomeIcon size={ICONSIZE} strokeWidth={STROKEWIDTH} />
							<span>Residential Services</span>
						</CardTitle>
					</CardHeader>
					<CardContent>
						We offer electrical repairs, installations, and upgrades for
						homeowners, including lighting design, electrical panel upgrades,
						circuit installations, and troubleshooting for all your home
						electrical needs.
					</CardContent>
				</Card>
			</div>

			<div className="w-full bg-primary text-white px-4 py-8 rounded-md space-y-4">
				<P>
					As a locally owned and operated business we take pride in serving our
					community, making Nashville a safer and brighter place. Contact us
					today for a free consultation and let us help you with all your
					electrical needs!
				</P>
				<a
					href="/contact"
					className="group flex items-center gap-2 text-primary bg-white px-4 py-2 font-medium rounded-lg transition-all w-fit"
				>
					<span>Contact Us</span>
					<ArrowRight
						size={18}
						className="group-hover:translate-x-1 transition-all"
					/>
				</a>
			</div>

			<Section
				spacing="large"
				className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center"
			>
				<div className="space-y-4">
					<H2>Commercial Services</H2>
					<P>
						At Burton Electric LLC, we specialize in providing top-tier
						electrical services for businesses, from commercial buildouts to
						restaurant and retail spaces. Our licensed and experienced
						electricians are committed to ensuring your commercial
						property&#39;s electrical systems run smoothly and safely. Whether
						you need installation, maintenance, or repairs, we offer prompt,
						reliable solutions tailored to meet the unique needs of your
						business.
					</P>

					<div className="flex flex-col md:flex-row items-center justify-between gap-10">
						<div className="space-y-6 w-full">
							<p className="text-xl">Our commercial services include:</p>
							<ul className="flex flex-col gap-2">
								{commercialServices.map((service, index) => (
									<li
										key={`${service.title.toLowerCase().split(" ")}-${index}`}
									>
										<div className="flex items-center gap-2">
											<Zap
												size={12}
												strokeWidth={1.75}
												className="text-primary"
											/>
											<p className="font-medium">{service.title}</p>
										</div>
										<P>{service.description}</P>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
				<img src="/home1.png" alt="picture of nikolas tesla" loading="lazy" />
			</Section>

			<Section className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
				<img
					src="/tesla-headshot.jpg"
					alt="picture of nikolas tesla"
					loading="lazy"
					className="order-2 md:order-1"
				/>
				<div className="space-y-4 order-1 md:order-2">
					<H2>Residential Electrical Services</H2>
					<P>
						At Burton Electric LLC, we provide reliable and professional
						electrical services for homeowners. Whether you need a simple
						repair, an electrical upgrade, or a complete installation, our
						licensed electricians are here to ensure your home&#39;s electrical
						systems are safe, efficient, and up to code.
					</P>

					<div className="flex flex-col md:flex-row items-center justify-between gap-10">
						<div className="space-y-6 w-full">
							<p className="text-xl">We specialize in:</p>
							<ul className="flex flex-col gap-2">
								{residentialServices.map((service, index) => (
									<li
										key={`${service.title.toLowerCase().split(" ")}-${index}`}
									>
										<div className="flex items-center gap-2">
											<Zap
												size={12}
												strokeWidth={1.75}
												className="text-primary"
											/>
											<p className="font-medium">{service.title}</p>
										</div>
										<P>{service.description}</P>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</Section>
		</Section>
	);
};

export default Services;
