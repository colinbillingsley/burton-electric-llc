import Footer from "@/app/components/Footer";
import H1 from "@/app/components/H1";
import Important from "@/app/components/Important";
import MainContainer from "@/app/components/MainContainer";
import PageContainer from "@/app/components/PageContainer";
import React from "react";

const pages = () => {
	return (
		<PageContainer>
			<MainContainer>
				<H1>
					<Important>Trusted and Professional Electricians</Important>
				</H1>
			</MainContainer>
			<Footer />
		</PageContainer>
	);
};

export default pages;
