import ContactUs, {
	ContactContent,
	ContactTitle,
} from "@/app/components/ContactUs";
import Footer from "@/app/components/Footer";
import H1 from "@/app/components/H1";
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
		"Commercial Ceiling Fan Installation Nashville, Brentwood, and Franklin | Burton Electric LLC",
	description:
		"Ceiling fans will help keep your commercial space cool and allow you to regulate the temperature. For effective installation service, call (615) 830-1111",
	icons: {
		icon: "/burton-logo.png",
	},
	keywords: [
		"Burton Electric LLC",
		"Commercial Ceiling Fan Installation Services",
		"Brentwood Commercial Ceiling Fan Installation Services",
		"Franklin Commercial Ceiling Fan Installation Services",
		"Nashville Commercial Ceiling Fan Installation Services",
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
				<H1>
					Commercial
					<Important>Ceiling Fan Installation Services</Important>
				</H1>

				<Section spacing="small" className="grid md:grid-cols-3 gap-8">
					<P>
						When was the last time you asked yourself, “Is my commercial space
						equipped with everything it needs to make sure all of my employees,
						tenants and or customers are as comfortable as can be?” Whether you
						run a restaurant, manufacturing plant, retail store, office or gym
						in the area, there might one thing you are lacking to increase the
						overall comfort of your facility, improve its energy efficiency and
						make it even better looking than before.
					</P>
					<P>
						What magic item can do all these things that business owners all
						over the area have coveted for years? Commercial ceiling fans. They
						have the ability to make your business more comfortable, more
						interesting esthetically, and lower operational costs—specifically
						how much you are spending on energy every month. And if you want to
						take advantage of these benefits, you are going to need to make sure
						the ceiling fans are correctly installed by a trained professional,
						otherwise the only thing your business has added is a fire hazard.
					</P>
					<P>
						For the most reliable and affordable commercial ceiling fan
						installation services provided by licensed and insured electricians,
						look no further than Burton Electric LLC. We have conducted more
						successful commercial ceiling fan installations than any other
						electrical contracting firm in the area. And all our experience and
						expertise comes at no extra cost to our customers. If you want to
						get the top commercial ceiling fan installation company in the area
						to outfit your business with brand-new fans, just give us a call
						today and we&apos;ll be happy to provide you with a free estimate on
						our services.
					</P>
				</Section>

				<Section>
					<H2>
						Why Choose Burton Electric LLC to Install Your Commercial Ceiling
						Fans
					</H2>
					<div className="grid md:grid-cols-2 gap-8">
						<div className="space-y-6">
							<P>
								First of all, you should never attempt to install a commercial
								ceiling yourself. In fact, no one lacking the proper training,
								licenses and insurance should go anywhere near your
								business&apos;s electrical infrastructure. Doing so is almost
								certainly a recipe for disaster.
							</P>
							<P>
								Not only does Burton Electric LLC&apos;s commercial electricians
								have all the necessary training, licenses and insurance, but
								they also have plenty of experience conducting these types of
								installations. And its our familiarity with commercial ceiling
								fan installations that allows us to make sure they are perfectly
								placed so that you don&apos;t have to worry about inferior
								comfort, esthetics or energy efficiency.
							</P>
						</div>

						<div className="space-y-6">
							<P>
								Plus, our service isn&apos;t limited to the installation. Our
								commercial electricians take a great deal of pride in their
								work, which is why if you find that your commercial ceiling fans
								are wobbly, ineffective or fail to function properly after a
								while, we are available to troubleshoot the fans until their
								effectiveness and efficiency is restored.
							</P>
							<P>
								We are familiar with virtually every make and model of
								commercial ceiling fans. It doesn&apos;t matter the size or
								style, we guarantee we can get it working in hardly no time at
								all. So, what are you waiting for? Make your business a nicer,
								more pleasant and greener place to be when you call Burton
								Electric LLC today.
							</P>
						</div>
					</div>
				</Section>

				<ContactUs>
					<ContactTitle>Contact Us Today!</ContactTitle>
					<ContactContent>
						For all your commercial ceiling fan installation needs, get in touch
						with Burton Electric LLC today.
					</ContactContent>
				</ContactUs>
			</MainContainer>
			<Footer />
		</PageContainer>
	);
};

export default pages;
