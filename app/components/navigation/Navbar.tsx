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
	Mail,
	MapPin,
	Menu,
	Phone,
} from "lucide-react";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

type LinkProps = { title: string; href: string }[];

const aboutLinks: LinkProps = [
	{
		title: "About Us",
		href: "/about-us",
	},
	// {
	// 	title: "Blog",
	// 	href: "/about/blog",
	// },
	{
		title: "Service Areas",
		href: "/about-us/service-areas",
	},
	// {
	// 	title: "Testimonials",
	// 	href: "/about/testimonials",
	// },
];

const serviceLinks: LinkProps = [
	{
		title: "Our Services",
		href: "/services",
	},
	{
		title: "Panel Upgrades",
		href: "/services/panel-upgrades",
	},
	{
		title: "Electrical Contractor",
		href: "/services/electrical-contractor",
	},
	{
		title: "In Floor Heating",
		href: "/services/in-floor-heating",
	},
	{
		title: "Landscape Lighting",
		href: "/services/landscape-lighting",
	},
	{
		title: "Lighting Installation",
		href: "/services/lighting-installation",
	},
	{
		title: "New Construction Electrical",
		href: "/services/new-construction-electrical",
	},
	{
		title: "Appliance Installation",
		href: "/services/appliance-installation",
	},
	{
		title: "Electrical Repair",
		href: "/services/electrical-repair",
	},
	{
		title: "Electrical Retrofitting",
		href: "/services/electrical-retrofitting",
	},
	{
		title: "Electrician",
		href: "/services/electrician",
	},
	{
		title: "Lighting Electrician",
		href: "/services/lighting-electrician",
	},
	{
		title: "Rewiring Service",
		href: "/services/rewiring-service",
	},
	{
		title: "Standby Generators",
		href: "/services/standby-generators",
	},
	{
		title: "Surge Protection",
		href: "/services/surge-protection",
	},
	{
		title: "Security Lighting",
		href: "/services/security-lighting",
	},
	{
		title: "Solar Panels",
		href: "/services/solar-panels",
	},
	{
		title: "Commercial Ceiling Fan Installation",
		href: "/services/commercial-ceiling-fan-installation",
	},
	{
		title: "Residential Ceiling Fan Installation",
		href: "/services/residential-ceiling-fan-installation",
	},
	{
		title: "Hot Tub and Sauna Electrical Services",
		href: "/services/hot-tub-and-sauna-electrical-services",
	},
];

