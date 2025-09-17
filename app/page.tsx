import BuiltOnTrust from "@/components/landing-page/BuiltOnTrust";
import Hero from "@/components/landing-page/Hero";
import OurServiceAreas from "@/components/landing-page/OurServiceAreas";
import OurServices from "@/components/landing-page/OurServices";
import RecentProjects from "@/components/landing-page/RecentProjects";
import { baseKeywords, icon } from "@/data/seo";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Burton Electric LLC | Licensed Electrician in Nashville, TN",
	description:
		"Burton Electric LLC is the top-rated electrical services company servicing Nashville, Brentwood, and Franklin.",
	icons: {
		icon: icon,
	},
	keywords: [...baseKeywords],
};

export default function Home() {
	return (
		<div className="w-full h-full font-[family-name:var(--font-montserrat)]">
			{/* Hero Section */}
			<Hero />
			<OurServices />
			<RecentProjects />
			<BuiltOnTrust />
			<OurServiceAreas />
		</div>
	);
}
