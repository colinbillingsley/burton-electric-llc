import Hero from "./components/landing-page/Hero";
import WhyBurton from "./components/landing-page/WhyBurton";
import Services from "./components/landing-page/Services";
import Footer from "./components/Footer";
import MainContainer from "./components/MainContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Burton Electric LLC | Licensed Electrician in Nashville, TN",
	description:
		"Burton Electric LLC is the top-rated electrical services company servicing Nashville, Brentwood, and Franklin.",
	icons: {
		icon: "/burton-logo.png",
	},
	keywords: [
		"Burton Electric LLC",
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

export default function Home() {
	return (
		<div className="font-[family-name:var(--font-montserrat)]">
			{/* Hero Section */}
			<Hero />
			<MainContainer>
				{/* Why Burton Section */}
				<WhyBurton />

				{/* Services Section */}
				<Services />
			</MainContainer>

			<Footer />
		</div>
	);
}
