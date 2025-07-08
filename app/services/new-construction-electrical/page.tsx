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
import React, { ReactNode } from "react";
import { PiWarningBold } from "react-icons/pi";
import { TbPlugConnectedX, TbRulerOff } from "react-icons/tb";

export const metadata: Metadata = {
	title:
		"New Construction Electrical Nashville, Brentwood, and Franklin | Burton Electric LLC",
	description:
		"For any new construction project, you can rely on Burton Electric LLC for safe, efficient electrical work. Give us a call at (615) 830-1111",
	icons: {
		icon: "/burton-logo.png",
	},
	keywords: [
		"Burton Electric LLC",
		"New Construction Electrical Services",
		"New Construction Electrical",
		"Brentwood New Construction Electrical",
		"Franklin New Construction Electrical",
		"Nashville New Construction Electrical",
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

const ICONSIZE = 28;

const costUnlicensedElecContractors: {
	title: string;
	desc: string;
	icon: ReactNode;
}[] = [
	{
		title: "Incorrect wire size",
		desc: "If the wrong size of wire is installed in the construction phase, it can render the building uninhabitable in virtually no time. If the wires are too small, it can result in overheating because they are carrying more electricity than what they have been designed for, leading to electrical fires.",
		icon: <TbRulerOff size={ICONSIZE} className="shrink-0" />,
	},
	{
		title: "Unprotected wiring",
		desc: "Wiring needs to be properly protected from weather, tampering and environmental changes. If it's not, you are inviting all kinds of trouble. Unlicensed electrical contractors have been known to neglect protecting the wiring, but when you work with Burton Electric LLC it'll never happen because we can't afford to lose our licenses.",
		icon: <PiWarningBold size={ICONSIZE} className="shrink-0" />,
	},
	{
		title: "Poor Connections",
		desc: "In order for electrical circuits to function properly, all connections must be snug and properly secured. If not, overheating, arcing and other issues will be common place. Inexperienced and unlicensed electricians will often give short shrift to the quality of the connections for their own convenience.",
		icon: <TbPlugConnectedX size={ICONSIZE} className="shrink-0" />,
	},
];

const pages = () => {
	return (
		<PageContainer>
			<MainContainer>
				<H1>
					<Important>New Construction Electrical Services</Important>
				</H1>

				<Section
					spacing="small"
					className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8"
				>
					<P>
						If you have built a home or commercial building from the ground up
						before, you know how important it is to hire the right contractors.
						If things go wrong during the construction phase of the project, it
						can have a ripple effect through every aspect of the building for
						years to come. It is critical for local developers to partner with
						the right contractors if they have any hope of minimizing or
						completely eliminating these kinds of costly mistakes.
					</P>
					<P>
						While every aspect of the construction phase has the potential to
						have disastrous consequences if it&apos;s not conducted by qualified
						professionals, there are few things more serious than the new home
						or business&apos;s electrical work. Faulty wiring is practically
						guaranteed to cause a fire or shocks at some time in the future.
					</P>
					<P>
						If you want to make sure your new building&apos;s isn&apos;t at risk
						of being an expensive electrical emergency, give Burton Electric LLC
						a call today and inquire about our new construction electrical
						services. We have the experience and qualifications necessary to
						make sure your new construction is safely distributing power just as
						your design intended. Give us a call today to request a free quote
						on our new construction electrical services.
					</P>
				</Section>

				<Section>
					<H2>The Cost of Unlicensed Electrical Contractors</H2>
					<P className="mb-10">
						There is a lot of potential for things to go wrong when you work
						with an unlicensed electrical contractor. The more common things
						we&apos;ve seen include:
					</P>
					<ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8">
						{costUnlicensedElecContractors.map((item, index) => (
							<li key={`unlicensed-${index}`} className="space-y-6 h-full">
								<P className="text-2xl font-medium flex items-center gap-3">
									<i>{item.icon}</i>
									<span>{item.title}</span>
								</P>
								<P>{item.desc}</P>
							</li>
						))}
					</ul>
				</Section>

				<Section className="space-y-8">
					<H2>Trust Our New Construction Electrical Services</H2>
					<P>
						As you see, there are a lot of problems involved with choosing an
						unlicensed electrician. Choosing Burton Electric LLC to provide the
						new construction electrical services you need is definitely a smart
						move because we offer more experience and an impeccable reputation
						for quality service.
					</P>
					<P>
						We have helped all kinds of developers, contractors and construction
						companies all over the year make sure their projects are a success.
						If you would like to review our new construction electrical
						portfolio, please give us a call today.
					</P>
				</Section>

				<ContactUs>
					<ContactTitle>Contact Us Today!</ContactTitle>
					<ContactContent>
						Don&apos;t let your newly constructed home or business go up in
						flames because of cheap, unlicensed electrical installation
						services. Let Burton Electric LLC&apos;s high standards ensure your
						building is up to electrical codes with our new construction
						electrical services.
					</ContactContent>
				</ContactUs>
			</MainContainer>
			<Footer />
		</PageContainer>
	);
};

export default pages;
