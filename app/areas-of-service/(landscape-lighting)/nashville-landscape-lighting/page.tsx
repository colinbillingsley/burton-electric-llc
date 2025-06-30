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
					<Important>Nashville Landscape Lighting Services</Important>
				</H1>

				<Section spacing="small">
					<P>
						You can never underestimate the value good landscape design can add
						to your property. Both commercial and residential properties in the
						Nashville area can boost their curb appeal and create a relaxing,
						outdoor space when they do, but what are you supposed to do once the
						sun goes down? After all you put in to creating the landscape, why
						should it go unappreciated in the dark when there are some many
						different landscape lighting options available.
					</P>
					<P>
						Path lights, spotlights, floodlights, deck lights, well light, post
						cap lights and more can all be integrated into your Nashville home
						or business&apos;s landscape design to give it more nuance, ambiance
						and depth. And with so many different landscape lighting options
						available, it is worth your while to consult with professionals who
						excel at the design, installation and maintenance of landscape
						lighting systems.
					</P>
					<P>
						For the last several years, Burton Electric LLC has been proud to
						help make residential and commercial landscapes in the Nashville
						area more beautiful and usable thanks to our landscape lighting
						expertise. We have designed and installed all types of landscape
						lighting across the area and we will be happy to provide you with
						the same efficient, detail-oriented and courteous service we are
						known for.
					</P>
					<P>
						To learn more about our landscape lighting services or request a
						free, no obligation estimate, give Burton Electric LLC a call today.
					</P>
				</Section>

				<Section spacing="small" className="mt-20">
					<H2>The Purpose of Landscape Lighting</H2>
					<P>
						Before you call Burton Electric LLC to inquire about our landscape
						lighting services, we should tell you that we can give you a more
						accurate estimate if you have an idea of what you hope to accomplish
						with your landscape lighting. The subsequent installation will be
						much smoother if there is a clear goal in place.
					</P>
					<P>
						So, what purpose do you want your landscape lighting to serve? Would
						you like a little mood lighting to make your new patio or backyard
						area a romantic place to sit once the sun goes down? Or is there a
						part of your commercial property that&apos;s a bit too dark and
						inviting to vandals and other miscreants and you need something to
						deter them?
					</P>
					<P>
						Your goals for your landscape lighting will be the big determining
						factor in how we proceed because, though we are the experts, Burton
						Electric LLC&apos;s biggest priority is and always will be customer
						satisfaction. When you have a clear goal in mind, we can get started
						on how to best achieve that goal. And even if you aren&apos;t
						exactly sure what you want out of your landscape lighting, Burton
						Electric LLC&apos;s experts are always available to suggest some
						options and brainstorm with you whenever you give us a call.
					</P>
					<P>
						Our knowledgeable, experienced, licensed and insured team of
						electricians have been helping make residential and commercial
						properties all over the Nashville area increase their value,
						security and functionality so give us a call today.
					</P>
				</Section>

				<ContactUs>
					<ContactTitle>Contact Burton Electric LLC Today!</ContactTitle>
					<ContactContent>
						Professional outdoor lighting can make a huge impact on commercial
						and residential properties. To take advantage of these benefits, get
						in touch with Burton Electric LLC today to find out how we can help.
					</ContactContent>
				</ContactUs>
			</MainContainer>
			<Footer />
		</PageContainer>
	);
};

export default page;
