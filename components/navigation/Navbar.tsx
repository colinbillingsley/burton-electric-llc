"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { StaggeredList } from "../motion/StaggerdList";
import NavLink from "./NavLink";
import { SlideInFromLeft } from "../motion/SlideInFromLeft";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NavigationMenuItem } from "@/components/ui/navigation-menu";
import { motion } from "framer-motion";
import DropdownLink from "./DropdownLink";
import { SlideUp } from "../motion/SlideUp";

type LinkProps = {
	href: string;
	name: string;
	subLinks?: { href: string; name: string }[];
}[];

const navLinks: LinkProps = [
	{ href: "/", name: "Home" },
	{
		href: "",
		name: "About",
		subLinks: [
			{ href: "/about-us", name: "About Us" },
			{ href: "/about-us/service-areas", name: "Service Areas" },
		],
	},
	{
		href: "",
		name: "Services",
		subLinks: [
			{
				name: "Our Services",
				href: "/services",
			},
			{
				name: "Panel Upgrades",
				href: "/services/panel-upgrades",
			},
			{
				name: "Electrical Contractor",
				href: "/services/electrical-contractor",
			},
			{
				name: "In Floor Heating",
				href: "/services/in-floor-heating",
			},
			{
				name: "Landscape Lighting",
				href: "/services/landscape-lighting",
			},
			{
				name: "Lighting Installation",
				href: "/services/lighting-installation",
			},
			{
				name: "New Construction Electrical",
				href: "/services/new-construction-electrical",
			},
			{
				name: "Appliance Installation",
				href: "/services/appliance-installation",
			},
			{
				name: "Electrical Repair",
				href: "/services/electrical-repair",
			},
			{
				name: "Electrical Retrofitting",
				href: "/services/electrical-retrofitting",
			},
			{
				name: "Electrician",
				href: "/services/electrician",
			},
			{
				name: "Lighting Electrician",
				href: "/services/lighting-electrician",
			},
			{
				name: "Rewiring Service",
				href: "/services/rewiring-service",
			},
			{
				name: "Standby Generators",
				href: "/services/standby-generators",
			},
			{
				name: "Surge Protection",
				href: "/services/surge-protection",
			},
			{
				name: "Security Lighting",
				href: "/services/security-lighting",
			},
			{
				name: "Solar Panels",
				href: "/services/solar-panels",
			},
			{
				name: "Commercial Ceiling Fan Installation",
				href: "/services/commercial-ceiling-fan-installation",
			},
			{
				name: "Residential Ceiling Fan Installation",
				href: "/services/residential-ceiling-fan-installation",
			},
			{
				name: "Hot Tub and Sauna Electrical Services",
				href: "/services/hot-tub-and-sauna-electrical-services",
			},
		],
	},
	{ href: "/faq", name: "FAQ" },
	{ href: "/gallery", name: "Gallery" },
	{ href: "/contact-us", name: "Contact" },
];

const MotionNavigationMenuItem = motion(NavigationMenuItem);

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);

	useEffect(() => {
		// detect if screen is md or larger
		const hasTopHeader = window.innerWidth >= 768;
		const threshold = hasTopHeader ? 40 : 1;

		// Initialize state based on current scroll
		setScrolled(window.scrollY > threshold);

		const handleScroll = () => {
			setScrolled(window.scrollY > threshold);
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav
			className={`p-3 sticky top-0 left-0 w-full z-50 transition-all duration-200 shadow-md ${
				scrolled
					? "bg-white/75 backdrop-blur-xl shadow-transparent"
					: "bg-transparent shadow"
			}`}
		>
			<div className="flex items-center justify-between">
				<SlideInFromLeft amount={0}>
					<Image
						src="/burton-logo.png"
						alt="Burton Electric Logo"
						width={55}
						height={55}
					/>
				</SlideInFromLeft>

				{/* Desktop Links */}

				<SlideUp>
					<ul className="hidden md:flex items-center justify-center gap-3 text-sm">
						{navLinks.map((link) => (
							<li key={link.name.toLowerCase().replace(" ", "-")}>
								{link.subLinks ? (
									<DropdownLink name={link.name} subLinks={link.subLinks} />
								) : (
									<NavLink href={link.href}>{link.name}</NavLink>
								)}
							</li>
						))}
					</ul>
				</SlideUp>
				{/* <NavigationMenu>
					<NavigationMenuList>
						{navLinks.map((item, i) => (
							<MotionNavigationMenuItem
								key={`/${item.name.toLowerCase().replace(" ", "-")}`}
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: i * 0.1 }}
							>
								{item.subLinks ? (
									<>
										<NavigationMenuTrigger>{item.name}</NavigationMenuTrigger>
										<div className="relative">
											<div className="absolute top-0 -left-50">
												<NavigationMenuContent className="grid grid-cols-1 gap-2 w-[400px] md:w-[400px] lg:w-[400px]">
													{item.subLinks.map((sub) => (
														<NavigationMenuLink key={sub.href} asChild>
															<NavLink href={sub.href}>{sub.name}</NavLink>
														</NavigationMenuLink>
													))}
												</NavigationMenuContent>
											</div>
										</div>
									</>
								) : (
									<NavigationMenuLink asChild>
										<NavLink href={item.href}>{item.name}</NavLink>
									</NavigationMenuLink>
								)}
							</MotionNavigationMenuItem>
						))}
					</NavigationMenuList>
				</NavigationMenu> */}

				{/* Mobile Menu Toggle */}
				<button
					className="md:hidden p-2 rounded-md"
					onClick={() => setMobileOpen(!mobileOpen)}
				>
					{mobileOpen ? <X size={24} /> : <Menu size={24} />}
				</button>
			</div>

			{/* Mobile Menu */}
			{mobileOpen && (
				<div className="md:hidden mt-4 min-h-screen h-full bg-white shadow-lg rounded-md p-4 overflow-y-auto">
					{navLinks.map((link) => (
						<div key={link.href} className="mb-2">
							{link.href ? (
								<Link
									key={link.href}
									href={link.href}
									className="block px-2 py-3 font-medium hover:bg-gray-50"
								>
									{link.name}
								</Link>
							) : (
								<p
									key={link.name.toLowerCase()}
									className="px-2 py-3 hover:bg-gray-50 hover:cursor-default transition-colors"
								>
									{link.name}
								</p>
							)}
							{/* Sub-links */}
							{link.subLinks && (
								<div className="flex flex-col gap-1">
									{link.subLinks.map((sub) => (
										<Link
											key={sub.href}
											href={sub.href}
											className="block px-4 py-3 text-sm text-gray-600 hover:bg-gray-50"
										>
											{sub.name}
										</Link>
									))}
								</div>
							)}
						</div>
					))}
				</div>
			)}
		</nav>
	);
};

export default Navbar;
