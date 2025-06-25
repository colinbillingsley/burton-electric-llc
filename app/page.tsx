import Hero from "./components/landing-page/Hero";
import WhyBurton from "./components/landing-page/WhyBurton";
import Services from "./components/landing-page/Services";
import Footer from "./components/Footer";
import MainContainer from "./components/MainContainer";

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
