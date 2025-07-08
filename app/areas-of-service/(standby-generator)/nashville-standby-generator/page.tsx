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
	title: "Nashville Standby Generators | Burton Electric LLC",
	description:
		"You will have consistent, uninterrupted power for your home or business in Nashville with a standby generator. Call Burton Electric LLC today at (615) 830-1111",
	icons: {
		icon: "/burton-logo.png",
	},
	keywords: [
		"Brentwood Standby Generators",
		"Nashville Standby Generators",
		"Franklin Standby Generators",
		"Standby Generators",
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
					<Important>Nashville Standby Generators</Important>
				</H1>

				<Section spacing="small">
					<P>
						Whether you&apos;re a home or business owner in the Nashville area,
						you can&apos;t afford to be without power for an extended period of
						time. If you have ever lived through an extended power outage
						before, you know that there is nothing worse than sitting and
						waiting for the lights to come back on. Luckily, there are measures
						home and business owners can take to make sure that their comfort
						and productivity aren&apos;t compromised due to issues beyond your
						control.
					</P>
					<P>
						If you don&apos;t want to get left in the dark, investing in a
						standby generator is one of the best decisions you&apos;ll ever
						make. Standby generators offer home and business owners in the area
						reliable backup power for days whenever your area suffers from
						extended blackouts. Before you order your standby generator, we
						should note that adding a standby generator to your Nashville home
						or business is not something you should expect to accomplish
						yourself. Adding a standby generator requires the help of a trained,
						licensed and insured professional, which is why Burton Electric
						LLC&apos;s trained, licensed and insured professionals are ready to
						help as soon as you give us a call.
					</P>
					<P>
						When you talk to Burton Electric LLC about installing a standby
						generator, we will arrange a time for us to come assess your home or
						business&apos;s electrical needs to determine the size of generator
						you&apos;ll need. Once we have figured out the kinds of electrical
						demands your building will have for a backup generator, we will take
						care of the installation for an affordable price.
					</P>
					<P>
						Burton Electric LLC continues to be one of Nashville&apos;s favorite
						companies for commercial and residential standby generator
						installation and maintenance services because our clients can always
						expect quality work and reliable service. Give us a call today to
						schedule a free load assessment.
					</P>
				</Section>

				<Section>
					<H2>
						Choosing the Right Standby Generator for Your Nashville Home or
						Business
					</H2>
					<P>
						One of the most difficult things to do when shopping for standby
						generators is knowing which one is right for your home or business.
						Burton Electric LLC&apos;s electricians are happy to help you make
						your best guesses into a realistic estimate, but here are some
						things to consider so that our professional estimate is as accurate
						as possible.
					</P>
					<P>
						If you were without power at home for an extended period of time,
						which of the following appliances would you be able to survive
						without? Would you need your sump pump? Your microwave? Your garage
						door opener?
					</P>
					<P>
						And for commercial clients, how many employees do you have? What
						electrical appliances do they need to complete their tasks
						effectively?
					</P>
					<P>
						Again, figuring out how much backup power you&apos;ll need in the
						event of a power outage is not an easy task if you don&apos;t have
						any training in the electrical trade. So, if you want to consult
						with a professional, please don&apos;t hesitate to contact Burton
						Electric LLC today to schedule your free electrical load assessment.
					</P>
				</Section>

				<ContactUs>
					<ContactTitle>Contact Burton Electric LLC Today!</ContactTitle>
					<ContactContent>
						Don&apos;t let matters out of your control determine whether you are
						comfortable in your own home or capable of running your business.
						Give Burton Electric LLC a call to make sure you have access to
						power when you need it most.
					</ContactContent>
				</ContactUs>
			</MainContainer>
			<Footer />
		</PageContainer>
	);
};

export default page;
