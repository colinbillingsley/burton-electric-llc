import React from "react";
import MainContainer from "../components/MainContainer";
import H1 from "../components/H1";
import Footer from "../components/Footer";
import PageContainer from "../components/PageContainer";
import Important from "../components/Important";
import "react-photo-view/dist/react-photo-view.css";
import { Metadata } from "next";
import MainProjectCard from "../components/gallery-page/MainProjectCard";
import { mainProjects } from "@/data";

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
					A look at some of the commercial projects we&apos;ve completed around
					Nashville, TN and surrounding areas.
				</p>

				<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{mainProjects.map((project, idx) => (
						<li key={idx} className="mb-6">
							<MainProjectCard
								bgImage={project.bgImage}
								project={project.project}
								url={project.url}
							/>
						</li>
					))}
				</ul>
			</MainContainer>
			<Footer />
		</PageContainer>
	);
};

export default page;
