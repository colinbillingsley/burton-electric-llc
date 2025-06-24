import React from "react";
import MainContainer from "../components/MainContainer";
import H1 from "../components/H1";
import Footer from "../components/Footer";
import PageContainer from "../components/PageContainer";
import Important from "../components/Important";

const pages = () => {
	return (
		<PageContainer>
			<MainContainer>
				<H1>
					About
					<Important>Burton Electric LLC</Important>
				</H1>
			</MainContainer>
			<Footer />
		</PageContainer>
	);
};

export default pages;
