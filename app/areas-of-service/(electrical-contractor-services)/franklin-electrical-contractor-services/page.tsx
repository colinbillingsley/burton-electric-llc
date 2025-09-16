import CenterDiv from "@/components/CenterDiv";
import ContactUs from "@/components/ContactUs";
import H2 from "@/components/H2";
import { SlideInFromLeft } from "@/components/motion/SlideInFromLeft";
import PageContainer from "@/components/PageContainer";
import PageHeading from "@/components/PageHeading";
import Section from "@/components/Section";
import { baseKeywords, icon } from "@/data/seo";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "Franklin Electrical Contractor Services | Burton Electric LLC",
	description:
		"Burton Electric LLC electrical contractor services will enhance the comfort of any Franklin home or business. For installations or repair services, call (615) 830-1111 today!",
	icons: {
		icon: icon,
	},
	keywords: [
		"Brentwood Electrical Contractor Services",
		"Nashville Electrical Contractor Services",
		"Franklin Electrical Contractor Services",
		"Electrical Contractor Services",
		...baseKeywords,
	],
};

const page = () => {
	return (
		<PageContainer>
			<SlideInFromLeft amount={0}>
				<CenterDiv>
					<PageHeading>
						<p>Franklin Electrical Contractor Services</p>
					</PageHeading>

					<Section my="sm" className="space-y-4">
						<H2>About Burton Electric LLC</H2>
						<p>
							We live in the do-it-yourself age. Home and business owners across
							the Franklin area are all eager to cut costs by following the
							directions they find online. But how sure are you that the guide
							you found to follow is written or uploaded by a qualified
							professional? How do you know it applies to your current
							circumstances? Whenever you opt to do-it-yourself, you have to be
							prepared for unforeseen consequences because you don&apos;t truly
							know whether or not the advice is any good. And while these
							consequences are often benign, doing any electrical work yourself
							is a recipe for disaster.
						</p>
						<p>
							Because we rely on electricity so much over the course of any
							given day, we can often take for granted how dangerous it is.
							Electrocution is one of the most common reasons for workplace
							fatalities. And even if you manage to dodge getting electrocuted
							when you are doing electrical work yourself, are you confident
							that your inexperienced hands have made sure your Franklin home or
							business isn&apos;t about to go up in flames if you leave the
							lights on?
						</p>
						<p>
							So, you have to ask yourself what&apos;s worse: paying an extra
							couple of bucks for an electrician that knows what they are doing
							or paying for all the future damages? There is no question that
							the former is the better option, which is why you have to resist
							the urge to do-it-yourself when Burton Electric LLC is ready to
							install or repair your home or business&apos;s electricity.
						</p>
						<p>
							Burton Electric LLC is one of the top electrical companies in the
							Franklin area because our team has unparalleled knowledge of our
							field. We are comfortable working in both residential and
							commercial settings, a rarity in the electrical business, thanks
							to our extensive knowledge. Even if you think you know 80 percent
							of all things electricity, the other 20 percent can cause you or
							your property serious harm.
						</p>
						<p>
							Don&apos;t put your home or business at risk and give Burton
							Electric LLC a call. With our affordable rates, there is
							absolutely no reason why you should put it all on the line to save
							yourself a few extra bucks.
						</p>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>Licensed, Registered and Insured Electricians</H2>
						<p>
							Any home or business owners in the Franklin area who have hired
							contractors in the past know that you can never be too careful.
							Some contractors with excellent reputations and reviews can always
							be unlicensed, unregistered and uninsured. And since you can never
							be too careful, we would like to take a moment to clearly state
							that every single one of Burton Electric LLC&apos;s electricians
							are fully licensed, registered and insured.
						</p>
						<p>
							When you call Burton Electric LLC for some assistance with your
							home or business&apos;s electricity, we want you to feel confident
							that you have made the right decision. It starts with knowing that
							all the work we are about to do is above board and continues when
							you see firsthand how careful, efficient and courteous we are when
							we are working on jobs big and small.
						</p>
					</Section>
				</CenterDiv>
			</SlideInFromLeft>
			<ContactUs
				desc="For all your residential and commercial electrical needs, get in
						touch with Burton Electric LLC today."
			/>
		</PageContainer>
	);
};

export default page;
