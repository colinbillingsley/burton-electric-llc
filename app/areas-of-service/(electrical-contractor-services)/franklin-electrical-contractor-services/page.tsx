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
	title: "Franklin Electrical Contractor Services | Burton Electric LLC",
	description:
		"Burton Electric LLC electrical contractor services will enhance the comfort of any Franklin home or business. For installations or repair services, call (615) 830-1111 today!",
	icons: {
		icon: "/burton-logo.png",
	},
	keywords: [
		"Brentwood Electrical Contractor Services",
		"Nashville Electrical Contractor Services",
		"Franklin Electrical Contractor Services",
		"Electrical Contractor Services",
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
					<Important>Franklin Electrical Contractor Services</Important>
				</H1>

				<Section spacing="small">
					<H2>About Burton Electric LLC</H2>
					<P>
						We live in the do-it-yourself age. Home and business owners across
						the Franklin area are all eager to cut costs by following the
						directions they find online. But how sure are you that the guide you
						found to follow is written or uploaded by a qualified professional?
						How do you know it applies to your current circumstances? Whenever
						you opt to do-it-yourself, you have to be prepared for unforeseen
						consequences because you don&apos;t truly know whether or not the
						advice is any good. And while these consequences are often benign,
						doing any electrical work yourself is a recipe for disaster.
					</P>
					<P>
						Because we rely on electricity so much over the course of any given
						day, we can often take for granted how dangerous it is.
						Electrocution is one of the most common reasons for workplace
						fatalities. And even if you manage to dodge getting electrocuted
						when you are doing electrical work yourself, are you confident that
						your inexperienced hands have made sure your Franklin home or
						business isn&apos;t about to go up in flames if you leave the lights
						on?
					</P>
					<P>
						So, you have to ask yourself what&apos;s worse: paying an extra
						couple of bucks for an electrician that knows what they are doing or
						paying for all the future damages? There is no question that the
						former is the better option, which is why you have to resist the
						urge to do-it-yourself when Burton Electric LLC is ready to install
						or repair your home or business&apos;s electricity.
					</P>
					<P>
						Burton Electric LLC is one of the top electrical companies in the
						Franklin area because our team has unparalleled knowledge of our
						field. We are comfortable working in both residential and commercial
						settings, a rarity in the electrical business, thanks to our
						extensive knowledge. Even if you think you know 80 percent of all
						things electricity, the other 20 percent can cause you or your
						property serious harm.
					</P>
					<P>
						Don&apos;t put your home or business at risk and give Burton
						Electric LLC a call. With our affordable rates, there is absolutely
						no reason why you should put it all on the line to save yourself a
						few extra bucks.
					</P>
				</Section>

				<Section>
					<H2>Licensed, Registered and Insured Electricians</H2>
					<P>
						Any home or business owners in the Franklin area who have hired
						contractors in the past know that you can never be too careful. Some
						contractors with excellent reputations and reviews can always be
						unlicensed, unregistered and uninsured. And since you can never be
						too careful, we would like to take a moment to clearly state that
						every single one of Burton Electric LLC&apos;s electricians are
						fully licensed, registered and insured.
					</P>
					<P>
						When you call Burton Electric LLC for some assistance with your home
						or business&apos;s electricity, we want you to feel confident that
						you have made the right decision. It starts with knowing that all
						the work we are about to do is above board and continues when you
						see firsthand how careful, efficient and courteous we are when we
						are working on jobs big and small.
					</P>
				</Section>

				<ContactUs>
					<ContactTitle>Contact Burton Electric LLC Today!</ContactTitle>
					<ContactContent>
						For all your residential and commercial electrical needs, get in
						touch with Burton Electric LLC today.
					</ContactContent>
				</ContactUs>
			</MainContainer>
			<Footer />
		</PageContainer>
	);
};

export default page;
