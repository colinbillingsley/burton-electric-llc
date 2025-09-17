"use client";

import {
	ArrowRight,
	FileBadge,
	LucideIcon,
	Phone,
	ShieldCheck,
	Trophy,
	Zap,
} from "lucide-react";
import { burtonPhone } from "@/data/generalInfo";
import Link from "next/link";
import { StaggeredList } from "../motion/StaggerdList";
import { SlideDown } from "../motion/SlideDown";
import { SlideUp } from "../motion/SlideUp";
import Section from "../Section";
import { Button } from "../ui/button";
import Image from "next/image";

const ICONSIZE = 48;
const STROKEWIDTH = 1.25;

type StatsType = { title: string; description: string; icon: LucideIcon }[];

const stats: StatsType = [
	{
		title: "Decades of Experience",
		description:
			"With over 25 years in the industry, our team brings expert knowledge and reliable craftsmanship to every project.",
		icon: Trophy,
	},
	{
		title: "Licensed & Certified",
		description:
			"Our electricians are fully licensed and certified to ensure all installations meet code and safety standards.",
		icon: FileBadge,
	},
	{
		title: "Safety & Satisfaction",
		description:
			"We prioritize safety and customer satisfaction in every job—big or small. You can trust our team to put your needs first.",
		icon: ShieldCheck,
	},
	{
		title: "Efficient & High Quality",
		description:
			"From quick troubleshooting to large-scale installs, we deliver high-quality work efficiently—saving you time and money.",
		icon: Zap,
	},
];

const Hero = () => {
	return (
		<Section className="relative h-full py-0 lg:py-0">
			<div className={`relative h-full py-44 lg:py-56`}>
				{/* Background image */}
				<div className="absolute inset-0 z-1">
					<Image
						src="/hero-bg2.jpg"
						alt="Lightbulbs in dark room"
						fill
						priority
						className="object-cover"
					/>
					Overlay
					<div className="absolute inset-0 bg-black/50 z-3" />
				</div>

				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-2">
					<div>
						<div className="text-start mb-16">
							<SlideDown>
								<h1 className="text-6xl text-white md:text-8xl font-bold mb-1">
									Burton Electric LLC
								</h1>
							</SlideDown>
							<SlideUp>
								<span className="text-2xl text-white md:text-3xl font-semibold">
									25+ Years of Trusted Electrical Service in Nashville, TN and
									surrounding areas
								</span>

								<p className="text-base text-white max-w-4xl">
									From residential repairs to complex commercial installations,
									Burton Electric LLC is built on integrity, safety, and
									satisfaction
								</p>
							</SlideUp>
						</div>

						<StaggeredList className="flex justify-start items-center gap-4 lg:mb-48">
							<Link prefetch href="/about-us" className="group">
								<Button size={"lg"}>
									<p>Learn More</p>
									<ArrowRight className="group-hover:translate-x-1 transition-transform duration-[250ms] ease-in-out" />
								</Button>
							</Link>
							<a href={`tel:+16158301111`}>
								<Button size={"lg"} variant={"outline"}>
									<Phone />
									<p>Call: {burtonPhone}</p>
								</Button>
							</a>
						</StaggeredList>
					</div>
				</div>
			</div>
			{/* Stats */}
			<div className="lg:absolute -bottom-15 left-0 right-0 flex justify-center lg:mx-4 z-5">
				<StaggeredList
					amount={0.1}
					className="grid grid-cols-2 gap-4 lg:gap-0 lg:grid-cols-4 shadow-lg bg-white lg:rounded-lg overflow-hidden w-full py-4"
				>
					{stats.map((stat, index) => {
						let borderClasses = "";

						// Mobile/tablet (2 cols): add border to items 0 and 2 (1st col of each row)
						if (index % 2 === 0) {
							borderClasses += " border-r-2 border-primary/25";
						}

						// Large screens (4 cols): add border to items 0,1,2 (all except last)
						if (index < stats.length - 1) {
							borderClasses += " lg:border-r-2 lg:border-primary/25";
						}

						return (
							<div
								key={index}
								className={`flex flex-col gap-6 items-center p-6 h-full ${borderClasses}`}
							>
								<div className="flex flex-col items-center gap-3">
									<div className="size-20 flex items-center justify-center bg-white rounded-full shadow-md">
										<stat.icon
											size={ICONSIZE}
											strokeWidth={STROKEWIDTH}
											className="text-primary"
										/>
									</div>
									<p className="font-medium text-center">{stat.title}</p>
								</div>
								<p className="text-sm text-center text-muted-foreground max-w-xs">
									{stat.description}
								</p>
							</div>
						);
					})}
				</StaggeredList>
			</div>
		</Section>
	);
};

export default Hero;
