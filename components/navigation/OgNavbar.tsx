"use client";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import NavLink from "./NavLink";
import {
	ChevronDown,
	ChevronUp,
	Facebook,
	Instagram,
	LucideIcon,
	Menu,
} from "lucide-react";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { SlideInFromLeft } from "../motion/SlideInFromLeft";
import Link from "next/link";
import { StaggeredList } from "../motion/StaggerdList";
import { FadeIn } from "../motion/FadeIn";

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

const socialLinks: { icon: LucideIcon; href: string }[] = [
	{
		icon: Instagram,
		href: "https://www.instagram.com/burtonelectric/",
	},
	{
		icon: Facebook,
		href: "https://www.facebook.com/profile.php?id=100063890317405",
	},
];

const MotionNavigationMenuItem = motion(NavigationMenuItem);

const OgNavbar = () => {
	const [showServices, setShowServices] = useState(false);
	const [showAbout, setShowAbout] = useState(false);
	const pathname = usePathname();

	const [scrolled, setScrolled] = useState(false);

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

	const isAboutActive: boolean = pathname.includes("/about-us");
	const isServiceActive: boolean = pathname.includes("/services");

	function isAbout(name: string) {
		return name === "About";
	}

	function closeTabs(): void {
		setShowAbout(false);
		setShowServices(false);
	}

	return (
		<nav
			className={`p-3 sticky top-0 left-0 w-full z-50 transition-all duration-200 shadow-md flex items-center justify-between ${
				scrolled
					? "bg-white/75 backdrop-blur-xl shadow-transparent"
					: "bg-transparent shadow"
			}`}
		>
			<div className="flex items-center gap-8">
				<SlideInFromLeft amount={0}>
					<Image
						src={"/burton-logo-dark.png"}
						alt="Burton Electric Logo"
						width={55}
						height={55}
					/>
				</SlideInFromLeft>

				{/* Web Navigation */}
				<NavigationMenu className="hidden md:block">
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
										<NavigationMenuTrigger
											className={`bg-transparent text-muted-foreground transition-all ${
												isAbout(item.name)
													? `${isAboutActive ? "text-primary font-bold" : ""}`
													: `${isServiceActive ? "text-primary font-bold" : ""}`
											}`}
										>
											{item.name}
										</NavigationMenuTrigger>
										<div className="relative">
											<div className="absolute top-0 -left-50">
												<NavigationMenuContent className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
													{item.subLinks.map((sub) => (
														<NavigationMenuLink
															key={sub.href}
															asChild
															className="justify-center hover:bg-accent p-4"
														>
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
				</NavigationMenu>
			</div>

			<StaggeredList className="hidden md:flex items-center gap-2 text-primary py-0">
				{socialLinks.map((link) => (
					<Link
						href={link.href}
						target="_blank"
						className="flex items-center p-2 rounded-full hover:bg-primary-darker/10 transition-colors"
						key={link.href}
					>
						<link.icon strokeWidth={1.25} />
					</Link>
				))}
			</StaggeredList>

			{/* Mobile Navigation */}
			<div className="block md:hidden">
				<Sheet onOpenChange={() => closeTabs()}>
					<SheetTrigger>
						<FadeIn>
							<Menu size={28} className="block text-primary" />
						</FadeIn>
					</SheetTrigger>
					<SheetContent
						side="right"
						className="p-4 flex flex-col gap-1 overflow-y-auto"
					>
						<SheetTitle className="mb-6">Burton Electric LLC</SheetTitle>
						<ul>
							{navLinks.map((item) => (
								<li key={`/${item.name.toLowerCase().replace(" ", "-")}`}>
									{item.subLinks ? (
										<div className="flex flex-col">
											<button
												onClick={() => {
													if (isAbout(item.name)) {
														setShowAbout((prev) => !prev);
													} else {
														setShowServices((prev) => !prev);
													}
												}}
												className={`flex items-center gap-2 text-sm font-medium p-4 hover:bg-accent transition-all outline-none ${
													isAbout(item.name)
														? isAboutActive
															? "text-primary"
															: "text-muted-foreground"
														: isServiceActive
														? "text-primary"
														: "text-muted-foreground"
												}`}
											>
												{item.name}
												{isAbout(item.name) ? (
													showAbout ? (
														<ChevronUp size={18} />
													) : (
														<ChevronDown size={18} />
													)
												) : showServices ? (
													<ChevronUp size={18} />
												) : (
													<ChevronDown size={18} />
												)}
											</button>
											{/* Sub-links: show/hide based on toggle */}
											{isAbout(item.name)
												? showAbout && (
														<div className="flex flex-col gap-1 pl-4">
															{item.subLinks.map((link) => (
																<SheetClose asChild key={link.href}>
																	<NavLink
																		href={link.href}
																		className="block text-sm p-4 hover:bg-accent transition-all"
																	>
																		{link.name}
																	</NavLink>
																</SheetClose>
															))}
														</div>
												  )
												: showServices && (
														<div className="flex flex-col gap-1 pl-4">
															{item.subLinks.map((link) => (
																<SheetClose asChild key={link.href}>
																	<NavLink
																		href={link.href}
																		className="block text-sm p-4 hover:bg-accent transition-all"
																	>
																		{link.name}
																	</NavLink>
																</SheetClose>
															))}
														</div>
												  )}
										</div>
									) : (
										<SheetClose asChild>
											<NavLink
												className="block text-sm p-4 hover:bg-accent transition-all"
												href={item.href}
											>
												{item.name}
											</NavLink>
										</SheetClose>
									)}
								</li>
							))}
						</ul>
						<ul className="flex items-center gap-2 text-primary mt-auto">
							{socialLinks.map((link) => (
								<Link
									href={link.href}
									target="_blank"
									className="flex items-center p-2 rounded-full hover:bg-primary-darker/10 transition-colors"
									key={link.href}
								>
									<link.icon strokeWidth={1.25} />
								</Link>
							))}
						</ul>
					</SheetContent>
				</Sheet>
			</div>
		</nav>
	);
};

export default OgNavbar;
