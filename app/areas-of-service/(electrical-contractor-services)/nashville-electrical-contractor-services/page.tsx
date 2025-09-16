import CenterDiv from "@/components/CenterDiv";
import ContactUs from "@/components/ContactUs";
import H2 from "@/components/H2";
import { SlideInFromLeft } from "@/components/motion/SlideInFromLeft";
import PageContainer from "@/components/PageContainer";
import PageHeading from "@/components/PageHeading";
import Section from "@/components/Section";
import { baseKeywords, icon } from "@/data/seo";
import { Zap } from "lucide-react";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "Nashville Electrical Contractor Services | Burton Electric LLC",
	description:
		"Burton Electric LLC electrical contractor services will enhance the comfort of any Nashville home or business. For installations or repair services, call (615) 830-1111 today!",
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

const resElecContServices: string[] = [
	"Electric panel upgrades",
	"Whole home surge protection",
	"Permit and inspections",
	"Residential installations",
	"Code violation correction",
	"Generator and emergency power hookup",
	"Trouble shoot and repair services",
	"Electrical appliance installation",
];

const page = () => {
	return (
		<PageContainer>
			<SlideInFromLeft amount={0}>
				<CenterDiv>
					<PageHeading>
						<p>Nashville Electrical Contractor Services</p>
					</PageHeading>

					<Section my="sm" className="space-y-4">
						<H2>Nashville Electrical Contractors</H2>
						<p>
							If you don&apos;t know the difference between an electrician and
							an electrical contractor, you don&apos;t need to beat yourself up
							over it because very few people realize there is a difference
							between the two disciplines. Yes, both work with electricity and
							their expertise are invaluable whenever there is electrical work
							required, but that&apos;s where the similarities end.
						</p>
						<p>
							An electrician is a trained tradesperson who can assist you with
							repairs and installations of your residential or commercial
							property in the Nashville area whereas an electrical contractor is
							a person or firm that performs specialized construction related to
							the design, installation and maintenance of electrical systems.
							This means when you are building something from scratch or
							remodeling an existing residential or commercial building and need
							a specialist to tend to all the electrical demands, you need to
							find a reliable, licensed and insured electrical contractor.
						</p>
						<p>
							If you are a residential or commercial client in need of the
							professional assistance an electrical contractor can provide, your
							best bet is to contact Burton Electric LLC. Burton Electric LLC
							has been proud to serve homes and businesses in the Nashville
							area, designing, installing and maintaining all kinds of
							electrical systems. Since our first day as an electrical
							contracting firm, we have always done everything we can to make
							quality work our calling card.
						</p>
						<p>
							For a free estimate on our electrical contracting services, get in
							touch with Burton Electric LLC today.
						</p>
					</Section>

					<Section my="sm" className="space-y-6">
						<H2>Residential Electrical Contracting Services</H2>
						<p>
							Whether you are planning a remodel, or you are going to build a
							custom home in the Nashville area, you are going to need to power
							your home somehow. If you want to make sure that your new or
							remodeled home is free from any electrical issues, it starts with
							choosing Burton Electric LLC as your residential electrical
							contractor.
						</p>
						<p>
							Burton Electric LLC should be your first choice when you need a
							residential electrical contractor because our team is extremely
							qualified and experienced. On jobs both big and small, you can
							always expect attention to detail, integrity and quality work at
							an affordable price. Just some of the things we can assist you
							with include:
						</p>

						<ul className="flex items-center gap-4 flex-wrap">
							{resElecContServices.map((service, index) => (
								<li
									key={`service-${index}`}
									className="flex items-center gap-2 px-4 py-2 border border-primary shadow-sm w-fit rounded-lg hover:cursor-default"
								>
									<Zap size={15} className="shrink-0 text-primary" />
									<p className="font-medium">{service}</p>
								</li>
							))}
						</ul>

						<p>
							Give us a call today to get a free estimate on the residential
							contracting service you require.
						</p>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>Commercial Electrical Contracting Services</H2>
						<p>
							Because their scope is typically much bigger than residential
							jobs, commercial electrical work is extremely complicated and
							needs to be conducted by a professional commercial electrical
							contractor. Burton Electric LLC has been making sure Nashville
							businesses receive efficient and cost-effective commercial
							electrical contracting services to keep them up to code for
							several years.
						</p>
						<p>
							When you require trained, licensed and insured professionals with
							our expertise, give us a call right away to get a free estimate on
							our services.
						</p>
					</Section>
				</CenterDiv>
			</SlideInFromLeft>
			<ContactUs
				desc="For all your residential and commercial electrical contracting
						needs, Burton Electric LLC is proud to be your reliable, affordable
						one-stop shop for all things design, installation and maintenance.
						Get a free estimate when you call us today."
			/>
		</PageContainer>
	);
};

export default page;
