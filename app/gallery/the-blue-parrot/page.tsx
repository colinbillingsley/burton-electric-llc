import ContactUs, {
	ContactContent,
	ContactTitle,
} from "@/app/components/ContactUs";
import Footer from "@/app/components/Footer";
import ProjectImages from "@/app/components/gallery-page/ProjectImages";
import H1 from "@/app/components/H1";
import Important from "@/app/components/Important";
import MainContainer from "@/app/components/MainContainer";
import P from "@/app/components/P";
import PageContainer from "@/app/components/PageContainer";
import { mainProjects } from "@/data";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "Gallery of The Blue Parrot | Burton Electric LLC",
	description:
		"Images from the The Blue Parrot project in Nashville, TN by Burton Electric LLC.",
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
					<Important>The Blue Parrot</Important>
				</H1>

				<P className="text-muted-foreground my-5">
					A look at the The Blue Parrot project we completed in Nashville, TN.
				</P>

				<ProjectImages images={mainProjects[2].images} />
				<ContactUs className="mt-50">
					<ContactTitle>Contact Burton Electric LLC Today!</ContactTitle>
					<ContactContent>
						We are ready to help you with your next project. Whether it&apos;s a
						commercial or residential electrical project, our team is here to
						provide you with the best service in Nashville, Franklin, and
						Brentwood.
					</ContactContent>
				</ContactUs>
			</MainContainer>
			<Footer />
		</PageContainer>
	);
};

export default page;
