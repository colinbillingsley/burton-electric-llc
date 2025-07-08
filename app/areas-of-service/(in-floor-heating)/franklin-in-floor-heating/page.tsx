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
	title: "Franklin In-Floor Heating Services | Burton Electric LLC",
	description:
		"Burton Electric LLC's electrical contractors specialize in installing and repairing in floor heating in Franklin homes. Call (615) 830-1111",
	icons: {
		icon: "/burton-logo.png",
	},
	keywords: [
		"Brentwood In-Floor Heating Services",
		"Nashville In-Floor Heating Services",
		"Franklin In-Floor Heating Services",
		"In-Floor Heating Services",
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
					<Important>Franklin In-Floor Heating Services</Important>
				</H1>

				<Section spacing="small">
					<P>
						Are you looking for a new way to heat your Franklin home or
						business, but you also want it to be quiet, clean and efficient? You
						can always choose to heat your home or business with in-floor
						heating. In-floor heating is exactly how it sounds. Rather than
						dealing with blazing hot radiators taking up space, or ducts that
						are only good for blowing dust around and losing the heat generated
						by the furnaces they connect to, get efficient heat right from
						underneath your feet!
					</P>
					<P>
						If this sounds too good to be true, just give Burton Electric LLC a
						call today and one of our licensed and insured electricians will be
						happy to assure you that in-floor heating is indeed the real deal.
						We have completed hundreds of residential and commercial in-floor
						heating installations all over the Franklin area and guarantee
						satisfaction with your new method of heating your home or business.
					</P>
					<P>
						Call us today to request a free quote on the in-floor heating
						services you require.
					</P>
				</Section>

				<Section>
					<H2>How We Install In-Floor Heating</H2>
					<P>
						One thing we have to make clear from the jump is that no matter how
						experienced you are with DIY projects, installing floor heating is a
						job that&apos;s always best left to Burton Electric LLC&apos;s
						professionals. Not only is it labor-intensive to install, you need
						to make sure you are working with qualified electrical professionals
						because if it doesn&apos;t work you are in big trouble.
					</P>
					<P>
						When Burton Electric LLC installs in-floor heating, we begin by
						exposing the subfloor. In an ideal world, we are able to conduct the
						installation in a new building before the flooring has been put
						down, but we are professionals with plenty of experience jumping
						through hoops and over hurdles. Once the subfloor is exposed, we
						apply an adhesive to the subfloor and lay down a crack-suppression
						membrane. Because concrete has been known to expand and contract as
						the temperature changes, the membrane helps support the floor.
					</P>
					<P>
						With the membrane in place, we add the radiant-heat wire in a grid,
						keeping them evenly spaced to prevent hot and cool patches in the
						floor. And finally, this is where you&apos;ll need our expertise the
						most—it&apos;s time to power the floor heaters. We will run a
						dedicated circuit from your home or business&apos;s main electrical
						panel to the location of the in-floor heating. We can also install
						the control panel or heating sensor in the wall to maximize the
						convenience of keeping your Franklin home or business at the perfect
						temperature no matter what the weather throws at you.
					</P>
					<P>
						You are going to love having your home or business&apos;s heat
						radiate from underneath your feet.
					</P>
				</Section>

				<ContactUs>
					<ContactTitle>Contact Burton Electric LLC Today!</ContactTitle>
					<ContactContent>
						In-floor heat has been steadily growing in popularity throughout the
						Franklin area because it offers homes and businesses efficient,
						reliable and clean heat. It&apos;s perfect if you want more space
						and less allergy aggravation, so give Burton Electric LLC a call
						today to request your free quote.
					</ContactContent>
				</ContactUs>
			</MainContainer>
			<Footer />
		</PageContainer>
	);
};

export default page;
