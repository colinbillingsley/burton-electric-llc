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
					<Important>Franklin Surge Protection Services</Important>
				</H1>

				<Section spacing="small">
					<P>
						There isn&apos;t a home or business in the Franklin area that
						isn&apos;t full of expensive appliances and electronic devices that
						aren&apos;t vulnerable to power surges. Same goes for the wiring
						that runs all through the walls. If your Franklin property
						doesn&apos;t have adequate surge protection, not only do you run the
						risk of losing thousands of dollars&apos; worth of electronics, but
						you could also be at high risk for an electrical fire.
					</P>
					<P>
						Neither outcome is desirable, to put it lightly, which is why
						investing in surge protection is what prudent home and business
						owners do. And when they want to make sure they are getting
						effective and affordable surge protection services, they call Burton
						Electric LLC.
					</P>
					<P>
						Burton Electric LLC has been proud to help area home and business
						owners increase their protections against surges. Plug-in surge
						protectors are certainly an asset, but if you want to be completely
						assured that you are protected against the worst-case scenario, you
						need to give us a call today. When you do, a member of Burton
						Electric LLC&apos;s team will be happy to give you a free estimate
						on our surge protection services.
					</P>
				</Section>

				<Section>
					<H2>How Surge Protectors Work</H2>
					<P>
						Before we go in to our explanation on how surge protectors work, we
						need to clearly define what an electrical surge is. Imagine
						electricity flowing through your home and business&apos;s wires the
						same way water flows through its pipes. Water moves from one of a
						pipe to the other end thanks to water pressure. Electricity works in
						a similar way. It moves from areas of high electric potential energy
						to areas of low electric potential energy.
					</P>
					<P>
						Voltage is what we use to measure electric potential energy. When
						the voltage increases above the average for as little as three
						nanoseconds, it&apos;s defined as a surge. If the voltage of the
						wire is too strong, then the electricity will surge through,
						generating a ton of heat, causing it to burn.
					</P>
					<P>
						What a surge protector does is detect excess voltage and divert the
						extra electricity into the grounding wire, sparring your valuable
						electronics and your home or business&apos;s wiring from serious
						damage.
					</P>
					<P>
						While there&apos;s no question that using surge protecting power
						strips all over your home or business is a good idea, you could be
						doing a lot more to protect your building and the assets within. A
						professionally installed whole-house surge protector can save you
						thousands over its initial investment cost.
					</P>
					<P>
						In addition to qualifying you for potential discounts from your
						insurance company, when you have a surge protector hardwired to your
						home or business&apos;s electrical panel, it will redirect excess
						current safely to ground, blocking it before it has the chance to
						escape into the circuitry of your home or business.
					</P>
					<P>
						You can never be too careful when it comes to protecting yourself
						from the hazards of electricity, which is why it&apos;s worth at
						least considering.
					</P>
				</Section>

				<ContactUs>
					<ContactTitle>Contact Burton Electric LLC Today!</ContactTitle>
					<ContactContent>
						For all the good electricity provides us, it is important to
						remember that it can be a destructive force if left unregulated.
						Protect yourself against hazardous surges and call Burton Electric
						LLC today.
					</ContactContent>
				</ContactUs>
			</MainContainer>
			<Footer />
		</PageContainer>
	);
};

export default page;
