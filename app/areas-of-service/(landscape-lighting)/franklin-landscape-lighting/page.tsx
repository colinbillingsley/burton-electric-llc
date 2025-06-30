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
					<Important>Franklin Landscape Lighting Services</Important>
				</H1>

				<Section spacing="small">
					<P>
						The sun should never set on Franklin&apos;s most beautiful
						landscapes. At least, that&apos;s what we believe at Burton Electric
						LLC. You invest time, money and energy to create a beautiful outdoor
						space perfect rest and relaxation at home and at work. So, why is
						this space only usable during the day? Shouldn&apos;t you be able to
						take advantage of it at all hours of the day? If you agree that you
						could be getting more use out of your residential or commercial
						landscape in the Franklin area, then you need to get in touch with
						Burton Electric LLC today.
					</P>
					<P>
						Burton Electric LLC is an electrical contracting firm that has
						specialized in the design, installation and maintenance of outdoor
						lighting systems for commercial and residential properties all over
						the Franklin area. As registered, licensed and insured electricians
						and general admirers of the natural world, we are always happy to
						lend our expertise to make your existing or soon to be completed
						landscape even more gorgeous thanks to proper lighting techniques.
					</P>
					<P>
						For a free estimate on landscape lighting services, get in touch
						with Burton Electric LLC today.
					</P>
				</Section>

				<Section spacing="small" className="mt-20">
					<H2>Landscape Lighting Design Ideas</H2>
					<P>
						Strong landscape lighting design always begins with considering how
						you intend to use your space. If you are interested in our
						residential outdoor lighting services, ask yourself if you are
						planning on doing a lot of entertaining in your back yard. If you
						are, you will most likely need good lighting on pathways, patios and
						decks on the property. Or do you simply want to see your home all
						lit up when you come home? If you are a commercial client, then you
						might be more interested in installing lights that serve the dual
						purposes of making the building beautiful and increasing its
						security.
					</P>
					<P>
						To stoke the fires of your creativity, here are some design ideas to
						consider.
					</P>
				</Section>

				<Section spacing="small">
					<H2>Focal Points</H2>
					<P>
						Choosing one or two elements you want to highlight with lighting can
						influence the overall design of your lighting system. For example,
						if you have a tree or a fountain in your landscape, you may want to
						call extra attention to them, making them the focal points of your
						design.
					</P>
				</Section>

				<Section spacing="small">
					<H2>Sense of Depth</H2>
					<P>
						Depth refers to the distance the viewer&apos;s gaze travels as they
						view the scene. When you adorn your walkways and flower beds with
						proper lighting, the viewer&apos;s gaze is encouraged to travel down
						the walkways, along the flower bed until they have taken it all in.
						This makes people feel like they are an active participant in your
						landscape and can do wonders for setting an unforgettable ambiance.
					</P>
				</Section>

				<Section spacing="small">
					<H2>Cohesion and Balance</H2>
					<P>
						Ultimately, your lighting design must make visual sense to
						residents, guests and anyone who comes across the property. Areas of
						light and shadows need to feel synchronized and deliberate. If
						plants and structures are lit out of proportion, there will be no
						sense of intentionality, that the placement was haphazard,
						diminishing the curb appeal. Cohesion and balance take practice to
						master, which is why we are here to help.
					</P>
				</Section>

				<ContactUs>
					<ContactTitle>Contact Burton Electric LLC Today!</ContactTitle>
					<ContactContent>
						For all your residential and commercial landscape lighting needs,
						Burton Electric LLC is only a phone call away.
					</ContactContent>
				</ContactUs>
			</MainContainer>
			<Footer />
		</PageContainer>
	);
};

export default page;
