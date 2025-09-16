import CenterDiv from "@/components/CenterDiv";
import ContactUs from "@/components/ContactUs";
import H2 from "@/components/H2";
import { SlideInFromLeft } from "@/components/motion/SlideInFromLeft";
import PageContainer from "@/components/PageContainer";
import PageHeading from "@/components/PageHeading";
import Section from "@/components/Section";
import { baseKeywords, icon } from "@/data/seo";
import { Cable, Diameter, TriangleAlertIcon } from "lucide-react";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
	title:
		"New Construction Electrical Nashville, Brentwood, and Franklin | Burton Electric LLC",
	description:
		"For any new construction project, you can rely on Burton Electric LLC for safe, efficient electrical work. Give us a call at (615) 830-1111",
	icons: {
		icon: icon,
	},
	keywords: [
		"New Construction Electrical Services",
		"New Construction Electrical",
		"Brentwood New Construction Electrical",
		"Franklin New Construction Electrical",
		"Nashville New Construction Electrical",
		...baseKeywords,
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
		icon: <Diameter size={ICONSIZE} className="shrink-0" />,
	},
	{
		title: "Unprotected wiring",
		desc: "Wiring needs to be properly protected from weather, tampering and environmental changes. If it's not, you are inviting all kinds of trouble. Unlicensed electrical contractors have been known to neglect protecting the wiring, but when you work with Burton Electric LLC it'll never happen because we can't afford to lose our licenses.",
		icon: <TriangleAlertIcon size={ICONSIZE} className="shrink-0" />,
	},
	{
		title: "Poor Connections",
		desc: "In order for electrical circuits to function properly, all connections must be snug and properly secured. If not, overheating, arcing and other issues will be common place. Inexperienced and unlicensed electricians will often give short shrift to the quality of the connections for their own convenience.",
		icon: <Cable size={ICONSIZE} className="shrink-0" />,
	},
];

const pages = () => {
	return (
		<PageContainer>
			<SlideInFromLeft amount={0}>
				<CenterDiv>
					<PageHeading>
						<p>New Construction Electrical Services</p>
					</PageHeading>

					<Section
						my="sm"
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8"
					>
						<p>
							If you have built a home or commercial building from the ground up
							before, you know how important it is to hire the right
							contractors. If things go wrong during the construction phase of
							the project, it can have a ripple effect through every aspect of
							the building for years to come. It is critical for local
							developers to partner with the right contractors if they have any
							hope of minimizing or completely eliminating these kinds of costly
							mistakes.
						</p>
						<p>
							While every aspect of the construction phase has the potential to
							have disastrous consequences if it&apos;s not conducted by
							qualified professionals, there are few things more serious than
							the new home or business&apos;s electrical work. Faulty wiring is
							practically guaranteed to cause a fire or shocks at some time in
							the future.
						</p>
						<p>
							If you want to make sure your new building&apos;s isn&apos;t at
							risk of being an expensive electrical emergency, give Burton
							Electric LLC a call today and inquire about our new construction
							electrical services. We have the experience and qualifications
							necessary to make sure your new construction is safely
							distributing power just as your design intended. Give us a call
							today to request a free quote on our new construction electrical
							services.
						</p>
					</Section>

					<Section my="sm" className="space-y-2">
						<H2>The Cost of Unlicensed Electrical Contractors</H2>
						<p className="mb-10">
							There is a lot of potential for things to go wrong when you work
							with an unlicensed electrical contractor. The more common things
							we&apos;ve seen include:
						</p>
						<ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
							{costUnlicensedElecContractors.map((item, index) => (
								<li
									key={`unlicensed-${index}`}
									className="space-y-6 h-full border rounded-md p-6 bg-white shadow-md"
								>
									<p className="text-2xl font-medium flex items-center gap-3">
										<i>{item.icon}</i>
										<span>{item.title}</span>
									</p>
									<p className="text-sm">{item.desc}</p>
								</li>
							))}
						</ul>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>Trust Our New Construction Electrical Services</H2>
						<p>
							As you see, there are a lot of problems involved with choosing an
							unlicensed electrician. Choosing Burton Electric LLC to provide
							the new construction electrical services you need is definitely a
							smart move because we offer more experience and an impeccable
							reputation for quality service.
						</p>
						<p>
							We have helped all kinds of developers, contractors and
							construction companies all over the year make sure their projects
							are a success. If you would like to review our new construction
							electrical portfolio, please give us a call today.
						</p>
					</Section>
				</CenterDiv>
			</SlideInFromLeft>
			<ContactUs
				desc="Don't let your newly constructed home or business go up in
						flames because of cheap, unlicensed electrical installation
						services. Let Burton Electric LLC's high standards ensure your
						building is up to electrical codes with our new construction
						electrical services."
			/>
		</PageContainer>
	);
};

export default pages;
