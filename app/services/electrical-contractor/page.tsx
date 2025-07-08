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
		"Electrical Contractor Nashville, Brentwood, and Franklin | Burton Electric LLC",
	description:
		"Call Burton Electric LLC at (615) 830-1111 for a reliable, experienced electrical contractor servicing Nashville, Brentwood and Franklin",
	icons: {
		icon: "/burton-logo.png",
	},
	keywords: [
		"Burton Electric LLC",
		"Electrical Contracting Services",
		"Brentwood Electrical Contracting Services",
		"Franklin Electrical Contracting Services",
		"Nashville Electrical Contracting Services",
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
					<span className="font-medium">Licensed and Insured</span>
					<Important>Electrical Contracting Services</Important>
				</H1>

				<Section
					spacing="small"
					className="grid md:grid-cols-2 gap-12 md:gap-8"
				>
					<P>
						Whether you are building a brand-new home or commercial space or
						remodeling an existing one, you are going need to get a
						professional, licensed and insured electrical contractor to take a
						look at your plans to make sure they are up to code and that the
						wiring can be installed, repaired, replaced or retrofitted safely.
						Ensuring the safety, efficiency and effectiveness of your new or
						remodeled home or business&apos;s electricity is not something you
						should take lightly. Attempting to do it yourself or using an
						unlicensed contractor is a surefire recipe for disaster. Rather than
						risk losing everything you have built to an electrical fire or other
						hazards, get in touch with Burton Electric LLC.
					</P>
					<div className="space-y-4">
						<P>
							Burton Electric LLC has been one of the area&apos;s top electrical
							contracting firm for the last several years thanks to our
							commitment to quality work and customer satisfaction. We have
							helped all kinds of homes and local businesses get the power they
							need, and if you want your new or remodeled home or business to
							get the seal of approval from a licensed and insured electrical
							contracting firm, contact Burton Electric LLC today. When you do,
							you can rest assured knowing that your home or business&apos;s
							power is in the best hands.
						</P>
						<P>
							Give us a call today to request your free, no obligation quote on
							our residential or commercial electrical contracting services.
						</P>
					</div>
				</Section>

				<Section className="grid md:grid-cols-2 gap-12 md:gap-8">
					<div className="space-y-4">
						<H2>Residential Services</H2>
						<P>
							When it comes to wiring new and remodeled houses, our experienced
							residential electrical contractors have the trust of hundreds of
							home owners in the area. We have successfully completed more
							designs, instalations, repairs and replacements than we could
							possibly count. We do know that every job we are contracted to
							complete is approached with the same attention to detail and
							commitment to excellence because, even with our excellent
							reputation, we&apos;re only as good as our last.
						</P>
						<P>
							Because our contractors approach every job with the mentality that
							they have everything to prove, there is no other electrical
							contracting firm in the area that compete with our residential
							services.
						</P>
						<P>
							No matter what your home needs, our contractors have the
							experience and expertise necessary to get the job done in hardly
							no time and at an extremely affordable rate. For a free estimate,
							contact Burton Electric LLC today and let us know what residential
							task we can assist you with.
						</P>
					</div>

					<div className="space-y-4">
						<H2>Commercial Services</H2>

						<P>
							Local businesses can&apos;t function unless they have access to
							safe, reliable electrical power. Proper lighting is essential to
							the customer experience, uninterrupted power assures employee
							productivity, and what would you do without your business&apos;s
							special equipment?
						</P>
						<P>
							Retail stores, offices, restaurants, hotels, factories, warehouses
							parking lots, churches and municipal buildings all need power to
							function. That is why we are proud to offer a myriad of different
							design, installation, repair, replacement, retrofitting and
							maintenance services.
						</P>
						<P>
							Whatever your electrical needs are, our commercial electrical
							contractors can make sure it&apos;s done efficiently and safely so
							that you can proceed with your normal operations with confidence.
							Give us a call today to find out more.
						</P>
					</div>

					<ContactUs className="col-span-full">
						<ContactTitle>Contact Us Today!</ContactTitle>
						<ContactContent>
							Whenever you need an electrical contractor, whether it&apos;s for
							a residence or a commercial property, Burton Electric LLC is here
							to help.
						</ContactContent>
					</ContactUs>
				</Section>
			</MainContainer>
			<Footer />
		</PageContainer>
	);
};

export default pages;
