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
import { BsLightningChargeFill } from "react-icons/bs";

export const metadata: Metadata = {
	title: "Nashville Electrical Contractor Services | Burton Electric LLC",
	description:
		"Burton Electric LLC electrical contractor services will enhance the comfort of any Nashville home or business. For installations or repair services, call (615) 830-1111 today!",
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
			<MainContainer>
				<H1>
					<Important>Nashville Electrical Contractor Services</Important>
				</H1>

				<Section spacing="small">
					<H2>Nashville Electrical Contractors</H2>
					<P>
						If you don&apos;t know the difference between an electrician and an
						electrical contractor, you don&apos;t need to beat yourself up over
						it because very few people realize there is a difference between the
						two disciplines. Yes, both work with electricity and their expertise
						are invaluable whenever there is electrical work required, but
						that&apos;s where the similarities end.
					</P>
					<P>
						An electrician is a trained tradesperson who can assist you with
						repairs and installations of your residential or commercial property
						in the Nashville area whereas an electrical contractor is a person
						or firm that performs specialized construction related to the
						design, installation and maintenance of electrical systems. This
						means when you are building something from scratch or remodeling an
						existing residential or commercial building and need a specialist to
						tend to all the electrical demands, you need to find a reliable,
						licensed and insured electrical contractor.
					</P>
					<P>
						If you are a residential or commercial client in need of the
						professional assistance an electrical contractor can provide, your
						best bet is to contact Burton Electric LLC. Burton Electric LLC has
						been proud to serve homes and businesses in the Nashville area,
						designing, installing and maintaining all kinds of electrical
						systems. Since our first day as an electrical contracting firm, we
						have always done everything we can to make quality work our calling
						card.
					</P>
					<P>
						For a free estimate on our electrical contracting services, get in
						touch with Burton Electric LLC today.
					</P>
				</Section>

				<Section>
					<H2>Residential Electrical Contracting Services</H2>
					<P>
						Whether you are planning a remodel, or you are going to build a
						custom home in the Nashville area, you are going to need to power
						your home somehow. If you want to make sure that your new or
						remodeled home is free from any electrical issues, it starts with
						choosing Burton Electric LLC as your residential electrical
						contractor.
					</P>
					<P>
						Burton Electric LLC should be your first choice when you need a
						residential electrical contractor because our team is extremely
						qualified and experienced. On jobs both big and small, you can
						always expect attention to detail, integrity and quality work at an
						affordable price. Just some of the things we can assist you with
						include:
					</P>

					<ul className="flex items-center gap-4 flex-wrap">
						{resElecContServices.map((service, index) => (
							<li
								key={`service-${index}`}
								className="flex items-center gap-2 px-4 py-2 border border-primary shadow-sm w-fit rounded-lg hover:cursor-default"
							>
								<BsLightningChargeFill
									size={15}
									className="shrink-0 text-primary"
								/>
								<P className="font-medium">{service}</P>
							</li>
						))}
					</ul>

					<P>
						Give us a call today to get a free estimate on the residential
						contracting service you require.
					</P>
				</Section>

				<Section>
					<H2>Commercial Electrical Contracting Services</H2>
					<P>
						Because their scope is typically much bigger than residential jobs,
						commercial electrical work is extremely complicated and needs to be
						conducted by a professional commercial electrical contractor. Burton
						Electric LLC has been making sure Nashville businesses receive
						efficient and cost-effective commercial electrical contracting
						services to keep them up to code for several years.
					</P>
					<P>
						When you require trained, licensed and insured professionals with
						our expertise, give us a call right away to get a free estimate on
						our services.
					</P>
				</Section>

				<ContactUs>
					<ContactTitle>Contact Burton Electric LLC Today!</ContactTitle>
					<ContactContent>
						For all your residential and commercial electrical contracting
						needs, Burton Electric LLC is proud to be your reliable, affordable
						one-stop shop for all things design, installation and maintenance.
						Get a free estimate when you call us today.
					</ContactContent>
				</ContactUs>
			</MainContainer>
			<Footer />
		</PageContainer>
	);
};

export default page;
