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

export const metadata: Metadata = {
	title: "Franklin Electrical Contractors | Burton Electric LLC",
	description:
		"For reliable, safe and efficient electrical contractor services in Franklin, call Burton Electric LLC at (615) 830-1111 today!",
	icons: {
		icon: icon,
	},
	keywords: [
		"Brentwood Electrical Contractors",
		"Nashville Electrical Contractors",
		"Franklin Electrical Contractors",
		"Electrical Contractors",
		...baseKeywords,
	],
};

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
			<SlideInFromLeft amount={0}>
				<CenterDiv>
					<PageHeading>
						<p>Franklin Electrical Contractors</p>
					</PageHeading>

					<Section my="sm" className="space-y-4">
						<p>
							Building a brand-new home or business in the Franklin area is
							exciting. It&apos;s true for both residential and commercial
							remodels. Although, the excitement can easily be dampened when you
							are suddenly faced with the issue of how you plan to power the new
							or remodeled space. Your designs may look good on paper, but can
							they be feasibly wired in a way that keeps your electrical costs
							low? If you don&apos;t have an answer to this question, then you
							need to consult with a licensed and insured electrical contractor.
						</p>
						<p>
							Electrical contractors are a little bit different than your
							average electrician. An electrical contractor is responsible for
							performing all types of electrical work including installing,
							removing and repairing electrical wiring throughout the
							construction process. An electrical contractor can also provide
							maintenance after the fact, but they are typically mostly used
							throughout construction.
						</p>
						<p>
							If you require the services an electrical contractor to complete
							your construction or remodel project, then get in touch with
							Burton Electric LLC today. Burton Electric LLC has been proud to
							serve homes and businesses all over the Franklin area, using the
							latest and safest industry techniques to assure quality of work on
							projects big and small.
						</p>
						<p>
							For a free estimate one of the many residential and commercial
							electrical contracting services we offer, give Burton Electric LLC
							a call today and prepare to be impressed with our team&apos;s
							professionalism, courtesy and ability to communicate.
						</p>
					</Section>

					<Section my="sm" className="space-y-6">
						<H2>Residential Services</H2>
						<p>
							Burton Electric LLC offers competitive rates on our residential
							electrical contracting services. We can help with the wiring of
							your remodel, upgrading a service or making sure that your new
							construction is receiving power safely.
						</p>
						<p>Our residential services include:</p>
						<ul className="flex items-center gap-4 flex-wrap">
							{resServices.map((service, index) => (
								<li
									key={`comService-${index}`}
									className="flex items-center gap-2 px-4 py-2 border border-primary shadow-sm w-fit rounded-lg hover:cursor-default"
								>
									<Zap size={15} className="shrink-0 text-primary" />
									<p className="font-medium">{service}</p>
								</li>
							))}
						</ul>
						<p>
							If the service you require isn&apos;t listed here, don&apos;t
							fret. Our electrical contractors are among the most experienced in
							the area, which means the probability that they have completed the
							task you require is very high. Just give us a call, tell us what
							you need and we&apos;ll make you our best offer.
						</p>
					</Section>

					<Section my="sm" className="space-y-6">
						<H2>Commercial Services</H2>
						<p>
							Burton Electric LLC is proud to have a team made up of
							experienced, certified and insured electrical contractors and
							designers. We have plenty of experience designing and building new
							electrical systems, retrofitting existing infrastructure and so
							much more. Because commercial clients are losing money every day
							when their facility doesn&apos;t have power, our commercial
							electrical contractors specialize in completing projects on tight
							deadlines while coordinating with the other tradespeople.
						</p>
						<p>Our commercial services include:</p>
						<ul className="flex items-center gap-4 flex-wrap">
							{comServices.map((service, index) => (
								<li
									key={`resService-${index}`}
									className="flex items-center gap-2 px-4 py-2 border border-primary shadow-sm w-fit rounded-lg hover:cursor-default"
								>
									<Zap size={15} className="shrink-0 text-primary" />
									<p className="font-medium">{service}</p>
								</li>
							))}
						</ul>
						<p>
							If the commercial electrical contracting service you require
							isn&apos;t listed above, we remind you that our contractors are
							among the most experienced in the area and have no doubt completed
							a similar job in the past. Just give us a call, tell us what you
							expect from our contractors and we will give you an estimate
							that&apos;s affordable and fixed.
						</p>
					</Section>
				</CenterDiv>
			</SlideInFromLeft>
			<ContactUs
				desc="For all your residential and commercial electrical contracting needs
						in the Franklin area, call Burton Electric LLC today."
			/>
		</PageContainer>
	);
};

export default page;
