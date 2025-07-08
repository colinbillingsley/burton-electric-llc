import React from "react";
import MainContainer from "../components/MainContainer";
import H1 from "../components/H1";
import Footer from "../components/Footer";
import PageContainer from "../components/PageContainer";
import Important from "../components/Important";
import "react-photo-view/dist/react-photo-view.css";
import BurtonElectricImages from "../components/gallery-page/BurtonElectricImages";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Gallery | Burton Electric LLC",
	description:
		"Gallery of Burton Electric LLC projects in Nashville, Franklin, and Brentwood.",
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

const page = () => {
	return (
		<PageContainer>
			<MainContainer>
				<H1>
					<Important>Gallery</Important>
				</H1>
				<p className="text-muted-foreground my-5">
					A look at some of the residential and commercial projects we&apos;ve
					completed around Nashville.
				</p>

				<BurtonElectricImages />
			</MainContainer>
			<Footer />
		</PageContainer>
	);
};

export default page;
