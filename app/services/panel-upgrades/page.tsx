import Footer from "@/app/components/Footer";
import H2 from "@/app/components/H2";
import Important from "@/app/components/Important";
import MainContainer from "@/app/components/MainContainer";
import PageContainer from "@/app/components/PageContainer";
import Section from "@/app/components/Section";
import React from "react";

const pages = () => {
	return (
		<PageContainer>
			<MainContainer>
				<Important>Panel Upgrades</Important>

				<Section spacing="small" className="space-y-4">
					<H2>Electrical Panel Upgrades</H2>
					<p>
						If you’re looking for an electrical contractor who can replace your
						electrical panel with a more efficient and reliable one, contact
						Burton Electric LLC. We are the licensed, bonded, and insured team
						of contractors you can count on. Call us at (615) 830-1111 today.
					</p>
				</Section>

				<Section className="space-y-4">
					<H2>Are You Considering Replacing Your Electrical Panel?</H2>
					<p>
						When you move into a beautiful old home, there are many things you
						might want to change before getting settled. You might want to apply
						a fresh coat of paint on the walls, install some new fixtures and
						new insulation. But what about your home’s electrical set-up?
					</p>
					<p>
						Many homes built thirty or forty years ago were fitted with fuse
						panels that were designed to accommodate the lifestyles of that era.
						Most families had only a few appliances and one television in their
						home then. In the present-day, even the least extravagant households
						have several television sets, at least one computer, multiple large
						appliances, and more.
					</p>
					<p>
						If a vintage fuse panel still powers your home, you’ve probably
						experienced frequent power outages and blown fuses. If you’d like to
						make those problems a thing of the past, give us a call.
					</p>
				</Section>

				<Section className="space-y-4">
					<H2>
						We Are the Local Electricians Who Can Pair You with the Right Panel
					</H2>
					<p>
						Fuse panels from the households of generation’s past were typically
						40-amp at most. These days, you will find households with 100-amp
						and 200-amp circuit panels.
					</p>
					<p>
						You might not know what type of panel is right for your home, but we
						certainly do. If your home is less than 3,000 square feet and does
						not have central air-conditioning features, we might suggest a panel
						with a 100-amp load. If you have a home that is mid-size or greater,
						we’d likely recommend a 200-amp panel.
					</p>
				</Section>
			</MainContainer>
			<Footer />
		</PageContainer>
	);
};

export default pages;
