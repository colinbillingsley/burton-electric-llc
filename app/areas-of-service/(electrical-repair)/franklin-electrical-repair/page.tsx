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
	title: "Franklin Electrical Repair | Burton Electric LLC",
	description:
		"Burton Electric LLC provides safe, effective electrical repair services in Franklin. Call (615) 830-1111.",
	icons: {
		icon: "/burton-logo.png",
	},
	keywords: [
		"Brentwood Electrical Repair",
		"Nashville Electrical Repair",
		"Franklin Electrical Repair",
		"Electrical Repair",
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
					<Important>Franklin Electrical Repair Services</Important>
				</H1>

				<Section spacing="small">
					<P>
						Inside the walls of your Franklin home or business is a complex
						ecosystem of electricity powering all the modern comforts we take
						for granted every day. All the panels, wires, surge protectors,
						lighting fixtures, outlets, etc., have the potential to be damaged
						or degrade over time. When they do start to fail, they can quickly
						become a serious hazard, which is why it is so important that you
						know who to call when things start to go on the fritz.
					</P>
					<P>
						Even if you consider yourself to be an excellent handyman, no DIY
						project can prepare you for the hazards and difficulty of repairing
						your electrical infrastructure. Taking your electrical problems into
						your own hands is bound to end badly. You have two options, you can
						either sustain a serious injury or do serious damage to your home or
						business. Since we can only assume you don&apos;t want either
						outcome, whenever your Franklin home or business has an electrical
						issue, you need to contact Burton Electric LLC as soon as possible.
					</P>
					<P>
						Burton Electric LLC continues to be the leader in local electrical
						repair services, always delivering reliable, efficient service with
						long-lasting results. With our team of licensed, insured and
						experienced electricians, we have the professional know-how to
						repair any problem. So, give us a call as soon as you suspect there
						is something fishy with your home or business&apos;s electricity and
						we will be there to provide detail-oriented electrical repair
						services for an affordable rate.
					</P>
				</Section>

				<Section>
					<H2>Residential Electrical Repairs</H2>
					<P>
						Your Franklin needs electricity if it&apos;s going to be livable,
						let alone comfortable. Lighting, appliances, heat, hot water can all
						be powered by electricity. And if there is something malfunctioning,
						there is no question you are going to notice because of the
						inconveniences it&apos;s causing you.
					</P>
					<P>
						There is no reason why you should be made to suffer just because
						your electrical system has degraded over time. Our exceptional
						electrical repair professionals will be quick to find the problem
						that&apos;s keeping you from living your best domestic life and
						provide a long-lasting solution.
					</P>
					<P>
						Just give us a call today, describe the problem you are dealing with
						and we will be on our way to figure out a way to resolve issue and
						make your home comfortable again.
					</P>
				</Section>

				<Section>
					<H2>Commercial Electrical Repairs</H2>
					<P>
						Can a business operate without reliable electricity? We would be
						shocked if any Franklin business owner answered yes to this because
						what business doesn&apos;t rely on lights, computers, etc., to get
						them through the average day?
					</P>
					<P>
						Regular electrical malfunctions can impede a business&apos;s growth.
						So, when you aren&apos;t receiving the reliable service you need to
						flourish from your infrastructure, give Burton Electric LLC a call.
						Our electricians excel at providing discreet and efficient
						electrical repairs with minimal interruptions to your
						business&apos;s operations.
					</P>
					<P>
						Get in touch with us today if you are tired of faulty wiring getting
						the way of running your business.
					</P>
				</Section>

				<ContactUs>
					<ContactTitle>Contact Burton Electric LLC Today!</ContactTitle>
					<ContactContent>
						There is nothing more valuable than knowing that the solution to
						your home or business&apos;s electrical issues is only a phone call
						away. So, call Burton Electric LLC today.
					</ContactContent>
				</ContactUs>
			</MainContainer>
			<Footer />
		</PageContainer>
	);
};

export default page;
