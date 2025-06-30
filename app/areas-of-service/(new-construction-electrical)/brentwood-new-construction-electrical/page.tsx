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
import { BsLightningChargeFill } from "react-icons/bs";

const newConstruct: string[] = [
	"Service panels",
	"Outlet installation",
	"Light switches and fixtures",
	"Specialty services",
];

const page = () => {
	return (
		<PageContainer>
			<MainContainer>
				<H1>
					<Important>Brentwood New Construction Electrical Services</Important>
				</H1>

				<Section spacing="small">
					<P>
						Most things depend on a strong start if they are going to succeed
						and your Brentwood home or business&apos;s electrical system is no
						different. More often than not, electrical issues are the result of
						an improper installation that causes an accelerated degradation. Of
						course, there&apos;s not much you can do to make sure a residential
						or commercial building&apos;s electrical infrastructure is properly
						installed when purchasing or leasing an existing home or commercial
						space in the Brentwood area, but you can when you are building
						something from scratch.
					</P>
					<P>
						When you take the time to make sure your new structure has been
						properly equipped with all it needs to receive and distribute power
						safely and reliably, you can be confident that you have made a good
						investment. After all, there are few things that bother residents,
						staff and clientele quite like frequent interruptions in their
						electrical service.
					</P>
					<P>
						To make sure that your new construction receives the best possible
						electrical installation services, give Burton Electric LLC a call
						today. Our team of licensed and insured electricians have worked
						closely with Brentwood developers and contractors for many years,
						assisting them in making sure that their buildings have everything
						they need to receive and distribute power as needed.
					</P>
					<P>
						If you are about to break ground on a new home or commercial in the
						Brentwood and you want to make sure that the electrical system is
						primed to last for a long time, call Burton Electric LLC today and
						ask us about our new construction electrical services.
					</P>
				</Section>

				<Section>
					<H2>
						What&apos;s Included in Our New Construction Electrical Services?
					</H2>
					<P>
						Whenever we are tasked in adding the electrical systems to a new
						construction, there is a lot of ground to cover. Whether you have
						already plotted out how you want the electrical system installed and
						simply need the appropriate skilled tradespeople to carry out the
						nitty gritty installation work or you need us to assist you with how
						the electrical infrastructure fits into the design, we can help you
						with:
					</P>

					<ul className="space-y-4">
						{newConstruct.map((construct, index) => (
							<li key={`light-${index}`} className="flex items-center gap-2">
								<BsLightningChargeFill
									size={15}
									className="shrink-0 text-primary"
								/>
								<P className="font-medium">{construct}</P>
							</li>
						))}
					</ul>

					<P>
						When you have been in this trade as long as some of Burton Electric
						LLC&apos;s electricians, it is always exciting to get the
						opportunity to work with a blank slate. We relish the opportunity to
						find innovative new ways of distributing power throughout structures
						of any size. So, no matter what you have in mind for your new
						Brentwood home or business, give us a call today and we will be
						happy to provide you with a free quote on our new construction
						electrical services.
					</P>
				</Section>

				<Section>
					<H2>Safety and Quality</H2>
					<P>
						Safety and quality are the two things that guide Burton Electric
						LLC. Everything we do is governed by making it safe and the highest
						quality possible, including new construction electrical services.
						So, this is what you can expect when you work with us.
					</P>
				</Section>

				<ContactUs>
					<ContactTitle>Contact Burton Electric LLC Today!</ContactTitle>
					<ContactContent>
						Making sure that your new home or business&apos;s electrical system
						is expertly installed is a recipe for sustained success in the
						future. So, give us a call today if you want to avoid electrical
						issues in the near future.
					</ContactContent>
				</ContactUs>
			</MainContainer>
			<Footer />
		</PageContainer>
	);
};

export default page;
