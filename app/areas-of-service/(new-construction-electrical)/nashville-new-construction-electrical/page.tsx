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
					<Important>Nashville New Construction Electrical Services</Important>
				</H1>

				<Section spacing="small">
					<P>
						Building a brand-new home or business in the Nashville area from the
						ground up is always an exciting project. For the project to be a
						success, you need to stay focused because there are a lot of little
						things that need to be done. After all, you don&apos;t want to be in
						the middle of the ribbon cutting ceremony and suddenly realize that
						you forgot to wire your brand-new building!
					</P>
					<P>
						You might think that such an oversight is impossible, but anything
						is possible when you are worried about laying the foundation,
						installing the roof, etc. If you have begun construction on a new
						home or commercial building in the Nashville and you would like the
						electrical system to be one less thing you have to worry about, get
						in touch with Burton Electric LLC today.
					</P>
					<P>
						Burton Electric LLC has been providing new construction electrical
						services to Nashville residential and commercial developers and
						contractors for many years. Our calling card is thorough, reliable
						electrical services that make everyone&apos;s lives easier.
						We&apos;ll make sure that all electrical components of your new
						building are safely installed and up to code specifications.
					</P>
					<P>
						Get in touch with Burton Electric LLC today if you want to be
						assured that your new construction&apos;s electrical system is going
						to functioning no matter the scale or complexity of your project.
						Our experienced, licensed and insured electricians are guaranteed to
						get your building fully powered in a way that works for your budget.
					</P>
				</Section>

				<Section>
					<H2>Designing and Laying Out Electrical Systems</H2>
					<P>
						Every construction company and contractor has a slightly different
						method when it comes to building their buildings, which is why
						Burton Electric LLC has made it a point to be as adaptable as
						possible. Our goal is to always provide exceptional services, and
						the way we accomplish this is by maintaining a professional
						flexibility to make sure we&apos;re good on our end without stepping
						on any toes.
					</P>

					<P>
						So, if you are the type of organization that prefers to have the
						designs for the home or office&apos;s electrical system all plotted
						out before the blueprints are even finalized, Burton Electric
						LLC&apos;s electricians are more than capable of following the
						specifications outlined and integrating it into the construction on
						your timetable.
					</P>

					<P>
						Of course, on the other end of the spectrum, if you haven&apos;t
						fully figured out how the electrical system fits into the design of
						whatever you are building, Burton Electric LLC&apos;s team has
						plenty of experience designing the electrical system of your new
						construction. We love the opportunity to go over current drafts,
						give suggestions and figure out ways to make the installation of
						electrical systems streamlined.
					</P>

					<P>
						We are also available to design the entire system from scratch. Just
						let us know what you need from us when you give us a call and we
						will be prepared to assist you with whatever you need.
					</P>
				</Section>

				<ContactUs>
					<ContactTitle>Contact Burton Electric LLC Today!</ContactTitle>
					<ContactContent>
						Making sure that your new construction has safe and reliable access
						to power is as important as making sure the foundation and roof is
						solid. To be sure the electricity in your new construction is sound,
						give Burton Electric LLC a call today.
					</ContactContent>
				</ContactUs>
			</MainContainer>
			<Footer />
		</PageContainer>
	);
};

export default page;
