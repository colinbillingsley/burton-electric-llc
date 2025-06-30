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
					<Important>Brentwood Electrical Contractor Services</Important>
				</H1>

				<Section spacing="small">
					<H2>About Burton Electric LLC</H2>
					<P>
						There is no secret to running one of the top electrical contracting
						companies in Brentwood. Since we only work with professional
						electricians who have all the necessary knowledge and certifications
						to work on homes and commercial properties throughout the area, the
						rest comes from creating the right culture. At Burton Electric LLC,
						this means approaching every job with the right attitude and
						treating our clients with the utmost respect. We don&apos;t believe
						that a smile or an explanation should require extra effort from our
						representatives. Instead, it should be expected every time you give
						us a call.
					</P>
					<P>
						Speaking of giving us a call, we are available to assist you with
						all your residential and commercial electrical needs. On jobs big or
						small, you can always expect the same level of attention and
						professionalism. You depend on electricity to make your home as
						comfortable as possible. You depend on electricity to keep food on
						your table and your lights on at home, and so do your employees. We
						are very aware of the importance of prompt electrical services.
						Choosing Burton Electric LLC to provide your residential or
						commercial electrical services guarantees fast, quality work to get
						you up and running safely.
					</P>
					<P>
						For a free estimate on any one of our residential or commercial
						electrical services, give Burton Electric LLC a call today.
					</P>
				</Section>

				<Section>
					<H2>Residential and Commercial Electricians</H2>
					<P>
						Few Brentwood residents are aware that there are generally two
						categories of electrical contractors: residential and commercial
						electricians. The reason is because commercial electrical jobs are
						much more complex than residential ones.
					</P>
					<P>
						Whether it&apos;s an installation, repair or replacement, commercial
						jobs are typically far more complex because the energy demands are
						much higher than at a residential space. This isn&apos;t to suggest
						that residential jobs aren&apos;t complex, because they are. In
						fact, any time you interact with electricity can be hazardous if you
						haven&apos;t received the proper training.
					</P>
					<P>
						Lucky for you, our electricians have received the proper training.
						They are capable of servicing both your residential and commercial
						spaces. This means, no matter where you are, you only need to
						remember one name and number to get the best possible electrical
						services. Our goal in only working with electricians who had the
						versatility to do both was to make your life more convenient.
					</P>
					<P>
						So, whether you need some electrical work done at work or at home,
						you can count on Burton Electric LLC to get the job done. Give us a
						call today to receive a free estimate on our residential and
						commercial electrical services.
					</P>
				</Section>

				<Section>
					<H2>Transparency Is Our Calling Card</H2>
					<P>
						Working with contractors can make certain Brentwood home and
						business owners a little edgy because they aren&apos;t sure what
						they are paying for. You have every right to be suspicious of a
						contractor that can&apos;t account for how they have spent the last
						hour, which is why we are committed to transparency in all our
						activity. When we operate transparently, our clients see exactly
						what they&apos;re paying for, inspiring confidence in the service we
						provide them with.
					</P>
				</Section>

				<ContactUs>
					<ContactTitle>Contact Burton Electric LLC Today!</ContactTitle>
					<ContactContent>
						For all your residential and commercial electrical needs, Burton
						Electric LLC is only a phone call away.
					</ContactContent>
				</ContactUs>
			</MainContainer>
			<Footer />
		</PageContainer>
	);
};

export default page;
