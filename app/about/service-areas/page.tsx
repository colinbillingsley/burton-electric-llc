import Footer from "@/app/components/Footer";
import Important from "@/app/components/Important";
import MainContainer from "@/app/components/MainContainer";
import PageContainer from "@/app/components/PageContainer";
import React from "react";

const pages = () => {
	return (
		<PageContainer>
			<MainContainer>
				<Important>Service Areas</Important>
			</MainContainer>
			<Footer />
		</PageContainer>
	);
};

export default pages;
