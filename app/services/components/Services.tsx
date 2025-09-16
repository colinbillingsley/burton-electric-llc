import CenterDiv from "@/components/CenterDiv";
import { StaggeredList } from "@/components/motion/StaggerdList";
import Section from "@/components/Section";
import React from "react";
import { ServiceCard } from "./ServiceCard";
import H2 from "@/components/H2";
import { FadeIn } from "@/components/motion/FadeIn";

const services: { title: string; desc: string; href: string }[] = [
	{
		title: "Panel Upgrades",
		desc: "If you're looking for an electrical contractor who can replace your electrical panel with a more efficient and reliable one, contact Burton Electric LLC. We are the licensed, bonded, and insured team of contractors you can count on.",
		href: "/services/panel-upgrades",
	},
	{
		title: "Electrical Contractor",
		desc: "Whether you are building a brand-new home or commercial space or remodeling an existing one, you are going need to get a professional, licensed and insured electrical contractor.",
		href: "/services/electrical-contractor",
	},
	{
		title: "In Floor Heating",
		desc: "There's no question that there's nothing worse than setting foot on an ice-cold floor first thing in the morning. If you have had too many days ruined by insufficient heat where you need it most, then you might be interested to know that your floor could become the heat source for your whole home or business.",
		href: "/services/in-floor-heating",
	},
	{
		title: "Landscape Lighting",
		desc: "You no doubt already know what a well designed and maintained landscape can do for your commercial or residential property, but are you getting all that you can out your landscape if it's not properly lit?",
		href: "/services/landscape-lighting",
	},
	{
		title: "Lighting Installation",
		desc: "Burton Electric LLC is so much more than your average commercial and residential electrical company. Though we take great pride in the electrical work we do, we are always thrilled when we get to combine our trade with our flair for design.",
		href: "/services/lighting-installation",
	},
	{
		title: "New Construction Electrical",
		desc: "If you have built a home or commercial building from the ground up before, you know how important it is to hire the right contractors.",
		href: "/services/new-construction-electrical",
	},
	{
		title: "Appliance Installation",
		desc: "If you have just purchased or are about to buy a brand-new appliance for your home or local business, there's no question that you are excited for the day it arrives so that you can enjoy your upgraded amenities.",
		href: "/services/appliance-installation",
	},
	{
		title: "Electrical Repair",
		desc: "If you are a homeowner, you know that there's nothing that detracts from your comfort more than when your electricity isn't working properly.",
		href: "/services/electrical-repair",
	},
	{
		title: "Lighting Electrician",
		desc: "The way a home or business is lit can drastically change its perception and function. Placement and type are two very important aspects of making sure that your home or business is lit in a way to best serve its intended purpose.",
		href: "/services/lighting-electrician",
	},
	{
		title: "Electrical Retrofitting",
		desc: "Have you started to notice that your electricity utility bills have been steadily rising even though you haven't changed anything about your usage in your home or local business?",
		href: "/services/electrical-retrofitting",
	},
	{
		title: "Electrician",
		desc: "When you need electrical work done on your residential or commercial property, the only person who should touch it is a licensed electrician. Of course, we understand that there are plenty temptations to pursue alternatives.",
		href: "/services/electrician",
	},
	{
		title: "Rewiring Service",
		desc: "Burton Electric LLC has been proud to provide both commercial and residential rewiring services to homes and businesses in the area.",
		href: "/services/rewiring-service",
	},
	{
		title: "Standby Generators",
		desc: "Whether you run a business, use sensitive medical equipment at home or simply want the peace of mind of never losing power, a standby generator might be the best purchase you ever make.",
		href: "/services/standby-generators",
	},
	{
		title: "Surge Protection",
		desc: "Today's homes and businesses are filled with sensitive electronics that are easily damaged by common power surges, spikes or impulses.",
		href: "/services/surge-protection",
	},
	{
		title: "Security Lighting",
		desc: "Is your home or business adequately protected against intruders and vandals? If you don't have a professionally installed security lighting system in place, you might want to think about it for a while before you answer the question.",
		href: "/services/security-lighting",
	},
	{
		title: "Solar Panels",
		desc: "Solar panels have been around since the 1970s. The first few solar panels weren't especially good at converting solar energy into electricity, but a lot of progress has been made since then.",
		href: "/services/solar-panels",
	},
	{
		title: "Residential Ceiling Fan Installation",
		desc: "Whether you want a ceiling fan in your kitchen, bathroom, bedroom or even outdoors, it is almost always a smart investment.",
		href: "/services/residential-ceiling-fan-installation",
	},
	{
		title: "Commercial Ceiling Fan Installation",
		desc: "When was the last time you asked yourself, “Is my commercial space equipped with everything it needs to make sure all of my employees, tenants and or customers are as comfortable as can be?”",
		href: "/services/commercial-ceiling-fan-installation",
	},
	{
		title: "Hot Tub and Sauna Electrical Services",
		desc: "Do you have difficulty relaxing or making time for yourself? If you do, adding a hot tub or sauna to your home can be a great way of making time to relax a lot easier.",
		href: "/services/hot-tub-and-sauna-electrical-services",
	},
];

const Services = () => {
	return (
		<Section my="sm">
			<CenterDiv>
				<FadeIn className="mb-6">
					<H2>Learn More</H2>
					<p className="text-primary font-semibold">
						About Burton Electric LLC Services
					</p>
				</FadeIn>

				<StaggeredList
					amount={0.1}
					className="grid grid-cols-1 md:grid-cols-2 gap-4"
				>
					{services.map((service) => (
						<ServiceCard
							key={service.href}
							href={service.href}
							title={service.title}
							desc={service.desc}
						/>
					))}
				</StaggeredList>
			</CenterDiv>
		</Section>
	);
};

export default Services;
