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
import React from "react";

const page = () => {
	return (
		<PageContainer>
			<MainContainer>
				<H1>
					<Important>Brentwood Residential Ceiling Fan Installations</Important>
				</H1>

				<Section spacing="small">
					<P>
						The popularity of ceiling fans continues to grow among Brentwood
						homeowners as word continues to spread about the dramatic,
						year-round energy savings they offer. In the summer, ceiling fans
						create cooling breezes to reduce the strain on air conditioners.
					</P>
					<P>
						The cooling effect ceiling fans can have on any given room is
						something you are certainly already aware of, but did you also know
						that they can be used to make your home more comfortable in even the
						harshest Brentwood winters? They can circulate the hot air to keep
						any room in your home warmer without putting any additional strain
						on your home&apos;s heating system. And when you aren&apos;t
						constantly fiddling with your home&apos;s thermostat, you should
						notice your monthly energy bills start to plateau.
					</P>
					<P>
						Of course, reaping the energy saving and comfort boosting benefits
						of a new ceiling fan isn&apos;t as simple as taking it out of the
						box and plugging it in. If you are planning on purchasing a new
						ceiling fan, make sure that you have a reliable, insured and
						licensed electrician on hand so that you can make sure it gets
						properly installed.
					</P>
					<P>
						Attempting to install a ceiling fan yourself is a risky proposition.
						Figuring out how to wire it in a safe way so that there is no risk
						of fires is next to impossible if you haven&apos;t received the
						proper training, but it&apos;s exponentially more difficult when you
						are up on a ladder with this cumbersome household feature. Sounds
						like a hazard waiting to happen, right? Rather than risk it, just
						call Burton Electric LLC.
					</P>
					<P>
						Burton Electric LLC has completed hundreds of residential ceiling
						fan installations over the years and we always approach it with the
						same commitment to excellence that has made us one of the top
						electrical companies in the Brentwood area. So, if you want to make
						sure that your home&apos;s new ceiling fan is properly installed,
						call up Burton Electric LLC and we&apos;ll provide you with a free
						quote.
					</P>
				</Section>

				<Section>
					<H2>Fast and Easy Installations With Burton Electric LLC</H2>
					<P>
						Installing a new ceiling fan yourself is something we could never
						recommend in good conscience because there are far too many risks
						associated with it. Installing a new ceiling fan is an easy task for
						our electricians, compared to some of the other things we get hired
						to do, thanks to the amount of experience we have.
					</P>

					<P>
						When you choose Burton Electric LLC to install your home&apos;s new
						ceiling fan, we promise to have your new ceiling fixture installed
						safely and securely. Best of all, Burton Electric LLC has a strict
						transparent pricing policy. So, whatever price you were quoted for
						our residential ceiling fan installation services, that is the price
						you are guaranteed to pay.
					</P>

					<P>
						Not only can we install your home&apos;s new ceiling fan in hardly
						no time at all, we can also remove faulty ceiling fans, lighting
						fixtures, chandeliers and track lighting if necessary. Whatever you
						need to get your new ceiling fan working, Burton Electric LLC is
						here to help.
					</P>
				</Section>

				<ContactUs>
					<ContactTitle>Contact Burton Electric LLC Today!</ContactTitle>
					<ContactContent>
						To get the best electricians in the Brentwood area to install your
						ceiling fan, get in touch with Burton Electric LLC today.
					</ContactContent>
				</ContactUs>
			</MainContainer>
			<Footer />
		</PageContainer>
	);
};

export default page;
