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
import { BsLightningChargeFill } from "react-icons/bs";

export const metadata: Metadata = {
	title:
		"Lighting Installation Nashville, Brentwood, and Franklin | Burton Electric LLC",
	description:
		"Burton Electric LLC's lighting experts will correctly, safely and efficiently install your property's new lighting system. Call us at (615) 830-1111",
	icons: {
		icon: "/burton-logo.png",
	},
	keywords: [
		"Burton Electric LLC",
		"Lighting Installation Services",
		"Lighting Installation",
		"Brentwood Lighting Installation",
		"Franklin Lighting Installation",
		"Nashville Lighting Installation",
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

const residentialLighting: { title: string }[] = [
	{
		title: "Lighting Layouts",
	},
	{
		title: "Recessed Lighting",
	},
	{
		title: "LED Lighting",
	},
	{
		title: "Light Fixtures",
	},
	{
		title: "Light Switches",
	},
];

const pages = () => {
	return (
		<PageContainer>
			<MainContainer>
				<H1>
					<Important>Lighting Installation Services</Important>
				</H1>

				<Section
					spacing="small"
					className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8"
				>
					<P>
						Burton Electric LLC is so much more than your average commercial and
						residential electrical company. Though we take great pride in the
						electrical work we do, we are always thrilled when we get to combine
						our trade with our flair for design. Our commercial and residential
						electricians understand how important lighting can be in terms of
						setting the right mood for any given room in your home or business.
					</P>
					<P>
						But, for the right lighting to showcase your business or products or
						to set a relaxing ambiance in your home, they need to be safely
						installed. The last thing you want is a brand-new lighting scheme
						for your home or business only to have it either work sporadically
						or be a fire hazard. Choosing Burton Electric LLC&apos;s experienced
						electricians to handle the installation eliminates any of these
						concerns.
					</P>
					<P>
						Not only can we install a beautiful, new and energy efficient
						lighting system in your home or business, our electricians will make
						sure it&apos;s up to code and safe for an affordable rate. For
						high-quality lighting with convenient service, give Burton Electric
						LLC a call today to request a free estimate.
					</P>
				</Section>

				<Section className="grid md:grid-cols-2 gap-12 md:gap-8">
					<div className="space-y-6">
						<H2>Residential Lighting Installations</H2>
						<P>
							When you have been conducting lighting installations as long as
							our electricians have, there is no room in the house we can&apos;t
							handle. Whether it&apos;s your kitchen, bathroom, living room,
							bedroom or anything in between, our experts are well versed in the
							lighting needs of these rooms. Or, if you have something a little
							less conventional in mind, we are always willing to collaborate
							with our clients to bring their ideas to life.
						</P>
						<P>
							Some of the more popular residential lighting we are asked to
							install include:
						</P>
						<ul className="space-y-2">
							{residentialLighting.map((resLighting, index) => (
								<li key={index} className="flex items-center gap-3">
									<BsLightningChargeFill
										size={15}
										className="shrink-0 text-primary"
									/>
									<P className="font-medium">{resLighting.title}</P>
								</li>
							))}
						</ul>
						<P>
							We can also totally revamp your home&apos;s exterior lighting to
							make your property more secure while boosting its curb appeal.
							Whatever your home needs lighting-wise, Burton Electric LLC is
							here to help.
						</P>
					</div>

					<div className="space-y-6">
						<H2>Commercial Lighting Installations</H2>
						<P>
							How your commercial property is lit is incredibly important no
							matter what type of work you are in. High-quality lighting designs
							affect how your business is perceived. From creating an engaging
							atmosphere to sell your products and service to protecting the
							safety of your customers and employees, there is no shortage of
							reasons why you should invest in a lighting installation.
						</P>
						<P>
							When you choose Burton Electric LLC to install new lighting on
							your commercial property, safety is always our top priority as is
							our desire to understand your lighting needs. When we have an
							understanding of your commercial indoor and outdoor lighting, we
							can put your business in a position to succeed for years to come.
						</P>
						<P>
							One of the most popular reasons businesses invest in lighting
							installations from Burton Electric LLC is to reduce operating
							costs. Thanks to new technologies, new lighting can reduce energy
							costs by 35 to 75 percent. So, if you want to start saving money
							every month, get in touch with Burton Electric LLC.
						</P>
					</div>
				</Section>

				<ContactUs>
					<ContactTitle>Contact Us Today!</ContactTitle>
					<ContactContent>
						Whether your home or business needs new lighting, Burton Electric
						LLC is ready to provide quality work.
					</ContactContent>
				</ContactUs>
			</MainContainer>
			<Footer />
		</PageContainer>
	);
};

export default pages;
