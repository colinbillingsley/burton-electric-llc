import ContactUs, {
	ContactContent,
	ContactTitle,
} from "@/app/components/ContactUs";
import Footer from "@/app/components/Footer";
import H2 from "@/app/components/H2";
import Important from "@/app/components/Important";
import MainContainer from "@/app/components/MainContainer";
import P from "@/app/components/P";
import PageContainer from "@/app/components/PageContainer";
import Section from "@/app/components/Section";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title:
		"Panel Upgrades Nashville, Brentwood, and Franklin | Burton Electric LLC",
	description:
		"Burton Electric LLC are the electrical contractors who specialize in panel upgrades and energy efficiency. Call us at (615) 830-1111 today.",
	icons: {
		icon: "/burton-logo.png",
	},
	keywords: [
		"Burton Electric LLC",
		"Panel Upgrade Services",
		"Panel Upgrades",
		"Brentwood Panel Upgrades",
		"Franklin Panel Upgrades",
		"Nashville Panel Upgrades",
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

const pages = () => {
	return (
		<PageContainer>
			<MainContainer>
				<Important>Panel Upgrades</Important>

				<Section spacing="small" className="space-y-4">
					<H2>Electrical Panel Upgrades</H2>
					<P>
						If you&#39;re looking for an electrical contractor who can replace
						your electrical panel with a more efficient and reliable one,
						contact Burton Electric LLC. We are the licensed, bonded, and
						insured team of contractors you can count on. Call us at (615)
						830-1111 today.
					</P>
				</Section>

				<Section className="space-y-4">
					<H2>Are You Considering Replacing Your Electrical Panel?</H2>
					<P>
						When you move into a beautiful old home, there are many things you
						might want to change before getting settled. You might want to apply
						a fresh coat of paint on the walls, install some new fixtures and
						new insulation. But what about your home&#39;s electrical set-up?
					</P>
					<P>
						Many homes built thirty or forty years ago were fitted with fuse
						panels that were designed to accommodate the lifestyles of that era.
						Most families had only a few appliances and one television in their
						home then. In the present-day, even the least extravagant households
						have several television sets, at least one computer, multiple large
						appliances, and more.
					</P>
					<P>
						If a vintage fuse panel still powers your home, you&#39;ve probably
						experienced frequent power outages and blown fuses. If you&#39;d
						like to make those problems a thing of the past, give us a call.
					</P>
				</Section>

				<Section className="space-y-4">
					<H2>
						We Are the Local Electricians Who Can Pair You with the Right Panel
					</H2>
					<P>
						Fuse panels from the households of generation&#39;s past were
						typically 40-amp at most. These days, you will find households with
						100-amp and 200-amp circuit panels.
					</P>
					<P>
						You might not know what type of panel is right for your home, but we
						certainly do. If your home is less than 3,000 square feet and does
						not have central air-conditioning features, we might suggest a panel
						with a 100-amp load. If you have a home that is mid-size or greater,
						we&#39;d likely recommend a 200-amp panel.
					</P>
				</Section>

				<Section className="grid md:grid-cols-2 gap-12 md:gap-8">
					<div className="space-y-4">
						<H2>Circuit Panel Upgrades</H2>
						<P>
							Whichever type of panel you wind up selecting for your home, you
							can rest easy knowing that your home&#39;s electrical system will
							be more efficient than ever when we&#39;re done with it. Your
							home&#39;s wiring will be up to code, and will boost your
							home&#39;s overall energy-efficiency—guaranteed!
						</P>
					</div>
					<div className="space-y-4">
						<H2>Our Service Panel Upgrades Come with an Extended Warranty</H2>
						<P>
							With us, you get more than just a new electrical panel. You also
							get peace of mind in the form of an extended warranty. Your panel
							will be protected for years, and we&#39;ll always be just a phone
							call away.
						</P>
					</div>
					<div className="space-y-4">
						<H2>The Excellent Electrician Experience</H2>
						<P>
							We&#39;re not in the business of guesswork or going with our guts.
							Any decisions we make will be based on the information we retrieve
							by thoroughly inspecting your home&#39;s old panel and electrical
							system.
						</P>
					</div>

					<ContactUs className="col-span-full">
						<ContactTitle>
							Call Today for a Electrical Panel Upgrade
						</ContactTitle>
						<ContactContent>
							Curious about our rates? Interested to know what type of panel
							would be best suited for your household? Call us at{" "}
							<span className="font-bold">(615) 830-1111 </span>
							today. We are ready to answer all your questions and more.
						</ContactContent>
					</ContactUs>
				</Section>
			</MainContainer>
			<Footer />
		</PageContainer>
	);
};

export default pages;
