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
					<Important>Nashville Electricians</Important>
				</H1>

				<Section spacing="small">
					<P>
						Not all electricians are made equal. There are plenty of
						electricians in Nashville and surrounding areas, but do they have
						what it takes to be the right fit for your upcoming project or to
						repair certain features of your home or business? Assessing whether
						or not an electrician is right for the job can be difficult if you
						aren&apos;t familiar with the different specialties within the
						trade, which is why your best bet is hiring Burton Electric LLC.
					</P>
					<P>
						Burton Electric LLC has been proud to serve the Nashville area for
						many years, completing residential and commercial electrical work
						with the precision and dedication required to be the best. At Burton
						Electric LLC, we are a team of fully licensed residential and
						commercial electricians who have a ton of experience working on
						homes and businesses. We have done and seen it all when it comes to
						electrical work, which is why are confident we can help you
						accomplish your goals or right your ship.
					</P>
					<P>To speak with one of our electricians, give us a call today.</P>
				</Section>

				<Section>
					<H2>How Our Electricians Can Help</H2>
					<P>
						As we stated above, Burton Electric LLC only works with the most
						qualified and experienced electricians. Why? Because the more
						experienced an electrician is after they have received the proper
						training, the more versatile they can be in providing electrical
						services. When we started Burton Electric LLC many years ago, we
						didn&apos;t want to make the same mistake we had seen other
						electrical contractors make by only offering a small segment of what
						clients might need.
					</P>
					<P>
						That is why we specialize in residential and commercial electrical
						services. We are equally comfortable installing and maintaining the
						wiring and any control equipment through which electricity flows on
						your property. We can also install and maintain electrical equipment
						and machines on your property as necessary.
					</P>
					<P>
						Whether it&apos;s an urgent or minor task, all you have to do is
						give Burton Electric LLC a call and we&apos;ll take care of the
						rest. We can help you build it, fix it and so much more, even in
						emergencies. Get in touch with us today and let us know what you
						need from us.
					</P>
				</Section>

				<Section>
					<H2>Licensed, Registered and Insured</H2>
					<P>
						When hiring any type of independent contractor, you can never be too
						careful about reviewing their qualifications. Sure, they may have
						excellent reviews online, but a positive review doesn&apos;t mean
						that you won&apos;t be liable for any damages in the event of an
						accident or mistakes made due to inexperience. Some contractors have
						been known to deflect whenever they are asked to produce proof of
						insurance or their qualifications to conduct electrical work.
					</P>
					<P>
						At Burton Electric LLC, we believe in transparency. When our clients
						have confidence in our electricians&apos; abilities, the whole
						process goes a lot smoother. So, if you want to see our licenses,
						permits, registration or proof of insurance, please do not hesitate
						to ask us to share it with you. When clients are able to trust us,
						their satisfaction goes way up, which is always our primary goal.
					</P>
				</Section>

				<ContactUs>
					<ContactTitle>Contact Burton Electric LLC Today!</ContactTitle>
					<ContactContent>
						For all your commercial and residential electrical needs, get in
						touch with Burton Electric LLC today.
					</ContactContent>
				</ContactUs>
			</MainContainer>
			<Footer />
		</PageContainer>
	);
};

export default page;
