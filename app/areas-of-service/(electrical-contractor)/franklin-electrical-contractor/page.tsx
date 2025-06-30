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
import { BsLightningChargeFill } from "react-icons/bs";

const resServices: string[] = [
	"Service upgrades",
	"Troubleshooting and repair",
	"Heat pump and hot tub circuit installations",
	"Energy efficient designs and upgrades",
	"Lighting upgrades",
	"Landscape lighting",
	"Backup generator installations",
];

const comServices: string[] = [
	"Networking and data",
	"Fire alarm systems",
	"Emergency power",
	"Design and build",
	"Fuel delivery systems",
	"Temporary construction power and lighting",
];

const page = () => {
	return (
		<PageContainer>
			<MainContainer>
				<H1>
					<Important>Franklin Electrical Contractors</Important>
				</H1>

				<Section spacing="small">
					<P>
						Building a brand-new home or business in the Franklin area is
						exciting. It&apos;s true for both residential and commercial
						remodels. Although, the excitement can easily be dampened when you
						are suddenly faced with the issue of how you plan to power the new
						or remodeled space. Your designs may look good on paper, but can
						they be feasibly wired in a way that keeps your electrical costs
						low? If you don&apos;t have an answer to this question, then you
						need to consult with a licensed and insured electrical contractor.
					</P>
					<P>
						Electrical contractors are a little bit different than your average
						electrician. An electrical contractor is responsible for performing
						all types of electrical work including installing, removing and
						repairing electrical wiring throughout the construction process. An
						electrical contractor can also provide maintenance after the fact,
						but they are typically mostly used throughout construction.
					</P>
					<P>
						If you require the services an electrical contractor to complete
						your construction or remodel project, then get in touch with Burton
						Electric LLC today. Burton Electric LLC has been proud to serve
						homes and businesses all over the Franklin area, using the latest
						and safest industry techniques to assure quality of work on projects
						big and small.
					</P>
					<P>
						For a free estimate one of the many residential and commercial
						electrical contracting services we offer, give Burton Electric LLC a
						call today and prepare to be impressed with our team&apos;s
						professionalism, courtesy and ability to communicate.
					</P>
				</Section>

				<Section>
					<H2>Residential Services</H2>
					<P>
						Burton Electric LLC offers competitive rates on our residential
						electrical contracting services. We can help with the wiring of your
						remodel, upgrading a service or making sure that your new
						construction is receiving power safely.
					</P>
					<P>Our residential services include:</P>
					<ul className="flex items-center gap-4 flex-wrap">
						{resServices.map((service, index) => (
							<li
								key={`comService-${index}`}
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
						If the service you require isn&apos;t listed here, don&apos;t fret.
						Our electrical contractors are among the most experienced in the
						area, which means the probability that they have completed the task
						you require is very high. Just give us a call, tell us what you need
						and we&apos;ll make you our best offer.
					</P>
				</Section>

				<Section>
					<H2>Commercial Services</H2>
					<P>
						Burton Electric LLC is proud to have a team made up of experienced,
						certified and insured electrical contractors and designers. We have
						plenty of experience designing and building new electrical systems,
						retrofitting existing infrastructure and so much more. Because
						commercial clients are losing money every day when their facility
						doesn&apos;t have power, our commercial electrical contractors
						specialize in completing projects on tight deadlines while
						coordinating with the other tradespeople.
					</P>
					<P>Our commercial services include:</P>
					<ul className="flex items-center gap-4 flex-wrap">
						{comServices.map((service, index) => (
							<li
								key={`resService-${index}`}
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
						If the commercial electrical contracting service you require
						isn&apos;t listed above, we remind you that our contractors are
						among the most experienced in the area and have no doubt completed a
						similar job in the past. Just give us a call, tell us what you
						expect from our contractors and we will give you an estimate
						that&apos;s affordable and fixed.
					</P>
				</Section>

				<ContactUs>
					<ContactTitle>Contact Burton Electric LLC Today!</ContactTitle>
					<ContactContent>
						For all your residential and commercial electrical contracting needs
						in the Franklin area, call Burton Electric LLC today.
					</ContactContent>
				</ContactUs>
			</MainContainer>
			<Footer />
		</PageContainer>
	);
};

export default page;
