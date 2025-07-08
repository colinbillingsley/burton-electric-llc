import Footer from "@/app/components/Footer";
import H1 from "@/app/components/H1";
import Important from "@/app/components/Important";
import MainContainer from "@/app/components/MainContainer";
import DropdownBoxes from "@/app/components/our-services-page/DropdownBoxes";
import PageContainer from "@/app/components/PageContainer";
import Head from "next/head";
import { Metadata } from "next";
import { MdElectricalServices } from "react-icons/md";

export const metadata: Metadata = {
	title: "Service Areas | Burton Electric LLC",
	description:
		"Burton Electric LLC provides outstanding quality electrical services in Nashville, Brentwood and Franklin. Call (615) 830-1111",
	icons: {
		icon: "/burton-logo.png",
	},
	keywords: [
		"Service Areas",
		"Electrician Service Areas",
		"Electrical Service Areas",
		"Nashville Electrician",
		"Nashville Electrical Contractor",
		"Nashville Residential Electrician",
		"Brentwood Electrician",
		"Brentwood Electrical Contractor",
		"Brentwood Residential Electrician",
		"Franklin Electrician",
		"Franklin Electrical Contractor",
		"Franklin Residential Electrician",
	],
};

const serviceAreas: {
	title: string;
	desc: string;
	links: { title: string; href: string }[];
}[] = [
	{
		title: "Appliance Installation",
		desc: "For all your residential and commercial appliance installation needs, trust the professionals at Burton Electric LLC to get it done correctly, efficiently and at an affordable rate.",
		links: [
			{
				title: "Brentwood Appliance Installation",
				href: "/areas-of-service/brentwood-appliance-installation",
			},
			{
				title: "Franklin Appliance Installation",
				href: "/areas-of-service/franklin-appliance-installation",
			},
			{
				title: "Nashville Appliance Installation",
				href: "/areas-of-service/nashville-appliance-installation",
			},
		],
	},
	{
		title: "Commercial Ceiling Fan Installation",
		desc: "If paying for heating and cooling has continually been an issue for your business, then you might be surprised to learn that there is a relatively easy solution to keep these costs down. All you have to do is call Burton Electric LLC and ask us about our commercial ceiling fan installation services.",
		links: [
			{
				title: "Brentwood Commercial Ceiling Fan Installation Services",
				href: "/areas-of-service/brentwood-commercial-ceiling-fan-installation-services",
			},
			{
				title: "Franklin Commercial Ceiling Fan Installation Services",
				href: "/areas-of-service/franklin-commercial-ceiling-fan-installation-services",
			},
			{
				title: "Nashville Commercial Ceiling Fan Installation Services",
				href: "/areas-of-service/nashville-commercial-ceiling-fan-installation-services",
			},
		],
	},
	{
		title: "Electrical Contractor",
		desc: "Burton Electric LLC is an electrical contracting firm that has been proud to serve homes and businesses for many years. We have built our firm from scratch into one of the most trusted electrical contracting firms in the area thanks to our team's dedication to quality workmanship.",
		links: [
			{
				title: "Brentwood Electrical Contractor",
				href: "/areas-of-service/brentwood-electrical-contractor",
			},
			{
				title: "Franklin Electrical Contractor",
				href: "/areas-of-service/franklin-electrical-contractor",
			},
			{
				title: "Nashville Electrical Contractor",
				href: "/areas-of-service/nashville-electrical-contractor",
			},
		],
	},
	{
		title: "Electrical Contractor Services",
		desc: "Regardless of whether it's a big or small job, when you call Burton Electric LLC, you should always expect prompt, reliable service and quality workmanship. Whether you need something installed, repaired, replaced or simply inspected by someone with extensive knowledge of electricity, Burton Electric LLC's fully licensed technicians are always available to help in any way they can.",
		links: [
			{
				title: "Brentwood Electrical Contractor Services",
				href: "/areas-of-service/brentwood-electrical-contractor-services",
			},
			{
				title: "Franklin Electrical Contractor Services",
				href: "/areas-of-service/franklin-electrical-contractor-services",
			},
			{
				title: "Nashville Electrical Contractor Services",
				href: "/areas-of-service/nashville-electrical-contractor-services",
			},
		],
	},
	{
		title: "Electrical Repair",
		desc: "Burton Electric LLC has been proud to provide homes and businesses all over the area with expert electrical repairs. We understand that malfunctioning electrical work can be a truly scary thing, which is why we are committed to identifying the issue and fixing it with maximum efficiency.",
		links: [
			{
				title: "Brentwood Electrical Repair",
				href: "/areas-of-service/brentwood-electrical-repair",
			},
			{
				title: "Franklin Electrical Repair",
				href: "/areas-of-service/franklin-electrical-repair",
			},
			{
				title: "Nashville Electrical Repair",
				href: "/areas-of-service/nashville-electrical-repair",
			},
		],
	},
	{
		title: "Electrical Retrofitting",
		desc: "If your home or business has been having trouble keeping up with modern energy demands, you might be due for an electrical retrofit. An electrical retrofit may involve installing a new electrical panel, a complete or partial re-wiring or another solution as determined by one of Burton Electric LLC's skilled commercial and residential electricians to make your home or business better equipped to manage your energy demands.",
		links: [
			{
				title: "Brentwood Electrical Retrofitting",
				href: "/areas-of-service/brentwood-electrical-retrofitting",
			},
			{
				title: "Franklin Electrical Retrofitting",
				href: "/areas-of-service/franklin-electrical-retrofitting",
			},
			{
				title: "Nashville Electrical Retrofitting",
				href: "/areas-of-service/nashville-electrical-retrofitting",
			},
		],
	},
	{
		title: "Electrician",
		desc: "Since day one, our calling card has been providing exceptional service to residential and commercial clients. To have your electrical work completed with confidence and at an affordable rate, give Burton Electric LLC a call and get a free estimate on the electrical services you require.",
		links: [
			{
				title: "Brentwood Electrician",
				href: "/areas-of-service/brentwood-electrician",
			},
			{
				title: "Franklin Electrician",
				href: "/areas-of-service/franklin-electrician",
			},
			{
				title: "Nashville Electrician",
				href: "/areas-of-service/nashville-electrician",
			},
		],
	},
	{
		title: "Hot Tub And Sauna Electrical",
		desc: "Installing a hot tub or sauna will require any number of electrical troubleshooting, repair and installation of safety electrical outlets, wiring upgrades and wiring maintenance to make sure that you can enjoy your new home spa to the fullest. After all, the last thing you want is to be in the middle of a soak or a steam and suddenly be without power because your new home spa blew a fuse. So, rather than get left in the dark, make sure that your new hot tub or sauna are installed by Burton Electric LLC's team of skilled, licensed and insured electricians.",
		links: [
			{
				title: "Brentwood Hot Tub And Sauna Electrical",
				href: "/areas-of-service/brentwood-hot-tub-and-sauna-electrical",
			},
			{
				title: "Franklin Hot Tub And Sauna Electrical",
				href: "/areas-of-service/franklin-hot-tub-and-sauna-electrical",
			},
			{
				title: "Nashville Hot Tub And Sauna Electrical",
				href: "/areas-of-service/nashville-hot-tub-and-sauna-electrical",
			},
		],
	},
	{
		title: "In-Floor Heating",
		desc: "If you are interested in adding an in-floor heating system to your home or business, give Burton Electric LLC a call today. We have been helping install and maintain these incredible and discrete sources of heat for many years and we are confident that our licensed and insured electricians can handle anything you need related to in-floor heating systems.",
		links: [
			{
				title: "Brentwood In-Floor Heating",
				href: "/areas-of-service/brentwood-in-floor-heating",
			},
			{
				title: "Franklin In-Floor Heating",
				href: "/areas-of-service/franklin-in-floor-heating",
			},
			{
				title: "Nashville In-Floor Heating",
				href: "/areas-of-service/nashville-in-floor-heating",
			},
		],
	},
	{
		title: "Landscape Lighting",
		desc: "Thanks to our extensive experience installing outdoor lighting, Burton Electric LLC's electrical contractors can design, install and maintain landscape lighting systems of any size or style. Just let us know what you hope to accomplish with your outdoor lighting design and a member of our team will be glad to give you a free quote.",
		links: [
			{
				title: "Brentwood Landscape Lighting",
				href: "/areas-of-service/brentwood-landscape-lighting",
			},
			{
				title: "Franklin Landscape Lighting",
				href: "/areas-of-service/franklin-landscape-lighting",
			},
			{
				title: "Nashville Landscape Lighting",
				href: "/areas-of-service/nashville-landscape-lighting",
			},
		],
	},
	{
		title: "Lighting Electrician",
		desc: "Burton Electric LLC is a team made up of trained, licensed and insured lighting electricians that specialize in providing quality, efficient and reliable services to homes and businesses all over the area. Our wealth of experience designing, installing and repairing commercial and residential lighting systems is available to you at an affordable rate as soon as you give us a call.",
		links: [
			{
				title: "Brentwood Lighting Electrician",
				href: "/areas-of-service/brentwood-lighting-electrician",
			},
			{
				title: "Franklin Lighting Electrician",
				href: "/areas-of-service/franklin-lighting-electrician",
			},
			{
				title: "Nashville Lighting Electrician",
				href: "/areas-of-service/nashville-lighting-electrician",
			},
		],
	},
	{
		title: "Lighting Installation",
		desc: "Burton Electric LLC's fully licensed and insured electricians have been completing all sorts of residential and commercial lighting installations for many years. Not only can we ensure that your new lighting is installed safely, we can make sure it's working at maximum efficiency for a price that works for your budget.",
		links: [
			{
				title: "Brentwood Lighting Installation",
				href: "/areas-of-service/brentwood-lighting-installation",
			},
			{
				title: "Franklin Lighting Installation",
				href: "/areas-of-service/franklin-lighting-installation",
			},
			{
				title: "Nashville Lighting Installation",
				href: "/areas-of-service/nashville-lighting-installation",
			},
		],
	},
	{
		title: "New Construction Electrical",
		desc: "Burton Electric LLC has been providing new construction electrical services to residential and commercial developers and contractors for many years. Our calling card is thorough, reliable electrical services that make everyone's lives easier.",
		links: [
			{
				title: "Brentwood New Construction Electrical",
				href: "/areas-of-service/brentwood-new-construction-electrical",
			},
			{
				title: "Franklin New Construction Electrical",
				href: "/areas-of-service/franklin-new-construction-electrical",
			},
			{
				title: "Nashville New Construction Electrical",
				href: "/areas-of-service/nashville-new-construction-electrical",
			},
		],
	},
	{
		title: "Residential Ceiling Fan Installations",
		desc: "If you want to avoid any hazards to your health or the safety of your home, contact Burton Electric LLC today for our residential ceiling fan installation services. At Burton Electric LLC, we have been installing ceiling fans in homes all over the area for many years. Our licensed and insured electricians have invaluable experience completing these types of installations and can get it working safely in hardly no time at all.",
		links: [
			{
				title: "Brentwood Residential Ceiling Fan Installations",
				href: "/areas-of-service/brentwood-residential-ceiling-fan-installations",
			},
			{
				title: "Franklin Residential Ceiling Fan Installations",
				href: "/areas-of-service/franklin-residential-ceiling-fan-installations",
			},
			{
				title: "Nashville Residential Ceiling Fan Installations",
				href: "/areas-of-service/nashville-residential-ceiling-fan-installations",
			},
		],
	},
	{
		title: "Rewiring Service",
		desc: "For the last several years, Burton Electric LLC has been proud to provide high-quality and efficient rewiring services to residential and commercial clients in the area. The reason people continue to seek out Burton Electric LLC's licensed and insured electricians whenever they need rewiring services is largely due to the fact that our dedication to our profession has garnered a reputation for being the best. And the best is exactly what you can expect when you choose Burton Electric LLC for our rewiring services.",
		links: [
			{
				title: "Brentwood Rewiring Service",
				href: "/areas-of-service/brentwood-rewiring-service",
			},
			{
				title: "Franklin Rewiring Service",
				href: "/areas-of-service/franklin-rewiring-service",
			},
			{
				title: "Nashville Rewiring Service",
				href: "/areas-of-service/nashville-rewiring-service",
			},
		],
	},
	{
		title: "Security Lighting",
		desc: "Burton Electric LLC is made up of licensed and insured electricians who have an extensive amount of experience installing motion sensor lights and digital timer switches in homes and businesses around the area. Our company is committed to providing quality, reliable security lighting at an affordable price because we know what's at stake. Your life or your livelihood could be derailed without quality security lighting, which is why we want to provide it to you.",
		links: [
			{
				title: "Brentwood Security Lighting",
				href: "/areas-of-service/brentwood-security-lighting",
			},
			{
				title: "Franklin Security Lighting",
				href: "/areas-of-service/franklin-security-lighting",
			},
			{
				title: "Nashville Security Lighting",
				href: "/areas-of-service/nashville-security-lighting",
			},
		],
	},
	{
		title: "Solar Panels",
		desc: "Making the switch to solar power will be one of the best decisions you ever make, provided that Burton Electric LLC is who you choose to install the solar panels and set up the system. For a free estimate on our solar panel services, get in touch with us today.",
		links: [
			{
				title: "Brentwood Solar Panels",
				href: "/areas-of-service/brentwood-solar-panels",
			},
			{
				title: "Franklin Solar Panels",
				href: "/areas-of-service/franklin-solar-panels",
			},
			{
				title: "Nashville Solar Panels",
				href: "/areas-of-service/nashville-solar-panels",
			},
		],
	},
	{
		title: "Standby Generator",
		desc: "If you want to invest in a standby generator for your home or business, then contact Burton Electric LLC today. We have been proud to install and maintain standby generators for homes and businesses all over the area for an affordable price. We know that our clients need their standby generators to be reliable, which is why they continue to seek us out for our services as one of the most reliable electrical companies in the area.",
		links: [
			{
				title: "Brentwood Standby Generator",
				href: "/areas-of-service/brentwood-standby-generator",
			},
			{
				title: "Franklin Standby Generator",
				href: "/areas-of-service/franklin-standby-generator",
			},
			{
				title: "Nashville Standby Generator",
				href: "/areas-of-service/nashville-standby-generator",
			},
		],
	},
	{
		title: "Surge Protection",
		desc: "Burton Electric LLC has been proud to help area home and business owners increase their protections against surges. Plug-in surge protectors are certainly an asset, but if you want to be completely assured that you are protected against the worst-case scenario, you need to give us a call today. When you do, a member of Burton Electric LLC's team will be happy to give you a free estimate on our surge protection services.",
		links: [
			{
				title: "Brentwood Surge Protection",
				href: "/areas-of-service/brentwood-surge-protection",
			},
			{
				title: "Franklin Surge Protection",
				href: "/areas-of-service/franklin-surge-protection",
			},
			{
				title: "Nashville Surge Protection",
				href: "/areas-of-service/nashville-surge-protection",
			},
		],
	},
];

const pages = () => {
	return (
		<PageContainer>
			<Head>
				<title>Service Areas | Burton Electric LLC</title>
			</Head>
			<MainContainer>
				<H1>
					<Important>Service Areas</Important>
				</H1>
				<p className="text-muted-foreground my-4 max-w-2xl">
					Proudly serving Nashville and surrounding communities with reliable,
					high-quality electrical services. No matter where you are, we&apos;re
					just a call away.
				</p>
				<DropdownBoxes
					items={serviceAreas}
					icon={<MdElectricalServices size={24} className="flex-shrink-0" />}
				/>
			</MainContainer>
			<Footer />
		</PageContainer>
	);
};

export default pages;
