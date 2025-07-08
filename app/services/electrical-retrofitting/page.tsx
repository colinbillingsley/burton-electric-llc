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
		"Electrical Retrofitting Nashville, Brentwood, and Franklin | Burton Electric LLC",
	description:
		"Burton Electric LLC will retrofit your electrical system to make it more modern, safer and more efficient. Call us at (615) 830-1111! ",
	icons: {
		icon: "/burton-logo.png",
	},
	keywords: [
		"Burton Electric LLC",
		"Electrical Retrofitting",
		"Brentwood Electrical Retrofitting",
		"Franklin Electrical Retrofitting",
		"Nashville Electrical Retrofitting",
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
					<Important>Electrical Retrofitting Services</Important>
				</H1>

				<Section spacing="small" className="grid md:grid-cols-2 gap-8">
					<div className="space-y-6">
						<P>
							Have you started to notice that your electricity utility bills
							have been steadily rising even though you haven&apos;t changed
							anything about your usage in your home or local business? If so,
							then you might be the perfect candidate for our electrical
							retrofitting services.
						</P>
						<P>
							Burton Electric LLC has been proud to serve residential and
							commercial clients in the area whenever their electrical assets
							have become out of date and obsolete. Obsolete lights, wires,
							panels, appliances, etc., can all contribute to rising utility
							bills because out of date electrical equipment isn&apos;t as
							efficient, especially when it has to keep up with the amp demands
							of modern technology.
						</P>
						<P>
							Practically anything that uses electricity in your home or
							business could be retrofitted so that it becomes more efficient.
							And while the prospect of all the savings you stand to see on your
							next energy bill is very exciting, we must remind you that it does
							take some time.
						</P>
					</div>
					<div className="space-y-6">
						<P>
							This can take some time depending on the size and layout of your
							home or business. It can take a long time only because our
							commercial and residential electricians are doing their very best
							to make sure there are no stones unturned. We need to make sure
							that we correctly identify the biggest energy wasters on your
							property so that we can effectively retrofit your electrical
							system.
						</P>
						<P>
							When you choose Burton Electric LLC to conduct an electrical
							retrofitting, everyone wins. You&apos;ll be all set to save money
							on electricity, you&apos;ll be making your home or business more
							environmentally friendly and we&apos;ll have yet another satisfied
							customer. To arrange for your electrical retrofitting
							consultation, call Burton Electric LLC today.
						</P>
					</div>
				</Section>

				<Section>
					<H2>How Does Electrical Retrofitting Work?</H2>
					<P>
						As we mentioned above, the first and most important step of an
						electrical retrofitting begins with an audit. Every inch of your
						home or business needs to be inspected by one of our expert
						residential or commercial electricians so that they can take note of
						everything obsolete piece that needs updating. Once we have
						completed the audit, we will provide you with a free quote on the
						retrofitting process. It&apos;s company policy to clearly explain
						every little cost included in the quote so that you know exactly
						what you are paying for.
					</P>
					<P>
						Once we get to work on the actual retrofitting process, we will
						replace everything piece of electrical equipment that has been
						deemed old and inefficient, which may include light fixtures, the
						wiring or electrical panels, for more energy efficient models. By
						the time we are done replacing any obsolete electrical equipment,
						your home or business will be more energy efficient than ever before
						and ready to save you a bunch of money in utilities every month.
					</P>
					<P>
						You won&apos;t believe the difference our electrical retrofitting
						can make, so give us a call today.
					</P>
				</Section>

				<ContactUs>
					<ContactTitle>Contact Us Today!</ContactTitle>
					<ContactContent>
						Get your commercial or residential property up to code when you
						contact Burton Electric LLC today.
					</ContactContent>
				</ContactUs>
			</MainContainer>
			<Footer />
		</PageContainer>
	);
};

export default pages;
