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
	title: "Franklin Electrical Repair | Burton Electric LLC",
	description:
		"Burton Electric LLC provides safe, effective electrical repair services in Franklin. Call (615) 830-1111.",
	icons: {
		icon: icon,
	},
	keywords: [
		"Brentwood Electrical Repair",
		"Nashville Electrical Repair",
		"Franklin Electrical Repair",
		"Electrical Repair",
		...baseKeywords,
	],
};

const page = () => {
	return (
		<PageContainer>
			<SlideInFromLeft amount={0}>
				<CenterDiv>
					<PageHeading>
						<p>Franklin Electrical Repair Services</p>
					</PageHeading>

					<Section my="sm" className="space-y-4">
						<p>
							Inside the walls of your Franklin home or business is a complex
							ecosystem of electricity powering all the modern comforts we take
							for granted every day. All the panels, wires, surge protectors,
							lighting fixtures, outlets, etc., have the potential to be damaged
							or degrade over time. When they do start to fail, they can quickly
							become a serious hazard, which is why it is so important that you
							know who to call when things start to go on the fritz.
						</p>
						<p>
							Even if you consider yourself to be an excellent handyman, no DIY
							project can prepare you for the hazards and difficulty of
							repairing your electrical infrastructure. Taking your electrical
							problems into your own hands is bound to end badly. You have two
							options, you can either sustain a serious injury or do serious
							damage to your home or business. Since we can only assume you
							don&apos;t want either outcome, whenever your Franklin home or
							business has an electrical issue, you need to contact Burton
							Electric LLC as soon as possible.
						</p>
						<p>
							Burton Electric LLC continues to be the leader in local electrical
							repair services, always delivering reliable, efficient service
							with long-lasting results. With our team of licensed, insured and
							experienced electricians, we have the professional know-how to
							repair any problem. So, give us a call as soon as you suspect
							there is something fishy with your home or business&apos;s
							electricity and we will be there to provide detail-oriented
							electrical repair services for an affordable rate.
						</p>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>Residential Electrical Repairs</H2>
						<p>
							Your Franklin needs electricity if it&apos;s going to be livable,
							let alone comfortable. Lighting, appliances, heat, hot water can
							all be powered by electricity. And if there is something
							malfunctioning, there is no question you are going to notice
							because of the inconveniences it&apos;s causing you.
						</p>
						<p>
							There is no reason why you should be made to suffer just because
							your electrical system has degraded over time. Our exceptional
							electrical repair professionals will be quick to find the problem
							that&apos;s keeping you from living your best domestic life and
							provide a long-lasting solution.
						</p>
						<p>
							Just give us a call today, describe the problem you are dealing
							with and we will be on our way to figure out a way to resolve
							issue and make your home comfortable again.
						</p>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>Commercial Electrical Repairs</H2>
						<p>
							Can a business operate without reliable electricity? We would be
							shocked if any Franklin business owner answered yes to this
							because what business doesn&apos;t rely on lights, computers,
							etc., to get them through the average day?
						</p>
						<p>
							Regular electrical malfunctions can impede a business&apos;s
							growth. So, when you aren&apos;t receiving the reliable service
							you need to flourish from your infrastructure, give Burton
							Electric LLC a call. Our electricians excel at providing discreet
							and efficient electrical repairs with minimal interruptions to
							your business&apos;s operations.
						</p>
						<p>
							Get in touch with us today if you are tired of faulty wiring
							getting the way of running your business.
						</p>
					</Section>
				</CenterDiv>
			</SlideInFromLeft>
			<ContactUs
				desc="There is nothing more valuable than knowing that the solution to
						your home or business's electrical issues is only a phone call
						away. So, call Burton Electric LLC today."
			/>
		</PageContainer>
	);
};

export default page;
