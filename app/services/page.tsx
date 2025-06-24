import React from "react";
import PageContainer from "../components/PageContainer";
import MainContainer from "../components/MainContainer";
import H1 from "../components/H1";
import Footer from "../components/Footer";
import Important from "../components/Important";

const page = () => {
	return (
		<PageContainer>
			<MainContainer>
				<H1>
					<Important>Services</Important>
				</H1>
			</MainContainer>
			<Footer />
		</PageContainer>
	);
};

export default page;