const Navbar = () => {
	const [showServices, setShowServices] = useState(false);
	const [showAbout, setShowAbout] = useState(false);
	const pathname = usePathname();

	const isAboutActive: boolean = pathname.includes("/about-us");
	const isServiceActive: boolean = pathname.includes("/services");

	function closeTabs(): void {
		setShowAbout(false);
		setShowServices(false);
	}

	return (
		<div className="p-3 md:p-4 fixed top-0 left-0 z-9999 w-full bg-white border-b border-primary shadow-lg font-[family-name:var(--font-montserrat)]">
			<nav className="w-full flex items-center justify-between">
				<div className="flex items-center gap-8">
					<Image
						src={"/burton-logo.png"}
						alt="Burton Electric Logo"
						width={75}
						height={75}
					/>

					{/* Web Navigation */}
					<NavigationMenu className="hidden md:block">
						<NavigationMenuList>
							<NavigationMenuItem>
								<NavigationMenuLink asChild>
									<NavLink title="Home" href="/" />
								</NavigationMenuLink>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuTrigger
									className={`bg-transparent ${
										isAboutActive ? "text-primary" : ""
									}`}
								>
									About
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid grid-cols-1 gap-2 w-[400px] md:w-[500px] lg:w-[600px]">
										{aboutLinks.map((aboutLink, index) => (
											<li key={`${aboutLink.href}-${index}`}>
												<NavigationMenuLink asChild>
													<NavLink
														title={aboutLink.title}
														href={aboutLink.href}
														className="p-4"
													/>
												</NavigationMenuLink>
											</li>
										))}
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuTrigger
									className={`bg-transparent ${
										isServiceActive ? "text-primary" : ""
									}`}
								>
									Services
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
										{serviceLinks.map((serviceLink, index) => (
											<li key={`${serviceLink.href}-${index}`}>
												<NavigationMenuLink asChild>
													<NavLink
														title={serviceLink.title}
														href={serviceLink.href}
														className="p-4"
													/>
												</NavigationMenuLink>
											</li>
										))}
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink asChild>
									<NavLink title="FAQ" href="/faq" />
								</NavigationMenuLink>
							</NavigationMenuItem>

							<NavigationMenuItem>
								<NavigationMenuLink asChild>
									<NavLink title="Gallery" href="/gallery" />
								</NavigationMenuLink>
							</NavigationMenuItem>

							<NavigationMenuItem>
								<NavigationMenuLink asChild>
									<NavLink title="Contact" href="/contact" />
								</NavigationMenuLink>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				</div>

				<a type="phone" href={`tel:+16158301111`} className="hidden md:block">
					<Button>
						<Phone size={18} color="white" />
						615-830-1111
					</Button>
				</a>

				{/* Mobile Navigation */}
				<div className="block md:hidden">
					<Sheet onOpenChange={() => closeTabs()}>
						<SheetTrigger asChild>
							<Menu size={28} className="text-primary" />
						</SheetTrigger>
						<SheetContent
							side="right"
							className="p-4 flex flex-col gap-1 overflow-y-auto"
						>
							<SheetTitle className="mb-6">Burton Electric LLC</SheetTitle>
							<SheetClose asChild>
								<NavLink title="Home" href={"/"} className="p-4" />
							</SheetClose>

							{/* Toggleable About section */}
							<div className="flex flex-col">
								<button
									onClick={() => setShowAbout((prev) => !prev)}
									className={`flex items-center gap-2 text-sm font-medium p-4 hover:bg-accent transition-all outline-none ${
										isAboutActive ? "text-primary" : ""
									}`}
								>
									<span className="text-base">About</span>
									{showAbout ? (
										<ChevronUp size={18} />
									) : (
										<ChevronDown size={18} />
									)}
								</button>

								{/* Sub-links: show/hide based on toggle */}
								{showAbout && (
									<div className="flex flex-col gap-1 pl-4">
										{aboutLinks.map((link) => (
											<SheetClose asChild key={link.href}>
												<NavLink
													title={link.title}
													href={link.href}
													className="p-4"
												/>
											</SheetClose>
										))}
									</div>
								)}
							</div>

							{/* Toggleable Services section */}
							<div className="flex flex-col">
								<button
									onClick={() => setShowServices((prev) => !prev)}
									className={`flex items-center gap-2 text-sm font-medium p-4 hover:bg-accent transition-all outline-none ${
										isServiceActive ? "text-primary" : ""
									}`}
								>
									<span className="text-base">Services</span>
									{showServices ? (
										<ChevronUp size={18} />
									) : (
										<ChevronDown size={18} />
									)}
								</button>

								{/* Sub-links: show/hide based on toggle */}
								{showServices && (
									<div className="flex flex-col gap-1 pl-4">
										{serviceLinks.map((link) => (
											<SheetClose asChild key={link.href}>
												<NavLink
													title={link.title}
													href={link.href}
													className="p-4"
												/>
											</SheetClose>
										))}
									</div>
								)}
							</div>

							<SheetClose asChild>
								<NavLink title={"FAQ"} href={"/faq"} className="p-4" />
							</SheetClose>

							<SheetClose asChild>
								<NavLink title={"Gallery"} href={"/gallery"} className="p-4" />
							</SheetClose>

							<SheetClose asChild>
								<NavLink title={"Contact"} href={"/contact"} className="p-4" />
							</SheetClose>

							{/* Sheet footer */}
							<div className="flex items-center gap-4 mt-8">
								<a type="phone" href={`tel:+16158301111`}>
									<Button size={"icon"}>
										<Phone size={18} color="white" />
									</Button>
								</a>
								<a type="email" href="mailto:burtonelectricllc@gmail.com">
									<Button size={"icon"}>
										<Mail size={18} color="white" />
									</Button>
								</a>
								<a
									href={`https://www.google.com/maps/place/Burton+Electric+LLC/@36.1174399,-86.7852455,10z/data=!4m6!3m5!1s0x886489c1f6b9cf55:0x35780e4276fd32ec!8m2!3d36.1160054!4d-86.785147!16s%2Fg%2F11h4czhc5r?authuser=1&entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D`}
									target="_blank"
								>
									<Button size={"icon"}>
										<MapPin size={18} color="white" />
									</Button>
								</a>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
